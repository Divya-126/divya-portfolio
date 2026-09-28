import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import navigationLinks from "../../../constants/navigationLinks";

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
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="
              fixed
              inset-0
              z-40
              bg-black/50
              backdrop-blur-sm
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
              duration: 0.2,
              ease: [0.22, 1, 0.36, 1],
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
              border-slate-200/80
              dark:border-white/10

              bg-white/95
              dark:bg-slate-900/95

              p-5

              shadow-2xl
              backdrop-blur-md

              transform-gpu
              lg:hidden
            "
          >
            {/* Header */}

            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg font-semibold text-slate-900 dark:text-white">
                Navigation
              </span>

              <button
                onClick={onClose}
                aria-label="Close Menu"
                className="
                  rounded-xl
                  p-2
                  transition-colors
                  duration-200
                  bg-slate-100
                  dark:bg-slate-800
                  text-slate-700
                  dark:text-slate-300
                  hover:bg-slate-200
                  dark:hover:bg-slate-700
                "
              >
                <X size={20} />
              </button>
            </div>

            {/* Links */}

            <nav className="space-y-1.5">
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

                      transition-colors
                      duration-200

                      ${
                        isActive
                          ? `
                            bg-indigo-50
                            dark:bg-indigo-500/15
                            text-indigo-600
                            dark:text-indigo-300
                            shadow-sm
                          `
                          : `
                            text-slate-700
                            dark:text-slate-300
                            hover:bg-slate-100
                            dark:hover:bg-slate-800/60
                          `
                      }
                    `}
                  >
                    {link.label}

                    {isActive && (
                      <div
                        className="
                          h-2.5
                          w-2.5
                          rounded-full
                          bg-indigo-600
                          dark:bg-indigo-400
                        "
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Divider */}

            <div className="my-4 h-px bg-slate-200/80 dark:bg-white/10" />

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

                transition-colors
                duration-200

                hover:bg-indigo-700
                shadow-md
                shadow-indigo-500/25
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
