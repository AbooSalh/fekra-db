import EvaluationForm from "@/app/components/EvaluationForm";

export default function NewEvaluationPage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Add New Evaluation
        </h1>
        <EvaluationForm />
      </div>
    </div>
  );
}
