import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

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
  try {
    const body = await request.json();
    const { Name, Contact_info, Approval_Status, Coordinator_id } = body;

    if (!Name || !Contact_info) {
      return NextResponse.json(
        { error: "Name and Contact_info are required" },
        { status: 400 }
      );
    }

    const organization = await prisma.organization.create({
      data: {
        Name,
        Contact_info,
        Approval_Status: Approval_Status || null,
        Coordinator_id: Coordinator_id ? parseInt(Coordinator_id) : null,
      } as any,
    });

    return NextResponse.json(organization, { status: 201 });
  } catch (error) {
    console.error("Error creating organization:", error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "Failed to create organization" },
      { status: 500 }
    );
  }
}
