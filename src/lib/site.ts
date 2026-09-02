export const SITE = {
  name: "Gisil Beauty Lounge",
  tagline: "Beauty, composed around you.",
  city: "Aba, Abia State, Nigeria",
  address: "#12 Brass Road Adjacent FCMB Bank, Aba, Abia State, Nigeria",
  phone: "+234 809 500 5114",
  phoneHref: "tel:+2348095005114",
  email: "gisilbeauty1@gmail.com",
  whatsappNumber: "2348095005114",
  instagram: "https://www.instagram.com/gisil_hairgasm/",
  tiktok: "https://www.tiktok.com/@gisilhairgasm",
  hours: [
    { days: "Monday – Saturday", time: "9:00 AM – 7:00 PM" },
    { days: "Sunday", time: "12:00 PM – 5:00 PM (VIP Bookings Only)" },
  ],
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT = whatsappLink(
  "Hello Gisil Beauty Lounge! I would like to book a service and get a price quote. My name is "
);
