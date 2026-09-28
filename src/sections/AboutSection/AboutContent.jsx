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
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width:768px)").matches;

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
          y: isMobile ? 25 : 0,
          x: isMobile ? 0 : -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.1,
        }}
        transition={{
          duration: isMobile ? 0.55 : 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          overflow-hidden
          rounded-[32px]
          sm:rounded-[36px]

          border
          border-slate-200/70
          dark:border-white/10

          bg-white/75
          dark:bg-slate-900/70

          p-6
          sm:p-8
          lg:p-10

          backdrop-blur-md
          md:backdrop-blur-xl

          shadow-[0_20px_80px_rgba(15,23,42,0.08)]
          dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]

          transition-all
          duration-300

          hover:-translate-y-1
          hover:shadow-[0_25px_90px_rgba(99,102,241,0.15)]
          transform-gpu
        "
      >
        {/* Glow */}

        <div
          className="
            absolute
            -left-16
            top-10

            h-36
            w-36
            md:h-40
            md:w-40

            rounded-full

            bg-indigo-300/20
            dark:bg-indigo-500/15

            blur-2xl
            md:blur-3xl
            pointer-events-none
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

            px-4
            py-2
            sm:px-5
            sm:py-3

            text-xs
            sm:text-sm
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

            mt-8
            sm:mt-10

            text-[15px]
            sm:text-[17px]
            leading-8
            sm:leading-9

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

            text-[15px]
            sm:text-[17px]
            leading-8
            sm:leading-9

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

            mt-8
            sm:mt-10

            text-2xl
            sm:text-3xl
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

            text-[15px]
            sm:text-[17px]
            leading-8
            sm:leading-9

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
          y: isMobile ? 25 : 0,
          x: isMobile ? 0 : 50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.1,
        }}
        transition={{
          duration: isMobile ? 0.55 : 0.75,
          delay: isMobile ? 0 : 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          overflow-hidden
          rounded-[32px]
          sm:rounded-[36px]

          border
          border-slate-200/70
          dark:border-white/10

          bg-white/75
          dark:bg-slate-900/70

          p-6
          sm:p-8
          lg:p-10

          backdrop-blur-md
          md:backdrop-blur-xl

          shadow-[0_20px_80px_rgba(15,23,42,0.08)]
          dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]

          transition-all
          duration-300

          hover:-translate-y-1
          hover:shadow-[0_25px_90px_rgba(99,102,241,0.15)]
          transform-gpu
        "
      >
        {/* Glow */}

        <div
          className="
            absolute
            -right-16
            bottom-10

            h-36
            w-36
            md:h-40
            md:w-40

            rounded-full

            bg-cyan-300/20
            dark:bg-cyan-500/15

            blur-2xl
            md:blur-3xl
            pointer-events-none
          "
        />

        <h2
          className="
            relative
            z-10

            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold

            text-slate-900
            dark:text-white
          "
        >
          What I Do
        </h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: isMobile ? 0.06 : 0.1,
                delayChildren: isMobile ? 0.1 : 0.2,
              },
            },
          }}
          className="
            relative
            z-10

            mt-8
            sm:mt-10
            space-y-4
            sm:space-y-5
            transform-gpu
          "
        >
          {services.map((item, index) => (
            <motion.div
              key={item}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 15,
                  x: isMobile ? 0 : index % 2 === 0 ? -25 : 25,
                },
                show: {
                  opacity: 1,
                  y: 0,
                  x: 0,
                  transition: {
                    duration: isMobile ? 0.4 : 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              whileHover={{
                x: 6,
              }}
              className="
                flex
                items-center
                gap-4
                sm:gap-5

                rounded-2xl
                sm:rounded-3xl

                bg-slate-50/90
                dark:bg-slate-800/80

                px-4
                py-3.5
                sm:px-5
                sm:py-4

                border
                border-slate-200/50
                dark:border-white/5

                transition-all
                duration-300

                hover:bg-indigo-50
                dark:hover:bg-indigo-500/10

                hover:shadow-md
                transform-gpu
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  sm:h-12
                  sm:w-12
                  shrink-0
                  items-center
                  justify-center

                  rounded-xl
                  sm:rounded-2xl

                  bg-gradient-to-br
                  from-indigo-500
                  via-purple-500
                  to-cyan-500

                  text-base
                  sm:text-lg
                  font-bold
                  text-white

                  shadow-md
                "
              >
                ✓
              </div>

              <span
                className="
                  text-sm
                  sm:text-base
                  lg:text-lg
                  font-medium

                  text-slate-700
                  dark:text-slate-300
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
