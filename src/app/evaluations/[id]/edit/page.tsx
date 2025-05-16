"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import EvaluationForm from "@/app/components/EvaluationForm";

export default function EditEvaluationPage() {
  const params = useParams();
  const [evaluation, setEvaluation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvaluation = async () => {
      try {
        const response = await fetch(`/api/evaluations/${params.id}`);
        if (!response.ok) throw new Error("Failed to fetch evaluation");
        const data = await response.json();
        setEvaluation(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchEvaluation();
  }, [params.id]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;
  if (!evaluation) return <div className="p-8">Evaluation not found</div>;

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Edit Evaluation
        </h1>
        <EvaluationForm initialData={evaluation} isEdit />
      </div>
    </div>
  );
}
