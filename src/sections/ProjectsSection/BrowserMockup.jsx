import { Images } from "lucide-react";

const BrowserMockup = ({ images = [], title, onClick }) => {
  return (
    <div
      className="
        group
        overflow-hidden

        border-b
        border-slate-200
        dark:border-white/10

        bg-white
        dark:bg-slate-900
      "
    >
      <div
        className="
          flex
          items-center
          gap-2

          border-b
          border-slate-200
          dark:border-white/10

          bg-slate-100
          dark:bg-slate-800

          px-4
          py-3
        "
      >
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />

        <div
          className="
            ml-3
            flex-1
            truncate

            rounded-full

            bg-white
            dark:bg-slate-900

            px-3
            py-1

            text-xs
            text-slate-500
            dark:text-slate-400
          "
        >
          {title}
        </div>
      </div>

      <div
        onClick={onClick}
        className="
          relative
          h-[200px]

          cursor-pointer
          overflow-hidden

          bg-slate-100
          dark:bg-slate-800
        "
      >
        <img
          src={images?.[0]}
          alt={title}
          loading="lazy"
          decoding="async"
          className="
            h-full
            w-full

            object-cover

            transition-transform
            duration-700

            group-hover:scale-110
          "
        />

        <div
          className="
            absolute
            inset-0

            flex
            items-center
            justify-center

            bg-black/0
            opacity-0

            transition-all
            duration-500

            group-hover:bg-black/40
            group-hover:opacity-100
          "
        >
          <div
            className="
              flex
              items-center
              gap-2

              rounded-2xl

              bg-white
              dark:bg-slate-900

              px-5
              py-3

              text-sm
              font-semibold

              text-slate-900
              dark:text-white

              shadow-xl

              transition-all
              duration-500

              group-hover:-translate-y-2
            "
          >
            <Images size={16} />
            View Gallery
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowserMockup;
