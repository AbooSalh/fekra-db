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
  const [uploadStatus, setUploadStatus] = useState<{
    message: string;
    results?: {
      success: number;
      failed: number;
      errors: string[];
    };
  } | null>(null);

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

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/auth/login";
        return;
      }
      const response = await fetch("/api/enrollments/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to upload file");
      }
      setUploadStatus(data);
      // Refresh the enrollments list
      fetchEnrollments();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to upload file");
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Enrollments</h1>
          <div className="flex items-center space-x-4">
            <Link
              href="/enrollments/new"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Add New Enrollment
            </Link>
            {/* CSV Upload Section */}
            <div className="flex items-center space-x-4">
              <label className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 cursor-pointer">
                Upload CSV
                <input
                  type="file"
                  accept=".csv"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </label>
              <a
                href="/templates/enrollments.csv"
                download
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Download Template
              </a>
            </div>
          </div>
        </div>

        {/* Upload Status */}
        {uploadStatus && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <p className="font-medium text-gray-900">{uploadStatus.message}</p>
            {uploadStatus.results && (
              <div className="mt-2 text-sm text-gray-600">
                <p>Successfully imported: {uploadStatus.results.success}</p>
                <p>Failed to import: {uploadStatus.results.failed}</p>
                {uploadStatus.results.errors.length > 0 && (
                  <div className="mt-2">
                    <p className="font-medium">Errors:</p>
                    <ul className="list-disc list-inside">
                      {uploadStatus.results.errors.map((error, index) => (
                        <li key={index} className="text-red-600">
                          {error}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  Enrollment ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  Course
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  Semester
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  Final Grade
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  Coordinator
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {enrollments.map((enrollment) => (
                <tr key={enrollment.Enrollment_id}>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                    {enrollment.Enrollment_id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                    {enrollment.student?.person.Name || "Not assigned"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                    {enrollment.fieldt_course?.Name || "Not assigned"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                    {enrollment.Semester || "Not set"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                    {enrollment.Final_grade || "Not graded"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                    {enrollment.coordinator?.Name || "Not assigned"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
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
