function Heading({ children }) {
  return (
    <h2 className="mx-auto mb-6 w-[15%] border-b-[1.5px] border-solid border-stone-900 pb-2 text-xl  font-semibold uppercase tracking-wider">
      {children}
    </h2>
  );
}

export default Heading;
