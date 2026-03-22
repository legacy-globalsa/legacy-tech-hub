import {
  ArrowRight,
  Building2,
  ShoppingCart,
  GraduationCap,
  Heart,
  Factory,
  Landmark,
  Check,
  TrendingUp,
  Shield,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import Grainient from "@/components/Grainient";
import aiHero from "@/assets/ai-hero.jpg";
import smartHome from "@/assets/smart-home.jpg";
import appDev from "@/assets/app-dev.jpg";
import arVr from "@/assets/ar-vr.jpg";

const industries = [
  {
    icon: Building2,
    title: "Real Estate & Smart Cities",
    description:
      "IoT-enabled property management, virtual property tours, and smart building automation that reduce costs and amplify occupant experience.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    gradient: "from-blue-100/60 via-blue-50/30 to-transparent",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-Commerce",
    description:
      "AI-powered recommendation engines, AR try-on experiences, and real-time inventory intelligence that boost conversions.",
    color: "text-orange-600",
    bg: "bg-orange-50",
    gradient: "from-orange-100/60 via-orange-50/30 to-transparent",
  },
  {
    icon: GraduationCap,
    title: "Education & EdTech",
    description:
      "Immersive VR classrooms, adaptive learning platforms, and AI tutors that personalize education at scale.",
    color: "text-violet-600",
    bg: "bg-violet-50",
    gradient: "from-violet-100/60 via-violet-50/30 to-transparent",
  },
  {
    icon: Heart,
    title: "Healthcare & MedTech",
    description:
      "Remote patient monitoring, AI diagnostics, and AR-assisted surgical planning that improve outcomes and reduce costs.",
    color: "text-rose-600",
    bg: "bg-rose-50",
    gradient: "from-rose-100/60 via-rose-50/30 to-transparent",
  },
  {
    icon: Factory,
    title: "Manufacturing & Industry 4.0",
    description:
      "Predictive maintenance, digital twins, and robotic process automation that maximize throughput and minimize downtime.",
    color: "text-amber-600",
    bg: "bg-amber-50",
    gradient: "from-amber-100/60 via-amber-50/30 to-transparent",
  },
  {
    icon: Landmark,
    title: "Government & Public Sector",
    description:
      "Secure digital infrastructure, citizen engagement platforms, and data-driven policy tools for smarter governance.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    gradient: "from-emerald-100/60 via-emerald-50/30 to-transparent",
  },
];

const caseStudies = [
  {
    image: aiHero,
    tag: "AI Solutions",
    title: "Predictive Analytics for Retail Chain",
    result: "37% increase in inventory efficiency",
    description:
      "Deployed a custom ML pipeline processing 2M+ SKUs daily, enabling demand forecasting and automated replenishment across 120+ stores.",
  },
  {
    image: smartHome,
    tag: "Smart Home",
    title: "Connected Living — 500-Unit Complex",
    result: "42% energy cost reduction",
    description:
      "Integrated 15,000+ IoT sensors for climate control, security, and utility management in a flagship residential development.",
  },
  {
    image: appDev,
    tag: "App Development",
    title: "FinTech Super-App Launch",
    result: "200K users in 90 days",
    description:
      "Built a cross-platform financial services app with biometric auth, real-time payments, and AI-driven budgeting tools.",
  },
  {
    image: arVr,
    tag: "AR/VR",
    title: "Immersive Training Platform",
    result: "60% faster skill acquisition",
    description:
      "Created a VR training environment for industrial safety, reducing on-site incidents by 45% within the first quarter.",
  },
];

const differentiators = [
  {
    icon: TrendingUp,
    title: "Outcome-Driven",
    description: "Every engagement starts with your KPIs and works backward to the right technology stack.",
  },
  {
    icon: Shield,
    title: "Enterprise-Secure",
    description: "SOC 2-aligned processes with end-to-end encryption and zero-trust architecture.",
  },
  {
    icon: Globe,
    title: "MENA-Native",
    description: "Deep regional expertise with Arabic-first UX, local compliance, and on-ground support.",
  },
];

const SolutionsPage = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-20 pb-12 relative overflow-hidden">
        <div className="glow-orb w-[500px] h-[500px] bg-primary/12 top-0 right-0" />
        <div className="glow-orb glow-orb-2 w-96 h-96 bg-accent/8 bottom-0 left-0" />
        <div className="glow-orb glow-orb-3 w-64 h-64 bg-cyan-400/8 top-1/2 left-1/3" />
        <div className="mx-auto max-w-7xl px-4 lg:px-6 relative">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-gradient-animate mb-4">
              Industry Solutions
            </span>
            <h1 className="text-4xl lg:text-6xl font-display font-bold tracking-tight mb-6 max-w-4xl">
              Technology tailored
              <br />
              <span className="text-gradient-animate">to your industry</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
              We don't build generic products. We engineer vertical-specific solutions that understand the
              nuances, regulations, and opportunities in your sector.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Industry cards */}
      <section className="pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-cyan-100/[0.04] to-accent/[0.02] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-gradient-to-t from-violet-200/10 via-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 lg:px-6 relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((industry, i) => (
              <ScrollReveal key={industry.title} delay={i * 80}>
                <div className="group relative rounded-2xl border border-border/40 bg-white p-7 h-full flex flex-col overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className={`w-11 h-11 rounded-xl ${industry.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <industry.icon size={20} className={industry.color} />
                    </div>
                    <h3 className="text-lg font-display font-bold text-foreground mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                      {industry.description}
                    </p>
                    <Link
                      to="/contact"
                      className={`cursor-target inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase ${industry.color} group-hover:gap-3 transition-all duration-300`}
                    >
                      Explore <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-secondary/40 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 lg:px-6 relative">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-gradient-animate mb-4">
                Case Studies
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-4">
                Results that
                <br />
                <span className="text-gradient-animate-slow">speak for themselves</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Real projects, real outcomes. Here's how we've helped businesses transform
                with technology.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((study, i) => (
              <ScrollReveal key={study.title} delay={i * 100}>
                <div className="group rounded-2xl overflow-hidden bg-white border border-border/40 h-full flex flex-col hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute top-4 left-4 text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-white/90 text-foreground">
                      {study.tag}
                    </span>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2">
                        <Check size={14} className="text-emerald-400" />
                        <span className="text-sm font-semibold text-white">
                          {study.result}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-display font-bold text-foreground mb-2">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {study.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.02] via-transparent to-accent/[0.03] pointer-events-none" />
        <div className="glow-orb glow-orb-2 w-96 h-96 bg-primary/10 top-0 right-0" />
        <div className="glow-orb glow-orb-3 w-72 h-72 bg-cyan-400/8 bottom-0 left-1/4" />
        <div className="mx-auto max-w-7xl px-4 lg:px-6 relative">
          <div className="grid lg:grid-cols-3 gap-8">
            {differentiators.map((diff, i) => (
              <ScrollReveal key={diff.title} delay={i * 100}>
                <div className="group text-center lg:text-left">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto lg:mx-0 mb-5 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <diff.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-2">
                    {diff.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {diff.description}
                  </p>
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
                  Have a project in mind?
                </h2>
                <p className="text-hero-dark-foreground/60 max-w-lg mx-auto mb-8">
                  Tell us about your challenges and we'll map the right technology solution for your industry.
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

export default SolutionsPage;
