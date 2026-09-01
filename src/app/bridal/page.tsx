import type { Metadata } from "next";
import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bridal & Events",
  description:
    "Bridal hair and makeup packages in Aba — trials, bridal party styling and mobile services by Gisil Beauty Lounge.",
};

const PACKAGES = [
  {
    name: "The Bridal Composition",
    desc: "Our signature bridal experience for the bride who wants everything composed in one calm place.",
    includes: ["Pre-wedding trial session", "Bridal hair with premium extensions", "Bridal makeup with touch-up kit", "Day-of scheduling & calm preparation"],
  },
  {
    name: "The Traditional Day",
    desc: "A regal look composed around your traditional attire, beads and colours.",
    includes: ["Traditional hair styling", "Long-wear makeup for the day", "Coordinated touch-ups", "Family add-ons available"],
  },
  {
    name: "The Bridal Party",
    desc: "Bride plus up to four guests, styled together in the lounge or on location.",
    includes: ["Bride hair & makeup", "Up to 4 guests styled", "Group scheduling", "Mobile option within Aba"],
  },
];

export default function BridalPage() {
  const wa = whatsappLink(
    "Hello Gisil Beauty Lounge! I would like to enquire about a bridal booking. My wedding date is "
  );

  return (
    <>
      <PageHero
        eyebrow="Bridal & Events"
        title="Your wedding, composed"
        sub="From first look to last dance — hair and makeup that stay flawless, calm and unmistakably you."
      />
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {PACKAGES.map((p) => (
            <div key={p.name} className="rounded-3xl border border-lavender/20 bg-white p-8 shadow-sm">
              <h2 className="font-display text-2xl">{p.name}</h2>
              <p className="mt-3 text-sm leading-6 text-plum/70">{p.desc}</p>
              <ul className="mt-6 space-y-3">
                {p.includes.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-plum/80">
                    <Check size={16} className="mt-0.5 shrink-0 text-lavender" /> {i}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-plum/60">Bespoke pricing upon consultation.</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-3xl bg-lilac p-10 text-center">
          <h2 className="font-display text-2xl">Mobile bridal services</h2>
          <p className="mt-4 text-sm leading-7 text-plum/70">
            We travel within Aba for bridal bookings (a logistics fee applies), and inter-state
            upon consultation. Dates are secured with a booking deposit — early reservation is
            recommended for peak wedding seasons.
          </p>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-full bg-lavender px-8 py-4 text-sm font-semibold text-white transition hover:bg-plum"
          >
            Enquire About Your Date
          </a>
        </div>
      </section>
    </>
  );
}