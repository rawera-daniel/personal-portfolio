function Lable({
  label,
  children,
  className = "self-start text-sm capitalize tracking-wider",
}) {
  return (
    <div className="flex flex-col gap-y-1.5 ">
      <label htmlFor={children.props?.id} className={className}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default Lable;
