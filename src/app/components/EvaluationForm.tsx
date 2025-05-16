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

interface EvaluationFormProps {
  initialData?: {
    Evaluation_id: number;
    Grade: string | null;
    Student_id?: number;
  };
  isEdit?: boolean;
}

export default function EvaluationForm({
  initialData,
  isEdit = false,
}: EvaluationFormProps) {
  const router = useRouter();
  const [students, setStudents] = useState<Student[]>([]);
  const [formData, setFormData] = useState({
    grade: initialData?.Grade || "",
    studentId: initialData?.Student_id?.toString() || "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchStudents();
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `/api/evaluations${isEdit ? `/${initialData?.Evaluation_id}` : ""}`,
        {
          method: isEdit ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            grade: formData.grade,
            studentId: formData.studentId ? parseInt(formData.studentId) : null,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to save evaluation");
      }

      router.push("/evaluations");
      router.refresh();
    } catch (error) {
      console.error("Error saving evaluation:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to save evaluation. Please try again."
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
          htmlFor="grade"
          className="block text-sm font-medium text-gray-700"
        >
          Grade
        </label>
        <input
          type="text"
          id="grade"
          value={formData.grade}
          onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
          placeholder="e.g., A, B+, C-"
          maxLength={2}
        />
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
          {isSubmitting ? "Saving..." : isEdit ? "Update" : "Create"} Evaluation
        </button>
      </div>
    </form>
  );
}
