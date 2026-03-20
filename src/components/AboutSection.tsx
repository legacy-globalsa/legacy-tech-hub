import { Target, Eye } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/50">
      <div className="section-container">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            About LegaTech
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 tracking-tight">
            Where Innovation Meets Intelligence
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          <ScrollReveal delay={100}>
            <p className="text-muted-foreground leading-relaxed mb-6">
              LEGATECH is at the forefront of innovation and technology, offering a full spectrum of products and services 
              that transform the way people live, work, and interact. As a division of Legacy Global Commercial Services Co., 
              we deliver intelligent solutions tailored to meet the needs of modern businesses and individuals.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We are committed to leveraging AI and cutting-edge technologies to create smarter, more efficient, and immersive 
              experiences, bridging the gap between innovation and practical application across the MENA region and beyond.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From predictive analytics platforms that process millions of data points to AR environments 
              that redefine training methodologies, every solution we engineer is rooted in measurable outcomes 
              and sustainable technological advancement.
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal delay={200}>
              <div className="gradient-card rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Eye size={18} className="text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">Our Vision</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To become the leading technology and innovation partner in the region, empowering businesses 
                  and individuals with advanced solutions that redefine the future of how we live and work.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="gradient-card rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Target size={18} className="text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">Our Mission</h3>
                </div>
                <ul className="text-sm text-muted-foreground leading-relaxed space-y-2">
                  <li>• Provide comprehensive AI, smart home, app development, AR/VR, and design solutions</li>
                  <li>• Drive innovation that enhances efficiency, connectivity, and user experience</li>
                  <li>• Integrate emerging technologies into practical, real-world solutions</li>
                  <li>• Foster creativity, collaboration, and continuous advancement</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
