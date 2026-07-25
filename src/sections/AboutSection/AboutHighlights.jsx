import { CheckCircle2 } from "lucide-react";
import personalData from "../../data/personalData";

const AboutHighlights = () => {
  return (
    <div>
      <h4 className="mb-6 text-2xl font-semibold text-slate-900">What I Do</h4>

      <div className="grid gap-4 sm:grid-cols-2">
        {personalData.highlights.map((item) => (
          <div
            key={item}
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-4
              transition-all
              duration-300
              hover:border-indigo-300
              hover:shadow-md
            "
          >
            <CheckCircle2 size={20} className="text-indigo-600" />

            <span className="font-medium text-slate-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutHighlights;
