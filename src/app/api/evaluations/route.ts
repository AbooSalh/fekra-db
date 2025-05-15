import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

// GET all evaluations
export async function GET() {
  const evaluations = await prisma.evaluation.findMany();
  return NextResponse.json(evaluations);
}

// POST new evaluation
export async function POST(request: NextRequest) {
  const { Evaluation_id, Grade } = await request.json();
  const evaluation = await prisma.evaluation.create({
    data: {
      Evaluation_id,
      Grade,
    },
  });
  return NextResponse.json(evaluation, { status: 201 });
}
