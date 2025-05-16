"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
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
    Contact_info: string;
  };
}

export default function ExternalMentorViewPage() {
  const params = useParams();
  const router = useRouter();
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
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            External Mentor Details
          </h1>
          <div className="space-x-4">
            <Link
              href={`/external-mentors/${mentor.Ext_Mentor_id}/edit`}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Edit External Mentor
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
                  External Mentor ID
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {mentor.Ext_Mentor_id}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Mentor ID</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {mentor.mentor.Mentor_id}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  Mentor Name
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {mentor.mentor.person.Name}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  Mentor Email
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {mentor.mentor.person.Email}
                </dd>
              </div>
              {mentor.organization && (
                <>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Organization Name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {mentor.organization.Name}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Organization Contact
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {mentor.organization.Contact_info}
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
