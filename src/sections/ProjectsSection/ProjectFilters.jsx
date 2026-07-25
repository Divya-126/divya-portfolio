const ProjectFilters = ({ categories, activeFilter, onFilterChange }) => {
  return (
    <div className="mb-16 flex justify-center px-4">
      <div
        className="
          max-w-full
          overflow-x-auto
          scrollbar-hide

          rounded-2xl
          border
          border-slate-200
          dark:border-white/10

          bg-white
          dark:bg-slate-900/70

          shadow-sm
          dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        "
      >
        <div
          className="
            inline-flex
            items-center
            gap-2
            p-2
            whitespace-nowrap
          "
        >
          {categories.map(({ name, count }) => {
            const isActive = activeFilter === name;

            return (
              <button
                key={name}
                onClick={() => onFilterChange(name)}
                className={`
                    flex
                    shrink-0
                    items-center
                    gap-2

                    rounded-xl

                    px-5
                    py-2.5

                    text-sm
                    font-medium

                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "bg-indigo-600 text-white shadow-md"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                    }
                  `}
              >
                <span>{name}</span>

                <span
                  className={`
                      flex
                      h-5
                      min-w-[20px]
                      items-center
                      justify-center

                      rounded-full
                      px-1.5

                      text-[10px]
                      font-semibold

                      ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                      }
                    `}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectFilters;
