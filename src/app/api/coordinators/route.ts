import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

// GET all coordinators
export async function GET(request: NextRequest) {
  try {
    // Verify token
    const token = request.headers.get("Authorization")?.split(" ")[1];
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = await verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    // Get all coordinators with their relations
    const coordinators = await prisma.coordinator.findMany({
      include: {
        enrollment: true,
        organization: true,
      },
    });

    return NextResponse.json(coordinators);
  } catch (error) {
    console.error("Error fetching coordinators:", error);
    return NextResponse.json(
      { error: "Failed to fetch coordinators" },
      { status: 500 }
    );
  }
}

// POST new coordinator
export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json();

    // Create person record first
    const person = await prisma.person.create({
      data: {
        Name: name,
        Email: email,
      },
    });

    // Create coordinator record
    const coordinator = await prisma.coordinator.create({
      data: {
        Coordinator_id: person.Person_id,
        Name: name,
      },
      include: {
        enrollment: true,
        organization: true,
      },
    });

    return NextResponse.json(coordinator, { status: 201 });
  } catch (error) {
    console.error("Error creating coordinator:", error);
    return NextResponse.json(
      { error: "Failed to create coordinator" },
      { status: 500 }
    );
  }
}
