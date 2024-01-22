function Lable({
  label,
  children,
  smWidth,
  className = "self-start sm:text-sm text-xs capitalize tracking-wider",
}) {
  return (
    <div className={`flex flex-col gap-y-1.5 sm:${smWidth}`}>
      <label htmlFor={children.props?.id} className={className}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default Lable;
