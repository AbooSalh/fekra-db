"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

interface Employee {
  Employee_id: number;
  Salary: number | null;
  Position: string;
  person: {
    Person_id: number;
    Name: string;
    Email: string | null;
    Sex: string | null;
  };
}

export default function EmployeeViewPage() {
  const params = useParams();
  const router = useRouter();
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`/api/employees/${params.id}`);
        if (!response.ok) throw new Error("Failed to fetch employee");
        const data = await response.json();
        setEmployee(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [params.id]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;
  if (!employee) return <div className="p-8">Employee not found</div>;

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Employee Details</h1>
          <div className="space-x-4">
            <Link
              href={`/employees/${employee.Employee_id}/edit`}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Edit Employee
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
                  Employee ID
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {employee.Employee_id}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Name</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {employee.person.Name}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {employee.person.Email || "Not set"}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Sex</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {employee.person.Sex || "Not set"}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Position</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {employee.Position}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Salary</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {employee.Salary
                    ? `$${employee.Salary.toLocaleString()}`
                    : "Not set"}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
