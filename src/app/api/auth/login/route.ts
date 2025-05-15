// src/app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { generateToken } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Find user with their role information
    const user = await prisma.person.findUnique({
      where: { Email: email },
      include: {
        student: true,
        mentor: true,
        employee: true,
      },
    });

    if (!user || !user.HashedPassword) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.HashedPassword);
    if (!isValidPassword) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Determine user role
    let role = "user";
    if (user.student) role = "student";
    else if (user.mentor) role = "mentor";
    else if (user.employee) role = "employee";

    // Generate JWT token
    const token = generateToken({
      id: user.Person_id,
      email: user.Email,
      role: role,
    });

    return NextResponse.json({
      message: "Login successful",
      user: {
        id: user.Person_id,
        email: user.Email,
        name: user.Name,
        role: role,
      },
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
