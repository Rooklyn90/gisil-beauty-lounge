import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import HeroVideo from "@/components/HeroVideo";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ArtistCard from "@/components/ArtistCard";
import BookingCTA from "@/components/BookingCTA";
import SocialLinks from "@/components/SocialLinks";
import { SERVICES, ARTISTS, LOOKS, TESTIMONIALS } from "@/lib/data";
import { SITE, WHATSAPP_DEFAULT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gisil Beauty Lounge | Beauty, composed around you.",
  description:
    "Premium beauty lounge in Aba, Abia State, Nigeria for frontal installation, custom wigs, bridal hair, makeup, luxury nails, pedicure and lash extensions.",
};

export default function Home() {
  return (
    <>
      {/* SPLIT HERO — portrait video on the right */}
      <section className="px-6 pb-24 pt-16 lg:pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-lavender">
              Hair · Wigs · Makeup · Nails · Lashes
            </p>
            <h1 className="mt-6 font-display text-5xl leading-tight md:text-6xl">
              Beauty, composed around you.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-plum/70 lg:mx-0">
              Gisil Beauty Lounge is a premium beauty lounge in Aba for frontal
              installation, custom wigs, bridal hair, makeup, luxury nails and
              lash extensions — every appointment designed as a personal ritual.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 lg:items-start lg:justify-start lg:flex-row">
              <a
                href={WHATSAPP_DEFAULT}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-lavender px-8 py-4 text-sm font-semibold text-white transition hover:bg-plum"
              >
                Book via WhatsApp
              </a>
              <Link
                href="/services"
                className="rounded-full border border-plum/20 px-8 py-4 text-sm font-semibold transition hover:bg-lilac"
              >
                Explore Services
              </Link>
            </div>
            <p className="mt-8 flex items-center justify-center gap-2 text-sm text-plum/60 lg:justify-start">
              <MapPin size={16} className="text-lavender" /> {SITE.address}
            </p>
          </div>
          <HeroVideo />
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="bg-lilac px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl leading-snug md:text-4xl">
            A beauty lounge designed around craftsmanship, calm and personal ritual.
          </h2>
          <p className="mt-6 text-lg leading-8 text-plum/70">
            Every visit begins with a consultation and ends with a result that
            feels personal, polished and effortlessly you.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Signature Services"
              title="Composed for every occasion"
              sub="From undetectable frontals to bridal artistry — bespoke pricing upon consultation."
            />
            <Link
              href="/services"
              className="group flex items-center gap-2 text-sm font-semibold text-lavender"
            >
              View all services
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ARTISTS */}
      <section className="bg-lilac px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="The Artists"
              title="Specialists in their craft"
              sub="A collective of artists dedicated to precision, artistry and personal expression."
            />
            <Link
              href="/artists"
              className="group flex items-center gap-2 text-sm font-semibold text-lavender"
            >
              Meet the artists
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {ARTISTS.map((a) => (
              <ArtistCard key={a.slug} artist={a} />
            ))}
          </div>
        </div>
      </section>

      {/* LOOKBOOK PREVIEW */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Lookbook"
              title="Recent transformations"
              sub="A glimpse of our work — follow us for daily looks."
            />
            <Link
              href="/lookbook"
              className="group flex items-center gap-2 text-sm font-semibold text-lavender"
            >
              Open the lookbook
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LOOKS.slice(0, 4).map((look) => (
              <figure
                key={look.title}
                className="group relative overflow-hidden rounded-3xl shadow-sm"
              >
                <img
                  src={look.image}
                  alt={look.title}
                  loading="lazy"
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
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
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-plum px-6 py-24 text-porcelain">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            center
            eyebrow="Client Experiences"
            title="Loved across Aba"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.author}
                className="rounded-3xl border border-porcelain/10 bg-porcelain/5 p-8"
              >
                <p className="text-base leading-7">“{t.quote}”</p>
                <footer className="mt-6 text-sm uppercase tracking-[0.25em] text-lavender">
                  {t.author} · {t.service}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Visit the Lounge"
            title="Find us in Aba"
            sub="A calm, private space designed for beauty, rest and transformation."
          />
          <div className="rounded-3xl border border-lavender/20 bg-white p-8 shadow-sm">
            <ul className="space-y-4 text-sm text-plum/80">
              <li className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-lavender" /> {SITE.address}
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="shrink-0 text-lavender" />
                <a href={SITE.phoneHref} className="hover:text-plum">{SITE.phone}</a>
              </li>
              {SITE.hours.map((h) => (
                <li key={h.days} className="flex gap-3">
                  <Clock size={18} className="shrink-0 text-lavender" />
                  <span>{h.days}: {h.time}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
