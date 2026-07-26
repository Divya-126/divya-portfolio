import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import HeroButtons from "./HeroButtons";
import HeroTechStack from "./HeroTechStack";

const HeroContent = () => {
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width:768px)").matches;

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: isMobile ? 25 : 50,
    },

    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: isMobile ? 0.08 : 0.15,
          },
        },
      }}
      initial="hidden"
      animate="show"
      className="
        flex
        flex-col
        items-center
        text-center
        lg:items-start
        lg:text-left
      "
    >
      <motion.span
        variants={itemVariants}
        transition={{ duration: 0.7 }}
        className="
          mt-8
          inline-flex
          items-center
          rounded-full

          border
          border-indigo-200
          dark:border-indigo-500/20

          bg-indigo-50
          dark:bg-indigo-500/10

          px-4
          py-2

          text-sm
          font-medium

          text-indigo-600
          dark:text-indigo-300

          lg:mt-12
        "
      >
        👋 Hello, I'm
      </motion.span>

      <motion.h1
        variants={itemVariants}
        transition={{ duration: 0.8 }}
        className="
          mt-6

          text-5xl
          font-bold
          leading-tight
          tracking-tight

          text-slate-900
          dark:text-white

          sm:text-6xl
          lg:text-7xl
        "
      >
        DIVYA{" "}
        <span
          className="
            bg-gradient-to-r
            from-slate-700
            via-indigo-500
            to-cyan-500

            dark:from-white
            dark:via-indigo-300
            dark:to-cyan-300

            bg-clip-text
            text-transparent
          "
        >
          DHOTE
        </span>
      </motion.h1>

      <motion.div
        variants={itemVariants}
        transition={{ duration: 0.8 }}
        className="
          mt-6

          rounded-2xl

          border
          border-slate-200
          dark:border-white/10

          bg-white/70
          dark:bg-slate-900/60

          px-6
          py-3

          backdrop-blur-xl
        "
      >
        <div
          className="
            text-2xl
            font-semibold

            bg-gradient-to-r
            from-slate-500
            via-slate-300
            to-slate-400

            dark:from-white
            dark:via-indigo-200
            dark:to-cyan-200

            bg-clip-text
            text-transparent

            sm:text-3xl
            lg:text-4xl
          "
        >
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "MERN Developer",
              2000,
              "React Developer",
              2000,
            ]}
            speed={40}
            repeat={Infinity}
          />
        </div>
      </motion.div>

      <motion.p
        variants={itemVariants}
        transition={{ duration: 0.8 }}
        className="
          mt-8

          max-w-xl

          text-base
          leading-8

          text-slate-600
          dark:text-slate-400

          sm:text-lg
        "
      >
        I build scalable, responsive, and user-centric web applications using
        MongoDB, Express.js, React, and Node.js, with a focus on clean
        architecture, performance, and exceptional user experiences.
      </motion.p>

      <motion.div variants={itemVariants} className="mt-10">
        <HeroButtons />
      </motion.div>

      <motion.div variants={itemVariants} className="mt-10 w-full">
        <HeroTechStack />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
