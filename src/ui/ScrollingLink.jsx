import { Link } from "react-scroll";

function ScrollingLink({ to, duration = "500", children }) {
  return (
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      duration={duration}
    >
      {children}
    </Link>
  );
}

export default ScrollingLink;
