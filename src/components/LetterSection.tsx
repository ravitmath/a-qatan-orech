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
            <p className="font-display text-xl text-gold/90">צוות יקר,</p>
            
            <p>
              השנה הזו מלמדת אותנו מחדש מה זה חירות — לא רק חירות מעבדות, 
              אלא החירות לבחור להמשיך, לתת, להחזיק ולחבק גם כשקשה.
            </p>

            <p>
              אתם עושים את זה כל יום. עם תלמידים, עם משפחות, עם הקהילה. 
              אתם המדריכים, המטפלים, המורים, אנשי המקצוע שמחזיקים עולמות שלמים 
              על הכתפיים — ועדיין מוצאים כוח לחייך.
            </p>

            <p>
              בפסח הזה אנחנו רוצים לומר לכם — <span className="text-gold font-medium">תודה</span>. 
              תודה על הנוכחות, על המסירות, על האמונה שלכם בילדים ובתהליך.
            </p>

            <p>
              שיהיה לכם חג מלא אור, שמחה, ורגעים טובים עם האנשים האהובים.
            </p>

            <p className="font-display text-lg text-gold/90 pt-2">
              בהערכה עמוקה,
              <br />
              הנהלת המתי״א 💛
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetterSection;
