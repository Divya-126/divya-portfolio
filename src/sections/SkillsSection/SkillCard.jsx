import { motion } from "framer-motion";
import { skillIcons } from "../../constants/skillIcons";

const SkillCard = ({ skill, onClick }) => {
  const skillInfo = skillIcons[skill.name];

  const Icon = skillInfo?.icon;

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width:768px)").matches;

  return (
    <motion.div
      onClick={onClick}
      variants={{
        hidden: {
          opacity: 0,
          y: isMobile ? 16 : 30,
          scale: isMobile ? 0.95 : 0.92,
        },

        show: {
          opacity: 1,
          y: 0,
          scale: 1,
        },
      }}
      transition={{
        duration: isMobile ? 0.4 : 0.55,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      className="
        group
        relative

        flex
        h-28
        w-28
        sm:h-32
        sm:w-32

        flex-col
        items-center
        justify-center

        cursor-pointer

        overflow-hidden

        rounded-[24px]
        sm:rounded-[32px]

        border
        border-slate-200/60
        dark:border-white/10

        bg-white/85
        dark:bg-slate-900/80

        backdrop-blur-md
        md:backdrop-blur-xl

        shadow-sm

        transition-all
        duration-300

        hover:-translate-y-2
        hover:scale-105

        md:hover:rotate-2

        hover:border-indigo-200
        dark:hover:border-indigo-500/30

        hover:shadow-md
        md:hover:shadow-[0_20px_50px_rgba(99,102,241,0.18)]
        transform-gpu
      "
    >
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
          from-indigo-500/0
          via-purple-500/0
          to-cyan-500/0

          opacity-0

          transition-all
          duration-300

          group-hover:opacity-100
          group-hover:from-indigo-500/10
          group-hover:via-purple-500/10
          group-hover:to-cyan-500/10
        "
      />

      <div
        className="
          relative

          flex
          h-14
          w-14
          sm:h-16
          sm:w-16
          items-center
          justify-center

          rounded-2xl
          sm:rounded-3xl

          bg-gradient-to-br
          from-slate-50
          to-white

          dark:from-slate-800
          dark:to-slate-900

          shadow-md

          transition-all
          duration-300

          group-hover:scale-100
          group-hover:shadow-lg
        "
      >
        <div
          className="
            absolute
            inset-0

            rounded-2xl
            sm:rounded-3xl

            opacity-0

            blur-lg
            md:blur-xl

            transition-all
            duration-300

            group-hover:opacity-50
          "
          style={{
            background: skillInfo?.color,
          }}
        />

        {Icon && (
          <Icon
            size={isMobile ? 28 : 34}
            style={{
              color: skillInfo.color,
            }}
            className="
              relative
              z-10

              transition-transform
              duration-300

              group-hover:scale-115
              md:group-hover:-rotate-12
            "
          />
        )}
      </div>

      <p
        className="
          relative
          z-10

          mt-3
          sm:mt-5

          text-xs
          sm:text-[13px]
          font-semibold
          tracking-wide

          text-slate-700
          dark:text-slate-300
        "
      >
        {skill.name}
      </p>
    </motion.div>
  );
};

export default SkillCard;
