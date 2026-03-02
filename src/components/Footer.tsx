import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12 px-4 sm:px-6">
    <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-8">
      <div>
        <h3 className="font-serif text-xl font-bold gold-text mb-3">Maya Stays</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Comfort, Security, & Peace of Mind. Premium BnB accommodation on the Kisumu-Busia Highway.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Quick Links</h4>
        <div className="space-y-2 text-sm">
          {["Suites", "Gallery", "Location", "Book Now"].map((l) => (
            <a
              key={l}
              href={`#${l === "Book Now" ? "booking" : l.toLowerCase()}`}
              className="block text-muted-foreground hover:text-primary transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Contact</h4>
        <div className="space-y-2 text-sm text-muted-foreground">
          <a href="tel:+254705203156" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone size={14} /> 0705 203 156
          </a>
          <a href="mailto:info@mayastays.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={14} /> info@mayastays.com
          </a>
          <p className="flex items-start gap-2">
            <MapPin size={14} className="mt-0.5 shrink-0" /> 100M behind Dreams Hotel, Kisumu-Busia Highway
          </p>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground space-y-1">
      <p>© {new Date().getFullYear()} Maya Stays. All rights reserved.</p>
      <p>Built with ❤️ and modern web tech © 2026 Jay</p>
    </div>
  </footer>
);

export default Footer;
