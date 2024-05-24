function ExperienceList({ children }) {
  return (
    <div className="px-5">
      <ui className="list-none text-left before:absolute">{children}</ui>
    </div>
  );
}

export default ExperienceList;
