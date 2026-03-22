import { ExternalLink } from "lucide-react";

const QuizHighlight = () => {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-xl mx-auto">
        <a
          href="https://notebooklm.google.com/notebook/9ecdcddf-e615-4e7b-b02f-9f7526495076?artifactId=9fdb68ba-606c-4bfd-b9d2-890eb1311667"
          target="_blank"
          rel="noopener noreferrer"
          className="reveal block rounded-2xl bg-gold/10 border-2 border-gold/30 hover:border-gold/50 p-6 md:p-8 text-center transition-all duration-300 hover:shadow-[0_8px_40px_-8px_hsl(var(--gold)/0.25)] active:scale-[0.98] group"
        >
          <span className="text-4xl block mb-3">🧠</span>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2" style={{ lineHeight: "1.3" }}>
            חידון פסח מיוחד!
          </h3>
          <p className="text-muted-foreground font-body text-base mb-4">
            הכנו לכם חידון מיוחד לחג — בואו תבדקו כמה אתם באמת יודעים על פסח 🎯
          </p>
          <span className="inline-flex items-center gap-2 text-gold font-body font-semibold text-sm">
            לחצו להתחיל
            <ExternalLink className="w-4 h-4 group-hover:translate-x-[-4px] transition-transform" />
          </span>
        </a>
      </div>
    </section>
  );
};

export default QuizHighlight;
