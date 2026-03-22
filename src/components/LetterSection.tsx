const LetterSection = () => {
  return (
    <section id="letter" className="py-20 md:py-28 px-4">
      <div className="max-w-xl mx-auto">
        <div className="reveal text-center mb-10">
          <span className="text-gold text-3xl">✉️</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3" style={{ lineHeight: '1.3' }}>
            מכתב אישי אליכם
          </h2>
        </div>

        <div className="reveal reveal-delay-1 rounded-2xl bg-card border border-border p-8 md:p-10 shimmer-border">
          <div className="space-y-5 text-foreground/85 font-body text-base leading-[1.9]">
            <p className="font-display text-xl text-gold/90">צוות יקר (ויקר מאוד),</p>
            
            <p>
              אם שרדתם עוד שנה של ישיבות צוות, קבוצות וואטסאפ, 
              ודו״חות שצריך להגיש ״עד אתמול״ — 
              אתם בהחלט ראויים ליציאה מעבדות. 🎉
            </p>

            <p>
              פסח הוא החג שבו אנחנו חוגגים חירות. 
              ובמערכת החינוך, חירות זה כשאף אחד לא שולח לך מייל בשישי אחרי הצהריים. 
              (חלום, אנחנו יודעים.)
            </p>

            <p>
              אבל ברצינות — אתם <span className="text-gold font-medium">מדהימים</span>. 
              אתם מלמדים, מחבקים, מחזיקים, מקשיבים, נושמים עמוק, 
              וחוזרים למחרת עם חיוך. גם כשהממ״ד הפך לכיתה, 
              וגם כשהכיתה הפכה לממ״ד.
            </p>

            <p>
              אז השנה, במקום עוד טקסט ארוך ומרגש — 
              הכנו לכם כמה הפתעות קטנות כאן למטה. 
              כי מגיע לכם לצחוק, להירגע, ולהרגיש שמישהו רואה אתכם. 👇
            </p>

            <p>
              שיהיה חג שמח, שקט (בלי אזעקות!), 
              ומלא רגעים טובים עם האנשים שאתם אוהבים.
            </p>

            <p className="font-display text-lg text-gold/90 pt-2">
              באהבה, הערכה, ומעט אירוניה,
              <br />
              הנהלת המתי״א 💛🤷
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetterSection;
