import Heading from "../ui/Heading";
import Form from "../ui/Form";

function Contact() {
  return (
    <div className="mb-6 py-12 tracking-wide text-stone-900" id="getintouch">
      <Heading>Get in touch</Heading>
      <p className="mx-auto mb-10 max-w-[75%] text-sm font-normal leading-relaxed tracking-wide m:max-w-[85%] sm:max-w-full  sm:text-base  lg:text-lg">
        Got a question, project needing a hand, or interested in collaborating?
        Let's tackle it together!
      </p>
      <Form />
    </div>
  );
}

export default Contact;
