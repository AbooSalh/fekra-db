import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

// GET all students
export async function GET() {
  const students = await prisma.student.findMany({
    include: {
      person: true,
    },
  });
  return NextResponse.json(students);
}

// POST new student
export async function POST(request: NextRequest) {
  const { Level, Major_Dept, Evaluation_id, Person_id, Name, Email, Sex } =
    await request.json();
  const student = await prisma.student.create({
    data: {
      Student_id: Person_id,
      Level,
      Major_Dept,
      Evaluation_id,
      person: {
        create: {
          Person_id,
          Name,
          Email,
          Sex,
        },
      },
    },
    include: {
      person: true,
    },
  });
  return NextResponse.json(student, { status: 201 });
}
