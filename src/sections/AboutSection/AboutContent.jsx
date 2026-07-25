import { motion } from "framer-motion";

const services = [
  "Full Stack Web Development",
  "MERN Stack Development",
  "Responsive Web Design",
  "REST API Development",
  "JWT Authentication",
  "Problem Solving",
];

const AboutContent = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div
      className="
        mx-auto
        w-full
        max-w-6xl

        grid
        gap-8

        md:grid-cols-2
      "
    >
      {/* ABOUT CARD */}

      <motion.div
        initial={{
          opacity: 0,
          x: isMobile ? -50 : -140,
          y: isMobile ? 50 : 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: isMobile ? 0.4 : 0.2,
        }}
        transition={{
          duration: 2.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          overflow-hidden
          rounded-[36px]

          border
          border-slate-200/70
          dark:border-white/10

          bg-white/75
          dark:bg-slate-900/70

          p-8
          lg:p-10

          backdrop-blur-xl

          shadow-[0_20px_80px_rgba(15,23,42,0.08)]
          dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]

          transition-all
          duration-500

          hover:-translate-y-2
          hover:shadow-[0_25px_90px_rgba(99,102,241,0.15)]
        "
      >
        {/* Glow */}

        <div
          className="
            absolute
            -left-20
            top-10

            h-40
            w-40

            rounded-full

            bg-indigo-300/20
            dark:bg-indigo-500/15

            blur-3xl
          "
        />

        <span
          className="
            relative
            z-10

            inline-flex

            rounded-full

            border
            border-indigo-200
            dark:border-indigo-500/20

            bg-indigo-50
            dark:bg-indigo-500/10

            px-5
            py-3

            text-sm
            font-semibold
            tracking-[0.2em]

            text-indigo-600
            dark:text-indigo-300
          "
        >
          ABOUT ME
        </span>

        <p
          className="
            relative
            z-10

            mt-10

            text-[17px]
            leading-9

            text-slate-600
            dark:text-slate-400
          "
        >
          I am a Passionate Full Stack Developer specializing in the MERN stack,
          focused on building scalable, responsive, and user-centric web
          applications.
        </p>

        <p
          className="
            relative
            z-10

            mt-5

            text-[17px]
            leading-9

            text-slate-600
            dark:text-slate-400
          "
        >
          I enjoy solving real-world problems through clean architecture, modern
          technologies, and intuitive user experiences.
        </p>

        <h3
          className="
            relative
            z-10

            mt-10

            text-3xl
            font-bold

            text-slate-900
            dark:text-white
          "
        >
          Career Objective
        </h3>

        <p
          className="
            relative
            z-10

            mt-5

            text-[17px]
            leading-9

            text-slate-600
            dark:text-slate-400
          "
        >
          Seeking an opportunity as a Full Stack Developer where I can
          contribute to impactful products, solve real-world problems and
          continuously grow as a software engineer.
        </p>
      </motion.div>

      {/* WHAT I DO CARD */}

      <motion.div
        initial={{
          opacity: 0,
          x: isMobile ? 80 : 220,
          y: isMobile ? 50 : 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: isMobile ? 0.4 : 0.2,
        }}
        transition={{
          duration: 2.3,
          delay: isMobile ? 0 : 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          overflow-hidden
          rounded-[36px]

          border
          border-slate-200/70
          dark:border-white/10

          bg-white/75
          dark:bg-slate-900/70

          p-8
          lg:p-10

          backdrop-blur-xl

          shadow-[0_20px_80px_rgba(15,23,42,0.08)]
          dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]

          transition-all
          duration-500

          hover:-translate-y-2
          hover:shadow-[0_25px_90px_rgba(99,102,241,0.15)]
        "
      >
        {/* Glow */}

        <div
          className="
            absolute
            -right-20
            bottom-10

            h-40
            w-40

            rounded-full

            bg-cyan-300/20
            dark:bg-cyan-500/15

            blur-3xl
          "
        />

        <h2
          className="
            relative
            z-10

            text-4xl
            font-bold

            text-slate-900
            dark:text-white

            lg:text-5xl
          "
        >
          What I Do
        </h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.4,
          }}
          variants={{
            hidden: {},

            show: {
              transition: {
                staggerChildren: 0.28,
                delayChildren: 0.8,
              },
            },
          }}
          className="
            relative
            z-10

            mt-10
            space-y-5
          "
        >
          {services.map((item, index) => (
            <motion.div
              key={item}
              variants={{
                hidden: {
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100,
                  scale: 0.95,
                },

                show: {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                },
              }}
              transition={{
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                x: 10,
              }}
              className="
                flex
                items-center
                gap-5

                rounded-3xl

                bg-slate-50/90
                dark:bg-slate-800/80

                px-5
                py-4

                backdrop-blur-md

                transition-all
                duration-500

                hover:-translate-y-1
                hover:bg-indigo-50
                dark:hover:bg-indigo-500/10

                hover:shadow-lg
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center

                  rounded-2xl

                  bg-gradient-to-br
                  from-indigo-500
                  via-purple-500
                  to-cyan-500

                  text-lg
                  font-bold
                  text-white

                  shadow-lg
                "
              >
                ✓
              </div>

              <span
                className="
                  text-base
                  font-medium

                  text-slate-700
                  dark:text-slate-300

                  sm:text-lg
                "
              >
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutContent;
