import Link from "next/link";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SITE, WHATSAPP_DEFAULT } from "@/lib/site";
import SocialLinks from "@/components/SocialLinks";

const EXPLORE = [
  { href: "/services", label: "Services" },
  { href: "/artists", label: "Artists" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/bridal", label: "Bridal & Events" },
  { href: "/menu", label: "Service Menu" },
  { href: "/book", label: "Book Now" },
];

export default function Footer() {
  return (
    <footer className="bg-plum text-porcelain">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/logo.png"
            alt="Gisil Beauty Lounge logo"
            width={64}
            height={64}
            className="h-16 w-16 object-contain brightness-150"
          />
          <p className="mt-4 font-display text-xl">Gisil Beauty Lounge</p>
          <p className="mt-2 text-sm text-porcelain/70">{SITE.tagline}</p>
          <div className="mt-6">
            <SocialLinks dark />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-lavender">
            Explore
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {EXPLORE.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-porcelain/80 transition hover:text-porcelain">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-lavender">
            Visit
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-porcelain/80">
            <li className="flex gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-lavender" />
              {SITE.address}
            </li>
            <li className="flex gap-2">
              <Phone size={16} className="shrink-0 text-lavender" />
              <a href={SITE.phoneHref} className="hover:text-porcelain">{SITE.phone}</a>
            </li>
            <li className="flex gap-2">
              <Mail size={16} className="shrink-0 text-lavender" />
              <a href={`mailto:${SITE.email}`} className="hover:text-porcelain">{SITE.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-lavender">
            Hours
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-porcelain/80">
            {SITE.hours.map((h) => (
              <li key={h.days} className="flex gap-2">
                <Clock size={16} className="mt-0.5 shrink-0 text-lavender" />
                <span>
                  {h.days}
                  <br />
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-full bg-lavender px-6 py-3 text-sm font-semibold text-white transition hover:bg-porcelain hover:text-plum"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-porcelain/10 py-6 text-center text-xs text-porcelain/60">
        © {new Date().getFullYear()} Gisil Beauty Lounge. All rights reserved.
      </div>
    </footer>
  );
}
