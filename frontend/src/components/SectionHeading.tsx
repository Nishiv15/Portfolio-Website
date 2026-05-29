type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mb-3 text-xs font-extrabold uppercase tracking-normal text-primary">{eyebrow}</p>
      <h2 className="text-3xl font-black leading-tight tracking-normal text-foreground sm:text-5xl">{title}</h2>
    </div>
  );
}
