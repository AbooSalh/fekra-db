import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

// GET organization by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const organization = await prisma.organization.findUnique({
    where: { Org_id: parseInt(params.id) },
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

  if (!organization) {
    return NextResponse.json(
      { error: "Organization not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(organization);
}

// PUT update organization
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { Name, Contact_info, Approval_Status, Coordinator_id } =
    await request.json();
  const organization = await prisma.organization.update({
    where: { Org_id: parseInt(params.id) },
    data: {
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
  return NextResponse.json(organization);
}

// DELETE organization
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.organization.delete({
    where: { Org_id: parseInt(params.id) },
  });
  return NextResponse.json(
    { message: "Organization deleted" },
    { status: 200 }
  );
}
