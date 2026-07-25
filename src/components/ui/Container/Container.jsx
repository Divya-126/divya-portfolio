import clsx from "clsx";

const Container = ({ children, className, as: Component = "div" }) => {
  return (
    <Component
      className={clsx(
        `
        mx-auto
        w-full
        max-w-7xl

        px-4
        sm:px-5
        md:px-6
        lg:px-8
        xl:px-10
        `,
        className,
      )}
    >
      {children}
    </Component>
  );
};

export default Container;
