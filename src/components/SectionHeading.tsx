export default function SectionHeading({
  eyebrow,
  title,
  sub,
  center = false,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-lavender">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-base leading-7 text-plum/70">{sub}</p>}
    </div>
  );
}
