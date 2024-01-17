import { HiOutlinePaperAirplane } from "react-icons/hi2";
import Button from "../features/Button";
import Lable from "./Lable";
import { useState } from "react";
import toast from "react-hot-toast";

function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    // Check if the new email is valid and update the isValid state
    setIsValid(isValidEmail(newEmail));
  };

  const isValidEmail = (email) => {
    // Define the regular expression pattern for a simple email validation
    const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    // Use the test method to check if the email matches the pattern
    return pattern.test(email);
  };

  const className =
    "border-b-[1.5px] border-solid border-current pb-1 pr-1 text-base font-medium outline-0";

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
    <form className="mx-auto mb-10 w-1/2 " onSubmit={sendEmail}>
      <div className="mb-16 grid grid-cols-[auto_auto] space-x-24">
        <Lable label="Your Name">
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

        <Lable label="Your email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your email address"
            required
            value={email}
            onChange={handleEmailChange}
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
          <span className="translate-x-[-4px] translate-y-[-4px] ">Send</span>{" "}
          <HiOutlinePaperAirplane className="h-4 w-4" />{" "}
        </Button>
      </div>
    </form>
  );
}

export default Form;
