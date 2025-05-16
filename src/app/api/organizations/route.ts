import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";
import { Prisma } from "@prisma/client";

// GET all organizations
export async function GET(request: Request) {
  try {
    // Verify authentication
    const token = request.headers.get("authorization")?.split(" ")[1];
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = await verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    // Get all organizations with their coordinator information
    const organizations = await prisma.organization.findMany({
      include: {
        coordinator: {
          select: {
            Name: true,
          },
        },
      },
      orderBy: {
        Name: "asc",
      },
    });

    return NextResponse.json(organizations);
  } catch (error) {
    console.error("Error fetching organizations:", error);
    return NextResponse.json(
      { error: "Failed to fetch organizations" },
      { status: 500 }
    );
  }
}

// POST new organization
export async function POST(request: Request) {
  try {
    // Verify authentication
    const token = request.headers.get("authorization")?.split(" ")[1];
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = await verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    const body = await request.json();

    // Validate required fields
    if (!body.Name || !body.Contact_info) {
      return NextResponse.json(
        { error: "Name and Contact_info are required" },
        { status: 400 }
      );
    }

    // If coordinator_id is provided, verify it exists
    if (body.Coordinator_id) {
      const coordinator = await prisma.coordinator.findUnique({
        where: { Coordinator_id: body.Coordinator_id },
      });
      if (!coordinator) {
        return NextResponse.json(
          { error: `Coordinator with ID ${body.Coordinator_id} not found` },
          { status: 400 }
        );
      }
    }

    // Create new organization
    const organization = await prisma.organization.create({
      data: {
        Name: body.Name,
        Contact_info: body.Contact_info,
        Approval_Status: body.Approval_Status || "Pending",
        Coordinator_id: body.Coordinator_id || null,
      } as Prisma.organizationUncheckedCreateInput,
      include: {
        coordinator: {
          select: {
            Name: true,
          },
        },
      },
    });

    return NextResponse.json(organization);
  } catch (error) {
    console.error("Error creating organization:", error);
    return NextResponse.json(
      { error: "Failed to create organization" },
      { status: 500 }
    );
  }
}
