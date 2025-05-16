import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

// GET all coordinators
export async function GET() {
  const coordinators = await prisma.coordinator.findMany({
    include: {
      enrollment: true,
      organization: true,
    },
  });
  return NextResponse.json(coordinators);
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
