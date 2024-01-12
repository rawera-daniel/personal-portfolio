import SocialLinks from "../ui/SocialLinks";

function Footer() {
  return (
    <footer className=" bg-stone-950 ">
      <div className="mx-auto flex w-3/4 flex-wrap content-center justify-between px-2 py-5">
        <SocialLinks />
        <p className="text-sm font-normal tracking-wider">
          Designed & Built by Rawera Daniel
        </p>
      </div>
    </footer>
  );
}

export default Footer;
