import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="section-container">
        <ScrollReveal>
          <div className="hero-container rounded-2xl p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_40%,hsl(174_62%_38%/0.3),transparent_60%),radial-gradient(circle_at_70%_60%,hsl(24_85%_55%/0.2),transparent_60%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-display font-bold text-hero-dark-foreground tracking-tight mb-4">
                Ready to transform your vision?
              </h2>
              <p className="text-hero-dark-foreground/60 max-w-lg mx-auto mb-8 leading-relaxed">
                Partner with LegaTech and leverage the power of AI, IoT, and immersive technologies 
                to build the future your business deserves.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"
              >
                Start a Conversation
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
