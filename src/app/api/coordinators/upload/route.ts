import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";
import { parse } from "csv-parse/sync";

export async function POST(request: NextRequest) {
  try {
    // Verify token
    const token = request.headers.get("Authorization")?.split(" ")[1];
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = await verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    // Check if user is authorized (employee only)
    const userRole = decoded.role;
    if (userRole !== "employee") {
      return NextResponse.json(
        { error: "Only employees can upload coordinators" },
        { status: 403 }
      );
    }

    // Get the form data
    const formData = await request.formData();
    const file = formData.get("file") as File;
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Read and parse the CSV file
    const fileContent = await file.text();
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    });

    const results = {
      success: 0,
      failed: 0,
      errors: [] as string[],
    };

    // Process each record
    for (const record of records) {
      try {
        // Validate required fields
        if (!record.Name || !record.Email) {
          throw new Error("Missing required fields (Name and Email)");
        }

        // Create or update person
        const person = await prisma.person.upsert({
          where: { Email: record.Email },
          update: {
            Name: record.Name,
            Sex: record.Sex || null,
          },
          create: {
            Name: record.Name,
            Email: record.Email,
            Sex: record.Sex || null,
          },
        });

        // Create or update coordinator
        await prisma.coordinator.upsert({
          where: { Coordinator_id: parseInt(record.Coordinator_id) || -1 },
          update: {
            Coordinator_id: parseInt(record.Coordinator_id),
            Name: record.Name,
          },
          create: {
            Coordinator_id: parseInt(record.Coordinator_id),
            Name: record.Name,
          },
        });

        results.success++;
      } catch (error) {
        results.failed++;
        results.errors.push(
          `Row ${results.success + results.failed}: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
      }
    }

    return NextResponse.json({
      message: `Processed ${records.length} records`,
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
