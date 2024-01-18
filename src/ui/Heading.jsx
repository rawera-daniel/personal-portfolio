function Heading({ children }) {
  return (
    <h2 className="mx-auto mb-6 w-[15%] border-b-[1.5px] border-solid border-stone-900 pb-2 text-3xl font-semibold uppercase  tracking-wider md:text-2xl lg:text-xl">
      {children}
    </h2>
  );
}

export default Heading;
