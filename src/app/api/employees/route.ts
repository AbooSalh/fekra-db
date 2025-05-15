import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

// GET all employees
export async function GET() {
  const employees = await prisma.employee.findMany({
    include: {
      person: true,
    },
  });
  return NextResponse.json(employees);
}

// POST new employee
export async function POST(request: NextRequest) {
  const { Employee_id, Salary, Position, Name, Email, Sex } =
    await request.json();
  const employee = await prisma.employee.create({
    data: {
      Employee_id,
      Salary,
      Position,
      person: {
        create: {
          Person_id: Employee_id,
          Name,
          Email,
          Sex,
        },
      },
    },
    include: {
      person: true,
    },
  });
  return NextResponse.json(employee, { status: 201 });
}
