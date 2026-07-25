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
          <li key={link.id} className="relative">
            <a
              href={link.href}
              className={`
                  relative

                  px-1
                  py-1

                text-[15px]
              

                  font-medium
                  tracking-wide

                  transition-all
                  duration-300z

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

              <motion.span
                className="
                    absolute
                    -bottom-3
                    left-0

                    h-1
                    rounded-full

                    bg-gradient-to-r
                    from-indigo-500
                    via-purple-500
                    to-cyan-500
                  "
                animate={{
                  width: isActive ? "100%" : "0%",
                  opacity: isActive ? 1 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 28,
                  mass: 0.8,
                }}
              />
            </a>
          </li>
        );
      })}
    </motion.ul>
  );
};

export default NavbarLinks;
