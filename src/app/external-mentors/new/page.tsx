import ExternalMentorForm from "@/app/components/ExternalMentorForm";

export default function NewExternalMentorPage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Add New External Mentor
        </h1>
        <ExternalMentorForm />
      </div>
    </div>
  );
}
