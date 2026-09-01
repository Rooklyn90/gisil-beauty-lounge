"use client";

import { useRef } from "react";
import Image from "next/image";
import QRCode from "react-qr-code";
import { Download, Printer } from "lucide-react";

export default function QrPage() {
  const boxRef = useRef<HTMLDivElement>(null);
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://gisil-beauty-lounge.vercel.app";
  const menuUrl = `${siteUrl}/menu`;

  const downloadSvg = () => {
    const svg = boxRef.current?.querySelector("svg");
    if (!svg) return;
    const source = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "gisil-menu-qr.svg";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-porcelain px-6 py-16 text-center">
      <Image
        src="/logo.png"
        alt="Gisil Beauty Lounge logo"
        width={64}
        height={64}
        className="h-16 w-16 object-contain"
      />
      <h1 className="mt-6 font-display text-3xl">Your Menu QR Code</h1>
      <p className="mt-3 max-w-md text-sm leading-6 text-plum/70">
        Print this code on cards, flyers and lounge mirrors. Scanning it opens
        the luxury service menu at{" "}
        <span className="font-semibold text-plum">{menuUrl}</span>
      </p>

      <div
        ref={boxRef}
        className="mt-10 rounded-3xl border border-lavender/30 bg-white p-8 shadow-sm"
      >
        <QRCode value={menuUrl} size={240} fgColor="#3A3350" bgColor="#FFFFFF" />
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <button
          type="button"
          onClick={downloadSvg}
          className="flex items-center gap-2 rounded-full bg-lavender px-8 py-4 text-sm font-semibold text-white transition hover:bg-plum"
        >
          <Download size={16} /> Download QR (SVG)
        </button>
        <button
          type="button"
          onClick={() => window.print()}
          className="flex items-center gap-2 rounded-full border border-plum/20 px-8 py-4 text-sm font-semibold transition hover:bg-lilac"
        >
          <Printer size={16} /> Print
        </button>
      </div>

      <p className="mt-6 text-xs text-plum/50">
        Owner utility — not linked from the public site.
      </p>
    </div>
  );
}