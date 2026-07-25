import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import Button from "../../components/ui/Button";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(() => {
    const savedData = localStorage.getItem("contact-form-status");

    if (!savedData) return false;

    try {
      const parsed = JSON.parse(savedData);

      return parsed.sent && Date.now() - parsed.timestamp < 24 * 60 * 60 * 1000;
    } catch {
      return false;
    }
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      localStorage.setItem(
        "contact-form-status",
        JSON.stringify({
          sent: true,
          timestamp: Date.now(),
        }),
      );

      setIsSubmitted(true);

      reset();

      toast.success("Message sent successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message.");
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
          filter: "blur(12px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          flex
          h-full
          flex-col

          rounded-[32px]

          border
          border-white/40
          dark:border-white/10

          bg-white/70
          dark:bg-slate-900/70

          p-5
          sm:p-7
          lg:p-8

          backdrop-blur-2xl

          shadow-[0_20px_70px_rgba(15,23,42,0.08)]
          dark:shadow-[0_25px_80px_rgba(0,0,0,0.45)]

          transition-colors
          duration-500
        "
      >
        <div className="flex flex-col items-center text-center">
          <div
            className="
              flex
              h-20
              w-20
              items-center
              justify-center

              rounded-full

              bg-emerald-100
              dark:bg-emerald-500/15
            "
          >
            <CheckCircle2 size={42} className="text-emerald-600" />
          </div>

          <h3
            className="
              mt-6
              text-2xl
              font-bold

              text-slate-900
              dark:text-white
            "
          >
            Message Sent!
          </h3>

          <p
            className="
              mt-3
              max-w-md
              leading-7

              text-slate-600
              dark:text-slate-400
            "
          >
            Thank you for reaching out. I'll get back to you soon.
          </p>

          <Button
            className="mt-8"
            onClick={() => {
              localStorage.removeItem("contact-form-status");

              setIsSubmitted(false);
            }}
          >
            Send Another Message
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 140,
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
        duration: 2.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        rounded-[32px]

        border
        border-white/40
        dark:border-white/10

        bg-white/70
        dark:bg-slate-900/70

        p-5
        sm:p-7
        lg:p-8

        backdrop-blur-2xl

        shadow-[0_20px_70px_rgba(15,23,42,0.08)]
        dark:shadow-[0_25px_80px_rgba(0,0,0,0.45)]

        transition-colors
        duration-500
      "
    >
      <h3
        className="
          text-xl
          font-bold

          text-slate-900
          dark:text-white

          md:text-xl
          lg:text-2xl
        "
      >
        Let's Build Something Together !
      </h3>

      <p
        className="
          mt-2

          text-slate-600
          dark:text-slate-400
        "
      >
        Fill out the form below and let's connect.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
          mt-6
          space-y-5
        "
      >
        <FormInput
          label="Name"
          placeholder="Enter your name"
          error={errors.name?.message}
          {...register("name", {
            required: "Name is required",
          })}
        />

        <FormInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          error={errors.email?.message}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email",
            },
          })}
        />

        <FormInput
          label="Subject"
          placeholder="Project discussion"
          error={errors.subject?.message}
          {...register("subject", {
            required: "Subject is required",
          })}
        />

        <FormTextarea
          label="Message"
          placeholder="Tell me about your project..."
          error={errors.message?.message}
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
          })}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          rightIcon={
            isSubmitting ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Send size={18} />
            )
          }
          className="
            w-full
            sm:w-auto

            bg-gradient-to-r
            from-indigo-600
            via-purple-600
            to-cyan-500

            shadow-lg
            shadow-indigo-500/20
          "
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
