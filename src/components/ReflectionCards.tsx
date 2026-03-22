import { useState } from "react";
import { Heart, Share2, PenLine, ChevronRight, ChevronLeft } from "lucide-react";
import { toast } from "sonner";

const prompts = [
  { text: "מה נותן לך כוח בתקופה הזו?", color: "bg-lavender-light" },
  { text: "רגע קטן של הצלחה שהיה השבוע", color: "bg-turquoise-light" },
  { text: "משהו טוב שעשית עבור תלמיד", color: "bg-sunshine-light" },
  { text: "אדם שמחזיק אותך", color: "bg-rose-light" },
  { text: "מה היית רוצה לשחרר היום?", color: "bg-lavender-light" },
  { text: "מה למדת על עצמך לאחרונה?", color: "bg-turquoise-light" },
];

const ReflectionCards = () => {
  const [current, setCurrent] = useState(0);
  const [saved, setSaved] = useState<Set<number>>(new Set());
  const [writing, setWriting] = useState(false);
  const [thought, setThought] = useState("");

  const next = () => setCurrent((c) => (c + 1) % prompts.length);
  const prev = () => setCurrent((c) => (c - 1 + prompts.length) % prompts.length);

  const toggleSave = () => {
    const newSaved = new Set(saved);
    if (newSaved.has(current)) {
      newSaved.delete(current);
    } else {
      newSaved.add(current);
      toast("💜 נשמר בלב");
    }
    setSaved(newSaved);
  };

  const share = () => {
    const text = encodeURIComponent(`💭 ${prompts[current].text}\n\n— מתוך ״מרחב קטן של אוויר לצוותים גדולים״`);
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  const card = prompts[current];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <h2 className="font-heading text-2xl font-bold text-foreground mb-2 animate-fade-up">
        💬 כרטיסי השתקפות
      </h2>
      <p className="text-muted-foreground mb-8 animate-fade-up-delay-1">החליקי בין הכרטיסים</p>

      <div className="relative w-full max-w-sm">
        <div
          key={current}
          className={`emotional-card ${card.color} min-h-[200px] flex items-center justify-center text-center animate-fade-up`}
        >
          <p className="font-heading text-xl font-medium text-foreground leading-relaxed px-4">
            {card.text}
          </p>
        </div>

        <div className="flex items-center justify-between mt-6">
          <button
            onClick={prev}
            className="p-3 rounded-full bg-card shadow-md transition-all duration-200 hover:shadow-lg active:scale-95"
          >
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>

          <div className="flex gap-3">
            <button
              onClick={toggleSave}
              className="p-3 rounded-full bg-card shadow-md transition-all duration-200 hover:shadow-lg active:scale-95"
            >
              <Heart
                className={`w-5 h-5 transition-colors ${saved.has(current) ? "text-rose fill-rose" : "text-muted-foreground"}`}
              />
            </button>
            <button
              onClick={share}
              className="p-3 rounded-full bg-card shadow-md transition-all duration-200 hover:shadow-lg active:scale-95"
            >
              <Share2 className="w-5 h-5 text-muted-foreground" />
            </button>
            <button
              onClick={() => setWriting(!writing)}
              className="p-3 rounded-full bg-card shadow-md transition-all duration-200 hover:shadow-lg active:scale-95"
            >
              <PenLine className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          <button
            onClick={next}
            className="p-3 rounded-full bg-card shadow-md transition-all duration-200 hover:shadow-lg active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {prompts.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-6" : "bg-muted"}`}
            />
          ))}
        </div>
      </div>

      {writing && (
        <div className="w-full max-w-sm mt-6 animate-fade-up">
          <textarea
            value={thought}
            onChange={(e) => setThought(e.target.value)}
            placeholder="כתבי את המחשבה שלך..."
            className="w-full p-4 rounded-2xl bg-card border border-border text-foreground font-body resize-none h-28 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
          />
          <button
            onClick={() => {
              if (thought.trim()) {
                toast("✨ המחשבה נשמרה");
                setThought("");
                setWriting(false);
              }
            }}
            className="mt-2 w-full py-3 rounded-full bg-secondary text-secondary-foreground font-heading font-medium transition-all duration-200 hover:shadow-md active:scale-97"
          >
            שמרי 💜
          </button>
        </div>
      )}
    </div>
  );
};

export default ReflectionCards;
