import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET single student
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const student = await prisma.student.findUnique({
      where: {
        Student_id: parseInt(params.id),
      },
      include: {
        person: true,
      },
    });

    if (!student) {
      return NextResponse.json(
        { message: "Student not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(student);
  } catch (error) {
    console.error("Error fetching student:", error);
    return NextResponse.json(
      { message: "Error fetching student" },
      { status: 500 }
    );
  }
}

// PUT update student
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { name, email, sex, level, majorDept } = await request.json();

    // Validate required fields
    if (!name || !majorDept || !level) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if email already exists for other students
    if (email) {
      const existingPerson = await prisma.person.findFirst({
        where: {
          Email: email,
          Person_id: {
            not: parseInt(params.id),
          },
        },
      });
      if (existingPerson) {
        return NextResponse.json(
          { message: "Email already exists" },
          { status: 400 }
        );
      }
    }

    // Update the student
    const student = await prisma.student.update({
      where: {
        Student_id: parseInt(params.id),
      },
      data: {
        Level: level,
        Major_Dept: majorDept,
        person: {
          update: {
            Name: name,
            Email: email,
            Sex: sex,
          },
        },
      },
      include: {
        person: true,
      },
    });

    return NextResponse.json(student);
  } catch (error) {
    console.error("Error updating student:", error);
    return NextResponse.json(
      { message: "Error updating student" },
      { status: 500 }
    );
  }
}

// DELETE student
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.student.delete({
      where: {
        Student_id: parseInt(params.id),
      },
    });

    return NextResponse.json(
      { message: "Student deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting student:", error);
    return NextResponse.json(
      { message: "Error deleting student" },
      { status: 500 }
    );
  }
}
