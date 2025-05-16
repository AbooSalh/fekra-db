"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

interface FieldCourse {
  Course_id: string;
  Name: string;
  Duration: string;
  Org_id: number | null;
  organization?: {
    Name: string;
  };
  mentor?: {
    Mentor_id: number;
    person: {
      Name: string;
      Email: string;
    };
  }[];
  enroll?: {
    Student_id: number;
    student: {
      person: {
        Name: string;
        Email: string;
      };
    };
  }[];
}

export default function FieldCourseViewPage() {
  const params = useParams();
  const router = useRouter();
  const [course, setCourse] = useState<FieldCourse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`/api/fieldt-courses/${params.id}`);
        if (!response.ok) throw new Error("Failed to fetch course");
        const data = await response.json();
        setCourse(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [params.id]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;
  if (!course) return <div className="p-8">Course not found</div>;

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Course Details</h1>
          <div className="space-x-4">
            <Link
              href={`/field-courses/${course.Course_id}/edit`}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Edit Course
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
                <dt className="text-sm font-medium text-gray-500">Course ID</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {course.Course_id}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Name</dt>
                <dd className="mt-1 text-sm text-gray-900">{course.Name}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Duration</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {course.Duration}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  Organization
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {course.organization?.Name || "Not assigned"}
                </dd>
              </div>
            </dl>

            {course.mentor && course.mentor.length > 0 && (
              <div className="mt-8">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Mentors
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {course.mentor.map((mentor) => (
                    <div
                      key={mentor.Mentor_id}
                      className="bg-gray-50 p-4 rounded-lg"
                    >
                      <h3 className="text-sm font-medium text-gray-900">
                        {mentor.person.Name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {mentor.person.Email}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {course.enroll && course.enroll.length > 0 && (
              <div className="mt-8">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Enrolled Students
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {course.enroll.map((enrollment) => (
                    <div
                      key={enrollment.Student_id}
                      className="bg-gray-50 p-4 rounded-lg"
                    >
                      <h3 className="text-sm font-medium text-gray-900">
                        {enrollment.student.person.Name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {enrollment.student.person.Email}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
