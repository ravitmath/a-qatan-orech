import { useState, useEffect } from "react";
import { Heart, Star } from "lucide-react";

const messages = [
  "את עושה עבודה משמעותית גם כשקשה",
  "תלמידים זוכרים מבטים טובים",
  "גם מדריכות צריכות רגע לנשום",
  "ההשפעה שלך גדולה ממה שאת יודעת",
  "את לא צריכה להיות מושלמת כדי להיות משמעותית",
  "כל יום שאת באה — את עושה שינוי",
  "הכוח שלך מדהים",
  "את מחזיקה עולמות על הכתפיים",
  "תני לעצמך להיות גאה",
  "גם ברגעים קשים — את לא לבד",
];

const borderColors = [
  "border-primary/20",
  "border-turquoise/20",
  "border-sunshine/20",
  "border-rose-custom/20",
];

const EncouragementWall = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hearts, setHearts] = useState<Record<number, number>>({});

  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex((i) => (i + 1) % messages.length), 6000);
    return () => clearInterval(interval);
  }, []);

  const addHeart = (index: number) => {
    setHearts((prev) => ({ ...prev, [index]: (prev[index] || 0) + 1 }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 relative overflow-hidden">
      <div className="orb orb-1" style={{ opacity: 0.25 }} />
      <div className="orb orb-2" style={{ opacity: 0.2 }} />

      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="flex items-center gap-2 mb-1 animate-fade-up">
          <Star className="w-6 h-6 text-sunshine" />
          <h2 className="font-heading text-2xl font-bold text-foreground">קיר עידוד</h2>
        </div>
        <p className="text-muted-foreground mb-8 animate-fade-up-delay-1">מילים שכדאי לשמוע 🌟</p>

        <div className="w-full max-w-sm stagger-children">
          {Array.from({ length: 5 }, (_, i) => {
            const displayIndex = (currentIndex + i) % messages.length;
            return (
              <div
                key={`${displayIndex}-${currentIndex}`}
                className={`emotional-card tilt-card flex items-center justify-between gap-3 mb-3 border ${borderColors[i % borderColors.length]}`}
              >
                <p className="font-heading font-medium text-foreground text-sm leading-relaxed flex-1">
                  {messages[displayIndex]}
                </p>
                <button
                  onClick={() => addHeart(displayIndex)}
                  className="flex items-center gap-1 px-3 py-2 rounded-full bg-muted/50 transition-all duration-200 active:scale-75 shrink-0"
                >
                  <Heart
                    className={`w-4 h-4 transition-all ${(hearts[displayIndex] || 0) > 0 ? "text-rose-custom fill-current" : "text-muted-foreground"}`}
                  />
                  {(hearts[displayIndex] || 0) > 0 && (
                    <span className="text-xs text-muted-foreground">{hearts[displayIndex]}</span>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EncouragementWall;
