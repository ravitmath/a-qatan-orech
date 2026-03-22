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

const EncouragementWall = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hearts, setHearts] = useState<Record<number, number>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % messages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const addHeart = (index: number) => {
    setHearts((prev) => ({ ...prev, [index]: (prev[index] || 0) + 1 }));
  };

  const colors = [
    "bg-lavender-light border-lavender/20",
    "bg-turquoise-light border-turquoise/20",
    "bg-sunshine-light border-sunshine/20",
    "bg-rose-light border-rose/20",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12">
      <div className="animate-fade-up flex items-center gap-2 mb-2">
        <Star className="w-6 h-6 text-sunshine" />
        <h2 className="font-heading text-2xl font-bold text-foreground">🌟 קיר עידוד</h2>
      </div>
      <p className="text-muted-foreground mb-8 animate-fade-up-delay-1">מילים שכדאי לשמוע</p>

      <div className="w-full max-w-sm space-y-4">
        {messages.slice(0, 5).map((msg, i) => {
          const displayIndex = (currentIndex + i) % messages.length;
          const displayMsg = messages[displayIndex];
          return (
            <div
              key={`${displayIndex}-${i}`}
              className={`emotional-card border ${colors[i % colors.length]} flex items-center justify-between gap-3 animate-fade-up`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <p className="font-heading font-medium text-foreground text-sm leading-relaxed flex-1">
                {displayMsg}
              </p>
              <button
                onClick={() => addHeart(displayIndex)}
                className="flex items-center gap-1 px-3 py-2 rounded-full bg-card/80 transition-all duration-200 active:scale-90 shrink-0"
              >
                <Heart
                  className={`w-4 h-4 transition-all ${(hearts[displayIndex] || 0) > 0 ? "text-rose fill-rose" : "text-muted-foreground"}`}
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
  );
};

export default EncouragementWall;
