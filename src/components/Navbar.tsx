import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/LegaTechLogo.png";

const leftLinks = [
  { label: "Platform", to: "/" },
  { label: "Solutions", to: "/solutions" },
  { label: "About", to: "/about" },
];

const rightLinks = [
  { label: "Services", to: "/services" },
  { label: "Company", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (to: string) => location.pathname === to;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-sm border-b border-border/40"
          : "bg-background border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Left links */}
          <div className="hidden md:flex items-center gap-7 flex-1">
            {leftLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`cursor-target text-[13px] font-medium transition-colors duration-200 hover:text-foreground ${
                  isActive(link.to) ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Center logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="LegaTech" className="h-14 w-auto" />
          </Link>

          {/* Right links */}
          <div className="hidden md:flex items-center justify-end gap-7 flex-1">
            {rightLinks.map((link) => (
              <Link
                key={link.label + link.to}
                to={link.to}
                className={`cursor-target text-[13px] font-medium transition-colors duration-200 hover:text-foreground ${
                  isActive(link.to) ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground/70 p-1.5 rounded-lg hover:bg-secondary/80 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border/40 bg-background px-4 pb-4 pt-2">
          {[...leftLinks, ...rightLinks].map((link, i) => (
            <Link
              key={link.label + link.to + i}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block py-2.5 px-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
