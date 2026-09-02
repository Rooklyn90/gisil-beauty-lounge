import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Clock } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { whatsappLink } from "@/lib/site";
import ServiceCard from "@/components/ServiceCard";

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props): Metadata {
  const service = SERVICES.find((s) => s.slug === params.slug);
  return {
    title: service?.name ?? "Service",
    description: service?.description,
  };
}

export default function ServiceDetail({ params }: Props) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const related = SERVICES.filter(
    (s) => s.category === service.category && s.slug !== service.slug
  ).slice(0, 3);

  const wa = whatsappLink(
    `Hello Gisil Beauty Lounge! I would like to book ${service.name} and get a price quote. My name is `
  );

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-lavender"
        >
          <ArrowLeft size={16} /> All services
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2.5rem] shadow-lg">
            <img
              src={service.image}
              alt={service.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-lavender">
              {service.category}
            </p>
            <h1 className="mt-3 font-display text-4xl md:text-5xl">{service.name}</h1>
            <p className="mt-4 flex items-center gap-2 text-sm text-plum/60">
              <Clock size={16} /> {service.duration}
            </p>
            <p className="mt-6 text-base leading-8 text-plum/80">{service.description}</p>

            <ul className="mt-8 space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-plum/80">
                  <Check size={16} className="mt-0.5 shrink-0 text-lavender" /> {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-3xl bg-lilac p-6 text-sm leading-6 text-plum/80">
              Bespoke pricing upon consultation — final pricing is confirmed
              during booking, tailored to hair length, density and product needs.
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-lavender px-8 py-4 text-center text-sm font-semibold text-white transition hover:bg-plum"
              >
                Book on WhatsApp
              </a>
              <Link
                href="/book"
                className="rounded-full border border-plum/20 px-8 py-4 text-center text-sm font-semibold transition hover:bg-lilac"
              >
                Booking Request Form
              </Link>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-24">
            <h2 className="font-display text-2xl md:text-3xl">Related services</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
