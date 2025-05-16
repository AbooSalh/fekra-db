"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Student {
  Student_id: number;
  person: {
    Name: string;
    Email: string;
  };
}

interface Course {
  Course_id: string;
  Name: string;
}

interface EnrollFormProps {
  initialData?: {
    Student_id: number;
    Course_id: string;
  };
  isEdit?: boolean;
}

export default function EnrollForm({
  initialData,
  isEdit = false,
}: EnrollFormProps) {
  const router = useRouter();
  const [students, setStudents] = useState<Student[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [formData, setFormData] = useState({
    studentId: initialData?.Student_id?.toString() || "",
    courseId: initialData?.Course_id || "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchStudents();
    fetchCourses();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch("/api/students");
      if (!response.ok) throw new Error("Failed to fetch students");
      const data = await response.json();
      setStudents(data);
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await fetch("/api/fieldt-courses");
      if (!response.ok) throw new Error("Failed to fetch courses");
      const data = await response.json();
      setCourses(data);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `/api/enrolls${
          isEdit ? `/${initialData?.Student_id}/${initialData?.Course_id}` : ""
        }`,
        {
          method: isEdit ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            studentId: parseInt(formData.studentId),
            courseId: formData.courseId,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to save enroll");
      }

      router.push("/enrolls");
      router.refresh();
    } catch (error) {
      console.error("Error saving enroll:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to save enroll. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-6">
      {error && (
        <div
          className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      <div>
        <label
          htmlFor="studentId"
          className="block text-sm font-medium text-gray-700"
        >
          Student
        </label>
        <select
          id="studentId"
          value={formData.studentId}
          onChange={(e) =>
            setFormData({ ...formData, studentId: e.target.value })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
          required
        >
          <option value="">Select a student</option>
          {students.map((student) => (
            <option key={student.Student_id} value={student.Student_id}>
              {student.person.Name} ({student.person.Email})
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="courseId"
          className="block text-sm font-medium text-gray-700"
        >
          Course
        </label>
        <select
          id="courseId"
          value={formData.courseId}
          onChange={(e) =>
            setFormData({ ...formData, courseId: e.target.value })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
          required
        >
          <option value="">Select a course</option>
          {courses.map((course) => (
            <option key={course.Course_id} value={course.Course_id}>
              {course.Name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          disabled={isSubmitting}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : isEdit ? "Update" : "Create"} Enroll
        </button>
      </div>
    </form>
  );
}
