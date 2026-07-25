const SectionHeader = ({ badge, title, subtitle, align = "center" }) => {
  const alignment = {
    center: "items-center text-center",
    left: "items-start text-left",
  };

  return (
    <div
      className={`
        mb-16
        flex
        flex-col
        gap-5
        ${alignment[align]}
      `}
    >
      {/* Badge */}

      <span
        className="
          inline-flex
          w-fit
          rounded-full
          border

          border-indigo-200
          dark:border-indigo-500/20

          bg-indigo-50
          dark:bg-indigo-500/10

          px-5
          py-2

          text-sm
          font-semibold
          uppercase
          tracking-[0.15em]

          text-indigo-600
          dark:text-indigo-300
        "
      >
        {badge}
      </span>

      {/* Title */}

      <h2
        className="
          mt-5

          font-bold
          tracking-tight

          text-slate-900
          dark:text-white

          lg:text-5xl
          md:text-4xl
          text-3xl
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="
            max-w-3xl

            text-lg
            leading-8

            text-slate-600
            dark:text-slate-400
          "
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
