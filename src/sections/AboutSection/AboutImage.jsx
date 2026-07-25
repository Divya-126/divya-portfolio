import { motion } from "framer-motion";
import profileImage from "../../assets/images/profile/divya-profile.webp";

const AboutImage = () => {
  return (
    <div className="flex justify-center lg:justify-start">
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative"
      >
        <div
          className="
            absolute
            -left-10
            top-10

            h-40
            w-40

            rounded-full

            bg-indigo-400/20
            dark:bg-indigo-500/20

            blur-3xl
          "
        />

        <div
          className="
            absolute
            -right-10
            bottom-10

            h-40
            w-40

            rounded-full

            bg-cyan-400/20
            dark:bg-cyan-500/20

            blur-3xl
          "
        />

        <motion.div
          whileHover={{
            y: -8,
          }}
          transition={{
            duration: 0.4,
          }}
          className="
            relative
            overflow-hidden

            rounded-[32px]

            border
            border-slate-200
            dark:border-white/10

            bg-white/70
            dark:bg-slate-900/70

            p-3
            sm:p-4

            backdrop-blur-xl

            shadow-[0_20px_80px_rgba(15,23,42,0.12)]
            dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]
          "
        >
          <motion.img
            whileHover={{
              scale: 1.03,
            }}
            transition={{
              duration: 0.5,
            }}
            src={profileImage}
            alt="Divya Dhote"
            className="
              h-[340px]
              w-[250px]

              sm:h-[420px]
              sm:w-[310px]

              lg:h-[460px]
              lg:w-[340px]

              rounded-[24px]

              object-cover
              object-top
            "
          />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-6
            left-1/2
            z-20

            -translate-x-1/2
          "
        >
          <div
            className="
              whitespace-nowrap

              rounded-full

              bg-indigo-600

              px-5
              py-3

              text-xs
              font-semibold
              text-white

              shadow-xl

              sm:px-6
              sm:text-sm
            "
          >
            Full Stack Developer
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutImage;
