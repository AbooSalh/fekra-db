import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

// GET external mentor by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const externalMentor = await prisma.external_mentor.findUnique({
    where: { Ext_Mentor_id: parseInt(params.id) },
    include: {
      mentor: {
        include: {
          person: true,
        },
      },
      organization: true,
    },
  });

  if (!externalMentor) {
    return NextResponse.json(
      { error: "External mentor not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(externalMentor);
}

// PUT update external mentor
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { Org_id, Course_id } = await request.json();
  const externalMentor = await prisma.external_mentor.update({
    where: { Ext_Mentor_id: parseInt(params.id) },
    data: {
      Org_id,
      mentor: {
        update: {
          Course_id,
        },
      },
    },
    include: {
      mentor: {
        include: {
          person: true,
        },
      },
      organization: true,
    },
  });
  return NextResponse.json(externalMentor);
}

// DELETE external mentor
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.external_mentor.delete({
    where: { Ext_Mentor_id: parseInt(params.id) },
  });
  return NextResponse.json(
    { message: "External mentor deleted" },
    { status: 200 }
  );
}
