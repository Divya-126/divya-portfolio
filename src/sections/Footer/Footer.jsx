import { ArrowUp } from "lucide-react";
import FooterSocials from "./FooterSocials";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const TopButton = (
    <button
      onClick={scrollToTop}
      aria-label="Back To Top"
      className="
        animate-floating
        group
        relative
        cursor-pointer

        flex
        h-12
        w-12
        items-center
        justify-center

        rounded-2xl

        bg-gradient-to-r
        from-indigo-500
        via-violet-500
        to-cyan-500

        text-white

        shadow-[0_15px_40px_rgba(99,102,241,0.35)]

        transition-all
        duration-500

        hover:scale-110
        hover:shadow-[0_25px_60px_rgba(99,102,241,0.45)]
      "
    >
      <span
        className="
          absolute
          inset-0
          rounded-2xl

          bg-gradient-to-r
          from-indigo-500
          to-cyan-500

          opacity-40
          blur-lg
        "
      />

      <ArrowUp size={22} className="relative z-10" />
    </button>
  );

  return (
    <footer
      className="
        relative
        overflow-hidden

        border-t
        border-slate-200/70
        dark:border-white/10

        bg-gradient-to-b
        from-white
        via-slate-50
        to-white

        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950

        transition-colors
        duration-500
      "
    >
      {/* Blobs */}

      <div
        className="
          absolute
          left-0
          top-0

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
          bottom-0
          right-0

          h-72
          w-72

          rounded-full

          bg-cyan-500/10
          dark:bg-cyan-500/15

          blur-3xl
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl

          px-5
          py-8

          md:px-8
          md:py-12

          lg:px-10
        "
      >
        {/* Mobile */}

        <div
          className="
            flex
            flex-col
            items-center
            text-center

            md:hidden
          "
        >
          <h2
            className="
              bg-gradient-to-r
              from-slate-900
              via-indigo-600
              to-cyan-500

              dark:from-white
              dark:via-indigo-300
              dark:to-cyan-300

              bg-clip-text

              text-3xl
              font-bold
              tracking-wide
              text-transparent
            "
          >
            DIVYA DHOTE
          </h2>

          <p
            className="
              mt-6
              max-w-xs

              text-sm
              leading-7

              text-slate-600
              dark:text-slate-400
            "
          >
            Thank you for visiting my portfolio.
            <br />
            Let's build something meaningful together.
          </p>

          <div className="mt-7">
            <FooterSocials />
          </div>

          <p
            className="
              mt-8
              text-sm

              text-slate-500
            "
          >
            © {new Date().getFullYear()} Divya Dhote. All rights reserved.
          </p>

          <div className="mt-6">{TopButton}</div>
        </div>

        {/* Desktop */}

        <div
          className="
            hidden

            items-center

            md:grid
            md:grid-cols-2
            md:gap-20

            lg:grid-cols-[1fr_auto_1fr]
            lg:gap-12
          "
        >
          <div className="md:max-w-sm">
            <h3
              className="
                text-xl
                font-semibold

                text-slate-900
                dark:text-white

                lg:text-2xl
              "
            >
              Built With Passion
            </h3>

            <p
              className="
                mt-3
                leading-7

                text-slate-600
                dark:text-slate-400
              "
            >
              Turning ideas into thoughtful, clean and meaningful digital
              experiences.
            </p>
          </div>

          <div
            className="
              hidden
              lg:flex
              lg:justify-center
            "
          >
            <h2
              className="
                bg-gradient-to-r
                from-slate-900
                via-indigo-600
                to-cyan-500

                dark:from-white
                dark:via-indigo-300
                dark:to-cyan-300

                bg-clip-text

                text-4xl
                font-bold
                tracking-wide
                text-transparent
              "
            >
              DIVYA DHOTE
            </h2>
          </div>

          <div
            className="
              text-right
              md:max-w-sm
              md:justify-self-end
            "
          >
            <h3
              className="
                text-xl
                font-semibold

                text-blue-900
                dark:text-blue-300

                lg:text-2xl
              "
            >
              Thank You ❤️
            </h3>

            <p
              className="
                mt-3
                ml-auto
                max-w-sm

                leading-7

                text-slate-600
                dark:text-slate-400
              "
            >
              Thank you for visiting my portfolio.
              <br />
              Let's build something meaningful together.
            </p>
          </div>
        </div>

        <div
          className="
            my-8
            h-px

            bg-gradient-to-r
            from-transparent
            via-slate-300
            dark:via-slate-700
            to-transparent

            md:my-10
          "
        />

        <div
          className="
            hidden

            items-center
            justify-between

            pb-6

            text-sm
            text-slate-500

            md:flex
          "
        >
          <p>© {new Date().getFullYear()} Divya Dhote. All rights reserved.</p>

          {TopButton}

          <p>Crafted with passion and continuous learning.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
