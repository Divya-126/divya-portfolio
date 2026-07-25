import { motion } from "framer-motion";

import profileImage from "../../assets/images/profile/divya-profile.webp";

const HeroProfileCard = () => {
  return (
    <motion.div
      className="
        relative

        flex
        items-center
        justify-center
      "
    >
      {/* Left Glow */}

      <div
        className="
          absolute
          -left-12
          top-20

          h-52
          w-52

          rounded-full

          bg-indigo-400/20
          dark:bg-indigo-500/20

          blur-3xl
        "
      />

      {/* Right Glow */}

      <div
        className="
          absolute
          -right-12
          bottom-10

          h-52
          w-52

          rounded-full

          bg-cyan-400/20
          dark:bg-cyan-500/20

          blur-3xl
        "
      />

      {/* Rotating Ring */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute

          h-[340px]
          w-[340px]

          rounded-full

          bg-gradient-to-r
          from-indigo-500/20
          via-purple-500/20
          to-cyan-500/20

          dark:from-indigo-500/25
          dark:via-purple-500/25
          dark:to-cyan-500/25

          blur-xl
        "
      />

      {/* Available Badge */}

      <motion.div
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          right-4
          top-6
          z-20
        "
      >
        <span
          className="
            inline-flex
            items-center
            gap-2

            rounded-full

            border
            border-green-200
            dark:border-green-500/20

            bg-green-50/80
            dark:bg-green-500/10

            px-4
            py-2

            text-xs
            font-semibold
            text-green-700
            dark:text-green-300

            backdrop-blur-md
          "
        >
          <span
            className="
              h-2.5
              w-2.5

              rounded-full
              

              bg-green-500
            "
          />
          Available
        </span>
      </motion.div>

      {/* Image Card */}

      <motion.div
        whileHover={{
          y: -8,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          relative
          z-10

          overflow-hidden

          rounded-[36px]

          border
          border-white/30
          dark:border-white/10

          bg-white/50
          dark:bg-slate-900/60

          p-3 lg:p-4

          backdrop-blur-xl

          shadow-[0_20px_80px_rgba(15,23,42,0.12)]
          dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]
        "
      >
        <motion.img
          whileHover={{
            scale: 1.04,
          }}
          transition={{
            duration: 0.5,
          }}
          src={profileImage}
          alt="Divya Dhote"
          className="
            h-[320px]
            w-[250px]

            sm:h-[380px]
            sm:w-[300px]

            lg:h-[400px]
            lg:w-[320px]

            rounded-[28px]

            object-cover
            object-top
          "
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroProfileCard;
