import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import ProjectCard from "./ProjectCard";

const rowVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.15,
    },
  },
};

const ProjectRow = ({ projects, onOpenGallery }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      variants={rowVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="
        grid
        grid-cols-1
        gap-8
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          index={index}
          project={project}
          onOpenGallery={onOpenGallery}
        />
      ))}
    </motion.div>
  );
};

export default ProjectRow;
