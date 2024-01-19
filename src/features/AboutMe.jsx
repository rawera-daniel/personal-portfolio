import Heading from "../ui/Heading";

function AboutMe() {
  return (
    <div className="py-12 text-stone-900" id="aboutme">
      <Heading>About me</Heading>{" "}
      <p className="mx-auto w-11/12 text-2xl font-normal leading-9 tracking-wider sm:w-5/6 sm:text-xl sm:leading-8 md:text-lg md:tracking-wide lg:w-4/6 lg:text-base">
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
