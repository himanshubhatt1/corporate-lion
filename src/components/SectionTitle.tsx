type SectionTitleProps = {
  eyebrow: string;
  title: string;
  accent?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
};

export function SectionTitle({
  eyebrow,
  title,
  accent,
  align = "center",
  children
}: SectionTitleProps) {
  const titleParts = accent ? title.split(accent) : [title];

  return (
    <div className={`section-title ${align === "left" ? "section-title--left" : ""}`} data-reveal="up">
      <span className="eyebrow">{eyebrow}</span>
      <h2>
        {accent && titleParts.length > 1 ? (
          <>
            {titleParts[0]}
            <em>{accent}</em>
            {titleParts.slice(1).join(accent)}
          </>
        ) : (
          title
        )}
      </h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}
