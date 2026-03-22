import { Shield, Server } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const StatsBar = () => {
  return (
    <section className="px-4 lg:px-6 -mt-6 relative z-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <ScrollReveal delay={0}>
            <div className="rounded-xl p-5 bg-[hsl(220,20%,13%)] text-white min-h-[120px] group hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/50">Terminal</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-medium text-emerald-400">Live</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-xs font-mono">
                <span className="text-emerald-400">→</span>
                <span className="text-white/60">deploying...</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="rounded-xl p-5 bg-card border border-border/60 min-h-[120px] group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground">Pipeline</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center">
                  <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-foreground">Verification</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div className="rounded-xl p-5 bg-card border border-border/60 min-h-[120px] group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground">Access Control</span>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield size={12} className="text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">Elevated Privileges</span>
              </div>
              <span className="text-[11px] text-muted-foreground ml-7">MFA Verified</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <div className="rounded-xl p-5 bg-card border border-border/60 min-h-[120px] group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground">Redundancy</span>
                <Server size={14} className="text-primary" />
              </div>
              <span className="text-3xl font-display font-bold text-foreground tabular-nums">99.7%</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
