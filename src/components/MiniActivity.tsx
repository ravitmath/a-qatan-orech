import { useState } from "react";
import { Sparkles, RefreshCw } from "lucide-react";

const words = [
  { word: "נשימה", message: "עצרי רגע. שאפי עמוק. את כאן." },
  { word: "חמלה", message: "תני לעצמך את החסד שאת נותנת לאחרים." },
  { word: "יציבות", message: "גם כשהכל זז — את הקרקע." },
  { word: "אמון", message: "יש בך יותר ממה שאת חושבת." },
  { word: "סקרנות", message: "מה עוד אפשר לגלות היום?" },
  { word: "תקווה", message: "גם אור קטן שובר חושך גדול." },
  { word: "חוזק", message: "את ממשיכה. וזה כבר הרבה." },
  { word: "חיבור", message: "את לא לבד בדרך הזו." },
];

const MiniActivity = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [shuffled, setShuffled] = useState(() =>
    [...words].sort(() => Math.random() - 0.5)
  );

  const reset = () => {
    setSelected(null);
    setShuffled([...words].sort(() => Math.random() - 0.5));
  };

  const colors = [
    "bg-lavender-light hover:bg-lavender/30",
    "bg-turquoise-light hover:bg-turquoise/30",
    "bg-sunshine-light hover:bg-sunshine/30",
    "bg-rose-light hover:bg-rose/30",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="animate-fade-up flex items-center gap-2 mb-2">
        <Sparkles className="w-6 h-6 text-sunshine" />
        <h2 className="font-heading text-2xl font-bold text-foreground">🎲 פעילות קטנה</h2>
      </div>
      <p className="text-muted-foreground mb-10 animate-fade-up-delay-1">בחרי מילה ליום שלך</p>

      {selected === null ? (
        <div className="flex flex-wrap gap-3 justify-center max-w-sm animate-fade-up-delay-2">
          {shuffled.map((item, i) => (
            <button
              key={item.word}
              onClick={() => setSelected(i)}
              className={`px-5 py-3 rounded-full font-heading font-medium text-foreground transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 ${colors[i % colors.length]}`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {item.word}
            </button>
          ))}
        </div>
      ) : (
        <div className="text-center max-w-xs animate-fade-up">
          <div className="emotional-card pastel-gradient mb-6">
            <p className="font-heading text-3xl font-bold text-foreground mb-4">
              ✨ {shuffled[selected].word}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {shuffled[selected].message}
            </p>
          </div>

          <button
            onClick={reset}
            className="flex items-center gap-2 mx-auto px-6 py-3 rounded-full bg-card shadow-md font-heading text-muted-foreground transition-all duration-200 hover:shadow-lg active:scale-95"
          >
            <RefreshCw className="w-4 h-4" />
            בחרי שוב
          </button>
        </div>
      )}
    </div>
  );
};

export default MiniActivity;
