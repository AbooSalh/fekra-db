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
      fromLine: 6,
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
        if (!record.Student_id || !record.Course_id || !record.Semester) {
          throw new Error(
            `Missing required fields for enrollment: Student_id, Course_id, Semester`
          );
        }

        // Check if student exists
        const student = await prisma.student.findUnique({
          where: { Student_id: parseInt(record.Student_id) },
        });
        if (!student) {
          throw new Error(`Student with ID ${record.Student_id} not found`);
        }

        // Check if course exists
        const course = await prisma.fieldt_course.findUnique({
          where: { Course_id: record.Course_id },
        });
        if (!course) {
          throw new Error(`Course with ID ${record.Course_id} not found`);
        }

        // Check if coordinator exists if provided
        let coordinatorId: number | null = null;
        if (record.Coordinator_id) {
          const coordinator = await prisma.coordinator.findUnique({
            where: { Coordinator_id: parseInt(record.Coordinator_id) },
          });
          if (!coordinator) {
            throw new Error(
              `Coordinator with ID ${record.Coordinator_id} not found`
            );
          }
          coordinatorId = parseInt(record.Coordinator_id);
        }

        // Upsert enrollment (unique on Student_id, Course_id, Semester)
        await prisma.enrollment.upsert({
          where: {
            Student_id_Course_id_Semester: {
              Student_id: parseInt(record.Student_id),
              Course_id: record.Course_id,
              Semester: record.Semester,
            },
          },
          update: {
            Final_grade: record.Final_grade || null,
            Coordinator_id: coordinatorId,
          },
          create: {
            Student_id: parseInt(record.Student_id),
            Course_id: record.Course_id,
            Semester: record.Semester,
            Final_grade: record.Final_grade || null,
            Coordinator_id: coordinatorId,
          },
        });

        results.success++;
      } catch (error) {
        results.failed++;
        results.errors.push(
          `Failed to import enrollment for Student ${
            record.Student_id
          }, Course ${record.Course_id}, Semester ${record.Semester}: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
      }
    }

    return NextResponse.json({
      message: `Import completed. ${results.success} enrollments imported successfully, ${results.failed} failed.`,
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
