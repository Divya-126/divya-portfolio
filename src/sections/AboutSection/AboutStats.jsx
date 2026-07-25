import statsData from "../../data/statsData";

const AboutStats = () => {
  return (
    <div className="mt-20">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="
              group
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-8
              text-center
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-indigo-200
              hover:shadow-xl
            "
          >
            <h3 className={`text-4xl font-bold ${stat.color}`}>{stat.value}</h3>

            <p className="mt-3 text-slate-600 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutStats;
