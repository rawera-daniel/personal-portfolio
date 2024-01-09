function Button({ children, type }) {
  const base =
    "inline-block rounded-full bg-rose-600 tracking-wide text-stone-50 transition-colors duration-300 hover:bg-rose-500 focus:bg-rose-500 focus:outline-none focus:ring focus:ring-rose-500 focus:ring-offset-2";

  const styles = {
    primary: base + " px-7 py-3 text-sm font-semibold",
    with: base + " px-7 pb-2.5 pt-3 text-base font-medium",
  };

  if (type === "with")
    return (
      <button className={styles[type]}>
        <div className="flex translate-x-1 flex-wrap  content-center justify-center gap-x-1">
          {children}
        </div>
      </button>
    );

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
