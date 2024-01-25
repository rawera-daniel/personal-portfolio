function ExternalLink({ children, href, className }) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      className={className}
      target="_blank"
    >
      {children}
    </a>
  );
}

export default ExternalLink;
