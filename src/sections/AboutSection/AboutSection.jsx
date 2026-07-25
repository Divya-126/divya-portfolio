import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";
import SectionHeader from "../../components/ui/SectionHeader";

import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

const AboutSection = () => {
  return (
    <Section
      id="about"
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
          badge="About Me"
          title="Get to Know Me"
          subtitle="Learn more about my journey, passion, and the technologies I use to build modern web applications."
        />

        <AboutContent />
      </Container>
    </Section>
  );
};

export default AboutSection;
