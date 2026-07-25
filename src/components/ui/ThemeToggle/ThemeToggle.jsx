import { Moon, Sun } from "lucide-react";

import { useTheme } from "../../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        relative
        flex
        h-11
        w-11
        items-center
        justify-center

        rounded-2xl

        border
        border-white/20

        bg-white/80
        dark:bg-slate-900/80

        backdrop-blur-xl

        shadow-lg

        transition-all
        duration-300

        hover:scale-105
      "
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun
          size={20}
          className="
            text-yellow-400
          "
        />
      ) : (
        <Moon
          size={20}
          className="
            text-slate-700
          "
        />
      )}
    </button>
  );
};

export default ThemeToggle;
