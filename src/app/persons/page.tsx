"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Person {
  Person_id: number;
  Name: string;
  Email: string | null;
  Sex: string | null;
  role?: string;
}

const roleOptions = [
  { value: "", label: "All" },
  { value: "student", label: "Student" },
  { value: "mentor", label: "Mentor" },
  { value: "coordinator", label: "Coordinator" },
  { value: "employee", label: "Employee" },
];

export default function PersonsPage() {
  const [persons, setPersons] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [role, setRole] = useState("");

  useEffect(() => {
    fetchPersons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role]);

  const fetchPersons = async () => {
    setLoading(true);
    setError(null);
    try {
      const url = role ? `/api/persons?role=${role}` : "/api/persons";
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch persons");
      const data = await response.json();
      setPersons(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Persons</h1>
          <div>
            <label htmlFor="role" className="mr-2 font-medium text-gray-700">
              Filter by Role:
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            >
              {roleOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className="text-red-500">Error: {error}</div>
        ) : (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                    Sex
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {persons.map((person) => (
                  <tr key={person.Person_id}>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                      {person.Person_id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                      {person.Name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                      {person.Email || "No email"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                      {person.Sex || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                      {person.role
                        ? person.role.charAt(0).toUpperCase() +
                          person.role.slice(1)
                        : "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <Link
                        href={`/persons/${person.Person_id}`}
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        View
                      </Link>
                      <Link
                        href={`/persons/${person.Person_id}/edit`}
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
        )}
      </div>
    </div>
  );
}
