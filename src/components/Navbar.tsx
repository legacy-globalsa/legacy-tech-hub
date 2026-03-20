import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/legatech-logo.png";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="LegaTech" className="h-8 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-hero-dark-foreground/70 hover:text-hero-dark-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity duration-200 active:scale-[0.97]"
        >
          Get in Touch
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-hero-dark-foreground/80"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-card rounded-xl mx-2 p-4 mt-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 px-4 text-sm font-medium text-hero-dark-foreground/80 hover:text-hero-dark-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block mt-2 text-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
