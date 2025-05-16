import InternalMentorForm from "@/app/components/InternalMentorForm";

export default function NewInternalMentorPage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Add New Internal Mentor
        </h1>
        <InternalMentorForm />
      </div>
    </div>
  );
}
