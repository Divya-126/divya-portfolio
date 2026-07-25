const ContactCard = ({ icon, title, value, href }) => {
  const CardWrapper = href ? "a" : "div";

  return (
    <CardWrapper
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className="
        group
        block

        rounded-2xl
        border
        border-slate-200

        bg-white

        p-6

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-indigo-300
        hover:shadow-xl
      "
    >
      {/* Icon */}
      <div
        className="
          mb-5

          flex
          h-14
          w-14
          items-center
          justify-center

          rounded-2xl

          bg-indigo-50

          text-indigo-600

          transition-colors
          duration-300

          group-hover:bg-indigo-600
          group-hover:text-white
        "
      >
        {icon}
      </div>

      {/* Title */}

      <h3
        className="
          text-lg
          font-semibold
          text-slate-900
        "
      >
        {title}
      </h3>

      {/* Value */}

      <p
        className="
          mt-2

          break-all

          text-sm
          leading-7

          text-slate-500
        "
      >
        {value}
      </p>
    </CardWrapper>
  );
};

export default ContactCard;
