import { HiBars3, HiMiniXMark } from "react-icons/hi2";
import ScrollingLink from "../ui/ScrollingLink";
import { useState } from "react";
import Button from "./Button";

function Header() {
  const navLInks = [
    { name: "About me", to: "aboutme" },
    { name: "My skills", to: "myskills" },
    { name: "Experience", to: "experience" },
    { name: "Portfolio", to: "portfolio" },
    { name: "Get in touch", to: "getintouch", durations: "800" },
  ];
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header className="bg-stone-950">
      <nav className="relative max-m:mb-3  sm:mt-2 sm:px-3 sm:py-6">
        <div
          className={`absolute left-0 top-5 w-[100%]  items-center justify-center bg-stone-950 transition-all duration-500 ease-in max-sm:flex  max-sm:min-h-56 sm:bg-inherit   ${
            isNavExpanded
              ? "max-sm:opacity-1 maz-sm:pointer-events-auto max-sm:visible"
              : "max-sm:pointer-events-none max-sm:invisible max-sm:opacity-0"
          }`}
        >
          <ul className="flex cursor-pointer flex-col items-center justify-center gap-y-5 text-base font-semibold tracking-wide text-stone-50  m:gap-y-6  sm:flex-row sm:gap-x-8">
            {navLInks.map((links) => (
              <li key={links.to} className="hover:text-rose-400">
                <ScrollingLink
                  setIsNavExpanded={setIsNavExpanded}
                  to={links.to}
                  durations={links?.durations}
                >
                  {links.name}
                </ScrollingLink>
              </li>
            ))}
          </ul>
        </div>

        <Button onClick={() => setIsNavExpanded(!isNavExpanded)}>
          {isNavExpanded ? (
            <HiMiniXMark className="size-9" />
          ) : (
            <HiBars3 className="size-9" />
          )}
        </Button>
      </nav>
    </header>
  );
}

export default Header;
