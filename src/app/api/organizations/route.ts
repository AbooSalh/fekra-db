import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

// GET all organizations
export async function GET() {
  const organizations = await prisma.organization.findMany({
    include: {
      coordinator: true,
      external_mentor: {
        include: {
          mentor: {
            include: {
              person: true,
            },
          },
        },
      },
      fieldt_course: true,
    },
  });
  return NextResponse.json(organizations);
}

// POST new organization
export async function POST(request: NextRequest) {
  const { Org_id, Name, Contact_info, Approval_Status, Coordinator_id } =
    await request.json();
  const organization = await prisma.organization.create({
    data: {
      Org_id,
      Name,
      Contact_info,
      Approval_Status,
      Coordinator_id,
    },
    include: {
      coordinator: true,
      external_mentor: {
        include: {
          mentor: {
            include: {
              person: true,
            },
          },
        },
      },
      fieldt_course: true,
    },
  });
  return NextResponse.json(organization, { status: 201 });
}
