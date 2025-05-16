"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PersonForm from "@/app/components/PersonForm";

interface Person {
  Person_id: number;
  Name: string;
  Email: string | null;
  Sex: string | null;
}

export default function EditPersonPage() {
  const params = useParams();
  const [person, setPerson] = useState<Person | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const response = await fetch(`/api/persons/${params.id}`);
        if (!response.ok) throw new Error("Failed to fetch person");
        const data = await response.json();
        setPerson(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPerson();
  }, [params.id]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;
  if (!person) return <div className="p-8">Person not found</div>;

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Person</h1>
        <PersonForm initialData={person} isEdit={true} />
      </div>
    </div>
  );
}
