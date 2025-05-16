"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import EnrollForm from "@/app/components/EnrollForm";

interface Enroll {
  Student_id: number;
  Course_id: string;
}

export default function EditEnrollPage() {
  const params = useParams();
  const [enroll, setEnroll] = useState<Enroll | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEnroll = async () => {
      try {
        const response = await fetch(
          `/api/enrolls/${params.studentId}/${params.courseId}`
        );
        if (!response.ok) throw new Error("Failed to fetch enroll");
        const data = await response.json();
        setEnroll(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchEnroll();
  }, [params.studentId, params.courseId]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;
  if (!enroll) return <div className="p-8">Enroll not found</div>;

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Enroll</h1>
        <EnrollForm initialData={enroll} isEdit={true} />
      </div>
    </div>
  );
}
