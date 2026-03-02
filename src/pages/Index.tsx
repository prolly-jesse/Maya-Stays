import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import UnitSelector from "@/components/UnitSelector";
import StrategicHub from "@/components/StrategicHub";
import AmenitiesGrid from "@/components/AmenitiesGrid";
import GallerySection from "@/components/GallerySection";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <UnitSelector />
      <StrategicHub />
      <AmenitiesGrid />
      <GallerySection />
      <Testimonials />
      <FAQSection />
      <BookingSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
