// src/app/api/auth/signup/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { generateToken } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { email, password, name, sex, role } = await request.json();

    if (!email || !password || !name || !role) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if user exists
    const existingUser = await prisma.person.findUnique({
      where: { Email: email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new person
    const newPerson = await prisma.person.create({
      data: {
        Name: name,
        Email: email,
        Sex: sex,
        HashedPassword: hashedPassword,
        ...(role === "student" && {
          student: {
            create: {
              Major_Dept: "Computer Science",
              Level: "1",
            },
          },
        }),
        ...(role === "mentor" && {
          mentor: {
            create: {
              Course_id: null,
            },
          },
        }),
        ...(role === "employee" && {
          employee: {
            create: {
              Position: "Staff",
              Salary: 0,
            },
          },
        }),
      },
    });

    // Generate JWT token
    const token = generateToken({
      id: newPerson.Person_id,
      email: newPerson.Email,
      role: role,
    });

    return NextResponse.json(
      {
        message: "User created successfully",
        user: {
          id: newPerson.Person_id,
          email: newPerson.Email,
          name: newPerson.Name,
          role: role,
        },
        token,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
