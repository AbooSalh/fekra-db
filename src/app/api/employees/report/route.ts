import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Fetch various statistics for the report
    const [
      totalStudents,
      totalMentors,
      totalOrganizations,
      totalCourses,
      totalEnrollments,
      activeEnrollments,
      pendingOrganizations,
    ] = await Promise.all([
      prisma.student.count(),
      prisma.mentor.count(),
      prisma.organization.count(),
      prisma.fieldt_course.count(),
      prisma.enrollment.count(),
      prisma.enrollment.count({
        where: {
          Final_grade: null,
        },
      }),
      prisma.organization.count({
        where: {
          Approval_Status: "pending",
        },
      }),
    ]);

    // Get recent enrollments
    const recentEnrollments = await prisma.enrollment.findMany({
      take: 5,
      orderBy: {
        Enrollment_id: "desc",
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

    return NextResponse.json({
      statistics: {
        totalStudents,
        totalMentors,
        totalOrganizations,
        totalCourses,
        totalEnrollments,
        activeEnrollments,
        pendingOrganizations,
      },
      recentEnrollments,
    });
  } catch (error) {
    console.error("Error fetching report data:", error);
    return NextResponse.json(
      { error: "Failed to fetch report data" },
      { status: 500 }
    );
  }
}
