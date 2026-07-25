import Badge from "../../components/ui/Badge";

import BrowserMockup from "./BrowserMockup";
import ProjectTechStack from "./ProjectTechStack";
import ProjectFeatures from "./ProjectFeatures";
import ProjectActions from "./ProjectActions";

const ProjectContent = ({ project, images, onImageClick }) => {
  return (
    <div>
      {project.featured && <Badge className="mb-5">⭐ Featured Project</Badge>}

      <p
        className="
          text-sm
          font-semibold
          uppercase
          tracking-widest

          text-indigo-600
          dark:text-indigo-300
        "
      >
        {project.category}
      </p>

      <h3
        className="
          mt-3
          text-4xl
          font-bold

          text-slate-900
          dark:text-white
        "
      >
        {project.title}
      </h3>

      <p
        className="
          mt-6
          text-lg
          leading-8

          text-slate-600
          dark:text-slate-400
        "
      >
        {project.description}
      </p>

      <ProjectTechStack technologies={project.technologies} />

      <div className="my-8 lg:hidden">
        <BrowserMockup
          images={images}
          title={project.title}
          onClick={onImageClick}
        />
      </div>

      <ProjectFeatures features={project.features} />

      <ProjectActions github={project.github} live={project.live} />
    </div>
  );
};

export default ProjectContent;
