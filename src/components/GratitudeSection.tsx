import { useState, useCallback } from "react";
import { Plus, Heart, Trash2, Sparkles } from "lucide-react";

interface GratitudeEntry {
  id: string;
  text: string;
  date: string;
  liked: boolean;
}

const prompts = [
  "מה גרם לך לחייך היום?",
  "על מה את/ה אסיר/ת תודה ברגע הזה?",
  "מי עשה לך טוב לאחרונה?",
  "איזה רגע קטן שימח אותך השבוע?",
  "מה דבר טוב שקרה לך לאחרונה?",
  "על איזה כישרון שלך את/ה מודה?",
  "מה הדבר הכי יפה שראית היום?",
  "מי האדם שאת/ה הכי מעריך/ה?",
];

const GratitudeSection = () => {
  const [entries, setEntries] = useState<GratitudeEntry[]>([]);
  const [input, setInput] = useState("");
  const [currentPrompt, setCurrentPrompt] = useState(
    () => prompts[Math.floor(Math.random() * prompts.length)]
  );
  const [justAdded, setJustAdded] = useState(false);

  const addEntry = useCallback(() => {
    const text = input.trim();
    if (!text) return;

    const entry: GratitudeEntry = {
      id: crypto.randomUUID(),
      text,
      date: new Date().toLocaleDateString("he-IL", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      }),
      liked: false,
    };

    setEntries((prev) => [entry, ...prev]);
    setInput("");
    setCurrentPrompt(prompts[Math.floor(Math.random() * prompts.length)]);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  }, [input]);

  const toggleLike = useCallback((id: string) => {
    setEntries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, liked: !e.liked } : e))
    );
  }, []);

  const removeEntry = useCallback((id: string) => {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      addEntry();
    }
  };

  return (
    <section className="py-20 md:py-28 px-4">
      <div className="max-w-xl mx-auto">
        <div className="reveal text-center mb-10">
          <span className="text-3xl">📝</span>
          <h2
            className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3"
            style={{ lineHeight: "1.3" }}
          >
            יומן הכרת תודה
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">
            רגע של עצירה — על מה את/ה אסיר/ת תודה?
          </p>
        </div>

        {/* Input area */}
        <div className="reveal reveal-delay-1 rounded-2xl bg-card border border-border/50 p-5 mb-6">
          <p className="text-sm text-gold font-body mb-3 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            {currentPrompt}
          </p>
          <div className="flex gap-3">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="כתבו כאן..."
              rows={2}
              className="flex-1 bg-transparent border border-border/40 rounded-xl px-4 py-3 text-foreground text-sm font-body placeholder:text-muted-foreground/50 resize-none focus:outline-none focus:border-gold/40 transition-colors"
              dir="rtl"
            />
            <button
              onClick={addEntry}
              disabled={!input.trim()}
              className="self-end p-3 rounded-xl bg-gold/10 border border-gold/30 hover:border-gold/50 text-gold transition-all duration-200 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Success feedback */}
        {justAdded && (
          <div className="text-center mb-4 animate-fade-in">
            <span className="text-sm text-spring font-body">✨ יפה! נוסף ליומן</span>
          </div>
        )}

        {/* Entries */}
        {entries.length > 0 && (
          <div className="space-y-3">
            {entries.map((entry, i) => (
              <div
                key={entry.id}
                className={`reveal reveal-delay-${Math.min(i + 1, 3)} group rounded-xl bg-card border border-border/30 hover:border-gold/20 p-4 transition-all duration-200`}
              >
                <p className="text-foreground text-sm font-body leading-relaxed mb-2">
                  {entry.text}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {entry.date}
                  </span>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => toggleLike(entry.id)}
                      className="p-1.5 rounded-lg hover:bg-blossom/10 transition-colors active:scale-90"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 transition-colors ${
                          entry.liked
                            ? "fill-blossom text-blossom"
                            : "text-muted-foreground"
                        }`}
                      />
                    </button>
                    <button
                      onClick={() => removeEntry(entry.id)}
                      className="p-1.5 rounded-lg hover:bg-destructive/10 transition-colors active:scale-90"
                    >
                      <Trash2 className="w-3.5 h-3.5 text-muted-foreground" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {entries.length === 0 && (
          <div className="reveal reveal-delay-2 text-center py-10 rounded-2xl bg-card/50 border border-border/30">
            <span className="text-4xl block mb-3">🌱</span>
            <p className="text-muted-foreground text-sm">
              עדיין לא כתבתם כלום — זה הרגע להתחיל
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GratitudeSection;
