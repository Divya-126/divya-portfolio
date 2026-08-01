import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import navigationLinks from "../../../constants/navigationLinks";
import NavItem from "./NavItem";

const MobileMenu = ({ isOpen, onClose, activeSection }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
  fixed
  left-4
  right-4
  top-24
  z-50
  mx-auto
  max-w-md

  rounded-3xl
  border
  border-slate-200

  bg-white/95

  p-5

  shadow-2xl
  backdrop-blur-xl

  lg:hidden
"
          />

          {/* Floating Menu */}
          <motion.div
            initial={{
              opacity: 0,
              y: -12,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -12,
              scale: 0.96,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed
              left-4
              right-4
              top-24
              z-50
              mx-auto
              max-w-md

              rounded-3xl
              border
              border-slate-200

              bg-white/95

              p-5

              shadow-2xl
              backdrop-blur-xl

              lg:hidden
            "
          >
            {/* Header */}

            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg font-semibold">Navigation</span>

              <button
                onClick={onClose}
                className="
                  rounded-lg
          
                  p-2
                  transition
                 bg-red-500
                "
              >
                <X size={22} color="black" />
              </button>
            </div>

            {/* Links */}

            <nav className="space-y-2">
              {navigationLinks.map((link) => {
                const sectionId = link.href.replace("#", "");

                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={onClose}
                    className={`
                        flex
                        items-center
                        justify-between

                        rounded-2xl

                        px-4
                        py-3

                        text-base
                        font-medium

                        transition-all
                        duration-300

                        ${
                          isActive
                            ? `
                              bg-indigo-50
                              text-indigo-600
                              shadow-sm
                            `
                            : `
                              text-slate-700
                              hover:bg-slate-100
                            `
                        }
                      `}
                  >
                    {link.label}

                    {isActive && (
                      <motion.div
                        layoutId="mobile-indicator"
                        className="
                            h-2.5
                            w-2.5
                            rounded-full
                            bg-indigo-600
                          "
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Divider */}

            <div className="my-5 h-px bg-slate-200" />

            {/* Resume */}

            <button
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2

                rounded-2xl

                bg-indigo-600

                px-4
                py-3

                font-medium
                text-white

                transition
                duration-300

                hover:bg-indigo-700
              "
            >
              View Resume
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
