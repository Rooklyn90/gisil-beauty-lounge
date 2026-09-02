import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { Service } from "@/lib/data";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group overflow-hidden rounded-3xl border border-lavender/20 bg-white shadow-sm transition hover:shadow-lg"
    >
      <div className="h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lavender">
          {service.category}
        </p>
        <div className="mt-2 flex items-center justify-between gap-2">
          <h3 className="font-display text-xl">{service.name}</h3>
          <ArrowRight size={18} className="shrink-0 text-lavender transition group-hover:translate-x-1" />
        </div>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-plum/70">{service.description}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-plum/60">
          <span className="flex items-center gap-1">
            <Clock size={14} /> {service.duration}
          </span>
          <span>Bespoke pricing upon consultation</span>
        </div>
      </div>
    </Link>
  );
}
