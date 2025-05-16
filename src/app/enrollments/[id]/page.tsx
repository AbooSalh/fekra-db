"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
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

export default function EnrollmentViewPage() {
  const params = useParams();
  const router = useRouter();
  const [enrollment, setEnrollment] = useState<Enrollment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEnrollment = async () => {
      try {
        const response = await fetch(`/api/enrollments/${params.id}`);
        if (!response.ok) throw new Error("Failed to fetch enrollment");
        const data = await response.json();
        setEnrollment(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchEnrollment();
  }, [params.id]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;
  if (!enrollment) return <div className="p-8">Enrollment not found</div>;

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Enrollment Details
          </h1>
          <div className="space-x-4">
            <Link
              href={`/enrollments/${enrollment.Enrollment_id}/edit`}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Edit Enrollment
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
                <dt className="text-sm font-medium text-gray-500">
                  Enrollment ID
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {enrollment.Enrollment_id}
                </dd>
              </div>
              {enrollment.student && (
                <>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Student Name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {enrollment.student.person.Name}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Student Email
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {enrollment.student.person.Email}
                    </dd>
                  </div>
                </>
              )}
              {enrollment.fieldt_course && (
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Course Name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {enrollment.fieldt_course.Name}
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-sm font-medium text-gray-500">Semester</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {enrollment.Semester || "Not set"}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  Final Grade
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {enrollment.Final_grade || "Not graded"}
                </dd>
              </div>
              {enrollment.coordinator && (
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Coordinator
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {enrollment.coordinator.Name}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
