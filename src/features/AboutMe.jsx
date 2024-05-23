import Heading from "../ui/Heading";

function AboutMe() {
  return (
    <div className="py-12 text-stone-900" id="aboutme">
      <Heading>About me</Heading>{" "}
      <p className="mx-auto max-w-[80%] text-xs font-normal leading-relaxed   tracking-wide m:max-w-[80%] m:text-sm m:leading-relaxed md:max-w-[85%] md:text-base lg:max-w-[75%]">
        Hello, I’m Rawera 👋, I've been very interested in tech since I was
        young, but I couldn't pursue my true passion in college. After a couple
        years, I decided to quit my job to teach myself coding full-time,
        focusing on in-depth JavaScript courses, especially React. Now that I
        have completed those and have a bunch of real-world projects under my
        belt. As a self-taught developer, the joy of writing code, testing it,
        and creating real-world projects keeps me motivated and dedicated to
        improving my skills.
      </p>
    </div>
  );
}

export default AboutMe;
