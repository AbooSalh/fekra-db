import OrganizationForm from "@/app/components/OrganizationForm";

export default function NewOrganizationPage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Add New Organization
        </h1>
        <OrganizationForm />
      </div>
    </div>
  );
}
