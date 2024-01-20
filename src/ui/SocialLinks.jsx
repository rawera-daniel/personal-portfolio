import ExternalLink from "./ExternalLink";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";

function SocialLinks() {
  const className = "size-5 hover:fill-stone-400 transition-all duration-500";
  return (
    <div className=" flex flex-wrap  content-center gap-x-3">
      <ExternalLink href="https://www.linkedin.com/in/rawera-daniel/">
        <FaLinkedinIn className={className} />
      </ExternalLink>
      <ExternalLink href="https://wa.me/251912485944">
        <RiWhatsappFill className={className} />
      </ExternalLink>
      <ExternalLink href="https://twitter.com/Raweradaniel2">
        <FaXTwitter className={className} />
      </ExternalLink>
      <ExternalLink href="https://www.instagram.com/rawera_daniel/">
        <FaInstagram className={className} />
      </ExternalLink>
    </div>
  );
}

export default SocialLinks;
