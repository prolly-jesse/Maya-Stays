import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Bed, Users, Wifi, Tv, Car } from "lucide-react";
import tvLounge from "@/assets/tv-lounge.jpg";
import livingRoom from "@/assets/living-room.jpg";

const suites = [
  {
    title: "Executive 1-Bedroom",
    price: "KSh 3,500",
    image: tvLounge,
    features: ["King-size bed", "Smart TV", "High-speed Wi-Fi", "En-suite bathroom", "Secure parking"],
    icon: Bed,
    guests: "1-2 guests",
  },
  {
    title: "Deluxe 2-Bedroom",
    price: "KSh 6,000",
    image: livingRoom,
    features: ["Two bedrooms", "Living area", "Smart TV", "Full kitchen", "Secure parking"],
    icon: Users,
    guests: "Up to 4 guests",
  },
];

const featureIcons: Record<string, typeof Wifi> = {
  "High-speed Wi-Fi": Wifi,
  "Smart TV": Tv,
  "Secure parking": Car,
};

const UnitSelector = () => {
  const ref = useScrollReveal();

  return (
    <section id="suites" className="section-padding max-w-7xl mx-auto">
      <div ref={ref} className="text-center mb-12">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
          <span className="gold-text">Our Suites</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Top-notch finishing with every comfort you need for a perfect stay.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {suites.map((suite) => (
          <div
            key={suite.title}
            className="glass rounded-2xl overflow-hidden group hover:gold-glow transition-all duration-500"
          >
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <img
                src={suite.image}
                alt={suite.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 gold-gradient text-primary-foreground text-sm font-bold px-4 py-1.5 rounded-full">
                {suite.price}/night
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <suite.icon size={20} className="text-primary" />
                <h3 className="font-serif text-xl font-semibold">{suite.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{suite.guests}</p>
              <div className="flex flex-wrap gap-2">
                {suite.features.map((f) => {
                  const Icon = featureIcons[f];
                  return (
                    <span
                      key={f}
                      className="flex items-center gap-1.5 text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full"
                    >
                      {Icon && <Icon size={12} />}
                      {f}
                    </span>
                  );
                })}
              </div>
              <a
                href="#booking"
                className="mt-5 block text-center gold-gradient text-primary-foreground font-semibold py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                Book This Suite
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UnitSelector;
