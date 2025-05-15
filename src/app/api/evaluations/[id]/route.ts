import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

// GET evaluation by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const evaluation = await prisma.evaluation.findUnique({
    where: { Evaluation_id: parseInt(params.id) },
  });

  if (!evaluation) {
    return NextResponse.json(
      { error: "Evaluation not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(evaluation);
}

// PUT update evaluation
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { Grade } = await request.json();
  const evaluation = await prisma.evaluation.update({
    where: { Evaluation_id: parseInt(params.id) },
    data: { Grade },
  });
  return NextResponse.json(evaluation);
}

// DELETE evaluation
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.evaluation.delete({
    where: { Evaluation_id: parseInt(params.id) },
  });
  return NextResponse.json({ message: "Evaluation deleted" }, { status: 200 });
}
