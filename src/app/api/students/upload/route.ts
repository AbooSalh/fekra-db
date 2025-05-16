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

    // Check if user is authorized (employee or mentor)
    const userRole = decoded.role;
    if (userRole !== "employee" && userRole !== "mentor") {
      return NextResponse.json(
        { error: "Only employees and mentors can upload students" },
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
        if (!record.Name || !record.Email || !record.Major_Dept) {
          throw new Error("Missing required fields");
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

        // Create or update student
        await prisma.student.upsert({
          where: { Student_id: parseInt(record.Student_id) || -1 },
          update: {
            Level: record.Level || null,
            Major_Dept: record.Major_Dept,
            person: {
              connect: { Person_id: person.Person_id },
            },
          },
          create: {
            Level: record.Level || null,
            Major_Dept: record.Major_Dept,
            person: {
              connect: { Person_id: person.Person_id },
            },
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
