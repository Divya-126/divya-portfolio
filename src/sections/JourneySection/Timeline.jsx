import journeyData from "../../data/journeyData";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  return (
    <div className="relative mx-auto mt-20 max-w-4xl">
      {/* Center Line */}
      <div
        className="
          absolute
          left-5
          top-0

          h-full
          w-1

          rounded-full

          bg-slate-200
          dark:bg-slate-700

          transition-colors
          duration-500
        "
      />

      <div className="space-y-12">
        {journeyData.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
