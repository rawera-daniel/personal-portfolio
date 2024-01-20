import Heading from "../ui/Heading";

function AboutMe() {
  return (
    <div className="py-12 text-stone-900" id="aboutme">
      <Heading>About me</Heading>{" "}
      <p className="mx-auto w-[25%] text-xs font-normal leading-relaxed  tracking-wide sm:w-1/2 sm:text-sm md:w-2/5 md:text-base lg:w-4/6">
        Hello, I’m Rawera 👋, a front-end developer specializing in JavaScript,
        particularly React, based in Addis Ababa, Ethiopia. I'm a driven
        individual who enjoys planning, building, and utilizing my skills to
        turn code into a robust product. Attention to detail, problem-solving,
        and a love for learning from others are key parts of who I am. Outside
        of coding, you'll find me socializing with friends, engaging in
        conversations with open-minded individuals, or discovering new cafes.
      </p>
    </div>
  );
}

export default AboutMe;
