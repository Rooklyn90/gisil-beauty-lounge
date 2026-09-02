import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ARTISTS } from "@/lib/data";
import { whatsappLink } from "@/lib/site";

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props): Metadata {
  const artist = ARTISTS.find((a) => a.slug === params.slug);
  return {
    title: artist?.name ?? "Artist",
    description: artist?.bio,
  };
}

export default function ArtistDetail({ params }: Props) {
  const artist = ARTISTS.find((a) => a.slug === params.slug);
  if (!artist) notFound();

  const wa = whatsappLink(
    `Hello Gisil Beauty Lounge! I would like to book an appointment with ${artist.name}. My name is `
  );

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/artists"
          className="inline-flex items-center gap-2 text-sm font-semibold text-lavender"
        >
          <ArrowLeft size={16} /> All artists
        </Link>

        <div className="mt-8 grid gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-[2.5rem] shadow-lg">
            <img
              src={artist.image}
              alt={artist.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h1 className="font-display text-4xl md:text-5xl">{artist.name}</h1>
            <p className="mt-2 text-lg text-lavender">{artist.role}</p>
            <p className="mt-6 text-base leading-8 text-plum/80">{artist.bio}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {artist.specialties.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-lilac px-4 py-2 text-xs font-semibold text-plum"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-lavender px-8 py-4 text-center text-sm font-semibold text-white transition hover:bg-plum"
              >
                Book with {artist.name}
              </a>
              <Link
                href="/services"
                className="rounded-full border border-plum/20 px-8 py-4 text-center text-sm font-semibold transition hover:bg-lilac"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
