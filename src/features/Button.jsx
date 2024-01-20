import ExternalLink from "../ui/ExternalLink";

function Button({ children, type }) {
  const base =
    "inline-block rounded-full bg-rose-600 tracking-wide text-stone-50 transition-colors duration-300 hover:bg-rose-500 focus:bg-rose-500 focus:outline-none focus:ring focus:ring-rose-500 focus:ring-offset-2";

  const styles = {
    primary:
      base +
      " md:px-7 md:py-3 sm:px-8 sm:py-4 md:text-sm px-9 py-5  sm:text-base text-lg font-semibold",
    with:
      base +
      "m:px-6 m:pb-2.5 m:pt-3 px-6 pb-2.5 pt-3 lg:text-base text-sm font-medium",
    withb: base + " px-7 pb-2.5 pt-4 text-base font-medium",
  };

  if (type === "with" || type === "withb")
    return (
      <button className={styles[type]}>
        <div className="flex translate-x-1 flex-wrap  content-center justify-center gap-x-1">
          {children}
        </div>
      </button>
    );

  return (
    <ExternalLink href="/Rawera-CV.pdf">
      <button className={styles[type]}>{children}</button>
    </ExternalLink>
  );
}

export default Button;
