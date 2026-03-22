import { Heart, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

interface Props {
  onStart: () => void;
}

const OpeningScreen = ({ onStart }: Props) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-md">
        <div className="floating mb-8">
          <Heart className="w-12 h-12 text-lavender animate-pulse-soft" />
        </div>

        <h1 className="font-heading text-3xl font-bold text-foreground leading-tight animate-fade-up mb-4">
          מרחב קטן של אוויר
          <br />
          <span className="text-primary">לצוותים גדולים</span>
        </h1>

        <p className="text-lg text-muted-foreground animate-fade-up-delay-1 mb-10 leading-relaxed">
          רגע לעצמך בתוך ימים מורכבים
        </p>

        <button
          onClick={onStart}
          className="animate-fade-up-delay-2 group relative px-10 py-4 rounded-full bg-primary text-primary-foreground font-heading font-medium text-lg shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 active:scale-95"
        >
          <span className="flex items-center gap-2">
            התחילי
            <Sparkles className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
          </span>
        </button>

        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-turquoise/10 floating-slow blur-3xl" />
      </div>
    </div>
  );
};

export default OpeningScreen;
