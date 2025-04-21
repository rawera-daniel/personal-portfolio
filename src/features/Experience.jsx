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
          <ExperienceDuration>
            February 2024 — September 2024
          </ExperienceDuration>
          <ExperienceList>
            <ExperienceLists>
              Developed and implemented 3 new features (e.g., text editor, data
              filtering, form and text input element) using React and Styled
              Components based on Figma designs.
            </ExperienceLists>
            <ExperienceLists>
              Debugged data retrieval and API integration issues affecting data
              handling and API integration, simultaneously improving code
              reusability by refactoring repeated logic and features into shared
              functions.
            </ExperienceLists>
            <ExperienceLists>
              Collaborated using GitHub, Trello and Teamhood.
            </ExperienceLists>
          </ExperienceList>
        </div>

        <ExperienceHeader companyName="GIZ African union">
          Facility intern & Junior Administrative Specialist
        </ExperienceHeader>
        <ExperienceDuration>March 2021 — November 2022</ExperienceDuration>
        <ExperienceList>
          <ExperienceLists>
            Coordinated with cross-functional teams to ensure smooth daily
            operations and effective workflow between departments.
          </ExperienceLists>
        </ExperienceList>
      </div>
    </div>
  );
}

export default Experience;
