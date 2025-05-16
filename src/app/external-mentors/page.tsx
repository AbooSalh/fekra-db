"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
  organization?: {
    Org_id: number;
    Name: string;
  };
}

export default function ExternalMentorsPage() {
  const [mentors, setMentors] = useState<ExternalMentor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMentors();
  }, []);

  const fetchMentors = async () => {
    try {
      const response = await fetch("/api/external-mentors");
      if (!response.ok) throw new Error("Failed to fetch external mentors");
      const data = await response.json();
      setMentors(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">External Mentors</h1>
          <Link
            href="/external-mentors/new"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Add New External Mentor
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mentor ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mentor Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mentor Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Organization
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mentors.map((mentor) => (
                <tr key={mentor.Ext_Mentor_id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {mentor.Ext_Mentor_id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {mentor.mentor.person.Name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {mentor.mentor.person.Email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {mentor.organization?.Name || "Not assigned"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link
                      href={`/external-mentors/${mentor.Ext_Mentor_id}`}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      View
                    </Link>
                    <Link
                      href={`/external-mentors/${mentor.Ext_Mentor_id}/edit`}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </Link>
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
