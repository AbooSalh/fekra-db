"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Organization {
  Org_id: number;
  Name: string;
  Contact_info: string;
  Approval_Status: string | null;
  Coordinator_id: number | null;
  coordinator?: {
    Name: string;
  };
}

export default function OrganizationsPage() {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<{
    message: string;
    results?: {
      success: number;
      failed: number;
      errors: string[];
    };
  } | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchOrganizations();
  }, []);

  const fetchOrganizations = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/auth/login");
        return;
      }

      const response = await fetch("/api/organizations", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("userRole");
          router.push("/auth/login");
          return;
        }
        throw new Error("Failed to fetch organizations");
      }

      const data = await response.json();
      setOrganizations(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/auth/login");
        return;
      }

      const response = await fetch("/api/organizations/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to upload file");
      }

      setUploadStatus(data);
      // Refresh the organizations list
      fetchOrganizations();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to upload file");
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Organizations</h1>
          <div className="flex items-center space-x-4">
            <Link
              href="/organizations/new"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Add New Organization
            </Link>

            {/* CSV Upload Section */}
            <div className="flex items-center space-x-4">
              <label className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 cursor-pointer">
                Upload CSV
                <input
                  type="file"
                  accept=".csv"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </label>
              <a
                href="/templates/organizations.csv"
                download
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Download Template
              </a>
            </div>
          </div>
        </div>

        {/* Upload Status */}
        {uploadStatus && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <p className="font-medium text-gray-900">{uploadStatus.message}</p>
            {uploadStatus.results && (
              <div className="mt-2 text-sm text-gray-600">
                <p>Successfully imported: {uploadStatus.results.success}</p>
                <p>Failed to import: {uploadStatus.results.failed}</p>
                {uploadStatus.results.errors.length > 0 && (
                  <div className="mt-2">
                    <p className="font-medium">Errors:</p>
                    <ul className="list-disc list-inside">
                      {uploadStatus.results.errors.map((error, index) => (
                        <li key={index} className="text-red-600">
                          {error}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  Contact Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  Approval Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  Coordinator
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {organizations.map((org) => (
                <tr key={org.Org_id}>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                    {org.Name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                    {org.Contact_info}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        org.Approval_Status === "Approved"
                          ? "bg-green-100 text-green-800"
                          : org.Approval_Status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {org.Approval_Status || "Not Set"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                    {org.coordinator?.Name || "Not assigned"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <Link
                      href={`/organizations/${org.Org_id}`}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      View
                    </Link>
                    <Link
                      href={`/organizations/${org.Org_id}/edit`}
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
