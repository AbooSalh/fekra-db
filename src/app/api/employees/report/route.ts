import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Basic Statistics
    const [
      totalStudents,
      totalMentors,
      totalOrganizations,
      totalCourses,
      totalEnrollments,
      activeEnrollments,
      pendingOrganizations,
      totalCoordinators,
      totalEmployees,
      totalInternalMentors,
      totalExternalMentors,
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
      prisma.coordinator.count(),
      prisma.employee.count(),
      prisma.internal_mentor.count(),
      prisma.external_mentor.count(),
    ]);

    // Department Statistics
    const departmentStats = await prisma.student.groupBy({
      by: ["Major_Dept"],
      _count: {
        Student_id: true,
      },
    });

    // Course Statistics
    const courseStats = await prisma.fieldt_course.findMany({
      include: {
        _count: {
          select: {
            enroll: true,
            enrollment: true,
            mentor: true,
          },
        },
      },
    });

    // Organization Statistics
    const organizationStats = await prisma.organization.findMany({
      include: {
        _count: {
          select: {
            fieldt_course: true,
            external_mentor: true,
          },
        },
      },
    });

    // Grade Distribution
    const gradeDistribution = await prisma.enrollment.groupBy({
      by: ["Final_grade"],
      _count: {
        Enrollment_id: true,
      },
      where: {
        Final_grade: {
          not: null,
        },
      },
    });

    // Active Courses (with active enrollments)
    const activeCourses = await prisma.fieldt_course.findMany({
      where: {
        enrollment: {
          some: {
            Final_grade: null,
          },
        },
      },
      include: {
        _count: {
          select: {
            enrollment: true,
          },
        },
      },
    });

    return NextResponse.json({
      statistics: {
        overview: {
          totalStudents,
          totalMentors,
          totalOrganizations,
          totalCourses,
          totalEnrollments,
          activeEnrollments,
          pendingOrganizations,
          totalCoordinators,
          totalEmployees,
          totalInternalMentors,
          totalExternalMentors,
        },
        departmentStats,
        courseStats,
        organizationStats,
        gradeDistribution,
        activeCourses: activeCourses.map((course) => ({
          courseId: course.Course_id,
          name: course.Name,
          activeEnrollments: course._count.enrollment,
        })),
      },
    });
  } catch (error) {
    console.error("Error fetching report data:", error);
    return NextResponse.json(
      { error: "Failed to fetch report data" },
      { status: 500 }
    );
  }
}
