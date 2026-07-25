import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { SiGmail } from "react-icons/si";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/Divya-126",
    label: "Github",

    bg: "bg-slate-100",
    text: "text-slate-800",

    hover: "hover:bg-slate-900 hover:text-white hover:border-slate-900",
  },

  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/divya-dhote-029b46309",
    label: "LinkedIn",

    bg: "bg-blue-50",
    text: "text-[#0077B5]",

    hover: "hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5]",
  },

  {
    icon: SiGmail,
    href: "mailto:divyadhote126@gmail.com",
    label: "Email",

    bg: "bg-red-50",
    text: "text-red-500",

    hover: "hover:bg-red-500 hover:text-white hover:border-red-500",
  },
];

const FooterSocials = () => {
  return (
    <div
      className="
    flex
    justify-center
    gap-4

    md:hidden
  "
    >
      {socials.map(({ icon: Icon, href, label, bg, text, hover }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`
              group

              flex
              h-14
              w-14

              sm:h-16
              sm:w-16

              items-center
              justify-center

              rounded-2xl

              border
              border-white/50

              shadow-md
              shadow-slate-200/60

              backdrop-blur-sm

              transition-all
              duration-300

              active:scale-95

              sm:hover:-translate-y-2
              sm:hover:scale-105
              sm:hover:shadow-xl

              ${bg}
              ${text}
              ${hover}
            `}
        >
          <Icon
            size={24}
            className="
                transition-transform
                duration-300

                sm:group-hover:scale-110
              "
          />
        </a>
      ))}
    </div>
  );
};

export default FooterSocials;
