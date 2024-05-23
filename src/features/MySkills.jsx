import Heading from "../ui/Heading";
import Image from "../ui/Image";

function MySkills() {
  const className = "sm:size-14 m:size-9 size-8";
  return (
    <div className="py-12 text-stone-900" id="myskills">
      <Heading>My skills</Heading>
      <div className=" mx-8 flex flex-wrap items-center justify-center gap-y-4 space-x-3 m:space-x-2">
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
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg"
          alt="Tailwind CSS"
          className={className}
        />

        <Image
          src="/styled-components.png"
          alt="styled components"
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
