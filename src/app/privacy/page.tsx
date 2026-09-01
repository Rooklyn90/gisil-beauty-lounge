import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Gisil Beauty Lounge collects, uses and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" sub="Last updated: August 2026" />
      <section className="px-6 py-20">
        <div className="prose-p:text-sm mx-auto max-w-3xl space-y-8 text-sm leading-7 text-plum/80">
          <div>
            <h2 className="font-display text-xl">Information we collect</h2>
            <p className="mt-3">
              When you use our booking or contact forms, we collect the details you provide: your
              name, phone number, email address and any notes you share about your appointment.
              When you contact us on WhatsApp, your message and number are processed by WhatsApp.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl">How we use it</h2>
            <p className="mt-3">
              We use your information only to respond to enquiries, schedule and confirm
              appointments, and provide aftercare guidance. We do not sell your data, and we do
              not share it with third parties except the tools that deliver your message to us.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl">Your rights</h2>
            <p className="mt-3">
              You may request a copy, correction or deletion of your information at any time by
              contacting us at {SITE.email} or {SITE.phone}.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl">Contact</h2>
            <p className="mt-3">
              Gisil Beauty Lounge, {SITE.address}. Email: {SITE.email}. Phone: {SITE.phone}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}