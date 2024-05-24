function ExperienceLists({ children }) {
  return (
    <li className="mb-1 flex  before:relative before:translate-y-[-7px] before:text-2xl before:text-rose-500 before:content-['▹']  m:text-sm m:before:translate-y-[-6px] md:before:translate-y-[-6px]">
      <p className="text-xs leading-relaxed m:text-sm m:leading-relaxed md:text-base">
        {children}
      </p>
    </li>
  );
}

export default ExperienceLists;
