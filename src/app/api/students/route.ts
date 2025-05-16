import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

// GET all students
export async function GET() {
  try {
    const students = await prisma.student.findMany({
      include: {
        person: true,
      },
    });
    return NextResponse.json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    return NextResponse.json(
      { message: "Error fetching students" },
      { status: 500 }
    );
  }
}

// POST new student
export async function POST(request: NextRequest) {
  try {
    const { email, password, name, sex, level, majorDept } =
      await request.json();

    // Validate required fields
    if (!name || !majorDept || !level || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if email already exists
    if (email) {
      const existingPerson = await prisma.person.findUnique({
        where: { Email: email },
      });
      if (existingPerson) {
        return NextResponse.json(
          { message: "Email already exists" },
          { status: 400 }
        );
      }
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
