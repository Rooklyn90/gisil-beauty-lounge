"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/artists", label: "Artists" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/bridal", label: "Bridal & Events" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-lavender/20 bg-porcelain/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Gisil Beauty Lounge logo"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
          />
          <span className="font-display text-lg font-semibold tracking-wide">
            Gisil Beauty Lounge
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-plum/80 transition hover:text-plum"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="rounded-full bg-lavender px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-plum"
          >
            Book Now
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-full p-2 text-plum lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-lavender/20 bg-porcelain px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-plum/90"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-lavender px-6 py-3 text-center text-sm font-semibold text-white"
            >
              Book Now
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
