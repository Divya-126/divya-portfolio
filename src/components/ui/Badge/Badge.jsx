const Badge = ({ children, className = "", variant = "primary" }) => {
  const variants = {
    primary: "bg-indigo-100 text-indigo-700 border border-indigo-200",

    secondary: "bg-slate-100 text-slate-700 border border-slate-200",

    success: "bg-emerald-100 text-emerald-700 border border-emerald-200",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-4
        py-2
        text-sm
        font-medium
        transition-all
        duration-300

        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;
