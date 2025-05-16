"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import FieldCourseForm from "@/app/components/FieldCourseForm";

export default function EditFieldCoursePage() {
  const params = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`/api/fieldt-courses/${params.id}`);
        if (!response.ok) throw new Error("Failed to fetch course");
        const data = await response.json();
        setCourse(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [params.id]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;
  if (!course) return <div className="p-8">Course not found</div>;

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Edit Field Course
        </h1>
        <FieldCourseForm initialData={course} isEdit />
      </div>
    </div>
  );
}
