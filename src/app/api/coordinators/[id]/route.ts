import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

// GET coordinator by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const coordinator = await prisma.coordinator.findUnique({
    where: { Coordinator_id: parseInt(params.id) },
    include: {
      enrollment: true,
      organization: true,
    },
  });

  if (!coordinator) {
    return NextResponse.json(
      { error: "Coordinator not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(coordinator);
}

// PUT update coordinator
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { Name } = await request.json();
  const coordinator = await prisma.coordinator.update({
    where: { Coordinator_id: parseInt(params.id) },
    data: { Name },
  });
  return NextResponse.json(coordinator);
}

// DELETE coordinator
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.coordinator.delete({
    where: { Coordinator_id: parseInt(params.id) },
  });
  return NextResponse.json({ message: "Coordinator deleted" }, { status: 200 });
}
