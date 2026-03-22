import { useReveal } from "@/hooks/useReveal";
import HeroSection from "@/components/HeroSection";
import LetterAndGreeting from "@/components/LetterAndGreeting";
import QuizHighlight from "@/components/QuizHighlight";
import FlowerDivider from "@/components/FlowerDivider";
import LinksSection from "@/components/LinksSection";
import GratitudeSection from "@/components/GratitudeSection";
import TriviaSection from "@/components/TriviaSection";
import QuotesSection from "@/components/QuotesSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const revealRef = useReveal();

  return (
    <div ref={revealRef} className="overflow-x-hidden">
      <HeroSection />

      <FlowerDivider />
      <LetterAndGreeting />

      <FlowerDivider />
      <QuizHighlight />

      <FlowerDivider />
      <LinksSection />

      <FlowerDivider />
      <GratitudeSection />

      <FlowerDivider />
      <TriviaSection />

      <FlowerDivider />
      <QuotesSection />

      <FlowerDivider />
      <FooterSection />
    </div>
  );
};

export default Index;
