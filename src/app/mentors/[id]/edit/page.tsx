"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import MentorForm from "@/app/components/MentorForm";

export default function EditMentorPage() {
  const params = useParams();
  const [mentor, setMentor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMentor = async () => {
      try {
        const response = await fetch(`/api/mentors/${params.id}`);
        if (!response.ok) throw new Error("Failed to fetch mentor");
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
  if (!mentor) return <div className="p-8">Mentor not found</div>;

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Mentor</h1>
        <MentorForm initialData={mentor} isEdit />
      </div>
    </div>
  );
}
