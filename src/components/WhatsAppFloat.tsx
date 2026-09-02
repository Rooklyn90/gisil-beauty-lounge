import { WHATSAPP_DEFAULT } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_DEFAULT}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Gisil Beauty Lounge on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
    >
      <svg viewBox="0 0 32 32" fill="currentColor" className="h-7 w-7" aria-hidden="true">
        <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.7.7 5.4 2 7.7L.5 31.5l8-2.1c2.3 1.2 4.8 1.9 7.5 1.9 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm0 28.2c-2.3 0-4.6-.6-6.6-1.8l-.5-.3-4.8 1.3 1.3-4.6-.3-.5c-1.3-2.1-2-4.5-2-6.9C3.1 8.6 8.9 2.8 16 2.8S28.9 8.6 28.9 16 23.1 28.7 16 28.7zm7.1-9.7c-.4-.2-2.3-1.1-2.6-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.2-.4.2-.8 0-.4-.2-1.6-.6-3.1-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.2.3-.4.4-.7.1-.3.1-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.8-.6-.7-.9-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.4s1.5 4 1.7 4.2c.2.3 2.9 4.5 7.1 6.3 1 .4 1.8.7 2.4.9 1 .3 1.9.3 2.6.2.8-.1 2.3-1 2.6-1.9.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.8-.5z" />
      </svg>
    </a>
  );
}
