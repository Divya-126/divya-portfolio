import { FolderOpen, Download } from "lucide-react";
import Button from "../../components/ui/Button";

const HeroButtons = () => {
  return (
    <div
      className="
        mt-10

        flex
        w-full
        flex-col

        items-stretch
        gap-4

        sm:flex-row
        sm:items-center

        lg:w-auto
      "
    >
      <Button
        className="
          w-full
          cursor-pointer

          sm:w-auto
        "
        leftIcon={<FolderOpen size={18} />}
        onClick={() => {
          document.getElementById("projects")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        View Projects
      </Button>

      <a
        href="/resume.pdf"
        download="Divya_Dhote_Resume.pdf"
        className="w-full sm:w-auto"
      >
        <Button
          variant="secondary"
          leftIcon={<Download size={18} />}
          className="
            w-full
            cursor-pointer

            sm:w-auto
          "
        >
          Download Resume
        </Button>
      </a>
    </div>
  );
};

export default HeroButtons;
