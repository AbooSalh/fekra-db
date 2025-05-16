import { NextResponse } from "next/server";
import { parse } from "csv-parse/sync";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

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
        if (!record.Name || !record.Email || !record.Sex) {
          throw new Error("Missing required fields (Name, Email, or Sex)");
        }

        // Check if person with this email already exists
        let person = await prisma.person.findUnique({
          where: { Email: record.Email },
        });

        if (person) {
          // Update existing person
          person = await prisma.person.update({
            where: { Email: record.Email },
            data: {
              Name: record.Name,
              Sex: record.Sex,
            },
          });
        } else {
          // Create new person
          person = await prisma.person.create({
            data: {
              Name: record.Name,
              Email: record.Email,
              Sex: record.Sex,
            },
          });
        }

        // Check if mentor record already exists for this person
        const existingMentor = await prisma.mentor.findFirst({
          where: {
            person: {
              Person_id: person.Person_id,
            },
          },
        });

        // If course_id is provided, verify it exists
        let courseId = null;
        if (record.Course_id) {
          const course = await prisma.fieldt_course.findUnique({
            where: { Course_id: record.Course_id.trim() },
          });
          if (course) {
            courseId = course.Course_id;
          } else {
            throw new Error(`Course with ID ${record.Course_id} not found`);
          }
        }

        if (existingMentor) {
          // Update existing mentor
          await prisma.mentor.update({
            where: { Mentor_id: existingMentor.Mentor_id },
            data: {
              fieldt_course: courseId
                ? {
                    connect: {
                      Course_id: courseId,
                    },
                  }
                : {
                    disconnect: true,
                  },
            },
          });
        } else {
          // Create new mentor
          await prisma.mentor.create({
            data: {
              person: {
                connect: {
                  Person_id: person.Person_id,
                },
              },
              fieldt_course: courseId
                ? {
                    connect: {
                      Course_id: courseId,
                    },
                  }
                : undefined,
            },
          });
        }

        results.success++;
      } catch (error) {
        results.failed++;
        results.errors.push(
          `Failed to import mentor ${record.Name || "Unknown"}: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
      }
    }

    return NextResponse.json({
      message: `Import completed. ${results.success} mentors imported successfully, ${results.failed} failed.`,
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
