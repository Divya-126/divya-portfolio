import React, { useEffect } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

import { skillIcons } from "../../constants/skillIcons";
import skillDetails from "../../data/skillDetails";

const SkillModal = ({ skill, onClose }) => {
  if (!skill) return null;

  const Icon = skillIcons[skill]?.icon;
  const skillInfo = skillDetails[skill];

  const progress = useMotionValue(0);

  const rounded = useTransform(progress, (latest) => Math.round(latest));

  useEffect(() => {
    progress.set(0);

    const controls = animate(progress, skillInfo.percentage, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [skill]);

  const radius = 60;
  const circumference = 2 * Math.PI * radius;

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="
          fixed
          inset-0
          z-[999]

          flex
          items-center
          justify-center

          overflow-y-auto
          overscroll-contain

          bg-transparent
          backdrop-blur-xl

          px-5
          py-8
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 70,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 50,
            scale: 0.9,
          }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          onClick={(e) => e.stopPropagation()}
          className="
            relative

            mx-auto
            my-auto

            w-full
            max-w-[460px]

            min-h-[620px]
            sm:min-h-[640px]

            flex-shrink-0
            overflow-hidden

            rounded-[40px]

            border
            border-white/20
            dark:border-white/10

            bg-white/85
            dark:bg-slate-900/85

            px-7
            py-8
            sm:px-10

            backdrop-blur-2xl

            shadow-[0_30px_100px_rgba(15,23,42,0.18)]
            dark:shadow-[0_30px_100px_rgba(0,0,0,0.55)]
          "
        >
          {/* Left Glow */}
          <div
            className="
              absolute
              -left-24
              top-10

              h-48
              w-48

              rounded-full

              bg-indigo-400/20
              dark:bg-indigo-500/20

              blur-3xl
            "
          />

          {/* Right Glow */}
          <div
            className="
              absolute
              -right-24
              bottom-10

              h-48
              w-48

              rounded-full

              bg-cyan-400/20
              dark:bg-cyan-500/20

              blur-3xl
            "
          />

          {/* Category */}
          <div
            className="
              absolute
              left-7
              top-7
              z-20
            "
          >
            <span
              className="
                rounded-full

                border
                border-indigo-200
                dark:border-indigo-500/20

                bg-indigo-50/90
                dark:bg-indigo-500/10

                px-4
                py-2

                text-xs
                font-semibold

                text-indigo-600
                dark:text-indigo-300
              "
            >
              {skillInfo.category}
            </span>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="
              absolute
              right-6
              top-6
              z-20

              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-full

              bg-white/70
              dark:bg-slate-800/80

              text-slate-500
              dark:text-slate-300

              backdrop-blur-xl

              transition-all
              duration-300

              hover:scale-105
              hover:bg-red-500
              hover:text-white

              cursor-pointer
            "
          >
            <X size={20} />
          </button>

          {/* Content */}
          <div
            className="
              flex
              min-h-[560px]

              flex-col
              items-center
              justify-center
            "
          >
            {/* Floating Icon */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mb-8"
            >
              <div
                className="
                  relative

                  flex
                  h-24
                  w-24
                  items-center
                  justify-center

                  rounded-[30px]

                  border
                  border-white/40
                  dark:border-white/10

                  bg-white/80
                  dark:bg-slate-800/80

                  shadow-xl
                "
              >
                <div
                  className="
                    absolute
                    inset-0

                    rounded-[30px]

                    opacity-50

                    blur-2xl
                  "
                  style={{
                    background: skillIcons[skill]?.color,
                  }}
                />

                <Icon
                  size={50}
                  color={skillIcons[skill]?.color}
                  className="relative z-10"
                />
              </div>
            </motion.div>

            {/* Skill Name */}
            <h3
              className="
                text-center

                text-3xl
                font-bold

                text-slate-900
                dark:text-white
              "
            >
              {skill}
            </h3>

            {/* Animated Progress */}
            <div className="mt-10">
              <div className="relative h-40 w-40">
                <svg
                  className="
                    h-40
                    w-40
                    -rotate-90
                  "
                >
                  {/* Background */}
                  <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    className="
                      text-slate-200
                      dark:text-slate-700
                    "
                    strokeWidth="10"
                  />

                  {/* Progress */}
                  <motion.circle
                    cx="80"
                    cy="80"
                    r={radius}
                    fill="none"
                    stroke={skillIcons[skill]?.color}
                    strokeWidth="10"
                    strokeLinecap="round"
                    style={{
                      strokeDasharray: circumference,
                    }}
                    initial={{
                      strokeDashoffset: circumference,
                    }}
                    animate={{
                      strokeDashoffset:
                        circumference -
                        (circumference * skillInfo.percentage) / 100,
                    }}
                    transition={{
                      duration: 1.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </svg>

                {/* Percentage */}
                <div
                  className="
                    absolute
                    inset-0

                    flex
                    items-center
                    justify-center
                  "
                >
                  <div className="flex items-end">
                    <motion.span
                      className="
                        text-3xl
                        font-bold

                        text-slate-800
                        dark:text-white
                      "
                    >
                      {rounded}
                    </motion.span>

                    <span
                      className="
                        mb-1
                        text-lg
                        font-bold

                        text-slate-700
                        dark:text-slate-300
                      "
                    >
                      %
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p
              className="
                text-blue-500
                dark:text-blue-300
              "
            >
              Skill level
            </p>

            {/* Description */}
            <p
              className="
                mt-10

                max-w-sm

                text-center
                leading-8

                text-slate-600
                dark:text-slate-400
              "
            >
              {skillInfo.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
};

export default SkillModal;
