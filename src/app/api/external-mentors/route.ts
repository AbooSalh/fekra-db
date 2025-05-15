import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

// GET all external mentors
export async function GET() {
  const externalMentors = await prisma.external_mentor.findMany({
    include: {
      mentor: {
        include: {
          person: true,
        },
      },
      organization: true,
    },
  });
  return NextResponse.json(externalMentors);
}

// POST new external mentor
export async function POST(request: NextRequest) {
  const { Ext_Mentor_id, Org_id, Name, Email, Sex, Course_id } =
    await request.json();
  const externalMentor = await prisma.external_mentor.create({
    data: {
      Ext_Mentor_id,
      Org_id,
      mentor: {
        create: {
          Mentor_id: Ext_Mentor_id,
          Course_id,
          person: {
            create: {
              Person_id: Ext_Mentor_id,
              Name,
              Email,
              Sex,
            },
          },
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
  return NextResponse.json(externalMentor, { status: 201 });
}
