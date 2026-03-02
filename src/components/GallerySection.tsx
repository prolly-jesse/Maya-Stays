import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Play } from "lucide-react";
import buildingExterior from "@/assets/building-exterior.jpg";
import buildingBalcony from "@/assets/building-balcony.jpg";
import kitchenLiving from "@/assets/kitchen-living.jpg";
import livingRoom from "@/assets/living-room.jpg";
import tvLounge from "@/assets/tv-lounge.jpg";
import parkingArea from "@/assets/parking-area.jpg";
import entranceGate from "@/assets/entrance-gate.jpg";
import neonSign from "@/assets/neon-sign.jpg";

const images = [
  { src: buildingExterior, alt: "Maya Stays building exterior", tall: true },
  { src: kitchenLiving, alt: "Suite kitchen and living area" },
  { src: parkingArea, alt: "Secure parking area" },
  { src: tvLounge, alt: "Smart TV lounge" },
  { src: buildingBalcony, alt: "Building balcony view", tall: true },
  { src: livingRoom, alt: "Living room with marble tables" },
  { src: entranceGate, alt: "Maya Stays entrance gate" },
  { src: neonSign, alt: "Maya Stays illuminated sign", tall: true },
];

const GallerySection = () => {
  const ref = useScrollReveal();

  return (
    <section id="gallery" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            <span className="gold-text">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A glimpse into the Maya Stays experience.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`break-inside-avoid rounded-xl overflow-hidden glass group ${
                img.tall ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Video placeholder */}
        <div className="mt-8 glass rounded-2xl overflow-hidden relative aspect-video flex items-center justify-center group cursor-pointer">
          <img
            src={buildingExterior}
            alt="Video tour thumbnail"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            loading="lazy"
          />
          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play size={28} className="text-primary-foreground ml-1" />
            </div>
            <span className="text-foreground/80 font-medium">Video Tour — Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
