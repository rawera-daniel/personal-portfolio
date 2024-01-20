function Heading({ children }) {
  return (
    <h2 className="mx-auto mb-6 w-[12%] border-b-[1.5px] border-solid border-stone-900 pb-2 text-sm font-semibold uppercase  tracking-wider m:w-[15%] m:text-base md:text-lg lg:text-xl">
      {children}
    </h2>
  );
}

export default Heading;
