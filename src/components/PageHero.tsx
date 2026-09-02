export default function PageHero({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <section className="bg-lilac px-6 pb-16 pt-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-lavender">{eyebrow}</p>
      <h1 className="mt-3 font-display text-4xl md:text-5xl">{title}</h1>
      {sub && <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-plum/70">{sub}</p>}
    </section>
  );
}
