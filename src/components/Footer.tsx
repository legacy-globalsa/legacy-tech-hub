import { Phone, Mail, Globe, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/LegaTechLogo.png";
import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  return (
    <footer id="contact" className="py-20 lg:py-24 border-t border-border">
      <div className="section-container">
        <ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <Link to="/">
                <img src={logo} alt="LegaTech" className="h-16 w-auto mb-4 hover:opacity-80 transition-opacity" />
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md mb-2">
                Powered by Legacy Global Commercial Services Co.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                Innovating Today, Shaping Tomorrow — delivering intelligent solutions 
                across AI, IoT, AR/VR, and digital transformation for the MENA region.
              </p>
            </div>

            <div>
              <h4 className="font-display font-semibold text-foreground mb-4 text-sm">Quick Links</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li><Link to="/services" className="hover:text-foreground transition-colors duration-200">Services</Link></li>
                <li><Link to="/solutions" className="hover:text-foreground transition-colors duration-200">Solutions</Link></li>
                <li><Link to="/about" className="hover:text-foreground transition-colors duration-200">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-foreground transition-colors duration-200">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-foreground mb-4 text-sm">Contact</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <Phone size={14} className="mt-0.5 text-primary shrink-0" />
                  <a href="tel:+966503602359" className="hover:text-foreground transition-colors">+966 50 360 2359</a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail size={14} className="mt-0.5 text-primary shrink-0" />
                  <a href="mailto:info@legacyglobalsa.com" className="hover:text-foreground transition-colors">info@legacyglobalsa.com</a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Globe size={14} className="mt-0.5 text-primary shrink-0" />
                  <a href="https://www.legacyglobalsa.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">www.legacyglobalsa.com</a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin size={14} className="mt-0.5 text-primary shrink-0" />
                  <span>Near Al Mutlaq Hotel, King Abdulaziz Rd, Kingdom of Saudi Arabia</span>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} LegaTech — A Division of Legacy Global Commercial Services Co.</span>
          <span>Where Innovation Meets Intelligence</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
