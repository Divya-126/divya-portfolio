import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import SectionHeader from "../../components/ui/SectionHeader";

const ContactSection = () => {
  return (
    <Section
      id="contact"
      className="
        relative
        overflow-hidden
        py-24

        bg-white
        dark:bg-slate-950

        transition-colors
        duration-500
      "
    >
      {/* Background Blobs */}

      <div
        className="
          absolute
          left-0
          top-20
          h-72
          w-72
          rounded-full

          bg-indigo-500/10
          dark:bg-indigo-500/15

          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-20
          right-0
          h-72
          w-72
          rounded-full

          bg-cyan-500/10
          dark:bg-cyan-500/15

          blur-3xl
        "
      />

      <Container className="relative z-10">
        <div className="block md:hidden">
          <SectionHeader
            badge="💌 Contact"
            title="Let's Build Something Amazing Together"
            subtitle="Whether you have a project idea, collaboration opportunity, or just want to say hello, I'd love to hear from you."
          />
        </div>

        <div className="hidden md:block">
          <SectionHeader
            badge="Contact"
            title="Let's Build Something Amazing Together"
            subtitle="Whether you have a project idea, collaboration opportunity, or just want to say hello, I'd love to hear from you."
          />
        </div>

        <div
          className="
            mt-16
            grid
            grid-cols-1
            items-stretch
            gap-8

            md:grid-cols-[340px_1fr]
            lg:grid-cols-[380px_1fr]
          "
        >
          <div className="hidden md:flex">
            <ContactInfo />
          </div>

          <ContactForm />
        </div>
      </Container>
    </Section>
  );
};

export default ContactSection;
