import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

// GET all persons, with optional role filter
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const role = searchParams.get("role");

    // Build include object
    const include = {
      student: true,
      mentor: true,
      employee: true,
    };

    // Fetch all persons with relations
    const persons = await prisma.person.findMany({ include });

    // Add role property
    let personsWithRole = persons.map((person) => {
      let roleValue = "";
      if (person.student) roleValue = "student";
      else if (person.mentor) roleValue = "mentor";
      else if (person.employee) roleValue = "employee";
      return {
        Person_id: person.Person_id,
        Name: person.Name,
        Email: person.Email,
        Sex: person.Sex,
        role: roleValue,
      };
    });

    // Filter by role if requested
    if (role) {
      personsWithRole = personsWithRole.filter((p) => p.role === role);
    }

    return NextResponse.json(personsWithRole);
  } catch (error) {
    console.error("Error in GET /api/persons:", error);
    return NextResponse.json(
      { error: "Failed to fetch persons", details: String(error) },
      { status: 500 }
    );
  }
}

// POST new person
export async function POST(request: NextRequest) {
  const { Person_id, Name, Email, Sex } = await request.json();
  const person = await prisma.person.create({
    data: {
      Person_id,
      Name,
      Email,
      Sex,
    },
  });
  return NextResponse.json(person, { status: 201 });
}
