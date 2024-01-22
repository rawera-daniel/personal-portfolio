function Lable({
  label,
  children,
  smWidth,
  className = "self-start sm:text-sm text-xs capitalize tracking-wider",
}) {
  return (
    <div className={`flex flex-col gap-y-1.5 sm:w-[${smWidth}]`}>
      {/* // <div className="flex flex-col gap-y-1.5 sm:w-[45%]"> */}
      <label htmlFor={children.props?.id} className={className}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default Lable;
