import { motion } from "framer-motion";

import HeroProfileCard from "./HeroProfileCard";

const HeroImage = () => {
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width:1024px)").matches;

  return (
    <motion.div
      initial={
        isMobile
          ? {
              opacity: 0,
              x: -220,
            }
          : {
              opacity: 0,
              x: 100,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: isMobile ? 1.8 : 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        flex
        justify-center
        lg:justify-end
      "
    >
      <motion.div
        animate={{
          y: isMobile ? [0, -8, 0] : [0, -20, 0],
        }}
        transition={{
          duration: isMobile ? 4 : 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <HeroProfileCard />
      </motion.div>
    </motion.div>
  );
};

export default HeroImage;
