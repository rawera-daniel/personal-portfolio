import Heading from "../ui/Heading";

function MySkills() {
  return (
    <div className="py-12  text-stone-900">
      <Heading>My skills</Heading>
      <div className=" mx-8 flex flex-wrap items-center  justify-center space-x-2">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
          alt="HTML"
          width="55"
          height="60"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
          alt="CSS"
          width="55"
          height="60"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
          alt="Tailwind CSS"
          width="70"
          height="60"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JavaScript"
          width="50"
          height="60"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          alt="TypeScript"
          width="50"
          height="60"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          alt="React"
          width="55"
          height="60"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
          alt="Github"
          width="55"
          height="60"
        />
      </div>
    </div>
  );
}

export default MySkills;
