import clsx from "clsx";

const Heading = ({
  badge,
  title,
  description,
  align = "center",
  className = "",
}) => {
  return (
    <div
      className={clsx(
        "mb-14",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className,
      )}
    >
      {badge && (
        <span className="mb-4 inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          {badge}
        </span>
      )}

      <h2 className="mt-4 text-3xl font-bold leading-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};

export default Heading;
