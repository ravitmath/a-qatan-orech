import { useReveal } from "@/hooks/useReveal";
import HeroSection from "@/components/HeroSection";
import LetterSection from "@/components/LetterSection";
import LinksSection from "@/components/LinksSection";
import QuotesSection from "@/components/QuotesSection";
import PlaylistSection from "@/components/PlaylistSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const revealRef = useReveal();

  return (
    <div ref={revealRef} className="overflow-x-hidden">
      <HeroSection />

      <div className="section-divider mx-8" />
      <LetterSection />

      <div className="section-divider mx-8" />
      <LinksSection />

      <div className="section-divider mx-8" />
      <QuotesSection />

      <div className="section-divider mx-8" />
      <PlaylistSection />

      <div className="section-divider mx-8" />
      <FooterSection />
    </div>
  );
};

export default Index;
