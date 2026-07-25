const NavItem = ({ href, children, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="
        flex
        items-center
        rounded-xl
        px-4
        py-3
        text-base
        font-medium
        text-slate-700
        transition-all
        duration-300
        hover:bg-indigo-50
        hover:text-indigo-600
      "
    >
      {children}
    </a>
  );
};

export default NavItem;
