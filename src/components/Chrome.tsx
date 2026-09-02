"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const STANDALONE = ["/menu", "/qr"];

export default function Chrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const standalone = STANDALONE.some((p) => pathname.startsWith(p));

  if (standalone) return <>{children}</>;

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
