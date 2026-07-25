import { CheckCircle2 } from "lucide-react";

const ProjectFeatures = ({ features }) => {
  return (
    <div className="mt-8 space-y-4">
      {features.map((feature) => (
        <div key={feature} className="flex items-center gap-3">
          <CheckCircle2 size={18} className="text-indigo-600" />

          <span className="text-slate-600">{feature}</span>
        </div>
      ))}
    </div>
  );
};

export default ProjectFeatures;
