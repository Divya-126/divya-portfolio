import { motion } from "framer-motion";
import navigationLinks from "../../../constants/navigationLinks";

const NavbarLinks = ({ activeSection }) => {
  return (
    <motion.ul
      layout
      className="
        hidden
        md:flex

        items-center

        gap-4
        lg:gap-6
        xl:gap-8
      "
    >
      {navigationLinks.map((link) => {
        const sectionId = link.href.replace("#", "");

        const isActive = activeSection === sectionId;

        return (
          <li key={link.id}>
            <a
              href={link.href}
              className={`
                group
                relative

                px-1
                py-1

                text-[15px]
                font-medium
                tracking-wide

                transition-all
                duration-300

                ${
                  isActive
                    ? `
                      text-indigo-600
                      drop-shadow-[0_0_12px_rgba(99,102,241,0.35)]
                    `
                    : `
                      text-slate-700
                      hover:text-indigo-600
                    `
                }
              `}
            >
              {link.label}

              {/* Animated Underline */}

              <span
                className={`
                  absolute
                  left-0
                  -bottom-3

                  h-[3px]

                  rounded-full

                  bg-gradient-to-r
                  from-indigo-500
                  via-purple-500
                  to-cyan-500

                  transition-all
                  duration-300
                  ease-out

                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                `}
              />
            </a>
          </li>
        );
      })}
    </motion.ul>
  );
};

export default NavbarLinks;
