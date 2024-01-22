import SocialLinks from "../ui/SocialLinks";

function Footer() {
  return (
    <footer className="bg-stone-950">
      <div className="mx-auto flex flex-col flex-wrap content-center justify-center space-y-4 px-2 py-5 m:justify-between  m:space-y-6 sm:max-w-[90%] sm:flex-row md:max-w-[80%] lg:max-w-[75%]">
        <SocialLinks />
        <p className="text-sm font-normal tracking-wider sm:translate-y-[-12px]">
          Designed & Built by Rawera Daniel
        </p>
      </div>
    </footer>
  );
}

export default Footer;
