import Heading from "../ui/Heading";
import Form from "../ui/Form";

function Contact() {
  return (
    <div className="mb-6 py-12 tracking-wide text-stone-900" id="getintouch">
      <Heading>Get in touch</Heading>
      <p className="mb-10 text-lg font-normal tracking-wide">
        Got a question, project needing a hand, or interested in collaborating?
        Let's tackle it together!
      </p>

      <Form />
    </div>
  );
}

export default Contact;
