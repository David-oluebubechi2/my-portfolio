import Reveal from "./Reveal";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
};

export default function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: PageHeaderProps) {
  return (
    <div className="mx-auto mb-12 w-full max-w-[1170px] px-5 pt-16 md:mb-16 md:pt-20">
      <Reveal>
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="text-4xl font-semibold uppercase leading-tight tracking-tight text-paper md:text-6xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink md:text-base">
            {lead}
          </p>
        )}
      </Reveal>
      {children}
    </div>
  );
}