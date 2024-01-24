import { Link } from "react-scroll";

function ScrollingLink({ to, setIsNavExpanded, durations = "500", children }) {
  const handleClick = () => {
    setIsNavExpanded?.(false);
  };

  return (
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      duration={+durations}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}

export default ScrollingLink;
