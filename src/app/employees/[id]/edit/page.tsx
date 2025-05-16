"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import EmployeeForm from "@/app/components/EmployeeForm";

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

export default function EditEmployeePage() {
  const params = useParams();
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
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Employee</h1>
        <EmployeeForm initialData={employee} isEdit={true} />
      </div>
    </div>
  );
}
