import MentorForm from "@/app/components/MentorForm";

export default function NewMentorPage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Add New Mentor
        </h1>
        <MentorForm />
      </div>
    </div>
  );
}
