import ExternalLink from "../ui/ExternalLink";

function Button({ children, type, onClick }) {
  const base =
    "inline-block  rounded-full bg-rose-600 tracking-wide text-stone-50  transition-colors duration-300 hover:bg-rose-500 focus:bg-rose-500 focus:outline-none focus:ring focus:ring-rose-500 focus:ring-offset-2";

  const styles = {
    primary:
      base +
      " lg:px-7 sm:px-6 sm:py-3 sm:text-sm px-5 py-3 text-xs font-semibold",
    with:
      base +
      " m:px-7 m:pb-3 px-6  pb-2.5 pt-3 lg:text-base text-sm font-medium",
    withb:
      base +
      " px-8 pb-2.5 pt-3.5 sm:pb-2.5 sm:pt-4 md:text-base text-sm font-medium",
  };

  if (type === "with" || type === "withb")
    return (
      <button className={styles[type]}>
        <div className="flex translate-x-1 flex-wrap  content-center justify-center  gap-x-1">
          {children}
        </div>
      </button>
    );

  if (onClick)
    return (
      <button
        onClick={onClick}
        className="absolute right-6 top-4 block transition-all duration-500 ease-in sm:hidden"
      >
        {children}
      </button>
    );

  return (
    <ExternalLink href="/Rawera-CV-V2.pdf">
      <button className={styles[type]}>{children}</button>
    </ExternalLink>
  );
}

export default Button;
