"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Organization {
  Org_id: number;
  Name: string;
}

interface FieldCourseFormProps {
  initialData?: {
    Course_id: string;
    Name: string;
    Duration: string;
    Org_id: number | null;
  };
  isEdit?: boolean;
}

export default function FieldCourseForm({
  initialData,
  isEdit = false,
}: FieldCourseFormProps) {
  const router = useRouter();
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [formData, setFormData] = useState({
    courseId: initialData?.Course_id || "",
    name: initialData?.Name || "",
    duration: initialData?.Duration || "",
    orgId: initialData?.Org_id?.toString() || "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchOrganizations();
  }, []);

  const fetchOrganizations = async () => {
    try {
      const response = await fetch("/api/organizations");
      if (!response.ok) throw new Error("Failed to fetch organizations");
      const data = await response.json();
      setOrganizations(data);
    } catch (err) {
      console.error("Error fetching organizations:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `/api/fieldt-courses${isEdit ? `/${initialData?.Course_id}` : ""}`,
        {
          method: isEdit ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            courseId: formData.courseId,
            name: formData.name,
            duration: formData.duration,
            orgId: formData.orgId ? parseInt(formData.orgId) : null,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to save course");
      }

      router.push("/field-courses");
      router.refresh();
    } catch (error) {
      console.error("Error saving course:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to save course. Please try again."
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

      {!isEdit && (
        <div>
          <label
            htmlFor="courseId"
            className="block text-sm font-medium text-gray-700"
          >
            Course ID
          </label>
          <input
            type="text"
            id="courseId"
            value={formData.courseId}
            onChange={(e) =>
              setFormData({ ...formData, courseId: e.target.value })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Course Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="duration"
          className="block text-sm font-medium text-gray-700"
        >
          Duration
        </label>
        <input
          type="text"
          id="duration"
          value={formData.duration}
          onChange={(e) =>
            setFormData({ ...formData, duration: e.target.value })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
          placeholder="e.g., 3 months, 6 weeks"
        />
      </div>

      <div>
        <label
          htmlFor="orgId"
          className="block text-sm font-medium text-gray-700"
        >
          Organization
        </label>
        <select
          id="orgId"
          value={formData.orgId}
          onChange={(e) => setFormData({ ...formData, orgId: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select an organization</option>
          {organizations.map((org) => (
            <option key={org.Org_id} value={org.Org_id}>
              {org.Name}
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
          {isSubmitting ? "Saving..." : isEdit ? "Update" : "Create"} Course
        </button>
      </div>
    </form>
  );
}
