import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="
        fixed
        inset-0
        z-[9999]

        flex
        items-center
        justify-center

        overflow-hidden

        bg-white
        dark:bg-slate-950
        transform-gpu
      "
    >
      {/* Background Glow */}

      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-20
          top-20

          h-[320px]
          w-[320px]
          md:h-[420px]
          md:w-[420px]

          rounded-full

          bg-indigo-500/20

          blur-2xl
          md:blur-[100px]
          transform-gpu
          will-change-transform
          pointer-events-none
        "
      />

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-20
          bottom-20

          h-[320px]
          w-[320px]
          md:h-[420px]
          md:w-[420px]

          rounded-full

          bg-cyan-500/20

          blur-2xl
          md:blur-[100px]
          transform-gpu
          will-change-transform
          pointer-events-none
        "
      />

      {/* Content */}

      <div className="flex flex-col items-center">
        {/* Logo Container */}

        <div
          className="
            relative

            flex
            h-[240px]
            w-[240px]
            sm:h-[280px]
            sm:w-[280px]

            items-center
            justify-center
            transform-gpu
          "
        >
          {/* Pulse Glow */}

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.35, 0.15, 0.35],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute

              h-[160px]
              w-[160px]
              sm:h-[200px]
              sm:w-[200px]

              rounded-full

              bg-gradient-to-r
              from-indigo-500/40
              to-cyan-500/40

              blur-xl
              md:blur-[60px]
              transform-gpu
            "
          />

          {/* Rotating Ring */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute

              h-[200px]
              w-[200px]
              sm:h-[240px]
              sm:w-[240px]

              rounded-full

              border-[6px]
              sm:border-[8px]
              border-transparent

              border-t-indigo-500
              border-r-cyan-500
              border-b-purple-500
              border-l-indigo-300/30
              transform-gpu
              will-change-transform
            "
          />

          {/* Logo */}

          <motion.img
            src="/logo.webp"
            alt="Logo"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: [1, 1.04, 1],
              y: [0, -6, 0],
            }}
            transition={{
              opacity: {
                duration: 0.5,
              },
              scale: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
              y: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="
              relative
              z-10

              h-[130px]
              w-[130px]
              sm:h-[160px]
              sm:w-[160px]

              object-contain
              select-none
              transform-gpu
            "
          />
        </div>

        {/* Text */}

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 0.4,
          }}
          className="mt-8 text-center"
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-1
            "
          >
            <span
              className="
                text-xl
                sm:text-2xl
                font-semibold

                text-slate-800
                dark:text-white
              "
            >
              Loading Portfolio
            </span>

            {[0, 1, 2].map((dot) => (
              <motion.span
                key={dot}
                animate={{
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  delay: dot * 0.18,
                }}
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold

                  text-indigo-500
                "
              >
                .
              </motion.span>
            ))}
          </div>

          <p
            className="
              mt-3
              sm:mt-4

              text-xs
              sm:text-sm
              tracking-wide

              text-slate-500
              dark:text-slate-400
            "
          >
            Stay tuned, something exciting is loading... ⭐
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
