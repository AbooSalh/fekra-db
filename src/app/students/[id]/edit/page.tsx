"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import StudentForm from "@/app/components/StudentForm";

export default function EditStudentPage() {
  const params = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await fetch(`/api/students/${params.id}`);
        if (!response.ok) throw new Error("Failed to fetch student");
        const data = await response.json();
        setStudent(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [params.id]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;
  if (!student) return <div className="p-8">Student not found</div>;

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Student</h1>
        <StudentForm initialData={student} isEdit />
      </div>
    </div>
  );
}
