"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

interface Evaluation {
  Evaluation_id: number;
  Grade: string | null;
  student?: {
    Student_id: number;
    person: {
      Name: string;
      Email: string;
    };
  };
}

export default function EvaluationViewPage() {
  const params = useParams();
  const router = useRouter();
  const [evaluation, setEvaluation] = useState<Evaluation | null>(null);
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
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Evaluation Details
          </h1>
          <div className="space-x-4">
            <Link
              href={`/evaluations/${evaluation.Evaluation_id}/edit`}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Edit Evaluation
            </Link>
            <button
              onClick={() => router.back()}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
            >
              Back
            </button>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  Evaluation ID
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {evaluation.Evaluation_id}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Grade</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {evaluation.Grade || "Not graded"}
                </dd>
              </div>
              {evaluation.student && (
                <>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Student Name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {evaluation.student.person.Name}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Student Email
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {evaluation.student.person.Email}
                    </dd>
                  </div>
                </>
              )}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
