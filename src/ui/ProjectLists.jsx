import Image from "./Image";

function ProjectLists({ src, alt, className, title, description, children }) {
  return (
    <figure className="overflow-hidden rounded-xl shadow-[0_24px_48px_0_rgba(0,0,0,0.07)] transition-all duration-500 hover:translate-y-[-12px] ">
      <Image src={src} alt={alt} className={className} />
      <div className=" px-6 py-8 text-start tracking-wide">
        <h3 className="m:text-2xl m:leading-relaxed text-3xl font-semibold leading-relaxed sm:text-xl sm:leading-relaxed md:text-lg lg:text-base">
          {title}
        </h3>
        <p className="m:text-2xl text-3xl  sm:text-xl md:text-lg lg:text-base">
          {description}
        </p>
        <div className="mt-4 flex  content-center  space-x-4 px-1 ">
          {children}
        </div>
      </div>
    </figure>
  );
}

export default ProjectLists;
