"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Coordinator {
  Coordinator_id: number;
  Name: string;
}

interface OrganizationFormProps {
  initialData?: {
    Org_id: number;
    Name: string;
    Contact_info: string;
    Approval_Status: string | null;
    Coordinator_id: number | null;
  };
  isEdit?: boolean;
}

export default function OrganizationForm({
  initialData,
  isEdit = false,
}: OrganizationFormProps) {
  const router = useRouter();
  const [coordinators, setCoordinators] = useState<Coordinator[]>([]);
  const [formData, setFormData] = useState({
    name: initialData?.Name || "",
    contactInfo: initialData?.Contact_info || "",
    approvalStatus: initialData?.Approval_Status || "",
    coordinatorId: initialData?.Coordinator_id?.toString() || "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchCoordinators();
  }, []);

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
      const requestBody = {
        Name: formData.name,
        Contact_info: formData.contactInfo,
        Approval_Status: formData.approvalStatus || null,
        Coordinator_id: formData.coordinatorId
          ? parseInt(formData.coordinatorId)
          : null,
      };

      const response = await fetch(
        `/api/organizations${isEdit ? `/${initialData?.Org_id}` : ""}`,
        {
          method: isEdit ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to save organization");
      }

      router.push("/organizations");
      router.refresh();
    } catch (error) {
      console.error("Error saving organization:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to save organization. Please try again."
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
          Organization Name
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
          htmlFor="contactInfo"
          className="block text-sm font-medium text-gray-700"
        >
          Contact Information
        </label>
        <input
          type="text"
          id="contactInfo"
          value={formData.contactInfo}
          onChange={(e) =>
            setFormData({ ...formData, contactInfo: e.target.value })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="approvalStatus"
          className="block text-sm font-medium text-gray-700"
        >
          Approval Status
        </label>
        <select
          id="approvalStatus"
          value={formData.approvalStatus}
          onChange={(e) =>
            setFormData({ ...formData, approvalStatus: e.target.value })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select status</option>
          <option value="Approved">Approved</option>
          <option value="Pending">Pending</option>
          <option value="Rejected">Rejected</option>
        </select>
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
          <option value="">Select a coordinator</option>
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
          {isSubmitting ? "Saving..." : isEdit ? "Update" : "Create"}{" "}
          Organization
        </button>
      </div>
    </form>
  );
}
