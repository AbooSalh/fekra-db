import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

// GET person by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const person = await prisma.person.findUnique({
    where: { Person_id: parseInt(params.id) },
  });

  if (!person) {
    return NextResponse.json({ error: "Person not found" }, { status: 404 });
  }

  return NextResponse.json(person);
}

// PUT update person
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { Name, Email, Sex } = await request.json();
  const person = await prisma.person.update({
    where: { Person_id: parseInt(params.id) },
    data: { Name, Email, Sex },
  });
  return NextResponse.json(person);
}

// DELETE person
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.person.delete({
    where: { Person_id: parseInt(params.id) },
  });
  return NextResponse.json({ message: "Person deleted" }, { status: 200 });
}
