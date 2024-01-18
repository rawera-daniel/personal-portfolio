import ScrollingLink from "../ui/ScrollingLink";

function Header() {
  return (
    <header className="bg-stone-950">
      <nav className="px-3 py-6">
        <ul className="flex cursor-pointer items-center justify-center space-x-8 text-base font-semibold text-stone-50">
          <li>
            <ScrollingLink to="aboutme">About me</ScrollingLink>
          </li>
          <li>
            <ScrollingLink to="myskills">My skills</ScrollingLink>
          </li>
          <li>
            <ScrollingLink to="portfolio">Portfolio</ScrollingLink>
          </li>
          <li>
            <ScrollingLink to="getintouch" durations="800">
              Get in touch
            </ScrollingLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
