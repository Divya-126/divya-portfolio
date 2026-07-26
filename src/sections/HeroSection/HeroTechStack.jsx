import { motion } from "framer-motion";

import techStackData from "../../data/techStackData";

const HeroTechStack = () => {
  return (
    <div className="mt-12">
      <p
        className="
          mb-5
          text-sm
          font-semibold
          uppercase
          tracking-[0.2em]

          text-slate-500
          dark:text-slate-400
        "
      >
        Tech Stack
      </p>

      <div
        className="
          flex
          gap-4

          overflow-x-auto
          overflow-y-hidden

          pb-2

          scrollbar-hide
        "
      >
        {techStackData.map((tech, index) => {
          const Icon = tech.icon;

          return (
            <motion.button
              key={tech.id}
              onClick={() => window.open(tech.docs, "_blank")}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                group
                relative

                flex
                shrink-0
                items-center
                justify-center

                h-16
                w-16

                rounded-2xl

                border
                border-slate-200
                dark:border-white/10

                bg-white/80
                dark:bg-slate-900/70

                backdrop-blur-xl

                shadow-md
                dark:shadow-[0_20px_40px_rgba(0,0,0,0.35)]

                cursor-pointer

                transition-all
                duration-500

                hover:-translate-y-2
                hover:scale-110

                hover:border-indigo-400
                dark:hover:border-indigo-500/50

                hover:bg-white
                dark:hover:bg-slate-900

                hover:shadow-[0_20px_45px_rgba(99,102,241,0.25)]
              "
            >
              {/* Gradient Glow */}
              <div
                className="
                  absolute
                  inset-0

                  rounded-2xl

                  bg-gradient-to-br
                  from-indigo-500/0
                  via-violet-500/0
                  to-cyan-500/0

                  opacity-0

                  transition-all
                  duration-500

                  group-hover:opacity-100
                  group-hover:from-indigo-500/10
                  group-hover:via-violet-500/10
                  group-hover:to-cyan-500/10
                "
              />

              {/* Shine */}
              <div
                className="
                  pointer-events-none

                  absolute
                  inset-0

                  rounded-2xl

                  bg-gradient-to-br
                  from-white/40
                  via-white/5
                  to-transparent

                  dark:from-white/10
                  dark:via-transparent
                "
              />

              {/* Icon */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2.5 + index * 0.3,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <Icon
                  size={34}
                  color={tech.color}
                  className="
                    drop-shadow-md

                    transition-all
                    duration-500

                    group-hover:scale-125
                    group-hover:rotate-6
                  "
                />
              </motion.div>

              {/* Tooltip */}
              <span
                className="
                  pointer-events-none

                  absolute
                  -bottom-11
                  left-1/2

                  -translate-x-1/2

                  whitespace-nowrap

                  rounded-lg

                  bg-slate-900
                  dark:bg-white

                  px-3
                  py-1.5

                  text-xs
                  font-semibold

                  text-white
                  dark:text-slate-900

                  opacity-0

                  shadow-lg

                  transition-all
                  duration-300

                  group-hover:-translate-y-1
                  group-hover:opacity-100
                "
              >
                {tech.name}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default HeroTechStack;
