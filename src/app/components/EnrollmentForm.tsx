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

interface Coordinator {
  Coordinator_id: number;
  Name: string;
}

interface EnrollmentFormProps {
  initialData?: {
    Enrollment_id: number;
    Student_id: number | null;
    Course_id: string | null;
    Semester: string | null;
    Final_grade: string | null;
    Coordinator_id: number | null;
  };
  isEdit?: boolean;
}

export default function EnrollmentForm({
  initialData,
  isEdit = false,
}: EnrollmentFormProps) {
  const router = useRouter();
  const [students, setStudents] = useState<Student[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [coordinators, setCoordinators] = useState<Coordinator[]>([]);
  const [formData, setFormData] = useState({
    studentId: initialData?.Student_id?.toString() || "",
    courseId: initialData?.Course_id || "",
    semester: initialData?.Semester || "",
    finalGrade: initialData?.Final_grade || "",
    coordinatorId: initialData?.Coordinator_id?.toString() || "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchStudents();
    fetchCourses();
    fetchCoordinators();
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

  const fetchCoordinators = async () => {
    try {
      const response = await fetch("/api/coordinators");
      if (!response.ok) throw new Error("Failed to fetch coordinators");
      const data = await response.json();
      setCoordinators(data);
    } catch (err) {
      console.error("Error fetching coordinators:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `/api/enrollments${isEdit ? `/${initialData?.Enrollment_id}` : ""}`,
        {
          method: isEdit ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            studentId: formData.studentId ? parseInt(formData.studentId) : null,
            courseId: formData.courseId || null,
            semester: formData.semester || null,
            finalGrade: formData.finalGrade || null,
            coordinatorId: formData.coordinatorId
              ? parseInt(formData.coordinatorId)
              : null,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to save enrollment");
      }

      router.push("/enrollments");
      router.refresh();
    } catch (error) {
      console.error("Error saving enrollment:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to save enrollment. Please try again."
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
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select a student (optional)</option>
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
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select a course (optional)</option>
          {courses.map((course) => (
            <option key={course.Course_id} value={course.Course_id}>
              {course.Name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="semester"
          className="block text-sm font-medium text-gray-700"
        >
          Semester
        </label>
        <input
          type="text"
          id="semester"
          value={formData.semester}
          onChange={(e) =>
            setFormData({ ...formData, semester: e.target.value })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter semester (optional)"
        />
      </div>

      <div>
        <label
          htmlFor="finalGrade"
          className="block text-sm font-medium text-gray-700"
        >
          Final Grade
        </label>
        <input
          type="text"
          id="finalGrade"
          value={formData.finalGrade}
          onChange={(e) =>
            setFormData({ ...formData, finalGrade: e.target.value })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter final grade (optional)"
        />
      </div>

      <div>
        <label
          htmlFor="coordinatorId"
          className="block text-sm font-medium text-gray-700"
        >
          Coordinator
        </label>
        <select
          id="coordinatorId"
          value={formData.coordinatorId}
          onChange={(e) =>
            setFormData({ ...formData, coordinatorId: e.target.value })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select a coordinator (optional)</option>
          {coordinators.map((coordinator) => (
            <option
              key={coordinator.Coordinator_id}
              value={coordinator.Coordinator_id}
            >
              {coordinator.Name}
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
          {isSubmitting ? "Saving..." : isEdit ? "Update" : "Create"} Enrollment
        </button>
      </div>
    </form>
  );
}
