import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

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
  try {
    const { email, password, name, sex, role, majorDept, level } =
      await request.json();

    // Validate required fields
    if (!name || !majorDept || !level || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the student with person record
    const student = await prisma.student.create({
      data: {
        Level: level,
        Major_Dept: majorDept,
        person: {
          create: {
            Name: name,
            Email: email,
            Sex: sex,
            HashedPassword: hashedPassword,
          },
        },
      },
      include: {
        person: true,
      },
    });

    return NextResponse.json(student, { status: 201 });
  } catch (error) {
    console.error("Error creating student:", error);
    return NextResponse.json(
      { message: "Error creating student" },
      { status: 500 }
    );
  }
}
