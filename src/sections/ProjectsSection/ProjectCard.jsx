import { motion } from "framer-motion";

import BrowserMockup from "./BrowserMockup";
import ProjectTechStack from "./ProjectTechStack";
import ProjectActions from "./ProjectActions";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const ProjectCard = ({ project, onOpenGallery }) => {
  return (
    <motion.div
      layout
      variants={cardVariants}
      whileHover={{
        y: -8,
        transition: {
          duration: 0.3,
        },
      }}
      transition={{
        layout: {
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      className="
        group
        mx-auto
        flex
        h-full
        min-h-[460px]
        w-full
        max-w-[380px]
        flex-col
        overflow-hidden

        rounded-[32px]

        border
        border-white/50
        dark:border-white/10

        bg-white/75
        dark:bg-slate-900/70

        backdrop-blur-2xl

        shadow-[0_15px_60px_rgba(15,23,42,0.08)]
        dark:shadow-[0_20px_70px_rgba(0,0,0,0.45)]

        transition-all
        duration-300

        hover:border-indigo-300
        dark:hover:border-indigo-500/30

        hover:shadow-[0_30px_80px_rgba(99,102,241,0.18)]
      "
    >
      <BrowserMockup
        images={project.images}
        title={project.title}
        onClick={() => onOpenGallery(project)}
      />

      <div className="flex flex-1 flex-col p-5">
        <p
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.25em]

            text-indigo-600
            dark:text-indigo-300
          "
        >
          {project.category}
        </p>

        <h3
          className="
            mt-3
            text-xl
            font-bold

            text-slate-900
            dark:text-white
          "
        >
          {project.title}
        </h3>

        <p
          className="
            mt-4
            line-clamp-3
            leading-7

            text-slate-600
            dark:text-slate-400
          "
        >
          {project.description}
        </p>

        <div className="mt-3">
          <ProjectTechStack technologies={project.technologies} />
        </div>

        <div className="mt-auto pt-6">
          <ProjectActions github={project.github} live={project.live} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
