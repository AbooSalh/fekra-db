import EnrollmentForm from "@/app/components/EnrollmentForm";

export default function NewEnrollmentPage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Add New Enrollment
        </h1>
        <EnrollmentForm />
      </div>
    </div>
  );
}
