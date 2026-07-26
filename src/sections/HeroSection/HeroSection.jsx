import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const HeroSection = () => {
  return (
    <Section
      id="home"
      className="
        relative

        overflow-x-hidden
        overflow-y-visible

        bg-white
        dark:bg-slate-950

        pt-20
        lg:pt-20

        pb-10
        lg:pb-0

        min-h-screen

        flex
        items-center

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

          <div className="mt-8 lg:mt-0">
            <HeroImage />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HeroSection;
