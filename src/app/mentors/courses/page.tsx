"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Course {
  courseId: string;
  name: string;
  duration: string;
  organization: {
    id: number;
    name: string;
  } | null;
  enrolledStudents: Array<{
    studentId: number;
    name: string;
    email: string;
  }>;
}

export default function MentorCoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          router.push("/auth/login");
          return;
        }

        const response = await fetch("/api/mentors/courses", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          if (response.status === 401) {
            localStorage.removeItem("token");
            localStorage.removeItem("userRole");
            router.push("/auth/login");
            return;
          }
          throw new Error("Failed to fetch courses");
        }

        const data = await response.json();
        setCourses(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [router]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">My Courses</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.courseId}
              className="bg-white shadow-md rounded-lg p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {course.name}
              </h2>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Duration: {course.duration}</p>
                {course.organization && (
                  <p>Organization: {course.organization.name}</p>
                )}
                <div className="mt-4">
                  <h3 className="font-medium text-gray-900 mb-2">
                    Enrolled Students ({course.enrolledStudents.length})
                  </h3>
                  <ul className="space-y-1">
                    {course.enrolledStudents.map((student) => (
                      <li
                        key={student.studentId}
                        className="text-sm text-gray-600"
                      >
                        {student.name} ({student.email})
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
