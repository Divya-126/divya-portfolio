import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";
import SectionHeader from "../../components/ui/SectionHeader";

import SkillsGrid from "./SkillsGrid";

const SkillsSection = () => {
  return (
    <Section
      id="skills"
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
          badge="Skills"
          title="Technologies I Work With"
          subtitle="A collection of technologies and tools I use to build scalable and modern web applications."
        />

        <SkillsGrid />
      </Container>
    </Section>
  );
};

export default SkillsSection;
