import { Link } from "react-scroll";

function ScrollingLink({ to, durations = "500", children }) {
  return (
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      duration={+durations}
    >
      {children}
    </Link>
  );
}

export default ScrollingLink;
