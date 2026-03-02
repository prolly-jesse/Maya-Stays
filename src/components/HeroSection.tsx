import heroBg from "@/assets/hero-bg.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src={heroBg}
        alt="Maya Stays luxury exterior"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 text-center px-4 max-w-3xl mx-auto"
      >
        <div className="inline-block glass rounded-full px-5 py-2 mb-6">
          <span className="text-sm font-medium text-primary">
            Starting from KSh 3,500/night
          </span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
          <span className="gold-text">Maya Stays</span>
        </h1>
        <p className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-xl mx-auto">
          Comfort, Security, &amp; Peace of Mind.Premium BnB accommodation on
          the Kisumu-Busia Highway.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#suites"
            className="gold-gradient text-primary-foreground font-semibold px-8 py-3.5 rounded-full text-base hover:opacity-90 transition-opacity"
          >
            Explore Suites
          </a>
          <a
            href="#booking"
            className="glass text-foreground font-semibold px-8 py-3.5 rounded-full text-base hover:bg-card/80 transition-colors"
          >
            Reserve Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
