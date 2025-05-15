import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

// GET all enrollments
export async function GET() {
  const enrollments = await prisma.enrollment.findMany({
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
  return NextResponse.json(enrollments);
}

// POST new enrollment
export async function POST(request: NextRequest) {
  const {
    Enrollment_id,
    Student_id,
    Course_id,
    Semester,
    Final_grade,
    Coordinator_id,
  } = await request.json();
  const enrollment = await prisma.enrollment.create({
    data: {
      Enrollment_id,
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
  return NextResponse.json(enrollment, { status: 201 });
}
