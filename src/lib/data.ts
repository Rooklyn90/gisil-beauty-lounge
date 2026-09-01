export type Service = {
  slug: string;
  name: string;
  category: string;
  duration: string;
  description: string;
  includes: string[];
  image: string;
};

export type Artist = {
  slug: string;
  name: string;
  role: string;
  specialties: string[];
  bio: string;
  image: string;
};

export type Look = {
  title: string;
  category: string;
  image: string;
};

export type Testimonial = { quote: string; author: string; service: string };
export type Faq = { question: string; answer: string };
export type Product = { name: string; note: string };

export const CATEGORIES = ["Hair & Wigs", "Makeup", "Nails", "Lashes"] as const;

export const SERVICES: Service[] = [
  {
    slug: "frontal-installation",
    name: "Frontal Installation",
    category: "Hair & Wigs",
    duration: "2 hrs",
    description:
      "A flawless, undetectable frontal installation with lace melting, tinting and baby-hair detailing, finished with a style of your choice. We prioritize the health of your edges with breathable, skin-safe adhesives.",
    includes: ["Lace tint & melt", "Edge-safe adhesive", "Custom styling & finish", "Aftercare guidance"],
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "custom-wigging",
    name: "Wigging (Custom)",
    category: "Hair & Wigs",
    duration: "4 hrs",
    description:
      "Bespoke wig construction tailored to your exact head measurements, desired density and parting style. From closure to full frontal units, every wig is hand-built for a natural, seamless finish.",
    includes: ["Head measurement & consultation", "Custom density & parting", "Premium lace selection", "Styled ready-to-wear finish"],
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "wig-revamping",
    name: "Wig Revamping & Styling",
    category: "Hair & Wigs",
    duration: "1.5 hrs",
    description:
      "Breathe new life into your existing unit. A deep cleanse, conditioning, re-plucking, lace refresh and restyling that returns your wig to showroom quality.",
    includes: ["Deep wash & conditioning", "Re-plucking & lace refresh", "Tangle removal", "Custom restyling"],
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "bridal-hair",
    name: "Bridal Hair",
    category: "Hair & Wigs",
    duration: "3 hrs",
    description:
      "Your wedding hair, composed around your gown and vision. Includes a trial consultation, premium extensions and on-the-day perfection that lasts from first look to last dance.",
    includes: ["Pre-wedding trial", "Premium extensions included", "Long-wear secure styling", "On-time day-of service"],
    image: "https://images.unsplash.com/photo-1519744792095-2f2205e87b61?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "soft-glam-makeup",
    name: "Soft Glam / Event Makeup",
    category: "Makeup",
    duration: "1.5 hrs",
    description:
      "Photographic, long-wear soft glam tailored to your skin type and tone. A polished, radiant finish for events, photoshoots and special occasions.",
    includes: ["Skin prep & primer", "Custom shade matching", "Lashes included", "Long-wear setting"],
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "bridal-makeup",
    name: "Bridal Makeup",
    category: "Makeup",
    duration: "2.5 hrs",
    description:
      "Complete bridal artistry with meticulous skin prep, flawless long-wear coverage and a personal touch-up kit. Calm, precise and camera-ready from ceremony to reception.",
    includes: ["Skin prep & hydration", "Long-wear bridal coverage", "Touch-up kit included", "Premium lashes & setting"],
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "luxury-gel-nails",
    name: "Luxury Gel Nails",
    category: "Nails",
    duration: "1.5 hrs",
    description:
      "Meticulous cuticle care, builder-gel strength and a flawless finish, completed with custom nail art designed around your personal style.",
    includes: ["Cuticle care & prep", "Builder gel strength", "Custom art & chrome options", "Glossy long-wear finish"],
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "spa-pedicure",
    name: "Spa Pedicure",
    category: "Nails",
    duration: "1.5 hrs",
    description:
      "A restorative pedicure ritual: warm soak, exfoliation, massage and premium polish in a calm, hygienic lounge setting.",
    includes: ["Warm aromatherapy soak", "Exfoliation & callus care", "Relaxing leg & foot massage", "Premium polish finish"],
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "lash-extensions",
    name: "Lash Extensions",
    category: "Lashes",
    duration: "2 hrs",
    description:
      "Custom-mapped lash extensions for volume or hybrid sets, designed to complement your eye shape while keeping your natural lashes healthy.",
    includes: ["Custom lash mapping", "Volume or hybrid sets", "Lightweight premium fibers", "Aftercare guidance"],
    image: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=1200&q=80",
  },
];

export const ARTISTS: Artist[] = [
  {
    slug: "gisil",
    name: "Gisil",
    role: "Founder & Lead Wig Architect",
    specialties: ["Custom wigging", "Undetectable frontals", "Bridal hair"],
    bio: "The visionary behind Gisil Beauty Lounge, Gisil specializes in bespoke wig construction and undetectable frontal installations. Her philosophy is simple: every client leaves feeling like the most composed version of themselves.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "chiamaka",
    name: "Chiamaka",
    role: "Senior Makeup Artist",
    specialties: ["Bridal glam", "Soft glam", "Flawless skin finishes"],
    bio: "Chiamaka is known for photographic, long-wear makeup that survives tears, heat and dance floors. She leads our bridal artistry with calm precision and meticulous skin prep.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "ebere",
    name: "Ebere",
    role: "Nail & Lash Specialist",
    specialties: ["Intricate nail art", "Custom lash mapping", "Spa pedicure"],
    bio: "From chrome finishes to hand-painted art, Ebere treats nails and lashes as miniature canvases. Her custom lash mapping keeps every set light, natural and healthy.",
    image: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=900&q=80",
  },
];

export const LOOKS: Look[] = [
  { title: "Undetectable Frontal Melt", category: "Hair & Wigs", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80" },
  { title: "Bridal Soft Glam", category: "Makeup", image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80" },
  { title: "Champagne Gel Set", category: "Nails", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80" },
  { title: "Custom Wig, Silk Finish", category: "Hair & Wigs", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80" },
  { title: "Editorial Glow", category: "Makeup", image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=80" },
  { title: "Volume Lash Set", category: "Lashes", image: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=900&q=80" },
  { title: "Spa Pedicure Ritual", category: "Nails", image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=80" },
  { title: "Radiant Skin Finish", category: "Makeup", image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=900&q=80" },
];

export const TESTIMONIALS: Testimonial[] = [
  { quote: "My frontal has never melted like this. I walked out feeling like the best version of myself.", author: "Adaeze O.", service: "Frontal Installation" },
  { quote: "Gisil did my bridal hair and makeup. Calm, precise, and I looked flawless from ceremony to reception.", author: "Mrs. Chidera M.", service: "Bridal Package" },
  { quote: "The lounge is serene and the pedicure is pure luxury. My go-to beauty space in Aba.", author: "Ngozi A.", service: "Spa Pedicure" },
];

export const FAQS: Faq[] = [
  { question: "How do I book an appointment?", answer: "You can book instantly via WhatsApp, through the booking form on our Book page, or by calling us during business hours. We confirm every appointment personally." },
  { question: "Do you require a deposit?", answer: "Yes. A booking deposit is required to secure slots for Bridal, Frontal Installation and Custom Wigging services. The exact amount is communicated during your booking and is deducted from your final balance." },
  { question: "How long does a frontal installation take?", answer: "Most installations take around 2 hours, including lace tinting, melting and styling. Custom wigging sessions can take up to 4 hours depending on density and construction." },
  { question: "How do I care for my wig after revamping?", answer: "Sleep with a silk bonnet, use alcohol-free products, detangle gently every day and store your wig on a stand when not in use. We share a personalized aftercare note with every revamp." },
  { question: "How do I care for my lash extensions?", answer: "Avoid oil-based makeup removers, do not rub your eyes, keep lashes dry for the first 24 hours and brush daily with a clean spoolie. Refills are recommended every 2–3 weeks." },
  { question: "Do you travel for bridal bookings?", answer: "Yes. Mobile bridal services are available within Aba (a logistics fee applies). Inter-state travel is available upon consultation — contact us early to secure your date." },
  { question: "What is your cancellation policy?", answer: "We require 48-hour notice for rescheduling or cancellation. Cancellations within 24 hours forfeit the booking deposit, as your slot is reserved exclusively for you." },
];

export const PRODUCTS: Product[] = [
  { name: "Gisil Silk Bonnet", note: "Coming soon" },
  { name: "Lace Melt Edge Gel", note: "Coming soon" },
  { name: "Lash & Brow Serum", note: "Coming soon" },
  { name: "Nourishing Cuticle Oil", note: "Coming soon" },
];