import { useState, useCallback } from "react";
import { Check, X, RotateCcw, Sparkles } from "lucide-react";

interface Question {
  question: string;
  options: string[];
  correct: number;
  fact: string;
}

const questions: Question[] = [
  {
    question: "כמה מכות הביא הקב״ה על המצרים?",
    options: ["7", "10", "12", "15"],
    correct: 1,
    fact: "עשר מכות: דם, צפרדע, כינים, ערוב, דבר, שחין, ברד, ארבה, חושך, מכת בכורות.",
  },
  {
    question: "מה שמו של הים שנקרע לבני ישראל?",
    options: ["ים המלח", "ים סוף", "הים התיכון", "ים כנרת"],
    correct: 1,
    fact: "ים סוף נקרע לשניים ובני ישראל עברו ביבשה.",
  },
  {
    question: "כמה כוסות יין שותים בליל הסדר?",
    options: ["2", "3", "4", "5"],
    correct: 2,
    fact: "ארבע כוסות כנגד ארבע לשונות של גאולה: והוצאתי, והצלתי, וגאלתי, ולקחתי.",
  },
  {
    question: "איזה אוכל מסמל את הדמעות והעבדות?",
    options: ["מרור", "חרוסת", "מי מלח", "כרפס"],
    correct: 2,
    fact: "מי מלח מסמלים את הדמעות שבני ישראל שפכו בעבדותם במצרים.",
  },
  {
    question: "מי אמר ״שלח את עמי״?",
    options: ["אהרון", "משה", "יוסף", "יהושע"],
    correct: 1,
    fact: "משה רבנו אמר לפרעה ״שלח את עמי ויעבדוני״.",
  },
  {
    question: "כמה ימים חוגגים פסח בישראל?",
    options: ["5", "6", "7", "8"],
    correct: 2,
    fact: "בישראל חוגגים שבעה ימים, בחו״ל שמונה.",
  },
  {
    question: "מה שם השיר שבסוף ליל הסדר?",
    options: ["דיינו", "מה נשתנה", "חד גדיא", "הלל"],
    correct: 2,
    fact: "חד גדיא הוא שיר עממי בארמית שנאמר בסוף הסדר, עם שרשרת של אירועים.",
  },
  {
    question: "מה מחביאים בליל הסדר?",
    options: ["ביצה", "אפיקומן", "כרפס", "חרוסת"],
    correct: 1,
    fact: "האפיקומן הוא חצי מצה שמחביאים כדי שהילדים יחפשו ויקבלו פרס.",
  },
];

const TriviaSection = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [showFact, setShowFact] = useState(false);
  const [finished, setFinished] = useState(false);

  const q = questions[currentQ];

  const handleAnswer = useCallback(
    (idx: number) => {
      if (selected !== null) return;
      setSelected(idx);
      setShowFact(true);
      if (idx === q.correct) setScore((s) => s + 1);
      setAnswered((a) => a + 1);
    },
    [selected, q.correct]
  );

  const nextQuestion = useCallback(() => {
    if (currentQ + 1 >= questions.length) {
      setFinished(true);
      return;
    }
    setCurrentQ((c) => c + 1);
    setSelected(null);
    setShowFact(false);
  }, [currentQ]);

  const restart = useCallback(() => {
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setAnswered(0);
    setShowFact(false);
    setFinished(false);
  }, []);

  const emoji =
    score === questions.length
      ? "🏆"
      : score >= questions.length * 0.7
      ? "🌟"
      : score >= questions.length * 0.4
      ? "👏"
      : "💪";

  return (
    <section className="py-20 md:py-28 px-4">
      <div className="max-w-xl mx-auto">
        <div className="reveal text-center mb-10">
          <span className="text-3xl">🤔</span>
          <h2
            className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3"
            style={{ lineHeight: "1.3" }}
          >
            טריוויה של פסח
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">
            כמה טוב אתם מכירים את החג?
          </p>
        </div>

        {finished ? (
          <div className="reveal text-center py-12 rounded-2xl bg-card border border-gold/20">
            <span className="text-6xl block mb-4">{emoji}</span>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              סיימתם!
            </h3>
            <p className="text-xl text-foreground font-body mb-1">
              {score} מתוך {questions.length} תשובות נכונות
            </p>
            <p className="text-muted-foreground text-sm mb-6">
              {score === questions.length
                ? "מושלם! אתם אלופי הפסח!"
                : score >= questions.length * 0.7
                ? "כל הכבוד! ידע מרשים!"
                : "היה כיף! תמיד אפשר לנסות שוב"}
            </p>
            <button
              onClick={restart}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold/10 border border-gold/30 hover:border-gold/50 text-foreground font-body font-semibold text-sm transition-all duration-200 active:scale-[0.97]"
            >
              <RotateCcw className="w-4 h-4" />
              שחקו שוב
            </button>
          </div>
        ) : (
          <div className="reveal">
            {/* Progress */}
            <div className="flex items-center justify-between mb-4 px-1">
              <span className="text-xs text-muted-foreground font-body">
                שאלה {currentQ + 1} מתוך {questions.length}
              </span>
              <span className="text-xs text-gold font-body font-semibold">
                {score} נכונות
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-muted/30 mb-6 overflow-hidden">
              <div
                className="h-full rounded-full bg-gold/60 transition-all duration-500"
                style={{
                  width: `${((currentQ + (selected !== null ? 1 : 0)) / questions.length) * 100}%`,
                }}
              />
            </div>

            {/* Question */}
            <div className="rounded-2xl bg-card border border-border/50 p-6 mb-4">
              <h3 className="font-body font-bold text-foreground text-lg mb-5 text-center leading-relaxed">
                {q.question}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {q.options.map((opt, idx) => {
                  const isCorrect = idx === q.correct;
                  const isSelected = idx === selected;
                  const showResult = selected !== null;

                  let borderColor = "border-border/40 hover:border-gold/40";
                  let bg = "bg-transparent";
                  if (showResult && isCorrect) {
                    borderColor = "border-spring/50";
                    bg = "bg-spring/5";
                  } else if (showResult && isSelected && !isCorrect) {
                    borderColor = "border-blossom/50";
                    bg = "bg-blossom/5";
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      disabled={selected !== null}
                      className={`relative flex items-center gap-3 px-4 py-3.5 rounded-xl border ${borderColor} ${bg} text-right font-body text-sm text-foreground transition-all duration-200 active:scale-[0.97] disabled:cursor-default`}
                    >
                      <span className="flex-1">{opt}</span>
                      {showResult && isCorrect && (
                        <Check className="w-4 h-4 text-spring shrink-0" />
                      )}
                      {showResult && isSelected && !isCorrect && (
                        <X className="w-4 h-4 text-blossom shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Fact + Next */}
            {showFact && (
              <div className="rounded-xl bg-gold/5 border border-gold/15 p-4 mb-4 animate-fade-in">
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                  <p className="text-sm text-foreground/80 font-body leading-relaxed">
                    {q.fact}
                  </p>
                </div>
              </div>
            )}

            {selected !== null && (
              <div className="text-center">
                <button
                  onClick={nextQuestion}
                  className="px-6 py-3 rounded-xl bg-card border border-gold/30 hover:border-gold/50 text-foreground font-body font-semibold text-sm transition-all duration-200 active:scale-[0.97]"
                >
                  {currentQ + 1 < questions.length ? "שאלה הבאה ←" : "לתוצאות ←"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default TriviaSection;
