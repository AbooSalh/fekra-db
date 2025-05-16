import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

// GET coordinator by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Verify token
    const token = request.headers.get("Authorization")?.split(" ")[1];
    if (!token) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 401 }
      );
    }

    const coordinatorId = parseInt(params.id);
    if (isNaN(coordinatorId)) {
      return NextResponse.json(
        { error: "Invalid coordinator ID" },
        { status: 400 }
      );
    }

    // Get coordinator details
    const coordinator = await prisma.coordinator.findUnique({
      where: { Coordinator_id: coordinatorId },
      include: {
        enrollment: {
          include: {
            student: {
              include: {
                person: true,
              },
            },
            fieldt_course: true,
          },
        },
        organization: true,
      },
    });

    if (!coordinator) {
      return NextResponse.json(
        { error: "Coordinator not found" },
        { status: 404 }
      );
    }

    // Transform the data to match the frontend interface
    const transformedCoordinator = {
      id: coordinator.Coordinator_id,
      name: coordinator.Name,
      enrollments: coordinator.enrollment.map((enrollment) => ({
        id: enrollment.Enrollment_id,
        student: enrollment.student
          ? {
              id: enrollment.student.Student_id,
              name: enrollment.student.person?.Name,
              email: enrollment.student.person?.Email,
              major: enrollment.student.Major_Dept,
              level: enrollment.student.Level,
            }
          : null,
        course: enrollment.fieldt_course
          ? {
              id: enrollment.fieldt_course.Course_id,
              name: enrollment.fieldt_course.Name,
            }
          : null,
        semester: enrollment.Semester,
        grade: enrollment.Final_grade,
      })),
      organizations: coordinator.organization.map((org) => ({
        id: org.Org_id,
        name: org.Name,
        contactInfo: org.Contact_info,
        approvalStatus: org.Approval_Status,
      })),
    };

    return NextResponse.json(transformedCoordinator);
  } catch (error) {
    console.error("Error fetching coordinator:", error);
    return NextResponse.json(
      { error: "Failed to fetch coordinator" },
      { status: 500 }
    );
  }
}

// PUT update coordinator
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const coordinatorId = parseInt(params.id);
  if (isNaN(coordinatorId)) {
    return NextResponse.json(
      { error: "Invalid coordinator ID" },
      { status: 400 }
    );
  }

  const { Name } = await request.json();
  const coordinator = await prisma.coordinator.update({
    where: { Coordinator_id: coordinatorId },
    data: { Name },
  });
  return NextResponse.json(coordinator);
}

// DELETE coordinator
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const coordinatorId = parseInt(params.id);
  if (isNaN(coordinatorId)) {
    return NextResponse.json(
      { error: "Invalid coordinator ID" },
      { status: 400 }
    );
  }

  await prisma.coordinator.delete({
    where: { Coordinator_id: coordinatorId },
  });
  return NextResponse.json({ message: "Coordinator deleted" }, { status: 200 });
}
