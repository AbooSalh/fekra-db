import EnrollForm from "@/app/components/EnrollForm";

export default function NewEnrollPage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Add New Enroll
        </h1>
        <EnrollForm />
      </div>
    </div>
  );
}
