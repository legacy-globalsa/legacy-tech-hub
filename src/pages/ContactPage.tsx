import { Phone, Mail, Globe, MapPin, Send } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { useState, type FormEvent } from "react";
import appDev from "@/assets/app-dev.jpg";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-20 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.02]" />
        {/* Floating glow orbs */}
        <div className="glow-orb w-[500px] h-[400px] bg-primary/10 -top-10 left-1/2 -translate-x-1/2" />
        <div className="glow-orb glow-orb-2 w-80 h-80 bg-accent/8 bottom-0 right-10" />
        <div className="glow-orb glow-orb-3 w-56 h-56 bg-cyan-400/8 top-1/3 left-10" />
        <div className="mx-auto max-w-7xl px-4 lg:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-gradient-animate mb-4">
                Get in Touch
              </span>
              <h1 className="text-4xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                Let's Build Something
                <br />
                <span className="text-gradient-animate">Extraordinary</span>
              </h1>
              <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
                Ready to transform your vision into reality? We'd love to hear
                about your project.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative hidden lg:block">
                <img src={appDev} alt="Getting in touch" className="rounded-2xl shadow-2xl w-full h-64 object-cover" loading="lazy" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact form + Info */}
      <section className="py-16 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-accent/[0.02] pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-r from-primary/4 via-cyan-100/5 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[300px] bg-gradient-to-t from-violet-200/6 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 lg:px-6 relative">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 hover:border-border/80"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 hover:border-border/80"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 hover:border-border/80"
                        placeholder="+966 50 000 0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 hover:border-border/80"
                        placeholder="Project inquiry"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none hover:border-border/80"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="cursor-target group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 hover:shadow-lg transition-all duration-300 active:scale-[0.97]"
                  >
                    Send Message
                    <Send
                      size={16}
                      className="group-hover:translate-x-0.5 transition-transform duration-200"
                    />
                  </button>
                </form>
              </ScrollReveal>
            </div>

            {/* Contact info cards */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={200}>
                <div className="space-y-4">
                  <div className="group rounded-2xl p-6 bg-gradient-to-br from-primary/[0.04] to-transparent border border-border/40 hover:shadow-lg hover:border-primary/20 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <Phone size={18} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground text-sm mb-1">
                          Phone
                        </h3>
                        <a
                          href="tel:+966503602359"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          +966 50 360 2359
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group rounded-2xl p-6 bg-gradient-to-br from-accent/[0.04] to-transparent border border-border/40 hover:shadow-lg hover:border-accent/20 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                        <Mail size={18} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground text-sm mb-1">
                          Email
                        </h3>
                        <a
                          href="mailto:info@legacyglobalsa.com"
                          className="text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          info@legacyglobalsa.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group rounded-2xl p-6 bg-gradient-to-br from-blue-500/[0.04] to-transparent border border-border/40 hover:shadow-lg hover:border-blue-300/40 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                        <Globe size={18} className="text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground text-sm mb-1">
                          Website
                        </h3>
                        <a
                          href="https://www.legacyglobalsa.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-blue-500 transition-colors"
                        >
                          www.legacyglobalsa.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group rounded-2xl p-6 bg-gradient-to-br from-purple-500/[0.04] to-transparent border border-border/40 hover:shadow-lg hover:border-purple-300/40 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-300">
                        <MapPin size={18} className="text-purple-500" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground text-sm mb-1">
                          Office
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Near Al Mutlaq Hotel, King Abdulaziz Rd,
                          <br />
                          Kingdom of Saudi Arabia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
