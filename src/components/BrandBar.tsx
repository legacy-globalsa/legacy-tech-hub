import { Layers, Hexagon, Zap, Terminal, Box, Cpu, Globe, Compass } from "lucide-react";

const brands = [
  { icon: Layers, name: "Stratum" },
  { icon: Hexagon, name: "Cuboid" },
  { icon: Zap, name: "Voltex" },
  { icon: Terminal, name: "Synaptic" },
  { icon: Box, name: "DataForge" },
  { icon: Cpu, name: "Aegis AI" },
  { icon: Globe, name: "Meridian" },
  { icon: Compass, name: "NeuralOps" },
];

const BrandBar = () => {
  return (
    <div className="px-4 lg:px-6 pb-4 pt-2 shrink-0">
      <div className="mx-auto max-w-7xl">
        <div className="brand-bar-container rounded-xl px-6 py-3 overflow-hidden relative">
          {/* Scrolling track */}
          <div className="flex animate-marquee whitespace-nowrap">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="inline-flex items-center gap-2 mx-8 shrink-0"
              >
                <brand.icon size={14} className="text-primary/60" />
                <span className="text-[13px] font-medium tracking-wide text-gradient-animate" style={{ animationDelay: `${(i % 8) * 0.4}s` }}>
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-center text-[11px] text-muted-foreground mt-2 tracking-wide">
          Powered by Legacy Global Commercial Services Co.
        </p>
      </div>
    </div>
  );
};

export default BrandBar;
