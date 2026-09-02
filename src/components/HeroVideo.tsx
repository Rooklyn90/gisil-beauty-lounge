export default function HeroVideo() {
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="absolute -inset-6 rounded-[3rem] bg-lavender/30 blur-3xl" aria-hidden="true" />
      <div className="relative aspect-[9/16] max-h-[75vh] w-full overflow-hidden rounded-[2.5rem] shadow-2xl bg-plum">
        <img
          src="/images/hero-poster.png"
          alt="Gisil Beauty Lounge — Beauty, composed around you."
          className="absolute inset-0 h-full w-full object-cover"
        />
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/hero.mp4"
          poster="/images/hero-poster.png"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Inside the Gisil Beauty Lounge interior"
        />
      </div>
    </div>
  );
}
