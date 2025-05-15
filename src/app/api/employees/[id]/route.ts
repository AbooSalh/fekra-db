import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

// GET employee by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const employee = await prisma.employee.findUnique({
    where: { Employee_id: parseInt(params.id) },
    include: {
      person: true,
    },
  });

  if (!employee) {
    return NextResponse.json({ error: "Employee not found" }, { status: 404 });
  }

  return NextResponse.json(employee);
}

// PUT update employee
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { Salary, Position } = await request.json();
  const employee = await prisma.employee.update({
    where: { Employee_id: parseInt(params.id) },
    data: { Salary, Position },
    include: {
      person: true,
    },
  });
  return NextResponse.json(employee);
}

// DELETE employee
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.employee.delete({
    where: { Employee_id: parseInt(params.id) },
  });
  return NextResponse.json({ message: "Employee deleted" }, { status: 200 });
}
