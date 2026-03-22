import { ExternalLink } from "lucide-react";
import quizCover from "@/assets/quiz-cover.jpg";

const QuizHighlight = () => {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-xl mx-auto">
        <a
          href="/חידון_ומצגת_לפסח.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="reveal block rounded-2xl overflow-hidden border-2 border-gold/30 hover:border-gold/50 transition-all duration-300 hover:shadow-[0_8px_40px_-8px_hsl(var(--gold)/0.25)] active:scale-[0.98] group"
        >
          {/* Preview image */}
          <div className="relative">
            <img
              src={quizCover}
              alt="חידון שאגת המצה"
              className="w-full aspect-video object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 right-4 left-4 text-right">
              <span className="inline-block px-3 py-1 rounded-full bg-gold/90 text-white text-xs font-body font-bold mb-2">
                🧠 חידון אינטראקטיבי
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="bg-card p-5 md:p-6 text-center">
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2" style={{ lineHeight: "1.3" }}>
              חידון ״שאגת המצה״
            </h3>
            <p className="text-muted-foreground font-body text-sm mb-3">
              חירות, חוסן ופירורים בצל המלחמה — חידון מצחיק ומפתיע שהכנו במיוחד בשבילכם!
            </p>
            <span className="inline-flex items-center gap-2 text-gold font-body font-semibold text-sm">
              לחצו להתחיל
              <ExternalLink className="w-4 h-4 group-hover:translate-x-[-4px] transition-transform" />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default QuizHighlight;
