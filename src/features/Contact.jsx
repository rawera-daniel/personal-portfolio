import Heading from "../ui/Heading";
import Form from "../ui/Form";
import Button from "./Button";
import { HiOutlinePaperAirplane } from "react-icons/hi2";

function Contact() {
  return (
    <div className="py-12  tracking-wide text-stone-900">
      <Heading>Get in touch</Heading>
      <p className="mb-10 text-lg font-normal tracking-wide">
        Got a question, project needing a hand, or interested in collaborating?
        Let's tackle it together!
      </p>

      <Form />
      <Button type="withb">
        <span className="translate-x-[-4px] translate-y-[-4px] ">Send</span>{" "}
        <HiOutlinePaperAirplane className="h-4 w-4" />{" "}
      </Button>
    </div>
  );
}

export default Contact;
