import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroBackground from "./HeroBackground";

const HeroSection = () => {
  return (
    <Section
      id="home"
      className="
        relative
        overflow-hidden

        bg-white
        dark:bg-slate-950

        pt-28
        pb-10

        lg:min-h-screen
        lg:pt-0
        lg:pb-0

        flex
        items-start
        lg:items-center

        transition-colors
        duration-500
      "
    >
      <HeroBackground />

      <Container className="relative z-10">
        <div
          className="
            grid
            items-center

            gap-14
            md:gap-12
            lg:gap-16

            lg:grid-cols-2
          "
        >
          <HeroContent />

          <div
            className="
              mt-8
              lg:mt-0
            "
          >
            <HeroImage />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HeroSection;
