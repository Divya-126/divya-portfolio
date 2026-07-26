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
          grid
          grid-cols-4

          gap-4

          w-fit
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
                y: 25,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
                scale: 1.08,
                rotate: 1,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                group
                relative

                flex
                h-16
                w-16

                cursor-pointer

                items-center
                justify-center

                rounded-2xl

                border
                border-slate-200
                dark:border-white/10

                bg-white/80
                dark:bg-slate-900/70

                backdrop-blur-xl

                shadow-md
                dark:shadow-[0_20px_40px_rgba(0,0,0,0.35)]

                transition-all
                duration-300

                hover:border-indigo-400
                dark:hover:border-indigo-500

                hover:shadow-[0_18px_45px_rgba(99,102,241,0.25)]
              "
            >
              {/* Glow */}

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
                  via-transparent
                  to-transparent

                  dark:from-white/10
                "
              />

              {/* Icon */}

              <motion.div
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 2.5 + index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <Icon
                  size={30}
                  color={tech.color}
                  className="
                    transition-all
                    duration-300

                    group-hover:scale-125
                    group-hover:rotate-12
                  "
                />
              </motion.div>

              {/* Tooltip */}

              <div
                className="
                  pointer-events-none

                  absolute
                  left-1/2
                  -top-14

                  z-50

                  -translate-x-1/2
                  translate-y-2

                  opacity-0

                  transition-all
                  duration-300

                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
                <div
                  className="
                    rounded-lg

                    bg-slate-900
                    dark:bg-white

                    px-3
                    py-1.5

                    text-xs
                    font-semibold

                    text-white
                    dark:text-slate-900

                    shadow-xl

                    whitespace-nowrap
                  "
                >
                  {tech.name}
                </div>

                {/* Arrow */}

                <div
                  className="
                    mx-auto

                    h-2
                    w-2

                    rotate-45

                    -mt-1

                    bg-slate-900
                    dark:bg-white
                  "
                />
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default HeroTechStack;
