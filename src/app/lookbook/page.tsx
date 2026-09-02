import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SocialLinks from "@/components/SocialLinks";
import { LOOKS } from "@/lib/data";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lookbook",
  description:
    "Explore recent hair, wig, makeup, nail and lash transformations from Gisil Beauty Lounge, Aba.",
};

export default function LookbookPage() {
  return (
    <>
      <PageHero
        eyebrow="Lookbook"
        title="Recent transformations"
        sub="A glimpse of our work across hair, wigs, makeup, nails and lashes."
      />
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl columns-1 gap-6 sm:columns-2 lg:columns-3">
          {LOOKS.map((look) => (
            <figure
              key={look.title}
              className="group relative mb-6 break-inside-avoid overflow-hidden rounded-3xl shadow-sm"
            >
              <img
                src={look.image}
                alt={look.title}
                loading="lazy"
                className="w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-plum/90 to-transparent p-5 text-porcelain">
                <p className="text-xs uppercase tracking-[0.25em] text-lavender">
                  {look.category}
                </p>
                <p className="mt-1 font-display text-lg">{look.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-xl rounded-3xl bg-lilac p-10 text-center">
          <h2 className="font-display text-2xl">See more on Instagram</h2>
          <p className="mt-3 text-sm text-plum/70">
            Daily looks, transformations and behind-the-chair moments live on our socials.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <SocialLinks />
          </div>
          <Link
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-lavender"
          >
            @gisil_hairgasm
            <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
