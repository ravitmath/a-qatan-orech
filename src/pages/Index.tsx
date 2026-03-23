import { useReveal } from "@/hooks/useReveal";
import HeroSection from "@/components/HeroSection";
import GreetingSection from "@/components/GreetingSection";
import FlowerDivider from "@/components/FlowerDivider";
import LinksSection from "@/components/LinksSection";
import GratitudeSection from "@/components/GratitudeSection";
import TriviaSection from "@/components/TriviaSection";
import QuotesSection from "@/components/QuotesSection";
import LetterSection from "@/components/LetterSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const revealRef = useReveal();

  return (
    <div ref={revealRef} className="overflow-x-hidden">
      <HeroSection />

      <FlowerDivider />
      <GreetingSection />

      <FlowerDivider />
      <LinksSection />

      <FlowerDivider />
      <GratitudeSection />

      <FlowerDivider />
      <TriviaSection />

      <FlowerDivider />
      <QuotesSection />

      <FlowerDivider />
      <LetterSection />

      <FlowerDivider />
      <FooterSection />
    </div>
  );
};

export default Index;
