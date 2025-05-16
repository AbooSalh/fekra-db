"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import EnrollmentForm from "@/app/components/EnrollmentForm";

interface Enrollment {
  Enrollment_id: number;
  Student_id: number | null;
  Course_id: string | null;
  Semester: string | null;
  Final_grade: string | null;
  Coordinator_id: number | null;
}

export default function EditEnrollmentPage() {
  const params = useParams();
  const [enrollment, setEnrollment] = useState<Enrollment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEnrollment = async () => {
      try {
        const response = await fetch(`/api/enrollments/${params.id}`);
        if (!response.ok) throw new Error("Failed to fetch enrollment");
        const data = await response.json();
        setEnrollment(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchEnrollment();
  }, [params.id]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;
  if (!enrollment) return <div className="p-8">Enrollment not found</div>;

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Edit Enrollment
        </h1>
        <EnrollmentForm initialData={enrollment} isEdit={true} />
      </div>
    </div>
  );
}
