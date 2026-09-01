import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import PageHero from "@/components/PageHero";
import BookingCTA from "@/components/BookingCTA";
import { FAQS } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about booking, deposits, cancellations and aftercare at Gisil Beauty Lounge, Aba.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered"
        sub="Everything you need to know before your visit."
      />
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl space-y-5">
          {FAQS.map((f) => (
            <details
              key={f.question}
              className="group rounded-3xl border border-lavender/20 bg-white p-6 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg">
                {f.question}
                <ChevronDown
                  size={20}
                  className="shrink-0 text-lavender transition group-open:rotate-180"
                />
              </summary>
              <p className="mt-4 text-sm leading-7 text-plum/70">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <BookingCTA />
    </>
  );
}