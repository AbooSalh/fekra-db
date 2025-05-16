import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

export async function GET(request: NextRequest) {
  try {
    // Get the token from the Authorization header
    const authHeader = request.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    const decoded = await verifyToken(token);

    if (!decoded) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    // Get student's courses through enrollments
    const studentCourses = await prisma.enrollment.findMany({
      where: {
        Student_id: decoded.id,
      },
      include: {
        fieldt_course: {
          include: {
            organization: true,
          },
        },
      },
    });

    // Format the response
    const formattedCourses = studentCourses.map((enrollment) => ({
      courseId: enrollment.fieldt_course.Course_id,
      courseName: enrollment.fieldt_course.Name,
      duration: enrollment.fieldt_course.Duration,
      organization: enrollment.fieldt_course.organization.Name,
      semester: enrollment.Semester,
      finalGrade: enrollment.Final_grade,
    }));

    return NextResponse.json(formattedCourses);
  } catch (error) {
    console.error("Error fetching student courses:", error);
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}
