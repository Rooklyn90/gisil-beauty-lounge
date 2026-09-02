import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import BookingCTA from "@/components/BookingCTA";
import { CATEGORIES, SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Frontal installation, custom wigs, bridal hair, makeup, luxury nails, pedicure and lash extensions at Gisil Beauty Lounge, Aba.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Hair, wigs, makeup, nails & lashes"
        sub="Every service begins with a consultation. Bespoke pricing upon consultation."
      />
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl space-y-20">
          {CATEGORIES.map((cat) => (
            <div key={cat}>
              <h2 className="font-display text-2xl md:text-3xl">{cat}</h2>
              <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {SERVICES.filter((s) => s.category === cat).map((s) => (
                  <ServiceCard key={s.slug} service={s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <BookingCTA />
    </>
  );
}
