import Navigation from "@/components/sections/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ProductSection from "@/components/sections/ProductSection";
import MarketSection from "@/components/sections/MarketSection";
import AudienceSection from "@/components/sections/AudienceSection";
import PricingSection from "@/components/sections/PricingSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import TeamSection from "@/components/sections/TeamSection";
import ClosingSection from "@/components/sections/ClosingSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProductSection />
      <MarketSection />
      <AudienceSection />
      <PricingSection />
      <AdvantagesSection />
      <RoadmapSection />
      <TeamSection />
      <ClosingSection />
      <Footer />
    </main>
  );
};

export default Index;
