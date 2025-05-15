import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

// GET all enrolls
export async function GET() {
  const enrolls = await prisma.enroll.findMany({
    include: {
      student: {
        include: {
          person: true,
        },
      },
      fieldt_course: true,
    },
  });
  return NextResponse.json(enrolls);
}

// POST new enroll
export async function POST(request: NextRequest) {
  const { Student_id, Course_id } = await request.json();
  const enroll = await prisma.enroll.create({
    data: {
      Student_id,
      Course_id,
    },
    include: {
      student: {
        include: {
          person: true,
        },
      },
      fieldt_course: true,
    },
  });
  return NextResponse.json(enroll, { status: 201 });
}
