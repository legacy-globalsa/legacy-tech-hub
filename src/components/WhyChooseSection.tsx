import { Cpu, Layers, Users, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const reasons = [
  {
    icon: Cpu,
    title: "AI-Powered Innovation",
    description: "Cutting-edge solutions powered by artificial intelligence and machine learning that adapt and evolve with your business needs.",
    stat: "12+",
    statLabel: "AI Models Deployed",
  },
  {
    icon: Layers,
    title: "Full-Stack Under One Roof",
    description: "End-to-end technology services from ideation to deployment — design, development, IoT, AR/VR, and consulting in a unified workflow.",
    stat: "6",
    statLabel: "Service Verticals",
  },
  {
    icon: Users,
    title: "Tailored for You",
    description: "Customized solutions for businesses, entrepreneurs, and individuals. We don't do one-size-fits-all — every engagement is unique.",
    stat: "98%",
    statLabel: "Client Satisfaction",
  },
  {
    icon: Rocket,
    title: "Forward-Thinking Tech",
    description: "We stay ahead of the curve, implementing emerging technologies today so your business is ready for the challenges of tomorrow.",
    stat: "24/7",
    statLabel: "Support Available",
  },
];

const WhyChooseSection = () => {
  return (
    <section id="why-us" className="py-24 lg:py-32">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
              Why Choose LegaTech
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Built for reliability and scale
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Trust your most critical digital transformation to a partner with deep expertise, 
              proven methodologies, and a relentless commitment to excellence.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={i * 80}>
              <div className="gradient-card gradient-card-hover rounded-2xl p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <reason.icon size={18} className="text-primary" />
                  </div>
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                  {reason.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <span className="text-2xl font-display font-bold text-primary tabular-nums">{reason.stat}</span>
                  <span className="block text-[10px] font-semibold tracking-[0.12em] uppercase text-muted-foreground mt-1">
                    {reason.statLabel}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
