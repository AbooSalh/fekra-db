import Link from "next/link";

export default function Home() {
  const routes = [
    {
      name: "Students",
      path: "/students",
      description: "Manage student records and information",
    },
    {
      name: "Mentors",
      path: "/mentors",
      description: "View and manage mentor information",
    },
    {
      name: "Organizations",
      path: "/organizations",
      description: "Manage organization details",
    },
    {
      name: "Field Courses",
      path: "/field-courses",
      description: "Handle field course information",
    },
    {
      name: "Evaluations",
      path: "/evaluations",
      description: "Manage student evaluations",
    },
    {
      name: "Internal Mentors",
      path: "/internal-mentors",
      description: "Internal mentor management",
    },
    {
      name: "External Mentors",
      path: "/external-mentors",
      description: "External mentor management",
    },
    {
      name: "Enrollments",
      path: "/enrollments",
      description: "Student enrollment management",
    },
    {
      name: "Employees",
      path: "/employees",
      description: "Employee information management",
    },
    {
      name: "Coordinators",
      path: "/coordinators",
      description: "Coordinator management",
    },
    {
      name: "Persons",
      path: "/persons",
      description: "Person records management",
    },
  ];

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Fekra Database Management
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {route.name}
              </h2>
              <p className="text-gray-600">{route.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
