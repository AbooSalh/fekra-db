"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Course {
  Course_id: string;
  Name: string;
}

interface MentorFormProps {
  initialData?: {
    Mentor_id?: number;
    Course_id: string | null;
    person: {
      Name: string;
      Email: string;
      Sex: string;
    };
  };
  isEdit?: boolean;
}

export default function MentorForm({
  initialData,
  isEdit = false,
}: MentorFormProps) {
  const router = useRouter();
  const [courses, setCourses] = useState<Course[]>([]);
  const [formData, setFormData] = useState({
    name: initialData?.person.Name || "",
    email: initialData?.person.Email || "",
    sex: initialData?.person.Sex || "",
    courseId: initialData?.Course_id || "",
    password: "", // Only for new mentors
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch("/api/field-courses");
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
        `/api/mentors${isEdit ? `/${initialData?.Mentor_id}` : ""}`,
        {
          method: isEdit ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            sex: formData.sex,
            courseId: formData.courseId || null,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to save mentor");
      }

      router.push("/mentors");
      router.refresh();
    } catch (error) {
      console.error("Error saving mentor:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to save mentor. Please try again."
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
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
          required
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
          required
        />
      </div>

      <div>
        <label
          htmlFor="sex"
          className="block text-sm font-medium text-gray-700"
        >
          Sex
        </label>
        <select
          id="sex"
          value={formData.sex}
          onChange={(e) => setFormData({ ...formData, sex: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
          required
        >
          <option value="">Select sex</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
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
        >
          <option value="">Select a course</option>
          {courses.map((course) => (
            <option key={course.Course_id} value={course.Course_id}>
              {course.Name}
            </option>
          ))}
        </select>
      </div>

      {!isEdit && (
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
            required
          />
        </div>
      )}

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
          {isSubmitting ? "Saving..." : isEdit ? "Update" : "Create"} Mentor
        </button>
      </div>
    </form>
  );
}
