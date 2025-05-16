import FieldCourseForm from "@/app/components/FieldCourseForm";

export default function NewFieldCoursePage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Add New Field Course
        </h1>
        <FieldCourseForm />
      </div>
    </div>
  );
}
