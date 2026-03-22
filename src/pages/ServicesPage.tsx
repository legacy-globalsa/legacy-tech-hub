import { ArrowRight, Brain, Smartphone, Home, Palette, Glasses, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import Grainient from "@/components/Grainient";
import aiHero from "@/assets/ai-hero.jpg";
import consulting from "@/assets/consulting.jpg";
import creativeDesign from "@/assets/creative-design.jpg";
import appDev from "@/assets/app-dev.jpg";
import smartHome from "@/assets/smart-home.jpg";
import arVr from "@/assets/ar-vr.jpg";

const businessTypes = [
  {
    title: "AI Platforms",
    description:
      "Support businesses across the AI ecosystem — from predictive analytics and automation to intelligent decision-making tools.",
    gradient: "from-blue-100/80 via-cyan-50/40 to-transparent",
    textColor: "text-blue-600",
    borderColor: "border-blue-100",
  },
  {
    title: "Web & Mobile",
    description:
      "Quickly launch and grow digital presence with a unified platform for responsive web and native mobile applications.",
    gradient: "from-orange-100/80 via-amber-50/40 to-transparent",
    textColor: "text-orange-600",
    borderColor: "border-orange-100",
  },
  {
    title: "Smart Solutions",
    description:
      "Deploy IoT infrastructure and smart home systems with automated monitoring, control, and energy optimization.",
    gradient: "from-purple-100/80 via-violet-50/40 to-transparent",
    textColor: "text-purple-600",
    borderColor: "border-purple-100",
  },
  {
    title: "Creative & Design",
    description:
      "Transform your brand with UI/UX design, visual storytelling, and creative services that drive engagement globally.",
    gradient: "from-emerald-100/80 via-green-50/40 to-transparent",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-100",
  },
];

const detailedServices = [
  {
    icon: Brain,
    title: "Artificial Intelligence Solutions",
    description:
      "Predictive analytics, automation, and AI-powered tools that transform raw data into actionable business intelligence.",
    features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
    image: aiHero,
  },
  {
    icon: Smartphone,
    title: "App & Web Development",
    description:
      "From sleek mobile apps to responsive websites, we build user-friendly digital experiences with performance and elegance.",
    features: ["React & React Native", "Progressive Web Apps", "API Development", "Cloud Deployment"],
    image: appDev,
  },
  {
    icon: Home,
    title: "Smart Home & IoT",
    description:
      "Intelligent home systems that enhance convenience, security, and energy efficiency. Connect every device seamlessly.",
    features: ["Device Integration", "Energy Management", "Security Systems", "Remote Control"],
    image: smartHome,
  },
  {
    icon: Palette,
    title: "Creative Design Services",
    description:
      "Stand out with branding, UI/UX, graphics, and visual storytelling designed to inspire engagement and elevate your identity.",
    features: ["Brand Identity", "UI/UX Design", "Motion Graphics", "Print & Digital"],
    image: creativeDesign,
  },
  {
    icon: Glasses,
    title: "AR/VR Technologies",
    description:
      "Augmented Reality and Virtual Reality solutions for education, training, marketing, and entertainment.",
    features: ["Immersive Training", "Virtual Showrooms", "AR Marketing", "3D Visualization"],
    image: arVr,
  },
  {
    icon: Lightbulb,
    title: "Technology Consulting",
    description:
      "Strategic guidance to adopt and implement emerging technologies effectively, keeping your business ahead.",
    features: ["Digital Strategy", "Tech Audits", "Implementation Plans", "Change Management"],
    image: consulting,
  },
];

const ServicesPage = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
        {/* Floating glow orbs */}
        <div className="glow-orb w-96 h-96 bg-primary/15 top-10 right-10" />
        <div className="glow-orb glow-orb-2 w-72 h-72 bg-accent/10 bottom-0 left-20" />
        <div className="glow-orb glow-orb-3 w-56 h-56 bg-cyan-400/10 top-1/2 left-1/2" />
        <div className="mx-auto max-w-7xl px-4 lg:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-gradient-animate mb-4">
                Our Services
              </span>
              <h1 className="text-4xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                Support for any
                <br />
                <span className="text-gradient-animate">business type</span>
              </h1>
              <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
                Comprehensive technology solutions tailored to your industry, scale, and ambition.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative">
                <img src={aiHero} alt="AI Technology" className="rounded-2xl shadow-2xl w-full h-64 lg:h-80 object-cover" loading="lazy" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl overflow-hidden shadow-xl hidden lg:block">
                  <img src={consulting} alt="Consulting" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Business type cards — image 2 style */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {businessTypes.map((type, i) => (
              <ScrollReveal key={type.title} delay={i * 100}>
                <div
                  className={`group relative rounded-2xl border ${type.borderColor} bg-white p-6 h-full flex flex-col overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="text-lg font-display font-bold text-foreground mb-3">
                      {type.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                      {type.description}
                    </p>
                    <a
                      href="#detailed"
                      className={`cursor-target inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase ${type.textColor} group-hover:gap-3 transition-all duration-300`}
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

      {/* Detailed services */}
      <section id="detailed" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-l from-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 lg:px-6 relative">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-4">
                  End-to-end technology
                  <br />
                  <span className="text-gradient-animate-slow">solutions</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl">
                  From concept to deployment, we deliver comprehensive technology services
                  that cover every facet of digital transformation.
                </p>
              </div>
              <div className="relative hidden lg:block">
                <img src={creativeDesign} alt="Creative Design" className="rounded-2xl shadow-lg w-full h-48 object-cover" loading="lazy" />
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedServices.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 80}>
                <div className="group gradient-card gradient-card-hover rounded-2xl overflow-hidden h-full flex flex-col">
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/30 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <div className="w-9 h-9 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                        <service.icon size={18} className="text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary/80 transition-colors duration-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <ScrollReveal>
            <div className="rounded-2xl p-12 lg:p-20 text-center relative overflow-hidden bg-[hsl(220_30%_8%)]">
              <div className="absolute inset-0">
                <Grainient
                  color1="#259d91"
                  color2="#0b4e48"
                  color3="#196b62"
                  timeSpeed={0.1}
                  grainAmount={0.06}
                  contrast={1.3}
                  saturation={1.1}
                  zoom={0.9}
                  warpStrength={0.8}
                  warpAmplitude={40}
                  warpFrequency={5}
                  warpSpeed={1.5}
                  rotationAmount={400}
                />
              </div>
              <div className="absolute inset-0 bg-[hsl(220_30%_8%)]/50" />
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-hero-dark-foreground tracking-tight mb-4">
                  Ready to get started?
                </h2>
                <p className="text-hero-dark-foreground/60 max-w-lg mx-auto mb-8">
                  Let's discuss how our services can transform your business.
                </p>
                <Link
                  to="/contact"
                  className="cursor-target inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 hover:shadow-lg transition-all duration-300 active:scale-[0.97]"
                >
                  Start a Conversation <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServicesPage;
