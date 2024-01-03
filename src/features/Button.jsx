function Button({ children }) {
  return (
    <button className=" inline-block rounded-full bg-rose-600 px-7 py-3 text-sm font-semibold tracking-wide text-stone-50 transition-colors duration-300 hover:bg-rose-500 focus:bg-rose-500 focus:outline-none focus:ring focus:ring-rose-500 focus:ring-offset-2">
      {children}
    </button>
  );
}

export default Button;
