"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

interface Organization {
  Org_id: number;
  Name: string;
  Contact_info: string;
  Approval_Status: string | null;
  coordinator?: {
    Name: string;
  };
  fieldt_course?: {
    Course_id: string;
    Name: string;
    Duration: string;
  }[];
}

export default function OrganizationViewPage() {
  const params = useParams();
  const router = useRouter();
  const [organization, setOrganization] = useState<Organization | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrganization = async () => {
      try {
        const response = await fetch(`/api/organizations/${params.id}`);
        if (!response.ok) throw new Error("Failed to fetch organization");
        const data = await response.json();
        setOrganization(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchOrganization();
  }, [params.id]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;
  if (!organization) return <div className="p-8">Organization not found</div>;

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Organization Details
          </h1>
          <div className="space-x-4">
            <Link
              href={`/organizations/${organization.Org_id}/edit`}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Edit Organization
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
                <dt className="text-sm font-medium text-gray-500">Name</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {organization.Name}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  Contact Information
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {organization.Contact_info}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  Approval Status
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      organization.Approval_Status === "Approved"
                        ? "bg-green-100 text-green-800"
                        : organization.Approval_Status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {organization.Approval_Status || "Not Set"}
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">
                  Coordinator
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {organization.coordinator?.Name || "Not assigned"}
                </dd>
              </div>
            </dl>

            {organization.fieldt_course &&
              organization.fieldt_course.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">
                    Courses
                  </h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {organization.fieldt_course.map((course) => (
                      <div
                        key={course.Course_id}
                        className="bg-gray-50 p-4 rounded-lg"
                      >
                        <h3 className="text-sm font-medium text-gray-900">
                          {course.Name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Duration: {course.Duration}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
