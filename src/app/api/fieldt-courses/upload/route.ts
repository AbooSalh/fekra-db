import { NextRequest, NextResponse } from "next/server";
import { parse } from "csv-parse/sync";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    const token = request.headers.get("Authorization")?.split(" ")[1];
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await verifyToken(token);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get the file from the request
    const formData = await request.formData();
    const file = formData.get("file") as File;
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Read and parse the CSV file
    const csvText = await file.text();
    const records = parse(csvText, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
      skipRecordsWithError: true,
      relaxColumnCount: true,
      relaxQuotes: true,
      fromLine: 6, // Skip the comment lines and start from the actual data
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
        if (!record.Course_id || !record.Name || !record.Duration) {
          throw new Error(
            `Missing required fields for course: ${
              record.Course_id || "Unknown"
            }`
          );
        }

        // Check if organization exists if Org_id is provided
        if (record.Org_id) {
          const org = await prisma.organization.findUnique({
            where: { Org_id: parseInt(record.Org_id) },
          });
          if (!org) {
            throw new Error(`Organization with ID ${record.Org_id} not found`);
          }
        }

        // Check if course exists
        const existingCourse = await prisma.fieldt_course.findUnique({
          where: { Course_id: record.Course_id },
        });

        if (existingCourse) {
          // Update existing course
          await prisma.fieldt_course.update({
            where: { Course_id: record.Course_id },
            data: {
              Name: record.Name,
              Duration: record.Duration,
              Org_id: record.Org_id ? parseInt(record.Org_id) : null,
            },
          });
        } else {
          // Create new course
          await prisma.fieldt_course.create({
            data: {
              Course_id: record.Course_id,
              Name: record.Name,
              Duration: record.Duration,
              Org_id: record.Org_id ? parseInt(record.Org_id) : null,
            },
          });
        }

        results.success++;
      } catch (error) {
        results.failed++;
        results.errors.push(
          `Failed to import course ${record.Course_id || "Unknown"}: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
      }
    }

    return NextResponse.json({
      message: `Import completed. ${results.success} courses imported successfully, ${results.failed} failed.`,
      results,
    });
  } catch (error) {
    console.error("Error processing CSV:", error);
    return NextResponse.json(
      {
        error: "Failed to process CSV file",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
