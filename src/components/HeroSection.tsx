import { useMemo } from "react";
import heroBg from "@/assets/passover-hero.jpg";

const HeroSection = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        left: `${10 + Math.random() * 80}%`,
        duration: `${5 + Math.random() * 7}s`,
        delay: `${Math.random() * 4}s`,
        size: `${2 + Math.random() * 3}px`,
      })),
    []
  );

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* BG Image */}
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover brightness-[0.4]" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: p.left,
            bottom: "-5px",
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}

      <div className="relative z-10 text-center px-6 max-w-2xl">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-gold-light mb-6 hero-animate hero-delay-1">
          מתי״א רג״ב • פסח תשפ״ו
        </p>

        <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-6 hero-animate hero-delay-2" style={{ lineHeight: '1.15' }}>
          <span className="gold-gradient-text">חג של חירות</span>
          <br />
          <span className="text-white text-3xl md:text-4xl font-light">לצוותים שמחזיקים עולמות</span>
        </h1>

        <p className="text-lg md:text-xl text-foreground/70 max-w-md mx-auto leading-relaxed hero-animate hero-delay-3">
          בימים מורכבים אלו, אנחנו עוצרים רגע להגיד תודה.
          <br />
          חג פסח שמח ומלא אור.
        </p>

        <div className="hero-animate hero-delay-4 mt-10">
          <a
            href="#letter"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-gold/30 text-gold font-body font-medium transition-all duration-300 hover:bg-gold/10 hover:border-gold/50 hover:shadow-[0_0_30px_-5px_hsl(var(--gold)/0.3)] active:scale-95"
          >
            גללי למטה ✨
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
