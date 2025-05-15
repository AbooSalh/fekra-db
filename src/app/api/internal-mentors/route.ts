import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

// GET all internal mentors
export async function GET() {
  const internalMentors = await prisma.internal_mentor.findMany({
    include: {
      mentor: {
        include: {
          person: true,
        },
      },
      student: {
        include: {
          person: true,
        },
      },
    },
  });
  return NextResponse.json(internalMentors);
}

// POST new internal mentor
export async function POST(request: NextRequest) {
  const { Int_Mentor_id, Student_id, Name, Email, Sex, Course_id } =
    await request.json();
  const internalMentor = await prisma.internal_mentor.create({
    data: {
      Int_Mentor_id,
      Student_id,
      mentor: {
        create: {
          Mentor_id: Int_Mentor_id,
          Course_id,
          person: {
            create: {
              Person_id: Int_Mentor_id,
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
      student: {
        include: {
          person: true,
        },
      },
    },
  });
  return NextResponse.json(internalMentor, { status: 201 });
}
