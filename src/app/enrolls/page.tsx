"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Enroll {
  Student_id: number;
  Course_id: string;
  student: {
    Student_id: number;
    person: {
      Name: string;
      Email: string;
    };
  };
  fieldt_course: {
    Course_id: string;
    Name: string;
  };
}

export default function EnrollsPage() {
  const [enrolls, setEnrolls] = useState<Enroll[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEnrolls();
  }, []);

  const fetchEnrolls = async () => {
    try {
      const response = await fetch("/api/enrolls");
      if (!response.ok) throw new Error("Failed to fetch enrolls");
      const data = await response.json();
      setEnrolls(data);
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
          <h1 className="text-2xl font-bold text-gray-900">Enrolls</h1>
          <Link
            href="/enrolls/new"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Add New Enroll
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {enrolls.map((enroll) => (
                <tr key={`${enroll.Student_id}-${enroll.Course_id}`}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {enroll.student.person.Name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {enroll.student.person.Email}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {enroll.fieldt_course.Name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {enroll.fieldt_course.Course_id}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link
                      href={`/enrolls/${enroll.Student_id}/${enroll.Course_id}`}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      View
                    </Link>
                    <Link
                      href={`/enrolls/${enroll.Student_id}/${enroll.Course_id}/edit`}
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
