"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Enrollment {
  Enrollment_id: number;
  Student_id: number | null;
  Course_id: string | null;
  Semester: string | null;
  Final_grade: string | null;
  Coordinator_id: number | null;
  student?: {
    Student_id: number;
    person: {
      Name: string;
      Email: string;
    };
  };
  fieldt_course?: {
    Course_id: string;
    Name: string;
  };
  coordinator?: {
    Coordinator_id: number;
    Name: string;
  };
}

export default function EnrollmentsPage() {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    try {
      const response = await fetch("/api/enrollments");
      if (!response.ok) throw new Error("Failed to fetch enrollments");
      const data = await response.json();
      setEnrollments(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Enrollments</h1>
          <Link
            href="/enrollments/new"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Add New Enrollment
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Enrollment ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Semester
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Final Grade
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Coordinator
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {enrollments.map((enrollment) => (
                <tr key={enrollment.Enrollment_id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {enrollment.Enrollment_id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {enrollment.student?.person.Name || "Not assigned"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {enrollment.fieldt_course?.Name || "Not assigned"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {enrollment.Semester || "Not set"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {enrollment.Final_grade || "Not graded"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {enrollment.coordinator?.Name || "Not assigned"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link
                      href={`/enrollments/${enrollment.Enrollment_id}`}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      View
                    </Link>
                    <Link
                      href={`/enrollments/${enrollment.Enrollment_id}/edit`}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
