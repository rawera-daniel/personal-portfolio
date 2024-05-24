import ExperienceDuration from "../ui/ExperienceDuration";
import ExperienceHeader from "../ui/ExperienceHeader";
import ExperienceList from "../ui/ExperienceList";
import ExperienceLists from "../ui/ExperienceLists";
import Heading from "../ui/Heading";

function Experience() {
  return (
    <div className="pb-3 pt-12 text-stone-900" id="experience">
      <Heading>Experience</Heading>
      <div className="mx-auto max-w-[80%] m:max-w-[75%] sm:max-w-[65%] md:max-w-[60%] lg:max-w-[45%]">
        <div class="mb-4">
          <ExperienceHeader companyName="Atomic">
            Front-end Developer
          </ExperienceHeader>
          <ExperienceDuration>February 2024 — Present</ExperienceDuration>
          <ExperienceList>
            <ExperienceLists>
              Build a new feature and correct an existing one using primarily
              React and styled components, following the design specifications
              provided in Figma.
            </ExperienceLists>
            <ExperienceLists>
              Fix any bug that makes the website not work properly. If the bug
              is related to the back-end, report it to the team with an
              explanation
            </ExperienceLists>
          </ExperienceList>
        </div>

        <ExperienceHeader companyName="GIZ African union">
          Facility intern & Junior Administrative Specialist
        </ExperienceHeader>
        <ExperienceDuration>March 2021 — November 2022</ExperienceDuration>
        <ExperienceList>
          <ExperienceLists>
            As a junior administrative specialist, my key responsibility was
            ensuring the smooth flow of daily tasks. This involved collaborating
            with different units that foster my teamwork culture, and
            communicating effectively to prevent misunderstandings.
          </ExperienceLists>
        </ExperienceList>
      </div>
    </div>
  );
}

export default Experience;
