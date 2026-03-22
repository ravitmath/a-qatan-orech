import { useState } from "react";
import { PawPrint, Coffee, RefreshCw } from "lucide-react";

const jokes = [
  { text: "״מישהו ראה את הלינק לזום? אני עדיין מחפשת את הלינק מהפגישה הקודמת...״", emoji: "💻" },
  { text: "״הקפה הזה הוא חלק מתנאי ההעסקה שלי״", emoji: "☕" },
  { text: "״את בממ? את בממ? את בממ? — המנגינה של כל פגישת צוות בזום״", emoji: "🔇" },
  { text: "״הילד שאלתי אותו מה הוא למד — הוא אמר: איך לכבות מצלמה״", emoji: "📷" },
  { text: "״יש מישהי שלא שמעה עדיין את ׳את בממ׳? כי אני חושבת שזה ההמנון שלנו״", emoji: "🎵" },
  { text: "״גיליתי שאני יכולה לאכול ארוחת צהריים תוך כדי ישיבה ואף אחד לא רואה״", emoji: "🍕" },
];

const SmileCorner = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % jokes.length);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="animate-fade-up flex items-center gap-2 mb-2">
        <PawPrint className="w-6 h-6 text-rose" />
        <h2 className="font-heading text-2xl font-bold text-foreground">🐾 פינת חיוך</h2>
      </div>
      <p className="text-muted-foreground mb-10 animate-fade-up-delay-1">כי גם צוחקים צריך</p>

      <div className="w-full max-w-sm animate-fade-up-delay-2">
        <div key={current} className="emotional-card pastel-gradient text-center animate-fade-up">
          <p className="text-5xl mb-4">{jokes[current].emoji}</p>
          <p className="font-heading text-lg font-medium text-foreground leading-relaxed">
            {jokes[current].text}
          </p>
        </div>

        <button
          onClick={next}
          className="flex items-center gap-2 mx-auto mt-6 px-6 py-3 rounded-full bg-card shadow-md font-heading text-muted-foreground transition-all duration-200 hover:shadow-lg active:scale-95"
        >
          <RefreshCw className="w-4 h-4" />
          עוד אחד
        </button>
      </div>

      <div className="mt-12 flex items-center gap-2 text-muted-foreground animate-fade-up-delay-3">
        <Coffee className="w-5 h-5" />
        <span className="font-body text-sm">עם קפה — הכל יותר טוב</span>
      </div>
    </div>
  );
};

export default SmileCorner;
