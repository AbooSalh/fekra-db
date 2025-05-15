import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

// GET student by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const student = await prisma.student.findUnique({
    where: { Student_id: parseInt(params.id) },
    include: {
      person: true,
      enrollment: true,
      enroll: true,
    },
  });

  if (!student) {
    return NextResponse.json({ error: "Student not found" }, { status: 404 });
  }

  return NextResponse.json(student);
}

// PUT update student
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { Level, Major_Dept, Evaluation_id } = await request.json();
  const student = await prisma.student.update({
    where: { Student_id: parseInt(params.id) },
    data: { Level, Major_Dept, Evaluation_id },
    include: {
      person: true,
    },
  });
  return NextResponse.json(student);
}

// DELETE student
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.student.delete({
    where: { Student_id: parseInt(params.id) },
  });
  return NextResponse.json({ message: "Student deleted" }, { status: 200 });
}
