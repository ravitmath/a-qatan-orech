import { Play, Heart } from "lucide-react";
import { useState } from "react";

const tracks = [
  { title: "אביב הגיע פסח בא", artist: "שיר ישראלי", url: "https://www.youtube.com/results?search_query=אביב+הגיע+פסח+בא" },
  { title: "עוד יבוא שלום עלינו", artist: "משה בן ארי", url: "https://www.youtube.com/results?search_query=עוד+יבוא+שלום+עלינו" },
  { title: "לו יהי", artist: "נעמי שמר", url: "https://www.youtube.com/results?search_query=לו+יהי+נעמי+שמר" },
  { title: "אור", artist: "עידן רייכל", url: "https://www.youtube.com/results?search_query=אור+עידן+רייכל" },
  { title: "ניגון ההתחלות", artist: "שלמה ארצי", url: "https://www.youtube.com/results?search_query=ניגון+ההתחלות" },
];

const PlaylistSection = () => {
  const [liked, setLiked] = useState<Set<number>>(new Set());

  const toggleLike = (i: number) => {
    const s = new Set(liked);
    if (s.has(i)) s.delete(i); else s.add(i);
    setLiked(s);
  };

  return (
    <section className="py-20 md:py-28 px-4">
      <div className="max-w-xl mx-auto">
        <div className="reveal text-center mb-12">
          <span className="text-gold text-3xl">🎵</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3" style={{ lineHeight: '1.3' }}>
            פלייליסט לחג
          </h2>
          <p className="text-muted-foreground mt-3">שירים של אביב, חירות ותקווה</p>
        </div>

        <div className="space-y-3">
          {tracks.map((track, i) => (
            <div
              key={track.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} flex items-center justify-between rounded-xl bg-card border border-border p-4 transition-all duration-300 hover:border-gold/20 hover:shadow-[0_0_30px_-10px_hsl(var(--gold)/0.15)]`}
            >
              <div className="flex items-center gap-4">
                <a
                  href={track.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center transition-all duration-200 hover:bg-gold/20 active:scale-90"
                >
                  <Play className="w-4 h-4 text-gold mr-[-1px]" />
                </a>
                <div>
                  <p className="font-body font-bold text-foreground text-sm">{track.title}</p>
                  <p className="text-xs text-muted-foreground">{track.artist}</p>
                </div>
              </div>
              <button onClick={() => toggleLike(i)} className="p-2 transition-all duration-200 active:scale-75">
                <Heart className={`w-4 h-4 transition-all ${liked.has(i) ? "text-blossom fill-current" : "text-muted-foreground"}`} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlaylistSection;
