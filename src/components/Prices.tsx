type PriceItem = {
  label: string;
  price: string;
};

type PriceCategory = {
  title: string;
  items: PriceItem[];
};

const CATEGORIES: PriceCategory[] = [
  {
    title: "Късокосмести породи",
    items: [
      { label: "Английски булдог", price: "45 €" },
      { label: "Бигъл, Джак Ръсел", price: "45 €" },
      { label: "Френски булдог, Мопс", price: "35 €" },
      { label: "Пинчер, Чихуахуа", price: "35 €" },
      { label: "Питбул", price: "45 €" },
      { label: "Лабрадор, Далматин", price: "55 €" },
    ],
  },
  {
    title: "Двойни и плътни козини",
    items: [
      { label: "Померан, Малък Шпиц до 5 кг.", price: "45 €" },
      { label: "Среден Шпиц 6–11 кг.", price: "50 €" },
      { label: "Пекинез", price: "40 €" },
      { label: "Корги", price: "40 €" },
      { label: "Кавалер до 7 кг.", price: "45 €" },
      { label: "Шнауцер /мини, среден, голям/", price: "40, 45, 50 €" },
      { label: "Шиба ину", price: "45 €" },
      { label: "Акита ину", price: "65 €" },
      { label: "Бордър Коли", price: "65 €" },
      { label: "Самоед, Хъски, Чау-Чау", price: "75 €" },
      {
        label: "Нюфаундленд, Санбернар, Бернска овчарка",
        price: "120 €",
      },
    ],
  },
  {
    title: "Дълги и обемни козини",
    items: [
      { label: "Йорки, Болонка до 5 кг.", price: "40 €" },
      { label: "Йорки, Болонка над 5 кг.", price: "45 €" },
      { label: "Той Пудел до 3 кг.", price: "45 €" },
      { label: "Мини Пудел 4–7 кг.", price: "50 €" },
      { label: "Среден Пудел", price: "55 €" },
      { label: "Кралски Пудел", price: "70 €" },
      { label: "Малпипу, Кавапу", price: "50 €" },
      { label: "Кокер Шпаньол", price: "55 €" },
      { label: "Бишон Фризе", price: "45 €" },
      { label: "Ши Тцу", price: "45 €" },
      { label: "Лагото Романьоло", price: "65 €" },
      { label: "Голдън Ретривър", price: "70 €" },
    ],
  },
];

const BATHING: PriceItem[] = [
  { label: "до 5 кг", price: "23 €" },
  { label: "до 10 кг", price: "28 €" },
  { label: "до 20 кг", price: "40 €" },
  { label: "до 30 кг", price: "50 €" },
];

const ADDONS: PriceItem[] = [
  { label: "Рязане на нокти", price: "10 €" },
  { label: "Почистване на уши", price: "10 €" },
  { label: "Такса бълхи", price: "10–20 €" },
  { label: "Махане на кърлеж", price: "5 €" },
  { label: "Бебешки груминг за малки породи*", price: "35 €" },
  { label: "Бебешки груминг за едри породи*", price: "45 €" },
  { label: "Такса за разресване", price: "15–30 €" },
  {
    label: "Бръснене на силно сплъстени кучета",
    price: "+20 € от цената",
  },
];

function PriceLine({ label, price }: PriceItem) {
  return (
    <div className="flex items-baseline gap-2 min-w-0 w-full">
      <span className="min-w-0 text-brand-brown break-words">{label}</span>
      <span className="flex-1 border-b border-dotted border-brand-beige mx-1 mb-1 min-w-4 shrink" />
      <span className="shrink-0 font-medium text-brand-brown whitespace-nowrap text-right">
        {price}
      </span>
    </div>
  );
}

function CategoryBlock({ title, items }: PriceCategory) {
  return (
    <div>
      <h3 className="inline-block mb-5 px-5 py-2 rounded-full bg-brand-green text-white text-sm md:text-base font-medium tracking-wide">
        {title}
      </h3>
      <div className="space-y-3">
        {items.map((item) => (
          <PriceLine key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
}

export default function PricesSection() {
  return (
    <div className="max-w-3xl mx-auto w-full min-w-0 space-y-16">
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-display text-brand-brown mb-2">
            Цялостен груминг
          </h3>
        </div>

        <div className="rounded-2xl border border-brand-beige bg-white p-6 md:p-10 shadow-[0_6px_20px_rgba(75,65,57,0.08)] space-y-12">
          {CATEGORIES.map((category) => (
            <CategoryBlock key={category.title} {...category} />
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-display text-brand-brown mb-2">
            Къпане
          </h3>
        </div>

        <div className="rounded-2xl border border-brand-beige bg-white p-6 md:p-10 shadow-[0_6px_20px_rgba(75,65,57,0.08)]">
          <div className="space-y-3">
            {BATHING.map((item) => (
              <PriceLine key={item.label} {...item} />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-display text-brand-brown mb-2">
            Отделни услуги
          </h3>
        </div>

        <div className="rounded-2xl border border-brand-beige bg-white p-6 md:p-10 shadow-[0_6px_20px_rgba(75,65,57,0.08)]">
          <div className="space-y-3">
            {ADDONS.map((item) => (
              <PriceLine key={item.label} {...item} />
            ))}
          </div>
          <p className="mt-6 text-sm text-brand-brown/65 italic">
            *Бебешкият груминг е валиден до 6 месеца.
          </p>
        </div>
      </div>
    </div>
  );
}
