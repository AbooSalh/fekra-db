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

    // Get student's evaluations through enrollments
    const studentEvaluations = await prisma.enrollment.findMany({
      where: {
        Student_id: decoded.id,
      },
      include: {
        fieldt_course: true,
        student: true,
      },
    });

    // Format the response
    const formattedEvaluations = studentEvaluations.map((enrollment) => ({
      courseId: enrollment.fieldt_course.Course_id,
      courseName: enrollment.fieldt_course.Name,
      semester: enrollment.Semester,
      grade: enrollment.Final_grade,
      evaluationDate: enrollment.updatedAt,
    }));

    return NextResponse.json(formattedEvaluations);
  } catch (error) {
    console.error("Error fetching student evaluations:", error);
    return NextResponse.json(
      { error: "Failed to fetch evaluations" },
      { status: 500 }
    );
  }
}
