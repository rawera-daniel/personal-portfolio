import Heading from "../ui/Heading";

function AboutMe() {
  return (
    <div className="py-12 text-stone-900" id="aboutme">
      <Heading>About me</Heading>{" "}
      <p className="mx-auto max-w-[80%] text-xs font-normal leading-relaxed   tracking-wide m:max-w-[80%] m:text-sm m:leading-relaxed md:max-w-[85%] md:text-base lg:max-w-[75%]">
        Hello, I’m Rawera 👋, a front-end developer specializing in JavaScript,
        particularly React, based in Addis Ababa, Ethiopia. I'm a driven
        individual who enjoys planning, building, and utilizing my skills to
        turn code into a robust product. Attention to detail, problem-solving,
        and a love for learning from others are things I like. Outside of
        coding, you'll find me socializing with friends, engaging in
        conversations with open-minded individuals, or discovering new cafes.
      </p>
    </div>
  );
}

export default AboutMe;
