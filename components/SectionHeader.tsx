import Link from "next/link";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  centered?: boolean;
  action?: string;
  href?: string;
};

export function SectionHeader({ eyebrow, title, text, centered = false, action, href }: SectionHeaderProps) {
  return (
    <div className={centered ? "section-header section-header-centered" : "section-header"}>
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {text ? <p className="lead">{text}</p> : null}
      </div>
      {action && href ? (
        <Link className="button button-light" href={href}>
          {action} →
        </Link>
      ) : null}
    </div>
  );
}
