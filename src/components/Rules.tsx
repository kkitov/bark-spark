const RULES = [
  {
    text: (
      <>
        Моля, бъдете <strong>точни за уговорения час</strong>. При закъснение над
        15 минути резервацията може да бъде отменена.
      </>
    ),
  },
  {
    text: (
      <>
        Ако не можете да дойдете,{" "}
        <strong>уведомете ни поне 24 часа предварително</strong>. При
        неявяване без предупреждение се начислява такса от{" "}
        <strong>50% от стойността на услугата</strong>.
      </>
    ),
  },
  {
    text: (
      <>
        Кучетата трябва да бъдат доведени{" "}
        <strong>задължително на повод</strong>.
      </>
    ),
  },
  {
    text: (
      <>
        При <strong>агресивно поведение</strong> по време на процедурата
        запазваме правото да прекратим груминга, като се дължи{" "}
        <strong>50% от цената</strong> за отделеното време.
      </>
    ),
  },
  {
    text: (
      <>
        Ако процедурата бъде завършена въпреки трудното поведение, се добавя
        допълнителна такса от <strong>25% към цената</strong>. Благодарим ви,
        че уважавате нашия труд и време.
      </>
    ),
  },
  {
    text: (
      <>
        Посочените цени са <strong>ориентировъчни</strong> и могат да се
        променят в зависимост от размера, състоянието на козината и
        поведението на кучето.
      </>
    ),
  },
  {
    text: (
      <>
        При установени <strong>бълхи</strong> кучето ще бъде третирано с
        противопаразитен шампоан — допълнителна такса{" "}
        <strong>10 €</strong>.
      </>
    ),
  },
  {
    text: (
      <>
        <strong>Кърлежите</strong> се отстраняват безопасно — такса{" "}
        <strong>5 €</strong> за брой.
      </>
    ),
  },
];

export default function RulesSection() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-brand-brown/70">
          Запознайте се с условията за записване и провеждане на процедурите
          при нас.
        </p>
      </div>

      <div className="rounded-2xl border border-brand-beige bg-white p-6 md:p-10 shadow-[0_6px_20px_rgba(75,65,57,0.08)]">
        <ul className="space-y-5">
          {RULES.map((rule, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-green" />
              <p className="text-brand-brown/85 leading-relaxed">{rule.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 pt-8 border-t border-brand-beige text-center">
          <h3 className="text-xl font-display text-brand-brown mb-4">
            Важно!
          </h3>
          <p className="text-brand-brown/80 leading-relaxed mb-4">
            В Bark & Spark Grooming държим на спокойна и безопасна среда за
            всички любимци. Не работим с{" "}
            <strong>агресивни</strong> или{" "}
            <strong>необработени против паразити</strong> кучета, за да
            осигурим комфорт за всички. При силно сплъстена или пренебрегната
            козина може да се начисли допълнителна такса според необходимото
            време и грижа.
          </p>
          <p className="font-medium text-brand-brown">
            Такса разресване — 15–40 €
          </p>
        </div>
      </div>
    </div>
  );
}
