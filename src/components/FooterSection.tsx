import { Share2 } from "lucide-react";

const FooterSection = () => {
  const share = () => {
    const text = encodeURIComponent("חג פסח שמח מצוות המתי״א! 💛🌸\nהכנו לכם משהו מיוחד:\n\n");
    const url = encodeURIComponent(window.location.href);
    window.open(`https://wa.me/?text=${text}${url}`, "_blank");
  };

  return (
    <section className="py-20 md:py-28 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle at 50% 80%, hsl(var(--gold)) 0%, transparent 50%)`,
      }} />

      <div className="reveal relative z-10 max-w-md mx-auto">
        <p className="font-display text-5xl mb-6">🌸</p>

        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ lineHeight: '1.3' }}>
          <span className="gold-gradient-text">חג פסח שמח</span>
        </h2>

        <p className="text-foreground/70 text-lg leading-relaxed mb-10">
          שיהיה לכם חג מלא אור, חירות, ורגעים טובים
          <br />
          עם המשפחה והאנשים האהובים
        </p>

        <button
          onClick={share}
          className="reveal reveal-delay-1 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold/10 border border-gold/30 text-gold font-body font-bold transition-all duration-300 hover:bg-gold/20 hover:shadow-[0_0_40px_-5px_hsl(var(--gold)/0.3)] active:scale-95"
        >
          <Share2 className="w-5 h-5" />
          שתפו עם הצוות
        </button>

        <p className="text-muted-foreground text-xs mt-16">
          נוצר באהבה עבור צוותי המתי״א 💛
        </p>
      </div>
    </section>
  );
};

export default FooterSection;
