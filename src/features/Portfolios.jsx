import ExternalLink from "../ui/ExternalLink";
import Heading from "../ui/Heading";
import ProjectLists from "../ui/ProjectLists";
import GithubIcon from "../ui/GithubIcon";
import Link from "../ui/Link";
import Button from "./Button";

function Portfolios() {
  return (
    <div className="py-12 text-stone-900" id="portfolio">
      <Heading>Portfolio</Heading>
      <p className="mb-10 text-sm font-normal tracking-wide sm:text-base md:text-lg">
        Curious what I've been up to? Check out this!
      </p>
      <div className="mx-auto  mb-10 grid max-w-[30%] grid-cols-[auto] gap-y-6 m:max-w-[35%] m:gap-x-6 m:gap-y-6 sm:grid-cols-[auto_auto] md:max-w-[55%] md:gap-x-10 md:gap-y-10 lg:max-w-[75%]">
        <ProjectLists
          src="/Screenshot 2023-12-26 101030.png"
          alt="A screenshot of the homepage of The wild oasis"
          title="The wild oasis"
          description="A management dashboard for hotel"
        >
          <ExternalLink href="https://github.com/rawera-daniel/the-wild-oasis">
            <GithubIcon />
          </ExternalLink>
          <ExternalLink href="https://the-wild-oasis-rawera.vercel.app/">
            <Link />
          </ExternalLink>
        </ProjectLists>

        <ProjectLists
          src="/Screenshot 2023-12-25 170458.png"
          alt="A screenshot of the homepage of Fast React Pizza"
          title="Fast React Pizza"
          description="A website for ordering pizzas"
        >
          <ExternalLink href="https://github.com/rawera-daniel/Fast-react-pizza">
            <GithubIcon />
          </ExternalLink>
          <ExternalLink href="https://fast-react-pizza-jet.vercel.app/">
            <Link />
          </ExternalLink>
        </ProjectLists>

        <ProjectLists
          src="/Screenshot 2023-12-27 130947.png"
          alt="A screenshot of the homepage of forkify recipe applicaton"
          title="Forkify Recipe applicaton"
          description="Searching for meal recipes"
        >
          <ExternalLink href="https://github.com/rawera-daniel/Forkify-Recipe-applicaton">
            <GithubIcon />
          </ExternalLink>
          <ExternalLink href="https://forkify-rawera.netlify.app">
            <Link />
          </ExternalLink>
        </ProjectLists>

        <ProjectLists
          src="/Screenshot 2023-12-27 114135.png"
          alt="A screenshot of the homepage of Omnifood"
          title="Omnifood"
          description="A health meal delivery"
        >
          <ExternalLink href="https://github.com/rawera-daniel/Omnifood-project">
            <GithubIcon />
          </ExternalLink>
          <ExternalLink href="https://omnifood-rawera.netlify.app/">
            <Link />
          </ExternalLink>
        </ProjectLists>
      </div>

      <Button type="with">
        <span className="translate-y-0.5">See more</span>
        <ExternalLink href="https://github.com/rawera-daniel">
          <GithubIcon />
        </ExternalLink>
      </Button>
    </div>
  );
}

export default Portfolios;
