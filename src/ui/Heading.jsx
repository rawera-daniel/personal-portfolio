function Heading({ children }) {
  return (
    <h2 className="mx-auto mb-6 max-w-[12%] border-b-[0.094rem] border-solid border-stone-900 pb-2 text-sm font-semibold uppercase  tracking-wider m:max-w-[15%] m:text-base md:text-lg lg:text-xl">
      {children}
    </h2>
  );
}

export default Heading;
