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

    // Get mentor's students through enrollments
    const mentorStudents = await prisma.enrollment.findMany({
      where: {
        fieldt_course: {
          mentor: {
            some: {
              Mentor_id: decoded.id,
            },
          },
        },
      },
      include: {
        student: {
          include: {
            person: true,
          },
        },
        fieldt_course: true,
      },
    });

    // Format the response
    const formattedStudents = mentorStudents.map((enrollment) => ({
      studentId: enrollment.student?.Student_id,
      name: enrollment.student?.person.Name,
      email: enrollment.student?.person.Email,
      courseId: enrollment.fieldt_course?.Course_id,
      courseName: enrollment.fieldt_course?.Name,
      semester: enrollment.Semester,
      grade: enrollment.Final_grade,
    }));

    return NextResponse.json(formattedStudents);
  } catch (error) {
    console.error("Error fetching mentor's students:", error);
    return NextResponse.json(
      { error: "Failed to fetch students" },
      { status: 500 }
    );
  }
}
