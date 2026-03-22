import { useState } from "react";
import { Sparkles, RefreshCw } from "lucide-react";

const words = [
  { word: "נשימה", message: "עצרי רגע. שאפי עמוק. את כאן.", color: "text-turquoise" },
  { word: "חמלה", message: "תני לעצמך את החסד שאת נותנת לאחרים.", color: "text-rose-custom" },
  { word: "יציבות", message: "גם כשהכל זז — את הקרקע.", color: "text-primary" },
  { word: "אמון", message: "יש בך יותר ממה שאת חושבת.", color: "text-sunshine" },
  { word: "סקרנות", message: "מה עוד אפשר לגלות היום?", color: "text-turquoise" },
  { word: "תקווה", message: "גם אור קטן שובר חושך גדול.", color: "text-sunshine" },
  { word: "חוזק", message: "את ממשיכה. וזה כבר הרבה.", color: "text-primary" },
  { word: "חיבור", message: "את לא לבד בדרך הזו.", color: "text-rose-custom" },
];

const bubbleColors = [
  "bg-primary/15 border-primary/25 hover:bg-primary/25",
  "bg-turquoise/15 border-turquoise/25 hover:bg-turquoise/25",
  "bg-sunshine/15 border-sunshine/25 hover:bg-sunshine/25",
  "bg-rose-custom/15 border-rose-custom/25 hover:bg-rose-custom/25",
];

const MiniActivity = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [shuffled, setShuffled] = useState(() => [...words].sort(() => Math.random() - 0.5));

  const reset = () => { setSelected(null); setShuffled([...words].sort(() => Math.random() - 0.5)); };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      <div className="orb orb-3" />
      <div className="orb orb-1" style={{ opacity: 0.2 }} />

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-1 animate-fade-up">
          <Sparkles className="w-6 h-6 text-sunshine" />
          <h2 className="font-heading text-2xl font-bold text-foreground">פעילות קטנה</h2>
        </div>
        <p className="text-muted-foreground mb-10 animate-fade-up-delay-1">בחרי מילה ליום שלך ✨</p>

        {selected === null ? (
          <div className="flex flex-wrap gap-3 justify-center max-w-sm stagger-children">
            {shuffled.map((item, i) => (
              <button
                key={item.word}
                onClick={() => setSelected(i)}
                className={`px-6 py-3 rounded-full font-heading font-bold text-foreground border transition-all duration-300 hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.3)] active:scale-90 ${bubbleColors[i % bubbleColors.length]}`}
              >
                {item.word}
              </button>
            ))}
          </div>
        ) : (
          <div className="text-center max-w-xs animate-fade-up">
            <div className="rounded-3xl bg-card border border-border p-8 shimmer-border mb-6">
              <p className={`font-heading text-4xl font-black mb-5 ${shuffled[selected].color}`}>
                {shuffled[selected].word}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed font-body">
                {shuffled[selected].message}
              </p>
            </div>

            <button
              onClick={reset}
              className="flex items-center gap-2 mx-auto px-6 py-3 rounded-full bg-card border border-border font-heading text-muted-foreground transition-all duration-200 hover:border-primary/30 active:scale-95"
            >
              <RefreshCw className="w-4 h-4" />
              בחרי שוב
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MiniActivity;
