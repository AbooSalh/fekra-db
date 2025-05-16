import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET all fieldt courses
export async function GET(request: NextRequest) {
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

    // Get all courses with their organization information
    const courses = await prisma.fieldt_course.findMany({
      include: {
        organization: {
          select: {
            Name: true,
          },
        },
      },
      orderBy: {
        Name: "asc",
      },
    });

    return NextResponse.json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch courses",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// POST new fieldt course
export async function POST(request: NextRequest) {
  const { Course_id, Name, Duration, Org_id } = await request.json();
  const fieldtCourse = await prisma.fieldt_course.create({
    data: {
      Course_id,
      Name,
      Duration,
      Org_id,
    },
    include: {
      organization: true,
      enroll: true,
      enrollment: true,
      mentor: true,
    },
  });
  return NextResponse.json(fieldtCourse, { status: 201 });
}
