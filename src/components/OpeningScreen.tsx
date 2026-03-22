import { Heart, Sparkles } from "lucide-react";
import { useMemo } from "react";

interface Props {
  onStart: () => void;
}

const OpeningScreen = ({ onStart }: Props) => {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        left: `${Math.random() * 100}%`,
        duration: `${4 + Math.random() * 6}s`,
        delay: `${Math.random() * 5}s`,
        size: `${2 + Math.random() * 3}px`,
        color: i % 3 === 0 ? "var(--primary)" : i % 3 === 1 ? "var(--turquoise)" : "var(--sunshine)",
      })),
    []
  );

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: p.left,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            background: `hsl(${p.color} / 0.6)`,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg">
        <div className="floating mb-6 animate-fade-up">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center shimmer-border">
            <Heart className="w-10 h-10 text-primary animate-pulse-soft" />
          </div>
        </div>

        <h1 className="font-heading text-4xl md:text-5xl font-black text-foreground leading-[1.1] animate-fade-up mb-3" style={{ textWrap: 'balance' as any }}>
          מרחב קטן של{" "}
          <span className="gradient-text">אוויר</span>
          <br />
          לצוותים גדולים
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground animate-fade-up-delay-1 mb-10 leading-relaxed max-w-xs">
          רגע לעצמך בתוך ימים מורכבים
        </p>

        <button
          onClick={onStart}
          className="animate-fade-up-delay-2 btn-shine group px-12 py-4 rounded-full bg-primary text-primary-foreground font-heading font-bold text-lg transition-all duration-300 hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.5)] active:scale-95"
        >
          <span className="flex items-center gap-3">
            התחילי
            <Sparkles className="w-5 h-5 transition-transform duration-500 group-hover:rotate-45 group-hover:scale-125" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default OpeningScreen;
