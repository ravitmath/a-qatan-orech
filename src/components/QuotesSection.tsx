import { useState, useEffect } from "react";

const quotes = [
  { text: "בכל דור ודור חייב אדם לראות את עצמו כאילו הוא יצא ממצרים", source: "הגדה של פסח" },
  { text: "אין לך בן חורין אלא מי שעוסק בתורה", source: "פרקי אבות" },
  { text: "מה נשתנה הלילה הזה — כי בלילה הזה אנחנו שואלים, וזו כבר חירות", source: "" },
  { text: "גם מהחושך הכי עמוק אפשר לצאת לאור גדול", source: "" },
  { text: "החירות האמיתית היא לבחור מחדש כל יום להיות שם עבור מישהו", source: "" },
  { text: "מי שמלמד ילד — כאילו בראו", source: "סנהדרין" },
];

const QuotesSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((c) => (c + 1) % quotes.length), 7000);
    return () => clearInterval(interval);
  }, []);

  const quote = quotes[current];

  return (
    <section className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 30% 50%, hsl(var(--gold)) 0%, transparent 50%), radial-gradient(circle at 70% 50%, hsl(var(--spring)) 0%, transparent 50%)`,
      }} />

      <div className="reveal max-w-lg mx-auto text-center relative z-10">
        <div className="text-gold text-4xl mb-8 animate-pulse-gold">״</div>

        <div key={current} className="hero-animate">
          <blockquote className="font-display text-2xl md:text-3xl font-medium text-foreground leading-[1.5] mb-4" style={{ lineHeight: '1.5' }}>
            {quote.text}
          </blockquote>

          {quote.source && (
            <cite className="text-gold/70 font-body text-sm not-italic">— {quote.source}</cite>
          )}
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                i === current ? "bg-gold w-6" : "bg-muted hover:bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
