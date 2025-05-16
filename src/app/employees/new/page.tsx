import EmployeeForm from "@/app/components/EmployeeForm";

export default function NewEmployeePage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Add New Employee
        </h1>
        <EmployeeForm />
      </div>
    </div>
  );
}
