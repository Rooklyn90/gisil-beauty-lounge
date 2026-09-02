import Link from "next/link";
import type { Artist } from "@/lib/data";

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <Link
      href={`/artists/${artist.slug}`}
      className="group overflow-hidden rounded-3xl border border-lavender/20 bg-white shadow-sm transition hover:shadow-lg"
    >
      <div className="h-72 overflow-hidden">
        <img
          src={artist.image}
          alt={artist.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl">{artist.name}</h3>
        <p className="mt-1 text-sm text-lavender">{artist.role}</p>
        <p className="mt-3 text-xs text-plum/60">{artist.specialties.join(" · ")}</p>
      </div>
    </Link>
  );
}
