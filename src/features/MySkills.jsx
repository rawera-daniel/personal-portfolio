import Heading from "../ui/Heading";
import Image from "../ui/Image";

function MySkills() {
  const className = "lg:size-14 md:size-16 sm:size-20 size-24";
  return (
    <div className="py-12  text-stone-900" id="myskills">
      <Heading>My skills</Heading>
      <div className=" mx-8 flex flex-wrap items-center  justify-center space-x-2">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
          alt="HTML"
          className={className}
        />

        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
          alt="CSS"
          className={className}
        />

        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
          alt="Tailwind CSS"
          className={className}
        />

        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JavaScript"
          className={className}
        />

        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          alt="TypeScript"
          className={className}
        />

        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          alt="React"
          className={className}
        />

        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
          alt="Github"
          className={className}
        />
      </div>
    </div>
  );
}

export default MySkills;
