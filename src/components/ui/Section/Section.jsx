import clsx from "clsx";

const backgroundVariants = {
  transparent: "bg-transparent",

  default: "bg-[var(--color-background)]",

  surface: "bg-[var(--color-surface)]",

  dark: "bg-slate-950 text-white",
};

const Section = ({
  children,
  id,
  className,
  background = "default",
  as: Component = "section",
}) => {
  return (
    <Component
      id={id}
      className={clsx(
        "py-20 sm:py-24 lg:py-32",
        backgroundVariants[background],
        className,
      )}
    >
      {children}
    </Component>
  );
};

export default Section;
