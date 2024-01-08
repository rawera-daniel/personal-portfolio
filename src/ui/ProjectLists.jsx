import Image from "./Image";

function ProjectLists({ src, alt, className, title, description, children }) {
  return (
    <figure className="overflow-hidden rounded-xl shadow-[0_24px_48px_0_rgba(0,0,0,0.07)] ">
      <Image src={src} alt={alt} className={className} />
      <div className=" px-6 py-8 text-start tracking-wide">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-base">{description}</p>
        <div className="mt-4 flex  content-center  space-x-4 px-1 ">
          {children}
        </div>
      </div>
    </figure>
  );
}

export default ProjectLists;
