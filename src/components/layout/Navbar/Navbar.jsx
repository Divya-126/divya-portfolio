import { useState } from "react";
import { Menu } from "lucide-react";

import Container from "../../ui/Container";
import Button from "../../ui/Button";
import useActiveSection from "../../../hooks/useActiveSection";
import NavbarLinks from "./NavbarLinks";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "../../ui/ThemeToggle/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeSection = useActiveSection();

  return (
    <>
      <header
        className={`
          fixed
          top-0
          left-0
          z-50
          w-full

          transition-all
          duration-500

          ${isOpen ? "pointer-events-none opacity-0" : "opacity-100"}
        `}
      >
        <Container>
          <nav
            className="
              relative
              flex
              h-20
              items-center
              justify-between

              px-4
              md:px-6
              lg:px-8

              border-b
              border-white/20
              dark:border-white/10

              bg-white/70
              dark:bg-slate-950/70

              backdrop-blur-2xl

              shadow-[0_8px_30px_rgb(0,0,0,0.05)]
            "
          >
            {/* Logo */}

            <a
              href="#home"
              className="
                flex
                items-center
                shrink-0
              "
            >
              <img
                src="/logo.webp"
                alt="Logo"
                className="
                  h-24
                  w-24

                  sm:h-28
                  sm:w-28

                  md:h-[140px]
                  md:w-[140px]

                  object-contain
                  select-none

                  transition-transform
                  duration-300

                  hover:scale-105
                "
              />
            </a>

            <NavbarLinks activeSection={activeSection} />

            <div className="flex items-center gap-10">
              {/* Theme Toggle */}

              <ThemeToggle />

              {/* Tablet + Desktop */}

              <div className="hidden md:block">
                <Button
                  onClick={() => window.open("/resume.pdf", "_blank")}
                  className="
                    bg-gradient-to-r
                    from-indigo-600
                    to-purple-600
                    cursor-pointer

                    shadow-lg
                    shadow-indigo-500/20
                  "
                  size="sm"
                >
                  Resume
                </Button>
              </div>

              {/* Mobile */}

              <button
                onClick={() => setIsOpen(true)}
                aria-label="Open Menu"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center

                  rounded-[10px]

                  border
                  border-slate-200
                  dark:border-slate-700

                  bg-white/80
                  dark:bg-slate-900/80

                  shadow-sm

                  transition-all
                  duration-300

                  hover:scale-105
                  hover:shadow-md

                  md:hidden
                "
              >
                <Menu
                  size={25}
                  className="
                    text-slate-800
                    dark:text-white
                  "
                />
              </button>
            </div>
          </nav>
        </Container>
      </header>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
};

export default Navbar;
