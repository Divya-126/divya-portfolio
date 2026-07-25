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
          y: 70,
          scale: 0.92,
        },

        show: {
          opacity: 1,
          y: 0,
          scale: 1,
        },
      }}
      transition={{
        duration: isMobile ? 1 : 0.8,

        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="
        group
        relative

        flex
        h-32
        w-32

        flex-col
        items-center
        justify-center

        cursor-pointer

        overflow-hidden

        rounded-[32px]

        border
        border-slate-200/60
        dark:border-white/10

        bg-white/85
        dark:bg-slate-900/80

        backdrop-blur-xl

        shadow-md

        transition-all
        duration-500

        hover:-translate-y-4
        hover:scale-105

        md:hover:rotate-2

        hover:border-indigo-200
        dark:hover:border-indigo-500/30

        hover:shadow-lg
        md:hover:shadow-[0_20px_50px_rgba(99,102,241,0.18)]
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
          duration-500

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
          h-16
          w-16
          items-center
          justify-center

          rounded-3xl

          bg-gradient-to-br
          from-slate-50
          to-white

          dark:from-slate-800
          dark:to-slate-900

          shadow-lg

          transition-all
          duration-500

          group-hover:scale-100
          group-hover:shadow-lg
        "
      >
        <div
          className="
            absolute
            inset-0

            rounded-3xl

            opacity-0

            blur-xl

            transition-all
            duration-500

            group-hover:opacity-50
          "
          style={{
            background: skillInfo?.color,
          }}
        />

        {Icon && (
          <Icon
            size={34}
            style={{
              color: skillInfo.color,
            }}
            className="
              relative
              z-10

              transition-all
              duration-500

              group-hover:scale-125

              md:group-hover:-rotate-12
            "
          />
        )}
      </div>

      <p
        className="
          relative
          z-10

          mt-5

          text-[13px]
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
