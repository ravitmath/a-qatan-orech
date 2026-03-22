import { useState, useCallback, useMemo } from "react";
import { ArrowLeft, Sparkles, RotateCcw, CheckCircle } from "lucide-react";

const journalPrompts = [
  "מה גרם לך לחייך היום? 😊",
  "מי האדם שאת/ה הכי מעריך/ה ולמה? ❤️",
  "איזה רגע קטן שימח אותך לאחרונה? ✨",
  "על איזה כישרון או יכולת שלך את/ה מודה? 💪",
  "מה דבר אחד טוב שהיית רוצה שיקרה מחר? 🌅",
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
    insight: "הקשרים עם אנשים אחרים הם מקור משמעותי של שמחה ומשמעות בחייך. את/ה מושך/ת כוח מהאנשים סביבך.",
    suggestions: [
      "🤝 שלחו היום הודעה קצרה לאדם שהזכרתם — ספרו לו שאתם מעריכים אותו",
      "📅 קבעו מפגש קבוע — אפילו 15 דקות בשבוע עם מישהו שעושה לכם טוב",
    ],
  },
  {
    theme: "רגעים קטנים",
    emoji: "✨",
    keywords: ["רגע", "שקט", "קפה", "בוקר", "שקיעה", "זריחה", "טבע", "פרח", "שמש", "גשם", "מוזיקה", "שיר", "ספר", "נוף", "יופי", "ים", "טיול", "הליכה"],
    insight: "יש לך יכולת מיוחדת לשים לב לרגעים הקטנים — וזה כוח אמיתי שלא כולם מחזיקים בו.",
    suggestions: [
      "📸 צלמו כל יום רגע אחד יפה בטלפון — תיצרו אלבום של דברים טובים",
      "⏸️ הקדישו 3 דקות ביום לעצירה שקטה בלי מסכים — תנו לרגע להיספג",
    ],
  },
  {
    theme: "הישגים וצמיחה",
    emoji: "🌟",
    keywords: ["הצלחתי", "למדתי", "גאה", "התקדמתי", "יכולת", "כישרון", "עבודה", "פרויקט", "מטרה", "חזק", "אומץ", "התמודדות", "גדלתי", "שיפור", "סיימתי"],
    insight: "את/ה מזהה צמיחה אישית ומעריך/ה את ההתקדמות של עצמך — זו תכונה שמניעה קדימה.",
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
    theme: "תקווה ואופטימיות",
    emoji: "🌈",
    keywords: [],
    insight: "עצם ההיעצרות לחשוב על דברים טובים היא מתנה שנתתם לעצמכם. זה אומר שאתם יודעים לחפש אור.",
    suggestions: [
      "🌅 התחילו כל בוקר עם מחשבה אחת טובה — לפני שפותחים את הטלפון",
      "💌 שתפו את מה שכתבתם עם מישהו קרוב — הכרת תודה מדבקת",
    ],
  },
];

function analyzeEntries(answers: string[]) {
  const allText = answers.join(" ").toLowerCase();
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
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [finished, setFinished] = useState(false);

  const analysis = useMemo(() => analyzeEntries(answers), [answers]);

  const submitAnswer = useCallback(() => {
    const text = input.trim();
    if (!text) return;

    const newAnswers = [...answers, text];
    setAnswers(newAnswers);
    setInput("");

    if (newAnswers.length >= journalPrompts.length) {
      setFinished(true);
    } else {
      setCurrentStep((s) => s + 1);
    }
  }, [input, answers]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitAnswer();
    }
  };

  const restart = useCallback(() => {
    setCurrentStep(0);
    setAnswers([]);
    setInput("");
    setFinished(false);
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
            5 שאלות קצרות — רגע של עצירה והכרת תודה
          </p>
          <p className="text-gold/70 text-sm mt-2 font-body">
            💡 שווה לענות! בסוף תקבלו ניתוח אישי מעמיק וטיפים מעשיים להמשך
          </p>
        </div>

        {finished ? (
          /* ======= SUMMARY ======= */
          <div className="space-y-5 animate-fade-in">
            <div className="rounded-2xl bg-card border border-gold/20 p-6 text-center">
              <span className="text-5xl block mb-4">{analysis.emoji}</span>
              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                הנושא המרכזי שלך: {analysis.theme}
              </h3>
              <p className="text-foreground/70 text-sm font-body leading-relaxed mt-3 max-w-md mx-auto">
                {analysis.insight}
              </p>
            </div>

            <div className="rounded-2xl bg-card border border-border/50 p-5">
              <h4 className="font-body font-bold text-foreground text-sm mb-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-spring" />
                התשובות שלך
              </h4>
              <div className="space-y-4">
                {journalPrompts.map((prompt, i) => (
                  <div key={i} className="text-sm">
                    <p className="text-gold/70 font-body text-xs mb-1">{prompt}</p>
                    <p className="text-foreground/80 font-body leading-relaxed pr-3 border-r-2 border-gold/20">
                      {answers[i]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-card border border-spring/20 p-5">
              <h4 className="font-body font-bold text-foreground text-sm mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold" />
                שתי הצעות להמשך הדרך
              </h4>
              <div className="space-y-3">
                {analysis.suggestions.map((s, i) => (
                  <div key={i} className="rounded-xl bg-spring/5 border border-spring/10 p-4">
                    <p className="text-foreground/80 text-sm font-body leading-relaxed">{s}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={restart}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold/10 border border-gold/30 hover:border-gold/50 text-foreground font-body font-semibold text-sm transition-all duration-200 active:scale-[0.97]"
              >
                <RotateCcw className="w-4 h-4" />
                מלאו שוב
              </button>
            </div>
          </div>
        ) : (
          /* ======= QUESTION VIEW ======= */
          <div className="reveal">
            {/* Progress */}
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs text-muted-foreground font-body">
                שאלה {currentStep + 1} מתוך {journalPrompts.length}
              </span>
              <div className="flex gap-1.5">
                {journalPrompts.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      i < currentStep
                        ? "bg-gold"
                        : i === currentStep
                        ? "bg-gold/50"
                        : "bg-muted/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-card border border-border/50 p-6">
              <p className="font-body font-bold text-foreground text-lg mb-5 text-center leading-relaxed">
                {journalPrompts[currentStep]}
              </p>
              <div className="flex gap-3">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="כתבו כאן..."
                  rows={3}
                  className="flex-1 bg-transparent border border-border/40 rounded-xl px-4 py-3 text-foreground text-sm font-body placeholder:text-muted-foreground/50 resize-none focus:outline-none focus:border-gold/40 transition-colors"
                  dir="rtl"
                  autoFocus
                />
              </div>
              <div className="text-center mt-4">
                <button
                  onClick={submitAnswer}
                  disabled={!input.trim()}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold/10 border border-gold/30 hover:border-gold/50 text-foreground font-body font-semibold text-sm transition-all duration-200 active:scale-[0.97] disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  {currentStep + 1 < journalPrompts.length ? (
                    <>
                      הבא
                      <ArrowLeft className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      סיימתי
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Previous answers preview */}
            {answers.length > 0 && (
              <div className="mt-4 space-y-2">
                {answers.map((ans, i) => (
                  <div key={i} className="rounded-lg bg-card/50 border border-border/20 px-4 py-2.5 text-xs">
                    <span className="text-gold/50">{i + 1}.</span>{" "}
                    <span className="text-foreground/50">{ans}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default GratitudeSection;
