import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

const ProjectGalleryModal = ({ isOpen, project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isOpen || !project) return;

    setCurrentIndex(0);
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();

      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) =>
          prev === project.images.length - 1 ? 0 : prev + 1,
        );
      }

      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) =>
          prev === 0 ? project.images.length - 1 : prev - 1,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, project]);

  if (!isOpen || !project) return null;

  const totalImages = project.images.length;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-[999]

        flex
        items-center
        justify-center

        bg-black/80

        backdrop-blur-sm

        p-4
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative

          flex
          max-h-[95vh]
          w-full
          max-w-6xl
          flex-col
          overflow-hidden

          rounded-3xl

          border
          border-white/10

          bg-white
          dark:bg-slate-900

          shadow-2xl
        "
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="
            absolute
            right-5
            top-5
            z-50

            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-full

            bg-white/90
            dark:bg-slate-800/90

            text-slate-700
            dark:text-slate-300

            shadow-lg

            transition-all
            duration-300

            hover:bg-red-500
            hover:text-white
          "
        >
          <X size={22} />
        </button>

        {/* Image */}
        <div
          className="
            relative
            w-full

            aspect-[16/10]
            sm:aspect-video

            overflow-hidden

            bg-slate-300
            dark:bg-slate-950
          "
        >
          <img
            src={project.images[currentIndex]}
            alt={project.title}
            className="
              absolute
              inset-0

              h-full
              w-full

              object-contain

              transition-all
              duration-500
              ease-in-out

              select-none
            "
            draggable="false"
          />

          {totalImages > 1 && (
            <>
              <button
                onClick={previousImage}
                className="
                  absolute
                  left-3
                  sm:left-6
                  top-1/2
                  -translate-y-1/2

                  flex
                  h-10
                  w-10
                  sm:h-12
                  sm:w-12
                  items-center
                  justify-center

                  rounded-full

                  bg-white/90
                  dark:bg-slate-800/90

                  text-slate-700
                  dark:text-slate-300

                  shadow-lg

                  transition

                  hover:scale-110
                "
              >
                <ChevronLeft />
              </button>

              <button
                onClick={nextImage}
                className="
                  absolute
                  right-3
                  sm:right-6
                  top-1/2
                  -translate-y-1/2

                  flex
                  h-10
                  w-10
                  sm:h-12
                  sm:w-12
                  items-center
                  justify-center

                  rounded-full

                  bg-white/90
                  dark:bg-slate-800/90

                  text-slate-700
                  dark:text-slate-300

                  shadow-lg

                  transition

                  hover:scale-110
                "
              >
                <ChevronRight />
              </button>
            </>
          )}
        </div>

        {/* Footer */}
        <div
          className="
            border-t
            border-slate-200
            dark:border-white/10

            bg-white
            dark:bg-slate-900

            p-5
            sm:p-6
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5

              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <span
              className="
                text-sm
                font-medium

                text-slate-500
                dark:text-slate-400
              "
            >
              Screenshot {currentIndex + 1} / {totalImages}
            </span>

            <div className="flex flex-wrap gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2

                    rounded-xl

                    bg-indigo-600

                    px-5
                    py-2.5

                    font-medium
                    text-white

                    transition

                    hover:bg-indigo-700
                  "
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2

                    rounded-xl

                    border
                    border-slate-300
                    dark:border-white/10

                    px-5
                    py-2.5

                    font-medium

                    text-slate-700
                    dark:text-slate-300

                    transition

                    hover:bg-slate-100
                    dark:hover:bg-slate-800
                  "
                >
                  <SiGithub size={18} />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        {totalImages > 1 && (
          <div
            className="
              flex
              items-center
              justify-center
              gap-2

              bg-white
              dark:bg-slate-900

              py-5
            "
          >
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`
                    h-2.5
                    rounded-full
                    transition-all
                    duration-300

                    ${
                      currentIndex === index
                        ? "w-8 bg-indigo-600"
                        : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-500"
                    }
                  `}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectGalleryModal;
