import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";
import SectionHeader from "../../components/ui/SectionHeader";

import Timeline from "./Timeline";

const JourneySection = () => {
  return (
    <Section
      id="journey"
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
          badge="Journey"
          title="My Learning Journey"
          subtitle="A timeline of my growth as a Full Stack Developer."
        />

        <Timeline />
      </Container>
    </Section>
  );
};

export default JourneySection;
