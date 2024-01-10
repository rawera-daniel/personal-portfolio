import Lable from "./Lable";

function Form() {
  const className =
    "border-b-[1.5px] border-solid border-current pb-1 pr-1 text-base font-medium outline-0";

  return (
    <form className="mx-auto mb-10 w-1/2 ">
      <div className="mb-16 grid grid-cols-[auto_auto] space-x-24">
        <Lable label="Your Name">
          <input
            type="text"
            name="yourname"
            id="yourname"
            placeholder="Enter Your Name"
            required
            className={className}
          />
        </Lable>

        <Lable label="Your email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your email address"
            required
            className={className}
          />
        </Lable>
      </div>

      <Lable label="Your message">
        <textarea
          type="text"
          name="message"
          id="message"
          className={`${className} h-24 `}
        ></textarea>
      </Lable>
    </form>
  );
}

export default Form;
