import clsx from "clsx";

const variants = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",

  secondary:
    "border border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500",

  ghost: "text-slate-700 hover:bg-slate-100 focus:ring-slate-400",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  fullWidth = false,
  className = "",
  leftIcon,
  rightIcon,
  href,
  target,
  rel,
  ...props
}) => {
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:opacity-50",
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className,
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} {...props}>
        {leftIcon}
        <span>{children}</span>
        {rightIcon}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes} {...props}>
      {leftIcon}
      <span>{children}</span>
      {rightIcon}
    </button>
  );
};

export default Button;
