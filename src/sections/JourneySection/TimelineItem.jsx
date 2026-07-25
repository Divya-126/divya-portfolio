import { GraduationCap } from "lucide-react";

const TimelineItem = ({ item }) => {
  return (
    <div className="relative flex gap-4 md:gap-8">
      {/* Timeline Dot */}
      <div
        className="
          relative
          z-10

          flex
          shrink-0
          items-center
          justify-center

          h-10
          w-10
          md:h-12
          md:w-12

          rounded-full

          bg-gradient-to-br
          from-indigo-500
          via-violet-500
          to-cyan-500

          shadow-lg
          shadow-indigo-500/25
        "
      >
        <GraduationCap size={18} className="text-white" />
      </div>

      {/* Card */}
      <div
        className="
          flex-1

          rounded-3xl

          border
          border-slate-200
          dark:border-white/10

          bg-white
          dark:bg-slate-900/70

          p-6

          backdrop-blur-xl

          shadow-sm
          dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]

          transition-all
          duration-500

          hover:-translate-y-1

          hover:border-indigo-300
          dark:hover:border-indigo-500/30

          hover:shadow-xl
        "
      >
        <span
          className="
            text-sm
            font-semibold

            text-indigo-600
            dark:text-indigo-300
          "
        >
          {item.year}
        </span>

        <h3
          className="
            mt-2

            text-2xl
            font-bold

            text-slate-900
            dark:text-white
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-1
            font-medium

            text-slate-500
            dark:text-slate-400
          "
        >
          {item.subtitle}
        </p>

        <p
          className="
            mt-4
            leading-7

            text-slate-600
            dark:text-slate-400
          "
        >
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;
