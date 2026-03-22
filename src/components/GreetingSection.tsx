const GreetingSection = () => {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-xl mx-auto">
        <div className="reveal text-center mb-8">
          <span className="text-gold text-3xl">🌸</span>
          <h2
            className="font-display text-2xl md:text-3xl font-bold text-foreground mt-3"
            style={{ lineHeight: "1.3" }}
          >
            דברי ברכה
          </h2>
        </div>

        <div className="reveal reveal-delay-1 rounded-2xl bg-card border border-border p-8 md:p-10 shimmer-border">
          <div className="space-y-5 text-foreground/85 font-body text-base leading-[1.9]">
            <p className="font-display text-xl text-gold/90">צוותים יקרים ואהובים,</p>

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
              פתיחת מסגרות חינוך מיוחד בתוך מציאות מורכבת היא משימה
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

export default GreetingSection;
