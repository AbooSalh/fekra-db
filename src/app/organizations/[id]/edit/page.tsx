"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import OrganizationForm from "@/app/components/OrganizationForm";

export default function EditOrganizationPage() {
  const params = useParams();
  const [organization, setOrganization] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrganization = async () => {
      try {
        const response = await fetch(`/api/organizations/${params.id}`);
        if (!response.ok) throw new Error("Failed to fetch organization");
        const data = await response.json();
        setOrganization(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchOrganization();
  }, [params.id]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;
  if (!organization) return <div className="p-8">Organization not found</div>;

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Edit Organization
        </h1>
        <OrganizationForm initialData={organization} isEdit />
      </div>
    </div>
  );
}
