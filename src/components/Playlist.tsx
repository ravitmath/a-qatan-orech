import { useState } from "react";
import { Music, Play, Heart } from "lucide-react";

const categories = [
  {
    name: "רוגע",
    emoji: "🌿",
    color: "bg-turquoise-light text-turquoise",
    tracks: [
      { title: "נשימה שקטה", artist: "עידן רייכל", url: "https://www.youtube.com/watch?v=UrM7e2nVfDY" },
      { title: "אור גדול", artist: "שלמה ארצי", url: "https://www.youtube.com/watch?v=tHJpqma-aYY" },
    ],
  },
  {
    name: "תקווה",
    emoji: "🌅",
    color: "bg-sunshine-light text-accent-foreground",
    tracks: [
      { title: "יום יבוא", artist: "דודו טסה", url: "https://www.youtube.com/watch?v=MtjzZYPbKIk" },
      { title: "תפילה", artist: "עברי לידר", url: "https://www.youtube.com/watch?v=RQw3K1pyjMg" },
    ],
  },
  {
    name: "כוח",
    emoji: "💪",
    color: "bg-lavender-light text-primary",
    tracks: [
      { title: "לא נפסיק לרקוד", artist: "שירי מימון", url: "https://www.youtube.com/watch?v=2HHqcr43Gro" },
      { title: "בדרך אליך", artist: "אריק איינשטיין", url: "https://www.youtube.com/watch?v=MkBo6FNFAhw" },
    ],
  },
  {
    name: "שירי דרך",
    emoji: "🛤️",
    color: "bg-rose-light text-foreground",
    tracks: [
      { title: "הדרך הארוכה", artist: "שלום חנוך", url: "https://www.youtube.com/watch?v=qQzdAsjWGPg" },
      { title: "ים של דמעות", artist: "אביהו מדינה", url: "https://www.youtube.com/watch?v=A6b2pLs0YvQ" },
    ],
  },
];

const Playlist = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [liked, setLiked] = useState<Set<string>>(new Set());

  const toggleLike = (title: string) => {
    const next = new Set(liked);
    if (next.has(title)) next.delete(title);
    else next.add(title);
    setLiked(next);
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12">
      <div className="animate-fade-up flex items-center gap-2 mb-2">
        <Music className="w-6 h-6 text-primary" />
        <h2 className="font-heading text-2xl font-bold text-foreground">🎧 פלייליסט</h2>
      </div>
      <p className="text-muted-foreground mb-8 animate-fade-up-delay-1">מוזיקה לנשימה ותקווה</p>

      <div className="flex gap-2 mb-8 flex-wrap justify-center animate-fade-up-delay-2">
        {categories.map((cat, i) => (
          <button
            key={cat.name}
            onClick={() => setActiveCategory(i)}
            className={`px-4 py-2 rounded-full font-heading text-sm font-medium transition-all duration-300 active:scale-95 ${
              i === activeCategory
                ? cat.color + " shadow-md"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {cat.emoji} {cat.name}
          </button>
        ))}
      </div>

      <div className="w-full max-w-sm space-y-3">
        {categories[activeCategory].tracks.map((track, i) => (
          <div
            key={track.title}
            className="emotional-card flex items-center justify-between animate-fade-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center gap-3">
              <a
                href={track.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-200 hover:bg-primary/20 active:scale-95"
              >
                <Play className="w-4 h-4 text-primary mr-[-2px]" />
              </a>
              <div>
                <p className="font-heading font-medium text-foreground">{track.title}</p>
                <p className="text-sm text-muted-foreground">{track.artist}</p>
              </div>
            </div>
            <button
              onClick={() => toggleLike(track.title)}
              className="p-2 transition-all duration-200 active:scale-90"
            >
              <Heart
                className={`w-5 h-5 transition-colors ${liked.has(track.title) ? "text-rose fill-rose" : "text-muted-foreground"}`}
              />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 animate-pulse-soft">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-primary/40 rounded-full"
              style={{
                height: `${12 + Math.sin(i * 1.2) * 10}px`,
                animation: `float ${2 + i * 0.3}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
