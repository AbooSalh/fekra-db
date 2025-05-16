"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Person {
  Person_id: number;
  Name: string;
  Email: string | null;
  Sex: string | null;
}

interface EmployeeFormProps {
  initialData?: {
    Employee_id: number;
    Salary: number | null;
    Position: string;
    person: Person;
  };
  isEdit?: boolean;
}

export default function EmployeeForm({
  initialData,
  isEdit = false,
}: EmployeeFormProps) {
  const router = useRouter();
  const [persons, setPersons] = useState<Person[]>([]);
  const [formData, setFormData] = useState({
    personId: initialData?.Employee_id?.toString() || "",
    position: initialData?.Position || "",
    salary: initialData?.Salary?.toString() || "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchPersons();
  }, []);

  const fetchPersons = async () => {
    try {
      const response = await fetch("/api/persons");
      if (!response.ok) throw new Error("Failed to fetch persons");
      const data = await response.json();
      setPersons(data);
    } catch (err) {
      console.error("Error fetching persons:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `/api/employees${isEdit ? `/${initialData?.Employee_id}` : ""}`,
        {
          method: isEdit ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            personId: parseInt(formData.personId),
            position: formData.position,
            salary: formData.salary ? parseInt(formData.salary) : null,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to save employee");
      }

      router.push("/employees");
      router.refresh();
    } catch (error) {
      console.error("Error saving employee:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to save employee. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-6">
      {error && (
        <div
          className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      <div>
        <label
          htmlFor="personId"
          className="block text-sm font-medium text-gray-700"
        >
          Person
        </label>
        <select
          id="personId"
          value={formData.personId}
          onChange={(e) =>
            setFormData({ ...formData, personId: e.target.value })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
          disabled={isEdit}
        >
          <option value="">Select a person</option>
          {persons.map((person) => (
            <option key={person.Person_id} value={person.Person_id}>
              {person.Name} {person.Email ? `(${person.Email})` : ""}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="position"
          className="block text-sm font-medium text-gray-700"
        >
          Position
        </label>
        <input
          type="text"
          id="position"
          value={formData.position}
          onChange={(e) =>
            setFormData({ ...formData, position: e.target.value })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="salary"
          className="block text-sm font-medium text-gray-700"
        >
          Salary
        </label>
        <input
          type="number"
          id="salary"
          value={formData.salary}
          onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter salary (optional)"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          disabled={isSubmitting}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : isEdit ? "Update" : "Create"} Employee
        </button>
      </div>
    </form>
  );
}
