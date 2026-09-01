import type { Metadata } from "next";
import Image from "next/image";
import { Clock, MessageCircle } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";
import { CATEGORIES, SERVICES } from "@/lib/data";
import { SITE, WHATSAPP_DEFAULT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Menu",
  description:
    "The Gisil Beauty Lounge service menu — hair, wigs, makeup, nails and lashes. Bespoke pricing upon consultation.",
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-porcelain pb-32">
      <header className="flex items-center justify-center px-6 pt-10">
        <Image
          src="/logo.png"
          alt="Gisil Beauty Lounge logo"
          width={64}
          height={64}
          className="h-16 w-16 object-contain"
        />
      </header>

      <div className="mx-auto mt-6 max-w-xl px-6 text-center">
        <h1 className="font-display text-3xl">Service Menu</h1>
        <p className="mt-2 text-sm text-plum/70">{SITE.tagline}</p>
      </div>

      <main className="mx-auto mt-12 max-w-xl space-y-12 px-6">
        {CATEGORIES.map((cat) => (
          <section key={cat}>
            <h2 className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-lavender">
              {cat}
            </h2>
            <div className="mt-6 space-y-4">
              {SERVICES.filter((s) => s.category === cat).map((s) => (
                <div
                  key={s.slug}
                  className="rounded-3xl border border-lavender/20 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-lg">{s.name}</h3>
                    <span className="flex shrink-0 items-center gap-1 text-xs text-plum/60">
                      <Clock size={12} /> {s.duration}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-plum/70">{s.description}</p>
                  <p className="mt-3 text-xs font-semibold text-lavender">
                    Bespoke pricing upon consultation
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a
                href={WHATSAPP_DEFAULT}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-lavender underline underline-offset-4"
              >
                Book {cat} on WhatsApp
              </a>
            </div>
          </section>
        ))}

        <section className="rounded-3xl bg-lilac p-8 text-center text-sm leading-6 text-plum/80">
          <p className="font-semibold text-plum">Visit us</p>
          <p className="mt-2">{SITE.address}</p>
          <p className="mt-1">{SITE.phone}</p>
          <div className="mt-4 space-y-1">
            {SITE.hours.map((h) => (
              <p key={h.days}>{h.days}: {h.time}</p>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <SocialLinks />
          </div>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-50 bg-gradient-to-t from-porcelain via-porcelain/95 to-transparent p-4">
        <a
          href={WHATSAPP_DEFAULT}
          target="_blank"
          rel="noreferrer"
          className="mx-auto flex max-w-xl items-center justify-center gap-2 rounded-full bg-lavender px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-plum"
        >
          <MessageCircle size={18} /> Book via WhatsApp
        </a>
      </div>
    </div>
  );
}