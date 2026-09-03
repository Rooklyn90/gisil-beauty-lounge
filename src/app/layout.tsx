import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Chrome from "@/components/Chrome";
import { SITE } from "@/lib/site";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://gisil-beauty-lounge.vercel.app"),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Gisil Beauty Lounge is a premium beauty lounge in Aba, Abia State, Nigeria for frontal installation, custom wigs, bridal hair, makeup, luxury nails, pedicure and lash extensions.",
    icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: SITE.name,
    description: "Beauty, composed around you. Hair, wigs, makeup, nails and lashes in Aba.",
    images: ["/images/hero-poster.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: SITE.name,
  slogan: SITE.tagline,
  telephone: SITE.phone,
  email: SITE.email,
  image: "/images/hero-poster.png",
  priceRange: "₦₦",
  address: {
    "@type": "PostalAddress",
    streetAddress: "#12 Brass Road Adjacent FCMB Bank",
    addressLocality: "Aba",
    addressRegion: "Abia State",
    addressCountry: "NG",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "12:00",
      closes: "17:00",
    },
  ],
  sameAs: [SITE.instagram, SITE.tiktok],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <Chrome>{children}</Chrome>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
