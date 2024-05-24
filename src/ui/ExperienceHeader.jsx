function ExperienceHeader({ children, companyName }) {
  return (
    <h3 className="mb-1 text-sm font-medium m:text-sm sm:text-sm md:text-base">
      <span>{children}</span>
      <span className="font-semibold text-rose-500">
        &nbsp;@&nbsp; {companyName}
      </span>
    </h3>
  );
}

export default ExperienceHeader;
