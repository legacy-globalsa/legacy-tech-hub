import Navbar from "./Navbar";
import Footer from "./Footer";
import Grainient from "./Grainient";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Animated page-wide gradient background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Grainient
          color1="#c0f0eb"
          color2="#fce0c4"
          color3="#eaf8f6"
          timeSpeed={0.06}
          grainAmount={0.03}
          contrast={1.03}
          saturation={0.6}
          zoom={1.6}
          warpStrength={0.5}
          warpAmplitude={28}
          warpSpeed={1}
          warpFrequency={4}
          rotationAmount={180}
          noiseScale={1.5}
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>
      <div className="relative z-10">
        <Navbar />
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default PageLayout;
