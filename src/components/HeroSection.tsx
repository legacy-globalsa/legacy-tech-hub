import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="px-4 lg:px-6 pt-4 pb-0 flex-1 flex flex-col">
      <div className="hero-container rounded-2xl overflow-hidden relative flex-1 flex flex-col min-h-0">
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
          {/* Gradient overlays for text legibility — pointer-events-none so Spline stays interactive */}
          <div className="absolute inset-0 bg-gradient-to-r from-hero-dark/80 via-hero-dark/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-hero-dark/70 via-transparent to-hero-dark/20 pointer-events-none" />
        </div>

        {/* Content overlay — pointer-events-none so Spline stays interactive */}
        <div className="relative z-10 flex-1 flex items-end pb-14 lg:pb-16 pointer-events-none select-none">
          <div className="w-full px-8 lg:px-12">
            {/* Badge */}
            <div className="animate-fade-up mb-8">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-gradient-animate">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Innovation & Technology
              </span>
            </div>

            {/* Two-column: heading left, description + button right */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16">
              <div className="flex-shrink-0">
                <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-display font-bold text-hero-dark-foreground leading-[0.92] tracking-tight">
                  Innovating Today,
                  <br />
                  Shaping
                  <br />
                  <span className="text-gradient-animate">Tomorrow</span>
                </h1>
              </div>

              <div className="lg:max-w-md lg:pb-2">
                <p className="animate-fade-up-delay-2 text-sm lg:text-base text-hero-dark-foreground/60 leading-relaxed mb-6">
                  A centralized technology platform to architect, deploy, and scale
                  intelligent solutions. Engineered for precision, reliability, and
                  transformative impact across industries.
                </p>

                {/* Buttons re-enable pointer-events */}
                <div className="animate-fade-up-delay-3 pointer-events-auto">
                  <Link
                    to="/services"
                    className="cursor-target inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-hero-dark-foreground/25 text-hero-dark-foreground/90 font-medium text-sm hover:bg-white/10 hover:border-hero-dark-foreground/40 transition-all duration-300 active:scale-[0.97] backdrop-blur-sm"
                  >
                    Initialize Framework
                    <ArrowRight size={16} />
                  </Link>
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
