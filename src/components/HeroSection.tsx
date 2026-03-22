import { useMemo } from "react";
import heroBg from "@/assets/spring-hero.jpg";
import flowersTop from "@/assets/flowers-top.png";

const HeroSection = () => {
  const petals = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        left: `${5 + Math.random() * 90}%`,
        duration: `${6 + Math.random() * 8}s`,
        delay: `${Math.random() * 5}s`,
        size: `${8 + Math.random() * 14}px`,
        rotation: `${Math.random() * 360}deg`,
      })),
    []
  );

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* BG Image */}
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-white/25" />

      {/* Falling petals */}
      {petals.map((p, i) => (
        <div
          key={i}
          className="absolute top-[-20px] pointer-events-none"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            background: i % 3 === 0 ? "hsl(340 55% 80%)" : i % 3 === 1 ? "hsl(0 0% 95%)" : "hsl(340 40% 88%)",
            borderRadius: "50% 0 50% 50%",
            opacity: 0.7,
            animation: `petal-fall ${p.duration} linear infinite`,
            animationDelay: p.delay,
            transform: `rotate(${p.rotation})`,
          }}
        />
      ))}

      <div className="relative z-10 text-center px-6 max-w-2xl">
        <img src={flowersTop} alt="" className="w-24 md:w-32 mx-auto mb-4 hero-animate hero-delay-1 opacity-85" />

        <p className="font-body text-sm tracking-[0.3em] uppercase text-foreground/70 mb-4 hero-animate hero-delay-1">
          מתי״א רג״ב • פסח תשפ״ו
        </p>

        <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-6 hero-animate hero-delay-2" style={{ lineHeight: '1.15' }}>
          <span className="gold-gradient-text">חג של חירות</span>
          <br />
          <span className="text-foreground/80 text-3xl md:text-4xl font-light">לצוותים שמחזיקים עולמות</span>
        </h1>

        <p className="text-lg md:text-xl text-foreground/60 max-w-md mx-auto leading-relaxed hero-animate hero-delay-3">
          בימים מורכבים אלו, אנחנו עוצרים רגע להגיד תודה.
          <br />
          חג פסח שמח ומלא אור. 🌸
        </p>

        <div className="hero-animate hero-delay-4 mt-10">
          <a
            href="#letter"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/60 backdrop-blur-sm border border-gold/30 text-foreground font-body font-medium transition-all duration-300 hover:bg-white/80 hover:border-gold/50 hover:shadow-[0_4px_20px_-4px_hsl(var(--gold)/0.3)] active:scale-95"
          >
            גללו למטה ✨
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
