import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

// GET all fieldt courses
export async function GET() {
  const fieldtCourses = await prisma.fieldt_course.findMany({
    include: {
      organization: true,
      enroll: {
        include: {
          student: {
            include: {
              person: true,
            },
          },
        },
      },
      enrollment: {
        include: {
          student: {
            include: {
              person: true,
            },
          },
        },
      },
      mentor: {
        include: {
          person: true,
        },
      },
    },
  });
  return NextResponse.json(fieldtCourses);
}

// POST new fieldt course
export async function POST(request: NextRequest) {
  const { Course_id, Name, Duration, Org_id } = await request.json();
  const fieldtCourse = await prisma.fieldt_course.create({
    data: {
      Course_id,
      Name,
      Duration,
      Org_id,
    },
    include: {
      organization: true,
      enroll: true,
      enrollment: true,
      mentor: true,
    },
  });
  return NextResponse.json(fieldtCourse, { status: 201 });
}
