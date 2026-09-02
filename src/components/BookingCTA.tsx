import Link from "next/link";
import { WHATSAPP_DEFAULT } from "@/lib/site";

export default function BookingCTA() {
  return (
    <section className="bg-plum px-6 py-24 text-center text-porcelain">
      <h2 className="mx-auto max-w-3xl font-display text-4xl md:text-5xl">
        Reserve your moment at Gisil Beauty Lounge.
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-porcelain/70">
        Book via WhatsApp for instant confirmation, or send a booking request and we will get back to you personally.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
        <a
          href={WHATSAPP_DEFAULT}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-lavender px-8 py-4 text-sm font-semibold text-white transition hover:bg-porcelain hover:text-plum"
        >
          Book via WhatsApp
        </a>
        <Link
          href="/book"
          className="rounded-full border border-porcelain/30 px-8 py-4 text-sm font-semibold transition hover:bg-porcelain hover:text-plum"
        >
          Booking Request Form
        </Link>
      </div>
    </section>
  );
}
