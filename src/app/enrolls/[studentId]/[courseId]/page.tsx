"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
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

export default function EnrollViewPage() {
  const params = useParams();
  const router = useRouter();
  const [enroll, setEnroll] = useState<Enroll | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEnroll = async () => {
      try {
        const response = await fetch(
          `/api/enrolls/${params.studentId}/${params.courseId}`
        );
        if (!response.ok) throw new Error("Failed to fetch enroll");
        const data = await response.json();
        setEnroll(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchEnroll();
  }, [params.studentId, params.courseId]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;
  if (!enroll) return <div className="p-8">Enroll not found</div>;

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Enroll Details</h1>
          <div className="space-x-4">
            <Link
              href={`/enrolls/${enroll.Student_id}/${enroll.Course_id}/edit`}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Edit Enroll
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
                  Student Name
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {enroll.student.person.Name}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  Student Email
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {enroll.student.person.Email}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  Course Name
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {enroll.fieldt_course.Name}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Course ID</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {enroll.fieldt_course.Course_id}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
