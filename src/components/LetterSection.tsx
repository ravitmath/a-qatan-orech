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
            <p className="font-display text-xl text-gold/90">צוותים חינוכיים יקרים,</p>
            
            <p>
              הגיע פסח. שוב. ואנחנו עדיין כאן — באמצע מלחמה מתישה וארוכה, 
              בין אזעקות ללמידה מרחוק, בין ממ״ד לכיתה, 
              ובין קבוצות וואטסאפ שלא נגמרות לעולם. 📱
            </p>

            <p>
              בואו נודה באמת — חירות בפסח 2025 זה כשאף אחד לא שולח 
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
      </div>
    </section>
  );
};

export default LetterSection;
