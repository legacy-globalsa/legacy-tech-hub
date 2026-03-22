import { Target, Eye, Users, Award, Lightbulb, Globe } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import consulting from "@/assets/consulting.jpg";
import smartHome from "@/assets/smart-home.jpg";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Pushing boundaries with cutting-edge technology and creative thinking.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working together with clients as true partners in transformation.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Delivering world-class solutions with meticulous attention to detail.",
  },
  {
    icon: Globe,
    title: "Impact",
    description:
      "Creating measurable outcomes that drive real business growth.",
  },
];

const milestones = [
  {
    year: "2020",
    title: "Founded",
    description:
      "LegaTech established as a division of Legacy Global Commercial Services Co.",
  },
  {
    year: "2021",
    title: "AI Division Launch",
    description:
      "Deployed first suite of AI-powered analytics tools for enterprise clients.",
  },
  {
    year: "2022",
    title: "IoT Expansion",
    description:
      "Introduced smart home and IoT integration services across the MENA region.",
  },
  {
    year: "2023",
    title: "AR/VR Studio",
    description:
      "Opened dedicated AR/VR development studio for immersive experiences.",
  },
  {
    year: "2024",
    title: "Regional Growth",
    description:
      "Expanded operations to serve clients across 5 countries in the MENA region.",
  },
  {
    year: "2025",
    title: "Industry Recognition",
    description:
      "Recognized as a leading technology innovator in the Saudi market.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "12+", label: "AI Models Deployed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5", label: "Countries Served" },
];

const AboutPage = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-accent/[0.02] to-transparent" />
        {/* Floating glow orbs */}
        <div className="glow-orb w-[500px] h-[500px] bg-primary/12 -top-20 right-0" />
        <div className="glow-orb glow-orb-2 w-80 h-80 bg-accent/10 bottom-0 left-0" />
        <div className="glow-orb glow-orb-3 w-64 h-64 bg-cyan-400/8 top-1/2 right-1/3" />
        <div className="mx-auto max-w-7xl px-4 lg:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-gradient-animate mb-4">
                About LegaTech
              </span>
              <h1 className="text-4xl lg:text-6xl font-display font-bold tracking-tight mb-6 max-w-3xl">
                Where Innovation
                <br />
                <span className="text-gradient-animate">Meets Intelligence</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
                LEGATECH is at the forefront of innovation and technology,
                delivering intelligent solutions that transform the way people
                live, work, and interact.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative">
                <img src={consulting} alt="LegaTech Team" className="rounded-2xl shadow-2xl w-full h-64 lg:h-80 object-cover" loading="lazy" />
                <div className="absolute -bottom-4 -right-4 w-36 h-36 rounded-2xl overflow-hidden shadow-xl hidden lg:block">
                  <img src={smartHome} alt="Smart solutions" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.02] via-cyan-100/[0.03] to-accent/[0.02] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 lg:px-6 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="text-center group">
                  <span className="block text-4xl lg:text-5xl font-display font-bold tabular-nums group-hover:scale-110 transition-transform duration-300 inline-block">
                    {stat.value}
                  </span>
                  <span className="block text-sm text-muted-foreground mt-2 font-medium">
                    {stat.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story + Vision/Mission */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/[0.01] to-accent/[0.02] pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] bg-gradient-to-l from-accent/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 lg:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-6 tracking-tight">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    As a division of Legacy Global Commercial Services Co., we
                    deliver intelligent solutions tailored to meet the needs of
                    modern businesses and individuals across the MENA region and
                    beyond.
                  </p>
                  <p>
                    We are committed to leveraging AI and cutting-edge
                    technologies to create smarter, more efficient, and immersive
                    experiences, bridging the gap between innovation and
                    practical application.
                  </p>
                  <p>
                    From predictive analytics platforms that process millions of
                    data points to AR environments that redefine training
                    methodologies, every solution we engineer is rooted in
                    measurable outcomes and sustainable technological
                    advancement.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal delay={100}>
                <div className="group rounded-2xl p-8 bg-gradient-to-br from-primary/[0.06] to-primary/[0.02] border border-primary/10 hover:shadow-xl hover:border-primary/20 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Eye size={18} className="text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To become the leading technology and innovation partner in
                    the region, empowering businesses and individuals with
                    advanced solutions that redefine the future.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="group rounded-2xl p-8 bg-gradient-to-br from-accent/[0.06] to-accent/[0.02] border border-accent/10 hover:shadow-xl hover:border-accent/20 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                      <Target size={18} className="text-accent" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground">
                      Our Mission
                    </h3>
                  </div>
                  <ul className="text-sm text-muted-foreground leading-relaxed space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      Provide comprehensive AI, smart home, AR/VR, and design
                      solutions
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      Drive innovation that enhances efficiency and user
                      experience
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      Integrate emerging technologies into practical solutions
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      Foster creativity, collaboration, and continuous
                      advancement
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-secondary/40" />
        <div className="mx-auto max-w-7xl px-4 lg:px-6 relative">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-4">
                Our <span className="text-gradient-animate">Core Values</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                The principles that guide every decision, project, and
                partnership we undertake.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 100}>
                <div className="group text-center rounded-2xl bg-white border border-border/40 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <value.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
