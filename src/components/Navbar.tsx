import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Suites", href: "#suites" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-strong shadow-lg" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16 sm:h-20">
          <a href="#" className="font-serif text-xl sm:text-2xl font-bold gold-text">
            Maya Stays
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              className="gold-gradient text-primary-foreground font-semibold text-sm px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden glass-strong border-t border-border px-4 pb-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-foreground/80 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Mobile sticky Book Now */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 glass-strong border-t border-border">
        <a
          href="#booking"
          className="block w-full text-center gold-gradient text-primary-foreground font-semibold py-3.5 rounded-full text-base"
        >
          Book Now — From KSh 3,500
        </a>
      </div>
    </>
  );
};

export default Navbar;
