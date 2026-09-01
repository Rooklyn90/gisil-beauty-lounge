import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-6 py-32 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-lavender">404</p>
      <h1 className="mt-4 font-display text-4xl md:text-5xl">This page has slipped the veil.</h1>
      <p className="mx-auto mt-4 max-w-md text-plum/70">
        The page you are looking for does not exist. Let us bring you back to the lounge.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-lavender px-8 py-4 text-sm font-semibold text-white transition hover:bg-plum"
      >
        Back to Home
      </Link>
    </section>
  );
}