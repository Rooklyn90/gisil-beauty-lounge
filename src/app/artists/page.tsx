import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ArtistCard from "@/components/ArtistCard";
import BookingCTA from "@/components/BookingCTA";
import { ARTISTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Artists",
  description:
    "Meet the hair, wig, makeup, nail and lash specialists at Gisil Beauty Lounge, Aba.",
};

export default function ArtistsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Artists"
        title="Specialists in their craft"
        sub="Every artist at Gisil Beauty Lounge is dedicated to precision, artistry and personal expression."
      />
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {ARTISTS.map((a) => (
            <ArtistCard key={a.slug} artist={a} />
          ))}
        </div>
      </section>
      <BookingCTA />
    </>
  );
}
