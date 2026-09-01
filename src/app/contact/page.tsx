import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import PageHero from "@/components/PageHero";
import SocialLinks from "@/components/SocialLinks";
import { SITE, WHATSAPP_DEFAULT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Gisil Beauty Lounge in Aba — call, WhatsApp, email or visit us at 15 Clifford Road.",
};

const inputClass =
  "mt-2 w-full rounded-2xl border border-lavender/30 bg-white px-5 py-4 text-sm text-plum placeholder:text-plum/40 focus:border-lavender focus:outline-none focus:ring-2 focus:ring-lavender/30";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We would love to hear from you"
        sub="Call, chat or visit — the lounge is open six full days a week."
      />
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-3xl border border-lavender/20 bg-white p-8 shadow-sm">
              <ul className="space-y-5 text-sm text-plum/80">
                <li className="flex gap-3">
                  <MapPin size={18} className="shrink-0 text-lavender" /> {SITE.address}
                </li>
                <li className="flex gap-3">
                  <Phone size={18} className="shrink-0 text-lavender" />
                  <a href={SITE.phoneHref} className="hover:text-plum">{SITE.phone}</a>
                </li>
                <li className="flex gap-3">
                  <MessageCircle size={18} className="shrink-0 text-lavender" />
                  <a href={WHATSAPP_DEFAULT} target="_blank" rel="noreferrer" className="hover:text-plum">
                    Chat on WhatsApp
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail size={18} className="shrink-0 text-lavender" />
                  <a href={`mailto:${SITE.email}`} className="hover:text-plum">{SITE.email}</a>
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

            <form
              action="https://formsubmit.co/gisilbeauty1@gmail.com"
              method="POST"
              className="rounded-3xl border border-lavender/20 bg-white p-8 shadow-sm"
            >
              <input type="hidden" name="_subject" value="New Contact Message - Gisil Beauty Lounge" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <h2 className="font-display text-2xl">Send a message</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium">
                  Name
                  <input required name="Name" placeholder="Your name" className={inputClass} />
                </label>
                <label className="block text-sm font-medium">
                  Email
                  <input required name="Email" type="email" placeholder="you@email.com" className={inputClass} />
                </label>
                <label className="block text-sm font-medium sm:col-span-2">
                  Phone
                  <input name="Phone" type="tel" placeholder="+234..." className={inputClass} />
                </label>
                <label className="block text-sm font-medium sm:col-span-2">
                  Message
                  <textarea required name="Message" rows={4} placeholder="How can we help?" className={inputClass} />
                </label>
              </div>
              <button
                type="submit"
                className="mt-6 flex items-center gap-2 rounded-full bg-lavender px-8 py-4 text-sm font-semibold text-white transition hover:bg-plum"
              >
                <Send size={16} /> Send message
              </button>
            </form>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] shadow-lg">
            <iframe
              title="Gisil Beauty Lounge location — Aba, Abia State, Nigeria"
              src="https://www.google.com/maps?q=Aba%2C%20Abia%20State%2C%20Nigeria&output=embed"
              className="h-full min-h-[520px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}