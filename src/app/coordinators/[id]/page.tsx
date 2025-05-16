"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Student {
  id: number;
  name: string | null;
  email: string | null;
  major: string;
  level: string | null;
}

interface Course {
  id: string;
  name: string;
}

interface Enrollment {
  id: number;
  student: Student | null;
  course: Course | null;
  semester: string | null;
  grade: string | null;
}

interface Organization {
  id: number;
  name: string;
  contactInfo: string;
  approvalStatus: string | null;
}

interface Coordinator {
  id: number;
  name: string | null;
  enrollments: Enrollment[];
  organizations: Organization[];
}

export default function CoordinatorDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const [coordinator, setCoordinator] = useState<Coordinator | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoordinator = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          router.push("/auth/login");
          return;
        }

        const coordinatorId = parseInt(params.id);
        if (isNaN(coordinatorId)) {
          setError("Invalid coordinator ID");
          setLoading(false);
          return;
        }

        const response = await fetch(`/api/coordinators/${coordinatorId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          if (response.status === 401) {
            router.push("/auth/login");
            return;
          }
          throw new Error("Failed to fetch coordinator details");
        }

        const data = await response.json();
        setCoordinator(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchCoordinator();
    }
  }, [params.id, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="space-y-4">
              <div className="h-32 bg-gray-200 rounded"></div>
              <div className="h-32 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        </div>
      </div>
    );
  }

  if (!coordinator) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded">
            Coordinator not found
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {coordinator.name}
          </h1>
          <p className="text-gray-600">Coordinator ID: {coordinator.id}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Enrollments Section */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Enrollments
            </h2>
            {coordinator.enrollments.length === 0 ? (
              <p className="text-gray-500">No enrollments found</p>
            ) : (
              <div className="space-y-4">
                {coordinator.enrollments.map((enrollment) => (
                  <div
                    key={enrollment.id}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-medium text-gray-900">Student</h3>
                        {enrollment.student ? (
                          <div className="mt-1">
                            <p className="text-sm text-gray-600">
                              {enrollment.student.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {enrollment.student.email}
                            </p>
                            <p className="text-sm text-gray-500">
                              {enrollment.student.major} - Level{" "}
                              {enrollment.student.level}
                            </p>
                          </div>
                        ) : (
                          <p className="text-sm text-gray-500">
                            No student data
                          </p>
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Course</h3>
                        {enrollment.course ? (
                          <div className="mt-1">
                            <p className="text-sm text-gray-600">
                              {enrollment.course.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              ID: {enrollment.course.id}
                            </p>
                          </div>
                        ) : (
                          <p className="text-sm text-gray-500">
                            No course data
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mt-2 pt-2 border-t border-gray-100">
                      <p className="text-sm text-gray-600">
                        Semester: {enrollment.semester || "N/A"}
                      </p>
                      <p className="text-sm text-gray-600">
                        Grade: {enrollment.grade || "N/A"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Organizations Section */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Organizations
            </h2>
            {coordinator.organizations.length === 0 ? (
              <p className="text-gray-500">No organizations found</p>
            ) : (
              <div className="space-y-4">
                {coordinator.organizations.map((org) => (
                  <div
                    key={org.id}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <h3 className="font-medium text-gray-900">{org.name}</h3>
                    <div className="mt-2 space-y-1">
                      <p className="text-sm text-gray-600">
                        Contact: {org.contactInfo}
                      </p>
                      <p className="text-sm text-gray-600">
                        Status:{" "}
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            org.approvalStatus === "Approved"
                              ? "bg-green-100 text-green-800"
                              : org.approvalStatus === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {org.approvalStatus || "Not Set"}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
