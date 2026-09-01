import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BookingCTA from "@/components/BookingCTA";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Discover the Gisil Beauty Lounge experience in Aba — our philosophy, our lounge and our consultation-first approach.",
};

const STEPS = [
  { title: "Consultation", desc: "Every visit begins with a conversation about your features, texture, lifestyle and vision." },
  { title: "Composition", desc: "Your artist composes the service around you — products, technique and finish chosen deliberately." },
  { title: "Aftercare", desc: "You leave with personalized aftercare guidance so your result lives beautifully beyond the lounge." },
];

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title="More than a salon — a lounge"
        sub="A calm, private space in Aba designed for beauty, rest and transformation."
      />
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading
            center
            eyebrow="Our Philosophy"
            title="Beauty, composed around you."
            sub="We believe beauty is not one-size-fits-all. It is composed — deliberately, personally, carefully — around your features, your texture and your story."
          />
        </div>

        <div className="mx-auto mt-20 max-w-7xl">
          <SectionHeading
            eyebrow="The Ritual"
            title="How every visit unfolds"
          />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <div key={s.title} className="rounded-3xl border border-lavender/20 bg-white p-8 shadow-sm">
                <p className="font-display text-4xl text-lavender">0{i + 1}</p>
                <h3 className="mt-4 font-display text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-6 text-plum/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-4xl rounded-3xl bg-lilac p-10 text-center">
          <h2 className="font-display text-2xl">Hygiene & care standards</h2>
          <p className="mt-4 text-sm leading-7 text-plum/70">
            Sterilized tools per client, single-use kits where it matters, skin-safe adhesives,
            premium products and a serene, private environment. Your health is part of your beauty.
          </p>
        </div>
      </section>
      <BookingCTA />
    </>
  );
}