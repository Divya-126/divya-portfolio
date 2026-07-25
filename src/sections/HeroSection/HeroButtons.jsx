import { FolderOpen, Download } from "lucide-react";
import Button from "../../components/ui/Button";

const HeroButtons = () => {
  return (
    <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
      <Button
        className="cursor-pointer"
        leftIcon={<FolderOpen size={18} />}
        onClick={() => {
          document.getElementById("projects")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        View Projects
      </Button>

      <a href="/resume.pdf" download="Divya_Dhote_Resume.pdf">
        <Button
          className="cursor-pointer"
          variant="secondary"
          leftIcon={<Download size={18} />}
        >
          Download Resume
        </Button>
      </a>
    </div>
  );
};

export default HeroButtons;
