import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

// GET all persons
export async function GET() {
  const persons = await prisma.person.findMany();
  return NextResponse.json(persons);
}

// POST new person
export async function POST(request: NextRequest) {
  const { Person_id, Name, Email, Sex } = await request.json();
  const person = await prisma.person.create({
    data: {
      Person_id,
      Name,
      Email,
      Sex,
    },
  });
  return NextResponse.json(person, { status: 201 });
}
