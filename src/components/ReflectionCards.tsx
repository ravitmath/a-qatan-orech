import { useState } from "react";
import { Heart, Share2, PenLine, ChevronRight, ChevronLeft } from "lucide-react";
import { toast } from "sonner";

const prompts = [
  { text: "מה נותן לך כוח בתקופה הזו?", gradient: "from-primary/20 to-turquoise/10" },
  { text: "רגע קטן של הצלחה שהיה השבוע", gradient: "from-turquoise/20 to-sunshine/10" },
  { text: "משהו טוב שעשית עבור תלמיד", gradient: "from-sunshine/20 to-primary/10" },
  { text: "אדם שמחזיק אותך", gradient: "from-rose-custom/20 to-primary/10" },
  { text: "מה היית רוצה לשחרר היום?", gradient: "from-primary/20 to-rose-custom/10" },
  { text: "מה למדת על עצמך לאחרונה?", gradient: "from-turquoise/20 to-primary/10" },
];

const ReflectionCards = () => {
  const [current, setCurrent] = useState(0);
  const [saved, setSaved] = useState<Set<number>>(new Set());
  const [writing, setWriting] = useState(false);
  const [thought, setThought] = useState("");

  const next = () => setCurrent((c) => (c + 1) % prompts.length);
  const prev = () => setCurrent((c) => (c - 1 + prompts.length) % prompts.length);

  const toggleSave = () => {
    const s = new Set(saved);
    if (s.has(current)) s.delete(current);
    else { s.add(current); toast("💜 נשמר בלב"); }
    setSaved(s);
  };

  const share = () => {
    const text = encodeURIComponent(`💭 ${prompts[current].text}\n\n— מתוך ״מרחב קטן של אוויר לצוותים גדולים״`);
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  const card = prompts[current];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className="relative z-10 w-full flex flex-col items-center">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-1 animate-fade-up glow-text">
          כרטיסי השתקפות
        </h2>
        <p className="text-muted-foreground mb-8 animate-fade-up-delay-1">החליקי בין הכרטיסים</p>

        <div className="relative w-full max-w-sm">
          <div
            key={current}
            className={`tilt-card rounded-3xl bg-gradient-to-br ${card.gradient} border border-primary/10 min-h-[220px] flex items-center justify-center text-center p-8 animate-fade-up shimmer-border`}
          >
            <p className="font-heading text-2xl font-bold text-foreground leading-relaxed">
              {card.text}
            </p>
          </div>

          <div className="flex items-center justify-between mt-6">
            <button onClick={prev} className="p-3 rounded-full bg-card border border-border transition-all duration-200 hover:border-primary/30 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)] active:scale-90">
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>

            <div className="flex gap-2">
              {[
                { icon: Heart, action: toggleSave, active: saved.has(current), activeClass: "text-rose-custom fill-current" },
                { icon: Share2, action: share, active: false, activeClass: "" },
                { icon: PenLine, action: () => setWriting(!writing), active: writing, activeClass: "text-primary" },
              ].map(({ icon: Icon, action, active, activeClass }, i) => (
                <button
                  key={i}
                  onClick={action}
                  className="p-3 rounded-full bg-card border border-border transition-all duration-200 hover:border-primary/30 active:scale-90"
                >
                  <Icon className={`w-5 h-5 ${active ? activeClass : "text-muted-foreground"}`} />
                </button>
              ))}
            </div>

            <button onClick={next} className="p-3 rounded-full bg-card border border-border transition-all duration-200 hover:border-primary/30 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)] active:scale-90">
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-5">
            {prompts.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-500 ${i === current ? "bg-primary w-8" : "bg-muted w-2 hover:bg-muted-foreground/30"}`}
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
              className="w-full p-4 rounded-2xl bg-card border border-border text-foreground font-body resize-none h-28 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/30 transition-all placeholder:text-muted-foreground"
            />
            <button
              onClick={() => {
                if (thought.trim()) { toast("✨ המחשבה נשמרה"); setThought(""); setWriting(false); }
              }}
              className="mt-2 w-full py-3 rounded-full bg-secondary text-secondary-foreground font-heading font-bold transition-all duration-200 hover:shadow-[0_0_30px_-5px_hsl(var(--turquoise)/0.4)] active:scale-97"
            >
              שמרי 💜
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReflectionCards;
