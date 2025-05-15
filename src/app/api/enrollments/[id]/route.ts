import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

// GET enrollment by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const enrollment = await prisma.enrollment.findUnique({
    where: { Enrollment_id: parseInt(params.id) },
    include: {
      student: {
        include: {
          person: true,
        },
      },
      fieldt_course: true,
      coordinator: true,
    },
  });

  if (!enrollment) {
    return NextResponse.json(
      { error: "Enrollment not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(enrollment);
}

// PUT update enrollment
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { Student_id, Course_id, Semester, Final_grade, Coordinator_id } =
    await request.json();
  const enrollment = await prisma.enrollment.update({
    where: { Enrollment_id: parseInt(params.id) },
    data: {
      Student_id,
      Course_id,
      Semester,
      Final_grade,
      Coordinator_id,
    },
    include: {
      student: {
        include: {
          person: true,
        },
      },
      fieldt_course: true,
      coordinator: true,
    },
  });
  return NextResponse.json(enrollment);
}

// DELETE enrollment
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.enrollment.delete({
    where: { Enrollment_id: parseInt(params.id) },
  });
  return NextResponse.json({ message: "Enrollment deleted" }, { status: 200 });
}
