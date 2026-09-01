import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import { PRODUCTS } from "@/lib/data";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Lounge Favorites — curated beauty products coming soon from Gisil Beauty Lounge, Aba.",
};

export default function ProductsPage() {
  const wa = whatsappLink(
    "Hello Gisil Beauty Lounge! Please notify me when your products launch. My name is "
  );

  return (
    <>
      <PageHero
        eyebrow="Lounge Favorites"
        title="Products, coming soon"
        sub="The products we use and love in the lounge — curated for you, launching soon."
      />
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center rounded-3xl border border-lavender/20 bg-white p-8 text-center shadow-sm"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-lilac">
                <Sparkles size={28} className="text-lavender" />
              </div>
              <h2 className="mt-6 font-display text-lg">{p.name}</h2>
              <p className="mt-2 rounded-full bg-lilac px-4 py-1 text-xs font-semibold text-plum">
                {p.note}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-lavender px-8 py-4 text-sm font-semibold text-white transition hover:bg-plum"
          >
            Notify Me on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}