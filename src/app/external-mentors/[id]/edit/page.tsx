"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ExternalMentorForm from "@/app/components/ExternalMentorForm";

interface ExternalMentor {
  Ext_Mentor_id: number;
  Org_id: number | null;
  mentor: {
    Mentor_id: number;
    person: {
      Name: string;
      Email: string;
    };
  };
}

export default function EditExternalMentorPage() {
  const params = useParams();
  const [mentor, setMentor] = useState<ExternalMentor | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMentor = async () => {
      try {
        const response = await fetch(`/api/external-mentors/${params.id}`);
        if (!response.ok) throw new Error("Failed to fetch external mentor");
        const data = await response.json();
        setMentor(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchMentor();
  }, [params.id]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;
  if (!mentor) return <div className="p-8">External mentor not found</div>;

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Edit External Mentor
        </h1>
        <ExternalMentorForm initialData={mentor} isEdit={true} />
      </div>
    </div>
  );
}
