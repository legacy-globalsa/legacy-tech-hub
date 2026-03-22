import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandBar from "@/components/BrandBar";

const Index = () => {
  return (
    <main className="h-screen flex flex-col bg-background overflow-hidden">
      <Navbar />
      <HeroSection />
      <BrandBar />
    </main>
  );
};

export default Index;
