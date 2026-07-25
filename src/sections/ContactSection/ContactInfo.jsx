import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import profileImage from "../../assets/images/profile/divya-profile.webp";

const socials = [
  {
    icon: Mail,
    href: "mailto:yourmail@gmail.com",
    className: "from-rose-500 to-orange-500 hover:shadow-rose-500/30",
  },
  {
    icon: FaGithub,
    href: "https://github.com/yourusername",
    className: "from-slate-700 to-black hover:shadow-slate-500/30",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/yourusername",
    className: "from-blue-500 to-cyan-500 hover:shadow-blue-500/30",
  },
];

const ContactInfo = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -140,
        scale: 0.96,
        filter: "blur(12px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 2.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        flex
        h-full
        flex-col

        overflow-hidden
        rounded-[32px]

        border
        border-white/50
        dark:border-white/10

        bg-white/60
        dark:bg-slate-900/70

        p-7

        backdrop-blur-2xl

        shadow-[0_30px_100px_rgba(99,102,241,0.15)]
        dark:shadow-[0_30px_100px_rgba(0,0,0,0.45)]

        transition-colors
        duration-500
      "
    >
      {/* Background Blobs */}

      <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-indigo-500/15 blur-3xl" />

      <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-500/15 blur-3xl" />

      <div className="relative z-10">
        {/* Badge */}

        <div
          className="
            inline-flex
            items-center
            gap-2

            rounded-full

            border
            border-emerald-200
            dark:border-emerald-500/20

            bg-emerald-50/90
            dark:bg-emerald-500/10

            px-4
            py-2

            text-sm
            font-medium

            text-emerald-700
            dark:text-emerald-300
          "
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Available For Opportunities
        </div>

        {/* Heading */}

        <h3
          className="
            mt-6
            text-3xl
            font-bold

            text-slate-900
            dark:text-white
          "
        >
          Get In Touch
        </h3>

        <p
          className="
            mt-4
            leading-7

            text-slate-600
            dark:text-slate-400
          "
        >
          Have a project in mind or just want to say hello? I'd love to hear
          from you.
        </p>

        {/* Profile Section */}

        <div className="mt-12 flex flex-col items-center text-center">
          {/* Profile Image */}

          <div className="relative">
            <div className="absolute inset-0 scale-125 rounded-full bg-gradient-to-r from-indigo-500/40 to-cyan-500/40 blur-2xl" />

            <div className="relative rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 p-1">
              <img
                src={profileImage}
                alt="Divya Dhote"
                className="
                  h-28
                  w-28
                  rounded-full

                  border-4
                  border-white
                  dark:border-slate-900

                  object-cover

                  transition-colors
                  duration-500
                "
              />
            </div>
          </div>

          {/* Name */}

          <h4
            className="
              mt-6

              bg-gradient-to-r
              from-slate-900
              via-indigo-600
              to-cyan-500

              dark:from-white
              dark:via-indigo-300
              dark:to-cyan-300

              bg-clip-text

              text-2xl
              font-bold
              text-transparent
            "
          >
            Divya Dhote
          </h4>

          {/* Location */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.5,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-4
              flex
              items-center
              gap-2.5
            "
          >
            <motion.div
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <MapPin
                size={20}
                className="
                  text-indigo-500
                  drop-shadow-[0_0_8px_rgba(99,102,241,0.45)]
                "
              />
            </motion.div>

            <span
              className="
                bg-gradient-to-r
                from-slate-700
                via-indigo-600
                to-cyan-500

                dark:from-slate-300
                dark:via-indigo-300
                dark:to-cyan-300

                bg-clip-text

                text-sm
                font-medium
                text-transparent

                sm:text-base
              "
            >
              Pandhurna M.P., India
            </span>
          </motion.div>

          {/* Divider */}

          <div
            className="
              my-8
              h-px
              w-full

              bg-gradient-to-r
              from-transparent
              via-indigo-300
              dark:via-indigo-500/40
              to-transparent
            "
          />

          {/* Contact Text */}

          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]

              text-slate-500
              dark:text-slate-400
            "
          >
            Contact Me
          </p>

          {/* Social Icons */}

          <div className="mt-7 flex gap-5">
            {socials.map((social, index) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    y: -8,
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className={`
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center

                    rounded-2xl

                    bg-gradient-to-br

                    text-white

                    shadow-xl

                    transition-all
                    duration-500

                    hover:rotate-6

                    ${social.className}
                  `}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
