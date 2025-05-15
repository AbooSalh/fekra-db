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
  const { Coordinator_id, Name } = await request.json();
  const coordinator = await prisma.coordinator.create({
    data: {
      Coordinator_id,
      Name,
    },
  });
  return NextResponse.json(coordinator, { status: 201 });
}
