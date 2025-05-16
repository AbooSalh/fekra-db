import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";
import { verifyToken } from "@/lib/auth";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    // Get the token from the Authorization header
    const authHeader = request.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    const decoded = await verifyToken(token);

    if (!decoded) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    // Get user data based on their role
    let userData;
    switch (decoded.role) {
      case "student":
        userData = await prisma.student.findUnique({
          where: { Student_id: decoded.id },
          include: { person: true },
        });
        break;
      case "employee":
        userData = await prisma.employee.findUnique({
          where: { Employee_id: decoded.id },
          include: { person: true },
        });
        break;
      case "mentor":
        userData = await prisma.mentor.findUnique({
          where: { Mentor_id: decoded.id },
          include: { person: true },
        });
        break;
      default:
        return NextResponse.json({ error: "Invalid role" }, { status: 400 });
    }

    if (!userData) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Format the response based on the user's role
    const profile = {
      id: decoded.id,
      role: decoded.role,
      name: userData.person?.Name || userData.Name,
      email: userData.person?.Email,
    };

    return NextResponse.json(profile);
  } catch (error) {
    console.error("Error fetching profile:", error);
    return NextResponse.json(
      { error: "Failed to fetch profile" },
      { status: 500 }
    );
  }
}
