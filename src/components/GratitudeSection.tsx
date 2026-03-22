import { useState, useCallback, useMemo } from "react";
import { Plus, Heart, Trash2, Sparkles, CheckCircle, RotateCcw, ArrowLeft } from "lucide-react";

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

interface ThemeMatch {
  theme: string;
  emoji: string;
  keywords: string[];
  insight: string;
  suggestions: [string, string];
}

const themes: ThemeMatch[] = [
  {
    theme: "קשרים אנושיים",
    emoji: "❤️",
    keywords: ["משפחה", "חבר", "אמא", "אבא", "ילד", "ילדים", "בן זוג", "אחות", "אח", "עמית", "צוות", "אנשים", "חיבוק", "שיחה", "ביחד", "יחד", "אהבה", "חברה", "בעל", "אישה"],
    insight: "הקשרים עם אנשים אחרים הם מקור משמעותי של שמחה ומשמעות בחייך.",
    suggestions: [
      "🤝 שלחו היום הודעה קצרה לאדם שהזכרתם — ספרו לו שאתם מעריכים אותו",
      "📅 קבעו מפגש קבוע — אפילו 15 דקות בשבוע עם מישהו שעושה לכם טוב",
    ],
  },
  {
    theme: "רגעים קטנים",
    emoji: "✨",
    keywords: ["רגע", "שקט", "קפה", "בוקר", "שקיעה", "זריחה", "טבע", "פרח", "שמש", "גשם", "מוזיקה", "שיר", "ספר", "נוף", "יופי", "ים", "טיול", "הליכה"],
    insight: "יש לך יכולת מיוחדת לשים לב לרגעים הקטנים — וזה כוח אמיתי.",
    suggestions: [
      "📸 צלמו כל יום רגע אחד יפה בטלפון — תיצרו אלבום של דברים טובים",
      "⏸️ הקדישו 3 דקות ביום לעצירה שקטה בלי מסכים — תנו לרגע להיספג",
    ],
  },
  {
    theme: "הישגים וצמיחה",
    emoji: "🌟",
    keywords: ["הצלחתי", "למדתי", "גאה", "התקדמתי", "יכולת", "כישרון", "עבודה", "פרויקט", "מטרה", "חזק", "אומץ", "התמודדות", "גדלתי", "שיפור", "סיימתי"],
    insight: "את/ה מזהה צמיחה אישית ומעריך/ה את ההתקדמות של עצמך — זו תכונה חשובה.",
    suggestions: [
      "📝 כתבו רשימה של 3 דברים שעשיתם טוב השבוע — קטנים כגדולים",
      "🎯 בחרו מיומנות אחת קטנה שתרצו לפתח ותנו לה 10 דקות ביום",
    ],
  },
  {
    theme: "בריאות ורווחה",
    emoji: "🧘",
    keywords: ["בריאות", "שינה", "ספורט", "ריצה", "אוכל", "מנוחה", "נשימה", "רוגע", "אנרגיה", "גוף", "כוח", "יוגה", "הליכה", "תרגול"],
    insight: "את/ה מודע/ת לחשיבות של הגוף והנפש — וזה הבסיס לכל השאר.",
    suggestions: [
      "🚶 הוסיפו הליכה קצרה של 10 דקות ליום — זה משפר מצב רוח ובריאות",
      "😴 נסו ללכת לישון 15 דקות מוקדם יותר הלילה — שינה טובה משנה הכל",
    ],
  },
  {
    theme: "הכרת תודה כללית",
    emoji: "🌈",
    keywords: [],
    insight: "עצם ההיעצרות לחשוב על דברים טובים היא מתנה שנתתם לעצמכם.",
    suggestions: [
      "🌅 התחילו כל בוקר עם מחשבה אחת טובה — לפני שפותחים את הטלפון",
      "💌 שתפו את מה שכתבתם עם מישהו קרוב — הכרת תודה מדבקת",
    ],
  },
];

function analyzeEntries(entries: GratitudeEntry[]) {
  const allText = entries.map((e) => e.text).join(" ").toLowerCase();

  let bestMatch: ThemeMatch = themes[themes.length - 1];
  let bestScore = 0;

  for (const theme of themes) {
    if (theme.keywords.length === 0) continue;
    const score = theme.keywords.filter((kw) => allText.includes(kw)).length;
    if (score > bestScore) {
      bestScore = score;
      bestMatch = theme;
    }
  }

  return bestMatch;
}

const GratitudeSection = () => {
  const [entries, setEntries] = useState<GratitudeEntry[]>([]);
  const [input, setInput] = useState("");
  const [currentPrompt, setCurrentPrompt] = useState(
    () => prompts[Math.floor(Math.random() * prompts.length)]
  );
  const [justAdded, setJustAdded] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const analysis = useMemo(() => analyzeEntries(entries), [entries]);

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

  const restart = useCallback(() => {
    setEntries([]);
    setShowSummary(false);
    setCurrentPrompt(prompts[Math.floor(Math.random() * prompts.length)]);
  }, []);

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

        {showSummary ? (
          /* ======= SUMMARY VIEW ======= */
          <div className="space-y-5 animate-fade-in">
            {/* Analysis card */}
            <div className="rounded-2xl bg-card border border-gold/20 p-6 text-center">
              <span className="text-5xl block mb-4">{analysis.emoji}</span>
              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                הנושא המרכזי שלך: {analysis.theme}
              </h3>
              <p className="text-foreground/70 text-sm font-body leading-relaxed mt-3 max-w-md mx-auto">
                {analysis.insight}
              </p>
            </div>

            {/* All entries */}
            <div className="rounded-2xl bg-card border border-border/50 p-5">
              <h4 className="font-body font-bold text-foreground text-sm mb-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-spring" />
                מה כתבתם ({entries.length})
              </h4>
              <div className="space-y-2.5">
                {[...entries].reverse().map((entry, i) => (
                  <div
                    key={entry.id}
                    className="flex items-start gap-3 text-sm"
                  >
                    <span className="text-gold/60 font-body mt-0.5 shrink-0">
                      {i + 1}.
                    </span>
                    <p className="text-foreground/80 font-body leading-relaxed">
                      {entry.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggestions */}
            <div className="rounded-2xl bg-card border border-spring/20 p-5">
              <h4 className="font-body font-bold text-foreground text-sm mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold" />
                שתי הצעות להמשך הדרך
              </h4>
              <div className="space-y-3">
                {analysis.suggestions.map((suggestion, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-spring/5 border border-spring/10 p-4"
                  >
                    <p className="text-foreground/80 text-sm font-body leading-relaxed">
                      {suggestion}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => setShowSummary(false)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border/40 hover:border-gold/40 text-foreground font-body font-semibold text-sm transition-all duration-200 active:scale-[0.97]"
              >
                <ArrowLeft className="w-4 h-4" />
                חזרה לכתיבה
              </button>
              <button
                onClick={restart}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gold/10 border border-gold/30 hover:border-gold/50 text-foreground font-body font-semibold text-sm transition-all duration-200 active:scale-[0.97]"
              >
                <RotateCcw className="w-4 h-4" />
                התחלה מחדש
              </button>
            </div>
          </div>
        ) : (
          /* ======= WRITING VIEW ======= */
          <>
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
                <span className="text-sm text-spring font-body">
                  ✨ יפה! נוסף ליומן
                </span>
              </div>
            )}

            {/* Entries */}
            {entries.length > 0 && (
              <>
                <div className="space-y-3 mb-6">
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

                {/* Finish button */}
                <div className="text-center">
                  <button
                    onClick={() => setShowSummary(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold/10 border border-gold/30 hover:border-gold/50 text-foreground font-body font-semibold text-sm transition-all duration-200 active:scale-[0.97]"
                  >
                    <CheckCircle className="w-4 h-4 text-gold" />
                    סיימתי — הראו לי ניתוח
                  </button>
                </div>
              </>
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
          </>
        )}
      </div>
    </section>
  );
};

export default GratitudeSection;
