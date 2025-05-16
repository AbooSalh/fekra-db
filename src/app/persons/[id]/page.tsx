"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

interface Person {
  Person_id: number;
  Name: string;
  Email: string | null;
  Sex: string | null;
  employee?: {
    Position: string;
    Salary: number | null;
  } | null;
  mentor?: {
    Mentor_id: number;
    Course_id: string | null;
  } | null;
  student?: {
    Student_id: number;
    Level: string | null;
    Major_Dept: string;
  } | null;
}

export default function PersonViewPage() {
  const params = useParams();
  const router = useRouter();
  const [person, setPerson] = useState<Person | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const response = await fetch(`/api/persons/${params.id}`);
        if (!response.ok) throw new Error("Failed to fetch person");
        const data = await response.json();
        setPerson(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPerson();
  }, [params.id]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;
  if (!person) return <div className="p-8">Person not found</div>;

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Person Details</h1>
          <div className="space-x-4">
            <Link
              href={`/persons/${person.Person_id}/edit`}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Edit Person
            </Link>
            <button
              onClick={() => router.back()}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
            >
              Back
            </button>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-gray-500">Person ID</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {person.Person_id}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Name</dt>
                <dd className="mt-1 text-sm text-gray-900">{person.Name}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {person.Email || "Not set"}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Sex</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {person.Sex || "Not set"}
                </dd>
              </div>

              {person.employee && (
                <>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Employee Position
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {person.employee.Position}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Employee Salary
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {person.employee.Salary
                        ? `$${person.employee.Salary.toLocaleString()}`
                        : "Not set"}
                    </dd>
                  </div>
                </>
              )}

              {person.mentor && (
                <>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Mentor ID
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {person.mentor.Mentor_id}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Course ID
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {person.mentor.Course_id || "Not set"}
                    </dd>
                  </div>
                </>
              )}

              {person.student && (
                <>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Student ID
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {person.student.Student_id}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Level</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {person.student.Level || "Not set"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Major Department
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {person.student.Major_Dept}
                    </dd>
                  </div>
                </>
              )}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
