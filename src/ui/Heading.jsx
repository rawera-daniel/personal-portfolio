function Heading({ children }) {
  return (
    <h2 className="mx-auto mb-6 max-w-[35%] border-b-[0.094rem] border-solid border-stone-900 pb-2 text-sm font-semibold uppercase  tracking-wider m:max-w-[25%] sm:text-base  md:max-w-[20%] md:text-lg  lg:max-w-[15%] lg:text-xl">
      {children}
    </h2>
  );
}

export default Heading;
