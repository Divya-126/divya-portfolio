import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";
import SectionHeader from "../../components/ui/SectionHeader";

import projectsData from "../../data/projectsData";

import ProjectFilters from "./ProjectFilters";
import ProjectGalleryModal from "./ProjectGalleryModal";
import ProjectRow from "./ProjectRow";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [cardsPerRow, setCardsPerRow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setCardsPerRow(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerRow(2);
      } else {
        setCardsPerRow(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(projectsData.map((project) => project.category)),
    ];

    return ["All", ...uniqueCategories].map((category) => ({
      name: category,

      count:
        category === "All"
          ? projectsData.length
          : projectsData.filter((project) => project.category === category)
              .length,
    }));
  }, []);

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  const visibleProjects = filteredProjects.slice(0, 3);

  const projectRows = [];

  for (let i = 0; i < visibleProjects.length; i += cardsPerRow) {
    projectRows.push(visibleProjects.slice(i, i + cardsPerRow));
  }

  return (
    <Section
      id="projects"
      className="
        py-24
        lg:py-32

        bg-white
        dark:bg-slate-950

        transition-colors
        duration-500
      "
    >
      <Container>
        <SectionHeader
          badge="Projects"
          title="Featured Projects"
          subtitle="
            A collection of projects
            built using modern
            technologies.
          "
        />

        <ProjectFilters
          categories={categories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <div className="mt-16 space-y-8">
          {projectRows.map((row, index) => (
            <ProjectRow
              key={index}
              projects={row}
              onOpenGallery={setSelectedProject}
            />
          ))}
        </div>

        <p
          className="
            mt-10
            text-center
            text-sm

            text-slate-500
            dark:text-slate-400
          "
        >
          More exciting projects and experiments are on the way — stay tuned for
          what's next.
        </p>

        {projectsData.length > 3 && (
          <div className="mt-10 flex justify-center">
            <Link
              to="/projects"
              className="
                group
                inline-flex
                items-center
                gap-3

                rounded-2xl

                bg-gradient-to-r
                from-indigo-500
                via-violet-500
                to-cyan-500

                px-7
                py-3.5

                font-medium
                text-white

                shadow-[0_15px_45px_rgba(99,102,241,0.35)]

                transition-all
                duration-500

                hover:brightness-110
                hover:shadow-[0_25px_70px_rgba(99,102,241,0.45)]
              "
            >
              <span>View All Projects</span>
              <span>→</span>
            </Link>
          </div>
        )}

        <ProjectGalleryModal
          isOpen={!!selectedProject}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </Container>
    </Section>
  );
};

export default ProjectsSection;
