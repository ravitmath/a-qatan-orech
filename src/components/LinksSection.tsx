import { ExternalLink } from "lucide-react";

interface LinkItem {
  title: string;
  description: string;
  url: string;
  emoji: string;
  color: string;
}

const links: LinkItem[] = [
  {
    title: "מוזיקה מרגיעה",
    description: "שיר מרגיע להאזנה בספוטיפיי",
    url: "https://open.spotify.com/track/0kbBGodkSvTkiwSFMYgRNE",
    emoji: "🎵",
    color: "border-blossom/20 hover:border-blossom/40",
  },
  {
    title: "מתכונים לליל הסדר",
    description: "מתכונים קלים להכנה לחג",
    url: "https://www.mako.co.il/food-holiday-recipes/passover/Article-acdef760ab41691026.htm",
    emoji: "🍽️",
    color: "border-spring/20 hover:border-spring/40",
  },
  {
    title: "צביעת מנדלות",
    description: "צביעת מנדלות אינטראקטיבית אונליין — להרגעה ויצירתיות",
    url: "https://www.yo-yoo.co.il/coloring_online/online.php?film=164",
    emoji: "🎨",
    color: "border-blossom/20 hover:border-blossom/40",
  },
  {
    title: "תשבצים ותשחצים",
    description: "תשבצים בעברית לשעות הפנאי",
    url: "https://www.yo-yoo.co.il/crosswords/",
    emoji: "🧩",
    color: "border-spring/20 hover:border-spring/40",
  },
  {
    title: "פעילויות חוויתיות מהבית",
    description: "רעיונות לפעילויות כיפיות לעשות מהבית או ליד מרחב מוגן",
    url: "https://gamee.co.il/2025/04/03/10-%D7%A4%D7%A2%D7%99%D7%9C%D7%95%D7%99%D7%95%D7%AA-%D7%91%D7%97%D7%95%D7%A4%D7%A9-%D7%A2%D7%9D-%D7%94%D7%99%D7%9C%D7%93%D7%99%D7%9D-%D7%91%D7%91%D7%99%D7%AA-%D7%91%D7%98%D7%99%D7%95%D7%9C-%D7%90/",
    emoji: "🌸",
    color: "border-gold/20 hover:border-gold/40",
  },
  {
    title: "מדריך רגעי נשימה",
    description: "כלי אישי להפחתת מתח ורגעי שקט",
    url: "https://fear-friend-dialogue.lovable.app/questionnaire",
    emoji: "🧘",
    color: "border-spring/20 hover:border-spring/40",
  },
  {
    title: "משחקים לימודיים",
    description: "מאגר משחקים לימודיים שבנה צוות המתי״א",
    url: "https://sites.google.com/educ.org.il/education-games-regev/%D7%91%D7%99%D7%AA",
    emoji: "🎮",
    color: "border-blossom/20 hover:border-blossom/40",
  },
  {
    title: "למידה מרחוק",
    description: "עמוד למידה מרחוק, פדגוגיה ועידכונים באתר המתי״א",
    url: "https://sites.google.com/educ.org.il/matya-regev/%D7%9C%D7%9E%D7%99%D7%93%D7%94-%D7%9E%D7%A8%D7%97%D7%95%D7%A7-%D7%A4%D7%93%D7%92%D7%95%D7%92%D7%99%D7%94-%D7%95%D7%A2%D7%99%D7%93%D7%9B%D7%95%D7%A0%D7%99%D7%9D",
    emoji: "💻",
    color: "border-gold/20 hover:border-gold/40",
  },
  {
    title: "יומן הכרת תודה",
    description: "אפליקציית יומן תודה — כתבו מה עשה לכם טוב היום",
    url: "https://journey.cloud/he/gratitude-planner",
    emoji: "📝",
    color: "border-spring/20 hover:border-spring/40",
  },
  {
    title: "שירים ישראליים מעודדים",
    description: "פלייליסט שירים ישראליים חדשים בספוטיפיי",
    url: "https://open.spotify.com/playlist/6Oyqiq4yszpxncmtkJcqfU",
    emoji: "🎶",
    color: "border-gold/20 hover:border-gold/40",
  },
  {
    title: "פודקאסט מרגיע",
    description: "מדיטציות מודרכות בעברית להעלאת התדר ורגיעה",
    url: "https://raisingthevibrations.podbean.com/",
    emoji: "🎧",
    color: "border-blossom/20 hover:border-blossom/40",
  },
  {
    title: "גינון ביתי למתחילים",
    description: "מדריך מקיף לגידול צמחים בבית — פשוט ומרגיע",
    url: "https://chochmat-haadama.co.il/%D7%92%D7%99%D7%93%D7%95%D7%9C-%D7%A6%D7%9E%D7%97%D7%99%D7%9D-%D7%91%D7%91%D7%99%D7%AA-%D7%9E%D7%93%D7%A8%D7%99%D7%9A-%D7%9C%D7%9E%D7%AA%D7%97%D7%99%D7%9C%D7%99%D7%9D-%D7%91%D7%92%D7%99%D7%A0%D7%95/",
    emoji: "🌿",
    color: "border-spring/20 hover:border-spring/40",
  },
];

const LinksSection = () => {
  return (
    <section className="py-20 md:py-28 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="reveal text-center mb-12">
          <span className="text-gold text-3xl">🎁</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3" style={{ lineHeight: '1.3' }}>
            הכנו לכם משהו מיוחד
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">לחצו על הכרטיסים לגלות</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map((link, i) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal reveal-delay-${Math.min(i + 1, 6)} link-card group block rounded-2xl bg-card border ${link.color} p-6 transition-all duration-200 active:scale-[0.97]`}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl shrink-0">{link.emoji}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-body font-bold text-foreground text-base mb-1 flex items-center gap-2">
                    {link.title}
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{link.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
