import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

import Button from "../../components/ui/Button";

const ProjectActions = ({ github, live }) => {
  return (
    <div
      className="
        mt-2
        flex
        flex-col
        gap-3
        sm:flex-row
      "
    >
      {live && (
        <Button
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          fullWidth
          rightIcon={<ExternalLink size={18} />}
          className="sm:w-auto"
        >
          Live Demo
        </Button>
      )}

      {github && (
        <Button
          variant="secondary"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          fullWidth
          leftIcon={<SiGithub size={18} />}
          className="sm:w-auto"
        >
          GitHub
        </Button>
      )}
    </div>
  );
};

export default ProjectActions;
