import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
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
      "
    >
      {/* Background Glow */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-32
          top-20

          h-[420px]
          w-[420px]

          rounded-full

          bg-indigo-500/20

          blur-[120px]
        "
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-32
          bottom-20

          h-[420px]
          w-[420px]

          rounded-full

          bg-cyan-500/20

          blur-[120px]
        "
      />

      {/* Content */}

      <div className="flex flex-col items-center">
        {/* Logo Container */}

        <div
          className="
            relative

            flex
            h-[280px]
            w-[280px]

            items-center
            justify-center
          "
        >
          {/* Pulse Glow */}

          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.35, 0.15, 0.35],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="
              absolute

              h-[200px]
              w-[200px]

              rounded-full

              bg-gradient-to-r
              from-indigo-500/40
              to-cyan-500/40

              blur-[70px]
            "
          />

          {/* Rotating Ring */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute

              h-[240px]
              w-[240px]

              rounded-full

              border-[8px]
              border-transparent

              border-t-indigo-500
              border-r-cyan-500
              border-b-purple-500
              border-l-indigo-300/30
            "
          />

          {/* Logo */}

          <motion.img
            src="/logo.webp"
            alt="Logo"
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: [1, 1.05, 1],
              rotate: [0, 2, 0, -2, 0],
              y: [0, -8, 0],
            }}
            transition={{
              opacity: {
                duration: 0.8,
              },
              scale: {
                duration: 2.8,
                repeat: Infinity,
              },
              rotate: {
                duration: 2.8,
                repeat: Infinity,
              },
              y: {
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="
              relative
              z-10

              h-[170px]
              w-[170px]

              object-contain
              select-none
            "
          />
        </div>

        {/* Text */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
          }}
          className="mt-10 text-center"
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
                text-2xl
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
                  duration: 1,
                  repeat: Infinity,
                  delay: dot * 0.2,
                }}
                className="
                  text-3xl
                  font-bold

                  text-indigo-500
                "
              >
                .
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
            }}
            className="
              mt-5

              text-sm
              tracking-wide

              text-slate-500
              dark:text-slate-400
            "
          >
            Stay tuned, something exciting is loading... ⭐
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
