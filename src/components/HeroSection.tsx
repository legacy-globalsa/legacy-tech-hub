import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="section-container py-6">
        <div className="hero-container rounded-2xl overflow-hidden relative min-h-[85vh] flex flex-col">
          <Navbar />
          
          {/* Spline 3D Background */}
          <div className="absolute inset-0 z-0">
            <iframe
              src="https://my.spline.design/r4xbot-W6RYzfZdhdrfeEZ3ZKbZB41u/"
              frameBorder="0"
              width="100%"
              height="100%"
              className="absolute inset-0"
              style={{ pointerEvents: "auto" }}
              title="LegaTech 3D"
            />
            {/* Gradient overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-hero-dark/90 via-hero-dark/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-hero-dark/80 via-transparent to-hero-dark/30" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex-1 flex items-center pt-20">
            <div className="section-container w-full">
              <div className="max-w-2xl">
                <div className="animate-fade-up">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-6">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Innovation & Technology
                  </span>
                </div>

                <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-hero-dark-foreground leading-[0.95] tracking-tight mb-6">
                  Innovating Today,
                  <br />
                  Shaping
                  <br />
                  <span className="text-primary/70">Tomorrow</span>
                </h1>

                <p className="animate-fade-up-delay-2 text-base lg:text-lg text-hero-dark-foreground/60 max-w-lg mb-8 leading-relaxed">
                  A centralized technology platform to architect, deploy, and scale 
                  intelligent solutions. Engineered for precision, reliability, and 
                  transformative impact across industries.
                </p>

                <div className="animate-fade-up-delay-3 flex flex-wrap gap-4">
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
                  >
                    Explore Services
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href="#about"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-hero-dark-foreground/20 text-hero-dark-foreground/80 font-medium text-sm hover:border-hero-dark-foreground/40 transition-colors active:scale-[0.97]"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
