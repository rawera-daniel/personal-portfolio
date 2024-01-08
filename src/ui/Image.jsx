function Image({ src, alt, className = "h-auto w-full object-cover" }) {
  return <img src={src} alt={alt} className={className} />;
}

export default Image;
