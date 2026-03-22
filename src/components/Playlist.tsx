import { useState } from "react";
import { Music, Play, Heart } from "lucide-react";

const categories = [
  {
    name: "רוגע", emoji: "🌿",
    tracks: [
      { title: "נשימה שקטה", artist: "עידן רייכל", url: "https://www.youtube.com/watch?v=UrM7e2nVfDY" },
      { title: "אור גדול", artist: "שלמה ארצי", url: "https://www.youtube.com/watch?v=tHJpqma-aYY" },
    ],
  },
  {
    name: "תקווה", emoji: "🌅",
    tracks: [
      { title: "יום יבוא", artist: "דודו טסה", url: "https://www.youtube.com/watch?v=MtjzZYPbKIk" },
      { title: "תפילה", artist: "עברי לידר", url: "https://www.youtube.com/watch?v=RQw3K1pyjMg" },
    ],
  },
  {
    name: "כוח", emoji: "💪",
    tracks: [
      { title: "לא נפסיק לרקוד", artist: "שירי מימון", url: "https://www.youtube.com/watch?v=2HHqcr43Gro" },
      { title: "בדרך אליך", artist: "אריק איינשטיין", url: "https://www.youtube.com/watch?v=MkBo6FNFAhw" },
    ],
  },
  {
    name: "שירי דרך", emoji: "🛤️",
    tracks: [
      { title: "הדרך הארוכה", artist: "שלום חנוך", url: "https://www.youtube.com/watch?v=qQzdAsjWGPg" },
      { title: "ים של דמעות", artist: "אביהו מדינה", url: "https://www.youtube.com/watch?v=A6b2pLs0YvQ" },
    ],
  },
];

const tabColors = [
  "bg-turquoise/20 text-turquoise border-turquoise/30",
  "bg-sunshine/20 text-sunshine border-sunshine/30",
  "bg-primary/20 text-primary border-primary/30",
  "bg-rose-custom/20 text-rose-custom border-rose-custom/30",
];

const Playlist = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [liked, setLiked] = useState<Set<string>>(new Set());

  const toggleLike = (t: string) => {
    const n = new Set(liked);
    if (n.has(t)) n.delete(t); else n.add(t);
    setLiked(n);
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 relative overflow-hidden">
      <div className="orb orb-2" />

      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="flex items-center gap-2 mb-1 animate-fade-up">
          <Music className="w-6 h-6 text-turquoise" />
          <h2 className="font-heading text-2xl font-bold text-foreground glow-turquoise">פלייליסט</h2>
        </div>
        <p className="text-muted-foreground mb-8 animate-fade-up-delay-1">מוזיקה לנשימה ותקווה</p>

        <div className="flex gap-2 mb-8 flex-wrap justify-center animate-fade-up-delay-2">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              className={`px-4 py-2 rounded-full font-heading text-sm font-medium border transition-all duration-300 active:scale-95 ${
                i === activeCategory ? tabColors[i] : "bg-card border-border text-muted-foreground hover:border-primary/20"
              }`}
            >
              {cat.emoji} {cat.name}
            </button>
          ))}
        </div>

        <div className="w-full max-w-sm stagger-children">
          {categories[activeCategory].tracks.map((track) => (
            <div key={track.title} className="emotional-card tilt-card flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <a
                  href={track.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center transition-all duration-300 hover:bg-primary/20 hover:shadow-[0_0_20px_-3px_hsl(var(--primary)/0.4)] active:scale-90"
                >
                  <Play className="w-4 h-4 text-primary mr-[-2px]" />
                </a>
                <div>
                  <p className="font-heading font-bold text-foreground">{track.title}</p>
                  <p className="text-sm text-muted-foreground">{track.artist}</p>
                </div>
              </div>
              <button onClick={() => toggleLike(track.title)} className="p-2 transition-all duration-200 active:scale-75">
                <Heart className={`w-5 h-5 transition-all ${liked.has(track.title) ? "text-rose-custom fill-current scale-110" : "text-muted-foreground"}`} />
              </button>
            </div>
          ))}
        </div>

        {/* Equalizer */}
        <div className="mt-8 flex gap-[3px] items-end h-8">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="w-[3px] bg-primary/50 rounded-full"
              style={{
                height: `${8 + Math.random() * 20}px`,
                animation: `float ${1.5 + i * 0.2}s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
