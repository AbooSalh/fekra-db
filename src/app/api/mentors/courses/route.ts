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

    // Get mentor's courses
    const mentorCourses = await prisma.fieldt_course.findMany({
      where: {
        mentor: {
          some: {
            Mentor_id: decoded.id,
          },
        },
      },
      include: {
        organization: true,
        enroll: {
          include: {
            student: {
              include: {
                person: true,
              },
            },
          },
        },
      },
    });

    // Format the response
    const formattedCourses = mentorCourses.map((course) => ({
      courseId: course.Course_id,
      name: course.Name,
      duration: course.Duration,
      organization: course.organization
        ? {
            id: course.organization.Org_id,
            name: course.organization.Name,
          }
        : null,
      enrolledStudents: course.enroll.map((enroll) => ({
        studentId: enroll.student.Student_id,
        name: enroll.student.person.Name,
        email: enroll.student.person.Email,
      })),
    }));

    return NextResponse.json(formattedCourses);
  } catch (error) {
    console.error("Error fetching mentor's courses:", error);
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}
