import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

import projectsData from "../data/projectsData";

import ProjectFilters from "../sections/ProjectsSection/ProjectFilters";
import ProjectGalleryModal from "../sections/ProjectsSection/ProjectGalleryModal";
import ProjectRow from "../sections/ProjectsSection/ProjectRow";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [cardsPerRow, setCardsPerRow] = useState(3);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

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

  const projectRows = [];

  for (let i = 0; i < filteredProjects.length; i += cardsPerRow) {
    projectRows.push(filteredProjects.slice(i, i + cardsPerRow));
  }

  return (
    <Section
      className="
        relative
        min-h-screen
        overflow-hidden

        bg-white
        dark:bg-slate-950

        pt-6
        pb-20

        transition-colors
        duration-500
      "
    >
      {/* Background Blobs */}

      <div
        className="
          absolute
          left-1/2
          top-[-150px]

          h-[400px]
          w-[400px]

          -translate-x-1/2

          rounded-full

          bg-indigo-300/20
          dark:bg-indigo-500/15

          blur-[150px]
        "
      />

      <div
        className="
          absolute
          right-0
          top-1/3

          h-[300px]
          w-[300px]

          rounded-full

          bg-cyan-300/20
          dark:bg-cyan-500/15

          blur-[150px]
        "
      />

      <Container className="relative z-10">
        {/* Back Button */}

        <div className="mb-8">
          <Link
            to="/"
            className="
              group
              relative
              inline-flex
              items-center
              gap-2
              sm:gap-3

              overflow-hidden
              rounded-2xl

              px-4
              py-3

              sm:px-6
              sm:py-3.5

              text-sm
              sm:text-base
              font-medium
              text-white

              bg-gradient-to-r
              from-indigo-500
              via-violet-500
              to-cyan-500

              shadow-[0_15px_45px_rgba(99,102,241,0.35)]

              transition-all
              duration-500

              hover:brightness-110
              hover:shadow-[0_25px_70px_rgba(99,102,241,0.45)]

              active:scale-[0.98]
            "
          >
            <div
              className="
                absolute
                inset-0

                bg-white/20

                opacity-0

                transition-opacity
                duration-500

                group-hover:opacity-100
              "
            />

            <div
              className="
                absolute
                -left-24
                top-0

                h-full
                w-20

                rotate-12

                bg-white/25

                transition-all
                duration-700

                group-hover:left-[120%]
              "
            />

            <span
              className="
                relative
                z-10
                text-lg

                transition-transform
                duration-500

                group-hover:-translate-x-1
              "
            >
              ←
            </span>

            <span className="relative z-10">Back to Home</span>
          </Link>
        </div>

        {/* Hero */}

        <div className="text-center">
          <div
            className="
              inline-flex
              items-center

              rounded-full

              border
              border-indigo-200
              dark:border-indigo-500/20

              bg-white/70
              dark:bg-slate-900/70

              px-4
              py-2

              text-xs
              font-semibold

              tracking-[0.2em]

              text-indigo-600
              dark:text-indigo-300

              backdrop-blur-xl
            "
          >
            ✨ PROJECT SHOWCASE
          </div>

          <h1
            className="
              mt-5

              text-4xl
              font-bold
              tracking-tight

              text-slate-900
              dark:text-white

              md:text-5xl
              lg:text-6xl
            "
          >
            Featured{" "}
            <span
              className="
                bg-gradient-to-r
                from-indigo-600
                via-violet-600
                to-cyan-500

                bg-clip-text
                text-transparent
              "
            >
              Projects
            </span>
          </h1>

          <p
            className="
            mt-8
              mx-auto
              max-w-3xl

              text-base
              leading-8

              text-slate-600
              dark:text-slate-400
            "
          >
            Explore all my projects and web applications built with passion.
          </p>
        </div>

        {/* Projects */}

        <div
          className="
            mt-10

            rounded-[36px]

            border
            border-white/50
            dark:border-white/10

            bg-white/50
            dark:bg-slate-900/70

            p-5
            md:p-8

            backdrop-blur-2xl

            shadow-[0_20px_80px_rgba(15,23,42,0.06)]
            dark:shadow-[0_30px_90px_rgba(0,0,0,0.45)]

            transition-all
            duration-500
          "
        >
          <ProjectFilters
            categories={categories}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          <div className="mt-10 space-y-8">
            {projectRows.map((row, index) => (
              <ProjectRow
                key={index}
                projects={row}
                onOpenGallery={setSelectedProject}
              />
            ))}
          </div>
        </div>

        {/* Description BELOW Project Container */}

        <div className="mt-10 text-center">
          <p
            className="
              mx-auto
              mt-4
              max-w-2xl

              text-sm
              italic

              text-slate-500
              dark:text-slate-500
            "
          >
            More exciting projects and experiments are on the way — stay tuned
            for what's next.
          </p>
        </div>

        <ProjectGalleryModal
          isOpen={!!selectedProject}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </Container>
    </Section>
  );
};

export default ProjectsPage;
