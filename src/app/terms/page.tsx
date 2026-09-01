import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Booking Policy",
  description: "Booking, deposit, cancellation and care policies of Gisil Beauty Lounge.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Booking Policy" sub="Last updated: August 2026" />
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl space-y-8 text-sm leading-7 text-plum/80">
          <div>
            <h2 className="font-display text-xl">Bookings & confirmation</h2>
            <p className="mt-3">
              Appointment requests via the website form are confirmed personally by our team
              during business hours. WhatsApp and phone bookings are confirmed in real time.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl">Deposits</h2>
            <p className="mt-3">
              A booking deposit secures your slot for Bridal, Frontal Installation and Custom
              Wigging services. Deposits are deducted from your final balance.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl">Cancellations & rescheduling</h2>
            <p className="mt-3">
              We require 48-hour notice for rescheduling or cancellation. Cancellations within 24
              hours forfeit the booking deposit, as your slot is reserved exclusively for you.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl">Late arrivals</h2>
            <p className="mt-3">
              A 15-minute grace period applies. Beyond that, we may need to shorten your service
              or rebook you, to respect the next client.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl">Pricing</h2>
            <p className="mt-3">
              Pricing is bespoke and confirmed during booking, based on hair length, density,
              products and service requirements.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl">Care guidance</h2>
            <p className="mt-3">
              Aftercare guidance is provided for your results. Individual skin and hair reactions
              vary; please disclose allergies or sensitivities before your service.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl">Contact</h2>
            <p className="mt-3">
              Questions about these terms? Reach us at {SITE.email} or {SITE.phone}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}