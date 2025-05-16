import { NextResponse } from "next/server";
import { parse } from "csv-parse/sync";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";
import { Prisma } from "@prisma/client";

export async function POST(request: Request) {
  try {
    // Verify authentication
    const token = request.headers.get("authorization")?.split(" ")[1];
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = await verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const fileContent = await file.text();

    // Remove any BOM characters, comments, and normalize line endings
    const cleanContent = fileContent
      .replace(/^\uFEFF/, "") // Remove BOM
      .replace(/\r\n/g, "\n") // Normalize line endings
      .split("\n")
      .filter((line) => !line.trim().startsWith("#")) // Remove comment lines
      .join("\n")
      .trim();

    // Parse CSV with more options for robustness
    const records = parse(cleanContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
      skipRecordsWithError: true,
      relaxColumnCount: true,
    });

    if (!Array.isArray(records) || records.length === 0) {
      return NextResponse.json(
        { error: "No valid records found in CSV file" },
        { status: 400 }
      );
    }

    const results = {
      success: 0,
      failed: 0,
      errors: [] as string[],
    };

    for (const record of records) {
      try {
        // Validate required fields
        if (!record.Name || !record.Contact_info) {
          throw new Error("Missing required fields (Name or Contact_info)");
        }

        // If coordinator_id is provided, verify it exists
        let coordinatorId = null;
        if (record.Coordinator_id) {
          const coordinator = await prisma.coordinator.findUnique({
            where: { Coordinator_id: parseInt(record.Coordinator_id) },
          });
          if (coordinator) {
            coordinatorId = coordinator.Coordinator_id;
          } else {
            throw new Error(
              `Coordinator with ID ${record.Coordinator_id} not found`
            );
          }
        }

        // Check if organization with this name already exists
        const existingOrg = await prisma.organization.findFirst({
          where: { Name: record.Name },
        });

        if (existingOrg) {
          // Update existing organization
          await prisma.organization.update({
            where: { Org_id: existingOrg.Org_id },
            data: {
              Contact_info: record.Contact_info,
              Approval_Status: record.Approval_Status || "Pending",
              Coordinator_id: coordinatorId,
            },
          });
        } else {
          // Create new organization
          await prisma.organization.create({
            data: {
              Name: record.Name,
              Contact_info: record.Contact_info,
              Approval_Status: record.Approval_Status || "Pending",
              Coordinator_id: coordinatorId,
            } as Prisma.organizationUncheckedCreateInput,
          });
        }

        results.success++;
      } catch (error) {
        results.failed++;
        results.errors.push(
          `Failed to import organization ${record.Name || "Unknown"}: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
      }
    }

    return NextResponse.json({
      message: `Import completed. ${results.success} organizations imported successfully, ${results.failed} failed.`,
      results,
    });
  } catch (error) {
    console.error("Error processing CSV:", error);
    return NextResponse.json(
      { error: "Failed to process CSV file" },
      { status: 500 }
    );
  }
}
