import { motion } from "framer-motion";

const HeroBackground = () => {
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width:768px)").matches;

  return (
    <>
      <motion.div
        animate={{
          x: isMobile ? [0, 20, 0] : [0, 50, 0],
          y: isMobile ? [0, -20, 0] : [0, -50, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-16
          top-20

          h-72
          w-72

          rounded-full

          bg-indigo-400/20
          dark:bg-indigo-500/15

          blur-2xl
          md:blur-3xl
        "
      />

      <motion.div
        animate={{
          x: isMobile ? [0, -20, 0] : [0, -50, 0],
          y: isMobile ? [0, 20, 0] : [0, 50, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-16
          bottom-20

          h-80
          w-80

          rounded-full

          bg-cyan-400/20
          dark:bg-cyan-500/15

          blur-2xl
          md:blur-3xl
        "
      />
    </>
  );
};

export default HeroBackground;
