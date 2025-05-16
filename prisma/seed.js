import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  try {
    // Delete existing data in reverse order of dependencies
    console.log("Deleting existing data...");
    await prisma.enroll.deleteMany();
    await prisma.enrollment.deleteMany();
    await prisma.evaluation.deleteMany();
    await prisma.external_mentor.deleteMany();
    await prisma.internal_mentor.deleteMany();
    await prisma.mentor.deleteMany();
    await prisma.fieldt_course.deleteMany();
    await prisma.organization.deleteMany();
    await prisma.student.deleteMany();
    await prisma.employee.deleteMany();
    await prisma.coordinator.deleteMany();
    await prisma.person.deleteMany();

    console.log("Creating new data...");
    // Create admin person with bcrypt password
    const adminPassword = "admin123";
    const hashedAdminPassword = await bcrypt.hash(adminPassword, 10);
    const adminPerson = await prisma.person.create({
      data: {
        Name: "Admin User",
        Email: "admin@example.com",
        Sex: "M",
        HashedPassword: hashedAdminPassword,
        employee: {
          create: {
            Position: "System Administrator",
            Salary: 10000,
          },
        },
      },
    });

    // Create mentor person with password
    const mentorPassword = "mentor123";
    const hashedMentorPassword = await bcrypt.hash(mentorPassword, 10);
    const mentorPerson = await prisma.person.create({
      data: {
        Name: "Sarah Wilson",
        Email: "sarah.wilson@example.com",
        Sex: "F",
        HashedPassword: hashedMentorPassword,
      },
    });

    // Create student person with password
    const studentPassword = "student123";
    const hashedStudentPassword = await bcrypt.hash(studentPassword, 10);
    const studentPerson = await prisma.person.create({
      data: {
        Name: "Alex Johnson",
        Email: "alex.johnson@example.com",
        Sex: "M",
        HashedPassword: hashedStudentPassword,
      },
    });

    // Create additional random persons
    const randomPersons = await Promise.all([
      prisma.person.create({
        data: {
          Name: "Maria Garcia",
          Email: "maria.garcia@example.com",
          Sex: "F",
        },
      }),
      prisma.person.create({
        data: {
          Name: "James Chen",
          Email: "james.chen@example.com",
          Sex: "M",
        },
      }),
      prisma.person.create({
        data: {
          Name: "Emma Thompson",
          Email: "emma.thompson@example.com",
          Sex: "F",
        },
      }),
    ]);

    // Create coordinator (using admin person)
    const coordinator = await prisma.coordinator.create({
      data: {
        Coordinator_id: adminPerson.Person_id,
        Name: "Admin User",
      },
    });

    // Create student
    const student = await prisma.student.create({
      data: {
        Student_id: studentPerson.Person_id,
        Level: "3",
        Major_Dept: "Computer Science",
      },
    });

    // Create additional students
    const additionalStudents = await Promise.all([
      prisma.student.create({
        data: {
          Student_id: randomPersons[0].Person_id,
          Level: "2",
          Major_Dept: "Information Technology",
        },
      }),
      prisma.student.create({
        data: {
          Student_id: randomPersons[1].Person_id,
          Level: "4",
          Major_Dept: "Software Engineering",
        },
      }),
    ]);

    // Create employee (mentor person)
    const employee = await prisma.employee.create({
      data: {
        Employee_id: mentorPerson.Person_id,
        Position: "Senior Developer",
        Salary: 7500,
      },
    });

    // Create additional employee
    const additionalEmployee = await prisma.employee.create({
      data: {
        Employee_id: randomPersons[2].Person_id,
        Position: "Project Manager",
        Salary: 6500,
      },
    });

    // Create organizations
    const organizations = await Promise.all([
      prisma.organization.create({
        data: {
          Name: "Tech Solutions Inc",
          Contact_info: "contact@techsolutions.com",
          Approval_Status: "Approved",
          Coordinator_id: coordinator.Coordinator_id,
        },
      }),
      prisma.organization.create({
        data: {
          Name: "Digital Innovations",
          Contact_info: "info@digitalinnovations.com",
          Approval_Status: "Pending",
          Coordinator_id: coordinator.Coordinator_id,
        },
      }),
    ]);

    // Create field training courses
    const courses = await Promise.all([
      prisma.fieldt_course.create({
        data: {
          Course_id: "CS101",
          Name: "Web Development Fundamentals",
          Duration: "3 months",
          Org_id: organizations[0].Org_id,
        },
      }),
      prisma.fieldt_course.create({
        data: {
          Course_id: "CS102",
          Name: "Mobile App Development",
          Duration: "4 months",
          Org_id: organizations[1].Org_id,
        },
      }),
    ]);

    // Create mentor
    const mentor = await prisma.mentor.create({
      data: {
        Mentor_id: mentorPerson.Person_id,
        Course_id: courses[0].Course_id,
      },
    });

    // Create external mentor
    const externalMentor = await prisma.external_mentor.create({
      data: {
        Ext_Mentor_id: mentor.Mentor_id,
        Org_id: organizations[0].Org_id,
      },
    });

    // Create internal mentor
    const internalMentor = await prisma.internal_mentor.create({
      data: {
        Int_Mentor_id: mentor.Mentor_id,
        Student_id: student.Student_id,
      },
    });

    // Create evaluations
    const evaluations = await Promise.all([
      prisma.evaluation.create({
        data: {
          Evaluation_id: 1,
          Grade: "A",
        },
      }),
      prisma.evaluation.create({
        data: {
          Evaluation_id: 2,
          Grade: "B+",
        },
      }),
    ]);

    // Create enrollments
    const enrollments = await Promise.all([
      prisma.enrollment.create({
        data: {
          Enrollment_id: 1,
          Student_id: student.Student_id,
          Course_id: courses[0].Course_id,
          Semester: "Fall 2024",
          Final_grade: "A",
          Coordinator_id: coordinator.Coordinator_id,
        },
      }),
      prisma.enrollment.create({
        data: {
          Enrollment_id: 2,
          Student_id: additionalStudents[0].Student_id,
          Course_id: courses[1].Course_id,
          Semester: "Fall 2024",
          Final_grade: "B+",
          Coordinator_id: coordinator.Coordinator_id,
        },
      }),
    ]);

    // Create enrolls
    const enrolls = await Promise.all([
      prisma.enroll.create({
        data: {
          Student_id: student.Student_id,
          Course_id: courses[0].Course_id,
        },
      }),
      prisma.enroll.create({
        data: {
          Student_id: additionalStudents[0].Student_id,
          Course_id: courses[1].Course_id,
        },
      }),
    ]);

    console.log("Database seeded successfully!");
    console.log("\nMain Users Information:");
    console.log("----------------------");
    console.log("Admin User:");
    console.log("Email: admin@example.com");
    console.log("Password: admin123");
    console.log("\nMentor:");
    console.log("Name: Sarah Wilson");
    console.log("Email: sarah.wilson@example.com");
    console.log("Password: mentor123");
    console.log("\nStudent:");
    console.log("Name: Alex Johnson");
    console.log("Email: alex.johnson@example.com");
    console.log("Password: student123");
  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
