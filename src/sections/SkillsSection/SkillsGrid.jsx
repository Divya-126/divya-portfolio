import { motion } from "framer-motion";
import { useState } from "react";

import skillsData from "../../data/skillsData";
import SkillCard from "./SkillCard";
import SkillModal from "./SkillModal";

const SkillsGrid = () => {
  const skills = skillsData.flatMap((category) => category.skills);

  const [selectedSkill, setSelectedSkill] = useState(null);

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width:768px)").matches;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 120,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.05,
      }}
      transition={{
        duration: isMobile ? 1.4 : 1.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        relative
        transform-gpu
        will-change-transform
      "
    >
      <div
        className="
          absolute
          -left-24
          top-0

          h-80
          w-80

          rounded-full

          bg-indigo-300/20
          dark:bg-indigo-500/15

          blur-2xl
          md:blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-24
          bottom-0

          h-80
          w-80

          rounded-full

          bg-cyan-300/20
          dark:bg-cyan-500/15

          blur-2xl
          md:blur-3xl
        "
      />

      <div
        className="
          relative
          overflow-hidden

          rounded-[36px]

          border
          border-slate-200/70
          dark:border-white/10

          bg-white/80
          dark:bg-slate-900/70

          p-8
          sm:p-10
          lg:p-16

          backdrop-blur-lg
          md:backdrop-blur-2xl

          shadow-[0_25px_80px_rgba(15,23,42,0.12),0_10px_40px_rgba(99,102,241,0.15),0_0_0_1px_rgba(255,255,255,0.4)]
          dark:shadow-[0_25px_80px_rgba(0,0,0,0.45)]
        "
      >
        <div
          className="
            pointer-events-none

            absolute
            inset-0

            bg-gradient-to-br
            from-white/40
            dark:from-white/5

            via-transparent
            to-transparent
          "
        />

        <motion.div
          variants={{
            hidden: {},

            show: {
              transition: {
                staggerChildren: isMobile ? 0.22 : 0.12,

                delayChildren: isMobile ? 0.7 : 0.15,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
          }}
          className="
            flex
            flex-wrap
            justify-center

            gap-6
            sm:gap-7
            lg:gap-8
          "
        >
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              onClick={() => setSelectedSkill(skill.name)}
            />
          ))}
        </motion.div>

        <SkillModal
          skill={selectedSkill}
          onClose={() => setSelectedSkill(null)}
        />
      </div>
    </motion.div>
  );
};

export default SkillsGrid;
