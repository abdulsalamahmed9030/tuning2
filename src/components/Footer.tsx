import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Tuning Factory" className="h-10" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Calgary's premier automotive performance shop. Quality parts, expert tuning, and exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-bold text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Shop Parts", to: "/shop" },
                { label: "Our Services", to: "/services" },
                { label: "Book Appointment", to: "/book" },
                { label: "About Us", to: "/about" },
                { label: "FAQ", to: "/faq" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-bold text-primary">Services</h4>
            <ul className="space-y-2">
              {["Performance Tuning", "ECU Remapping", "Dyno Tuning", "Suspension Setup", "Custom Builds"].map((s) => (
                <li key={s} className="text-sm text-muted-foreground">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-bold text-primary">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                Calgary, Alberta, Canada
              </li>
              <li>
                <a href="tel:403-993-6742" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  403-993-6742
                </a>
              </li>
              <li>
                <a href="mailto:general@tuningfactory.ca" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  general@tuningfactory.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Tuning Factory. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link to="/refund-policy" className="text-xs text-muted-foreground hover:text-primary transition-colors">Refund Policy</Link>
            <Link to="/shipping-policy" className="text-xs text-muted-foreground hover:text-primary transition-colors">Shipping Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
