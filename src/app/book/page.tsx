import type { Metadata } from "next";
import { MessageCircle, Phone, Send } from "lucide-react";
import PageHero from "@/components/PageHero";
import { SERVICES } from "@/lib/data";
import { SITE, WHATSAPP_DEFAULT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book",
  description:
    "Book your appointment at Gisil Beauty Lounge, Aba via WhatsApp, booking request form or phone.",
};

const inputClass =
  "mt-2 w-full rounded-2xl border border-lavender/30 bg-white px-5 py-4 text-sm text-plum placeholder:text-plum/40 focus:border-lavender focus:outline-none focus:ring-2 focus:ring-lavender/30";

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Book"
        title="Reserve your ritual"
        sub="Choose the way that feels most comfortable — WhatsApp is fastest."
      />
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <a
              href={WHATSAPP_DEFAULT}
              target="_blank"
              rel="noreferrer"
              className="block rounded-3xl bg-lavender p-8 text-white shadow-sm transition hover:bg-plum"
            >
              <MessageCircle size={28} />
              <h2 className="mt-4 font-display text-2xl">Book via WhatsApp</h2>
              <p className="mt-2 text-sm text-white/80">
                Instant, personal and fastest. Send us your service, preferred date and name.
              </p>
            </a>
            <a
              href={SITE.phoneHref}
              className="block rounded-3xl border border-lavender/30 bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <Phone size={28} className="text-lavender" />
              <h2 className="mt-4 font-display text-2xl">Call us</h2>
              <p className="mt-2 text-sm text-plum/70">{SITE.phone} — during business hours.</p>
            </a>
            <div className="rounded-3xl bg-lilac p-8 text-sm leading-6 text-plum/80">
              Deposits secure your slot for Bridal, Frontal Installation and Custom Wigging.
              We confirm every booking personally.
            </div>
          </div>

          <form
            action="https://formsubmit.co/gisilbeauty1@gmail.com"
            method="POST"
            className="rounded-3xl border border-lavender/20 bg-white p-8 shadow-sm lg:col-span-3"
          >
            <input type="hidden" name="_subject" value="New Booking Request - Gisil Beauty Lounge" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <h2 className="font-display text-2xl">Booking request form</h2>
            <p className="mt-2 text-sm text-plum/60">
              We reply within business hours to confirm your appointment.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium">
                Full name
                <input required name="Full Name" placeholder="Your name" className={inputClass} />
              </label>
              <label className="block text-sm font-medium">
                Phone / WhatsApp
                <input required name="Phone" type="tel" placeholder="+234..." className={inputClass} />
              </label>
              <label className="block text-sm font-medium">
                Email
                <input required name="Email" type="email" placeholder="you@email.com" className={inputClass} />
              </label>
              <label className="block text-sm font-medium">
                Service
                <select required name="Service" className={inputClass} defaultValue="">
                  <option value="" disabled>Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.name}>{s.name}</option>
                  ))}
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </label>
              <label className="block text-sm font-medium">
                Preferred date
                <input required name="Preferred Date" type="date" className={inputClass} />
              </label>
              <label className="block text-sm font-medium">
                Preferred time
                <input name="Preferred Time" placeholder="e.g. 2:00 PM" className={inputClass} />
              </label>
              <label className="block text-sm font-medium sm:col-span-2">
                Notes
                <textarea name="Notes" rows={4} placeholder="Hair length, inspiration, allergies, anything we should know..." className={inputClass} />
              </label>
            </div>

            <button
              type="submit"
              className="mt-8 flex items-center gap-2 rounded-full bg-lavender px-8 py-4 text-sm font-semibold text-white transition hover:bg-plum"
            >
              <Send size={16} /> Send booking request
            </button>
          </form>
        </div>
      </section>
    </>
  );
}