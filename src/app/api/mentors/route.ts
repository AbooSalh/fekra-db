import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

// GET all mentors
export async function GET() {
  const mentors = await prisma.mentor.findMany({
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
  return NextResponse.json(mentors);
}

// POST new mentor
export async function POST(request: NextRequest) {
  const { Mentor_id, Course_id, Name, Email, Sex } = await request.json();
  const mentor = await prisma.mentor.create({
    data: {
      Mentor_id,
      Course_id,
      person: {
        create: {
          Person_id: Mentor_id,
          Name,
          Email,
          Sex,
        },
      },
    },
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
  return NextResponse.json(mentor, { status: 201 });
}
