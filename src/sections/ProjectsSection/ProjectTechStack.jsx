import Badge from "../../components/ui/Badge";

const ProjectTechStack = ({ technologies }) => {
  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {technologies.map((tech) => (
        <Badge key={tech}>{tech}</Badge>
      ))}
    </div>
  );
};

export default ProjectTechStack;
