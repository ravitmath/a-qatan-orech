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
    title: "סרטון השראה לחג",
    description: "סרטון קצר ומרגש על חירות ותקווה",
    url: "#",
    emoji: "🎬",
    color: "border-gold/20 hover:border-gold/40",
  },
  {
    title: "מתכונים לליל הסדר",
    description: "אוסף מתכונים מיוחדים מהצוות שלנו",
    url: "#",
    emoji: "🍽️",
    color: "border-spring/20 hover:border-spring/40",
  },
  {
    title: "פלייליסט לחג",
    description: "שירים של אביב, חירות ותקווה",
    url: "#",
    emoji: "🎵",
    color: "border-blossom/20 hover:border-blossom/40",
  },
  {
    title: "פעילות חווייתית לצוות",
    description: "משהו קטן ומשמח לעשות ביחד",
    url: "#",
    emoji: "🌸",
    color: "border-gold/20 hover:border-gold/40",
  },
  {
    title: "מדריך רגעי נשימה",
    description: "תרגילי מיינדפולנס קצרים לימי החופשה",
    url: "#",
    emoji: "🧘",
    color: "border-spring/20 hover:border-spring/40",
  },
  {
    title: "גלריית רגעים מהשנה",
    description: "תמונות ורגעים יפים מהפעילות שלנו",
    url: "#",
    emoji: "📸",
    color: "border-blossom/20 hover:border-blossom/40",
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
              className={`reveal reveal-delay-${Math.min(i + 1, 6)} link-card group block rounded-2xl bg-card border ${link.color} p-6`}
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

        <p className="reveal reveal-delay-3 text-center text-sm text-muted-foreground mt-8">
          💡 ניתן לעדכן את הקישורים בכל עת
        </p>
      </div>
    </section>
  );
};

export default LinksSection;
