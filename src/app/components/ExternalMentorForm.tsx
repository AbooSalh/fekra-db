"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Organization {
  Org_id: number;
  Name: string;
}

interface Mentor {
  Mentor_id: number;
  person: {
    Name: string;
    Email: string;
  };
}

interface ExternalMentorFormProps {
  initialData?: {
    Ext_Mentor_id: number;
    Org_id: number | null;
    mentor: {
      Mentor_id: number;
      person: {
        Name: string;
        Email: string;
      };
    };
  };
  isEdit?: boolean;
}

export default function ExternalMentorForm({
  initialData,
  isEdit = false,
}: ExternalMentorFormProps) {
  const router = useRouter();
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [formData, setFormData] = useState({
    mentorId: initialData?.mentor.Mentor_id.toString() || "",
    organizationId: initialData?.Org_id?.toString() || "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchOrganizations();
    fetchMentors();
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

  const fetchMentors = async () => {
    try {
      const response = await fetch("/api/mentors");
      if (!response.ok) throw new Error("Failed to fetch mentors");
      const data = await response.json();
      setMentors(data);
    } catch (err) {
      console.error("Error fetching mentors:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `/api/external-mentors${
          isEdit ? `/${initialData?.Ext_Mentor_id}` : ""
        }`,
        {
          method: isEdit ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mentorId: parseInt(formData.mentorId),
            organizationId: formData.organizationId
              ? parseInt(formData.organizationId)
              : null,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to save external mentor");
      }

      router.push("/external-mentors");
      router.refresh();
    } catch (error) {
      console.error("Error saving external mentor:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to save external mentor. Please try again."
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
          htmlFor="mentorId"
          className="block text-sm font-medium text-gray-700"
        >
          Mentor
        </label>
        <select
          id="mentorId"
          value={formData.mentorId}
          onChange={(e) =>
            setFormData({ ...formData, mentorId: e.target.value })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
          disabled={isEdit}
        >
          <option value="">Select a mentor</option>
          {mentors.map((mentor) => (
            <option key={mentor.Mentor_id} value={mentor.Mentor_id}>
              {mentor.person.Name} ({mentor.person.Email})
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="organizationId"
          className="block text-sm font-medium text-gray-700"
        >
          Organization
        </label>
        <select
          id="organizationId"
          value={formData.organizationId}
          onChange={(e) =>
            setFormData({ ...formData, organizationId: e.target.value })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select an organization (optional)</option>
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
          {isSubmitting ? "Saving..." : isEdit ? "Update" : "Create"} External
          Mentor
        </button>
      </div>
    </form>
  );
}
