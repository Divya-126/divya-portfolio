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
          text-[var(--color-text-secondary)]
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

    scrollbar-none
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
              animate={{
                y: [0, -10, 0],
              }}
              className="
    shrink-0

    group
    relative

    flex
    items-center
    justify-center

    rounded-2xl
    border
    border-white/40

    bg-white/60

    p-4

    backdrop-blur-xl
    shadow-sm

    cursor-pointer

    transition-all
    duration-500

    hover:-translate-y-3
    hover:scale-105

    hover:border-indigo-200
    hover:shadow-[0_20px_50px_rgba(99,102,241,0.18)]
  "
            >
              {/* Glass Glow */}

              <div
                className="
                    absolute
                    inset-0

                    rounded-2xl

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

              {/* Shine */}

              <div
                className="
                    pointer-events-none

                    absolute
                    inset-0

                    rounded-2xl

                    bg-gradient-to-br
                    from-white/30
                    via-transparent
                    to-transparent
                  "
              />

              {/* Icon */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2.5 + index * 0.4,

                  repeat: Infinity,

                  repeatType: "mirror",

                  ease: "easeInOut",
                }}
                className="
                    relative
                    z-10
                  "
              >
                <Icon
                  size={34}
                  color={tech.color}
                  className="
                      transition-all
                      duration-500

                      group-hover:scale-125
                    "
                />
              </motion.div>

              {/* Tooltip */}

              <span
                className="
                    pointer-events-none

                    absolute
                    -bottom-10
                    left-1/2

                    -translate-x-1/2

                    whitespace-nowrap

                    rounded-lg

                    bg-slate-900

                    px-3
                    py-1.5

                    text-xs
                    font-medium
                    text-white

                    opacity-0

                    shadow-lg

                    transition-all
                    duration-300

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
