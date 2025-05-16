"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Evaluation {
  courseId: string;
  courseName: string;
  semester: string;
  evaluationId: number | null;
  grade: string | null;
  evaluationDate: string | null;
}

export default function StudentEvaluationsPage() {
  const router = useRouter();
  const [evaluations, setEvaluations] = useState<Evaluation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvaluations = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          router.push("/auth/login");
          return;
        }

        const response = await fetch("/api/students/evaluations", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          if (response.status === 401) {
            router.push("/auth/login");
            return;
          }
          throw new Error("Failed to fetch evaluations");
        }

        const data = await response.json();
        setEvaluations(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchEvaluations();
  }, [router]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          My Evaluations
        </h1>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  Course Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  Course ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  Semester
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  Grade
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  Evaluation Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {evaluations.map((evaluation, index) => (
                <tr key={evaluation.evaluationId || index}>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                    {evaluation.courseName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                    {evaluation.courseId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                    {evaluation.semester}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                    {evaluation.grade || "Not graded"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                    {evaluation.evaluationDate
                      ? new Date(evaluation.evaluationDate).toLocaleDateString()
                      : "Not evaluated"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
