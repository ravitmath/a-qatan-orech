import flowersTop from "@/assets/flowers-top.png";
import flowersSide from "@/assets/flowers-side.png";
import flowersCorner from "@/assets/flowers-corner.png";

const LetterAndGreeting = () => {
  return (
    <section id="letter" className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Decorative flowers around the section */}
      <img src={flowersTop} alt="" className="absolute top-0 left-0 right-0 w-full max-w-3xl mx-auto h-auto opacity-40 pointer-events-none" />
      <img src={flowersSide} alt="" className="absolute top-1/4 right-0 w-20 md:w-32 opacity-30 pointer-events-none" />
      <img src={flowersSide} alt="" className="absolute bottom-1/4 left-0 w-20 md:w-32 opacity-30 pointer-events-none rotate-180 scale-x-[-1]" />
      <img src={flowersCorner} alt="" className="absolute bottom-4 right-4 w-24 md:w-36 opacity-50 pointer-events-none" />
      <img src={flowersCorner} alt="" className="absolute bottom-4 left-4 w-24 md:w-36 opacity-50 pointer-events-none rotate-180" />

      {/* Section title */}
      <div className="reveal text-center mb-10 relative z-10">
        <span className="text-gold text-3xl">✉️</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3" style={{ lineHeight: '1.3' }}>
          מכתב אישי ודברי ברכה
        </h2>
      </div>

      {/* Side by side on desktop, stacked on mobile */}
      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        
        {/* Letter card */}
        <div className="reveal reveal-delay-1 rounded-2xl bg-card border border-border p-6 md:p-8 shimmer-border">
          <div className="text-center mb-4">
            <span className="text-2xl">📜</span>
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mt-2" style={{ lineHeight: '1.3' }}>
              מכתב אישי אליכם
            </h3>
          </div>
          <div className="space-y-4 text-foreground/85 font-body text-sm md:text-base leading-[1.85]">
            <p className="font-display text-lg text-gold/90">צוותים חינוכיים יקרים,</p>
            
            <p>
              הגיע פסח. שוב. ואנחנו עדיין כאן — באמצע מלחמה מתישה וארוכה, 
              בין אזעקות ללמידה מרחוק, בין ממ״ד לכיתה, 
              ובין קבוצות וואטסאפ שלא נגמרות לעולם. 📱
            </p>

            <p>
              בואו נודה באמת — חירות בפסח 2026 זה כשאף אחד לא שולח 
              ״עדכון מצב״ בשישי בערב, וכשאפשר לסיים סדר שלם 
              בלי לרוץ לממ״ד עם קערת הסדר. 🏃‍♂️
            </p>

            <p>
              אבל ברצינות לרגע — אתם <span className="text-gold font-medium">מדהימים</span>. 
              אתם מלמדים דרך מסכים, מחבקים דרך זום, 
              ממציאים שיעורים מחדש כל שבוע, 
              ומחזיקים ילדים ומשפחות שלמות גם כשאתם בעצמכם צריכים מי שיחזיק אתכם.
            </p>

            <p>
              למידה מרחוק? עשיתם מזה אומנות. 
              שגרת חירום? הפכתם אותה לשגרה של דאגה, יצירתיות ואכפתיות. 
              אז כן — מגיע לכם רגע לנשום, לצחוק, ולהרגיש שמישהו רואה אתכם. 👇
            </p>

            <p>
              הכנו לכם כאן למטה כמה הפתעות קטנות — 
              כי מי שנותן כל כך הרבה, מגיע לו לקבל קצת. 
              ובמיוחד ממליצים למלא את <span className="text-gold font-medium">יומן הכרת התודה</span> — 
              5 שאלות קצרות שבסופן תקבלו ניתוח אישי מעניין עם טיפים להמשך. שווה! ✨
            </p>

            <p>
              שיהיה חג שמח, שקט (כן, שקט אמיתי!), 
              ומלא רגעים טובים עם מי שאתם אוהבים. 🕊️
            </p>

            <p className="font-display text-lg text-gold/90 pt-2">
              באהבה, הערכה, ועם המון גאווה,
              <br />
              צוות מתי״א רגב 💛
            </p>
          </div>
        </div>

        {/* Greeting card */}
        <div className="reveal reveal-delay-2 rounded-2xl bg-card border border-border p-6 md:p-8 shimmer-border">
          <div className="text-center mb-4">
            <span className="text-2xl">🌸</span>
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mt-2" style={{ lineHeight: '1.3' }}>
              דברי ברכה
            </h3>
          </div>
          <div className="space-y-4 text-foreground/85 font-body text-sm md:text-base leading-[1.85]">
            <p className="font-display text-lg text-gold/90">צוותים יקרים ואהובים,</p>

            <p>
              ערב חג הפסח הוא רגע טוב לעצור, להרים את המבט מהשטף — ולהגיד לכם.ן
              את מה שלא תמיד מספיקים לומר ביום־יום:
              {" "}<span className="text-gold font-medium">אנחנו רואות אתכם.ן</span>.
            </p>

            <p>
              רואות את מי שמגיעה אל התלמידים עם חיוך גם כשהלב כבד.
              את מי שממציא פתרון יצירתי לילד שתקוע, לא מתייאש, ולא משחרר.
              את מי שמביאה את עצמה — לא רק את המומחיות, אלא את האנושיות,
              הסבלנות, והיכולת הנדירה להכיל גם כשאין כוח.
            </p>

            <p>
              עבודה בחינוך המיוחד בתוך מציאות מורכבת היא משימה
              שדורשת הרבה יותר מניסיון מקצועי —
              היא דורשת <span className="text-gold font-medium">אומץ, נדיבות, ושותפות אמיתית</span>.
              ואתם.ן מביאים.ות את כל אלה, בשקט, ביומיום, בלי כותרות.
            </p>

            <p>
              כל שיעור שנבנה מחדש, כל שיחה עם הורה מודאג,
              כל רגע שבו ילד הרגיש שמישהו באמת שם —
              הם לא מובנים מאליהם. הם פרי של בחירה חוזרת, יום אחרי יום,
              להיות מחנכים במלוא מובן המילה.
            </p>

            <p>
              אנחנו מבקשות שתיקחו רגע בחג הזה — רגע אחד —
              להסתכל על עצמכם.ן בעיניים רכות,
              ולהגיד: <span className="italic text-gold/80">״עשיתי השנה דברים שלא חשבתי שאני מסוגל.ת להם״</span>.
              כי זו האמת.
            </p>

            <p>
              שתהיה לכם.ן חופשה שנותנת מנוחה אמיתית,
              שולחן חג עם אנשים שמחזירים לכם.ן אנרגיה,
              ורגעים שבהם אפשר פשוט — לא להיות אחראים על אף אחד. 🕊️
            </p>

            <p className="font-display text-lg text-gold/90 pt-2">
              חג חירות שמח, בהערכה עמוקה ובגאווה,
            </p>
            <div className="flex flex-col gap-1 font-display text-base text-gold/80 pr-1">
              <span>סימה רוזנברג — מפקחת חינוך מיוחד</span>
              <span>רוית טל שיר — מנהלת מתי״א רגב</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetterAndGreeting;
