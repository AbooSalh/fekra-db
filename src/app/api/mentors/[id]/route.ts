import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

// GET mentor by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const mentor = await prisma.mentor.findUnique({
    where: { Mentor_id: parseInt(params.id) },
    include: {
      person: true,
      fieldt_course: true,
      external_mentor: {
        include: {
          organization: true,
        },
      },
      internal_mentor: {
        include: {
          student: {
            include: {
              person: true,
            },
          },
        },
      },
    },
  });

  if (!mentor) {
    return NextResponse.json({ error: "Mentor not found" }, { status: 404 });
  }

  return NextResponse.json(mentor);
}

// PUT update mentor
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { Course_id } = await request.json();
  const mentor = await prisma.mentor.update({
    where: { Mentor_id: parseInt(params.id) },
    data: { Course_id },
    include: {
      person: true,
      fieldt_course: true,
      external_mentor: {
        include: {
          organization: true,
        },
      },
      internal_mentor: {
        include: {
          student: {
            include: {
              person: true,
            },
          },
        },
      },
    },
  });
  return NextResponse.json(mentor);
}

// DELETE mentor
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.mentor.delete({
    where: { Mentor_id: parseInt(params.id) },
  });
  return NextResponse.json({ message: "Mentor deleted" }, { status: 200 });
}
