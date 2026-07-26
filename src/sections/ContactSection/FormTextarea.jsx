import clsx from "clsx";

const FormTextarea = ({ label, error, className, ...props }) => {
  return (
    <div>
      {label && (
        <label
          className="
            mb-2
            block
            text-sm
            font-medium

            text-slate-700
            dark:text-slate-300
          "
        >
          {label}
        </label>
      )}

      <textarea
        {...props}
        rows={5}
        className={clsx(
          `
            w-full
            resize-none

            rounded-2xl

            border

            bg-white
            dark:bg-slate-900/60

            px-4
            py-3

            text-slate-900
            dark:text-white

            placeholder:text-slate-400
            dark:placeholder:text-slate-500

            caret-indigo-500

            outline-none

            transition-all
            duration-300

            backdrop-blur-xl

            focus:ring-4
          `,
          error
            ? `
                border-red-300
                focus:border-red-400
                focus:ring-red-100
              `
            : `
                border-slate-200
                dark:border-slate-700

                focus:border-indigo-400
                dark:focus:border-indigo-400

                focus:ring-indigo-100
                dark:focus:ring-indigo-500/20
              `,
          className,
        )}
      />

      {/* Reserved Error Space */}
      <div className="mt-1 h-5">
        <p
          className={clsx(
            `
              text-sm
              text-red-500

              transition-all
              duration-300
            `,
            error ? "opacity-100" : "opacity-0",
          )}
        >
          {error || "\u00A0"}
        </p>
      </div>
    </div>
  );
};

export default FormTextarea;
