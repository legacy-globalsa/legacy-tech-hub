import { Brain, Shield, Zap, Globe } from "lucide-react";

const stats = [
  { icon: Brain, label: "AI SOLUTIONS", value: "Live", color: "text-primary" },
  { icon: Shield, label: "SECURITY", value: "Enterprise-Grade", color: "text-primary" },
  { icon: Zap, label: "UPTIME", value: "99.7%", color: "text-primary" },
  { icon: Globe, label: "REACH", value: "MENA Region", color: "text-primary" },
];

const StatsBar = () => {
  return (
    <section className="section-container -mt-8 relative z-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="gradient-card gradient-card-hover rounded-xl p-5 bg-card"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground">
                {stat.label}
              </span>
              <stat.icon size={16} className={stat.color} />
            </div>
            <span className="text-lg font-display font-semibold text-card-foreground">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
