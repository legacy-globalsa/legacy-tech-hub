import { ArrowRight, Brain, Home, Smartphone, Palette, Glasses, Lightbulb } from "lucide-react";
import aiHero from "@/assets/ai-hero.jpg";
import smartHome from "@/assets/smart-home.jpg";
import appDev from "@/assets/app-dev.jpg";
import creativeDesign from "@/assets/creative-design.jpg";
import arVr from "@/assets/ar-vr.jpg";
import consulting from "@/assets/consulting.jpg";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Brain,
    title: "Artificial Intelligence Solutions",
    description: "Predictive analytics, automation, and AI-powered tools that transform raw data into actionable business intelligence. Our models learn and adapt to your unique workflows.",
    image: aiHero,
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: Home,
    title: "Smart Home & IoT",
    description: "Intelligent home systems that enhance convenience, security, and energy efficiency. Seamlessly connect every device in your ecosystem for a unified living experience.",
    image: smartHome,
    accent: "from-accent/20 to-accent/5",
  },
  {
    icon: Smartphone,
    title: "App & Web Development",
    description: "From sleek mobile apps to responsive websites, we build user-friendly, innovative digital experiences that connect you to the world with performance and elegance.",
    image: appDev,
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: Palette,
    title: "Creative Design Services",
    description: "Stand out with branding, UI/UX, graphics, and visual storytelling designed to inspire engagement and elevate your identity across every touchpoint.",
    image: creativeDesign,
    accent: "from-accent/20 to-accent/5",
  },
  {
    icon: Glasses,
    title: "AR/VR Technologies",
    description: "Dive into Augmented Reality and Virtual Reality solutions for education, training, marketing, and entertainment that captivate audiences and transform experiences.",
    image: arVr,
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: Lightbulb,
    title: "Technology Consulting",
    description: "Get strategic guidance to adopt and implement emerging technologies effectively, ensuring your business stays ahead in a rapidly evolving digital landscape.",
    image: consulting,
    accent: "from-accent/20 to-accent/5",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="section-container">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">
            End-to-end technology solutions
          </h2>
          <p className="text-muted-foreground max-w-xl mb-16 text-base leading-relaxed">
            From concept to deployment, we deliver comprehensive technology services 
            that cover every facet of digital transformation for businesses and individuals.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 80}>
              <div className="group gradient-card gradient-card-hover rounded-2xl overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.accent} to-transparent`} />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-card/90 backdrop-blur-sm flex items-center justify-center">
                    <service.icon size={18} className="text-primary" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-display font-semibold text-card-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary mt-4 group-hover:gap-2.5 transition-all duration-200"
                  >
                    Learn More <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
