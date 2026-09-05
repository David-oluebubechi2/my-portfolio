import { Link } from "react-router-dom";
import { SwordIcon } from "./icons";

type InfoCardProps = {
  eyebrow: string;
  title: string;
  to?: string;
  external?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  overlay?: boolean;
};

export default function InfoCard({
  eyebrow,
  title,
  to,
  external,
  icon,
  children,
  className = "",
  overlay = true,
}: InfoCardProps) {
  const arrow = external ? (
    <a
      href={external}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} — open external link`}
      className="info-arrow"
    >
      <SwordIcon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-paper" />
    </a>
  ) : to ? (
    <Link to={to} aria-label={`${title} — open page`} className="info-arrow">
      <SwordIcon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-paper" />
    </Link>
  ) : null;

  return (
    <div className={`card group flex h-full flex-col p-6 ${className}`}>
      {icon && <div className="mb-4 flex justify-center">{icon}</div>}

      {children}

      <div className="mt-auto flex items-center justify-between gap-4 pt-8">
        <div className="min-w-0">
          <p className="eyebrow mb-1.5">{eyebrow}</p>
          <h3 className="truncate text-xl font-medium text-paper">{title}</h3>
        </div>
        {arrow}
      </div>

      {overlay && to && (
        <Link
          to={to}
          aria-label={`${title} — open page`}
          className="absolute inset-0 z-[9]"
        />
      )}
      {overlay && external && (
        <a
          href={external}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} — open external link`}
          className="absolute inset-0 z-[9]"
        />
      )}
    </div>
  );
}
