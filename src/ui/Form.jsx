import { HiOutlinePaperAirplane } from "react-icons/hi2";
import Button from "../features/Button";
import Lable from "./Lable";
import { useState } from "react";
import toast from "react-hot-toast";
import { useEmailValidation } from "../hooks/useEmailValidation";

function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  const [isValid, handleEmail] = useEmailValidation(setEmail);

  const className =
    "border-b-[0.094rem] border-solid border-current pb-1 pr-1 sm:text-base text-sm font-medium outline-0";

  async function sendEmail(e) {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/5f37aafd7e5383d16efc78c749d9c732",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            message: body,
          }),
        },
      );
      if (!res.ok) throw Error();
      if (res.ok && isValid) {
        toast.success("Sent! I'll be in touch");
        setEmail("");
        setName("");
        setBody("");
      }
    } catch (err) {
      toast.error("Something went wrong. Try again!");
    }
  }

  return (
    <form
      className="mx-auto w-[80%] sm:w-[90%] md:w-[70%] lg:w-[50%] "
      onSubmit={sendEmail}
    >
      <div className="mb-8 flex flex-col space-y-8 sm:flex-row sm:justify-between sm:space-y-0">
        <Lable label="Your Name" smWidth="w-[45%]">
          <input
            type="text"
            name="yourname"
            id="yourname"
            placeholder="Enter Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={className}
          />
        </Lable>

        <Lable label="Your email" smWidth="w-[45%]">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your email address"
            required
            value={email}
            onChange={handleEmail}
            className={className}
          />
          {isValid ? null : (
            <p className="translate-x-[-56px] text-sm text-red-500 ">
              Please provide a vaild email address
            </p>
          )}
        </Lable>
      </div>

      <Lable label="Your message">
        <textarea
          type="text"
          name="message"
          id="message"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className={`${className} h-24 `}
        ></textarea>
      </Lable>

      <div className="mt-6">
        <Button type="withb">
          <span className="translate-x-[-4px] translate-y-[-2px]">Send</span>{" "}
          <HiOutlinePaperAirplane className="size-4 md:size-5" />{" "}
        </Button>
      </div>
    </form>
  );
}

export default Form;
