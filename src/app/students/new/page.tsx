import StudentForm from "@/app/components/StudentForm";

export default function NewStudentPage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Add New Student
        </h1>
        <StudentForm />
      </div>
    </div>
  );
}
