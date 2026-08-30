import { type ReactNode } from "react";

type BreedVariant = {
  label: string;
  price: string;
};

type BreedEntry = {
  name: string;
  price?: string;
  variants?: BreedVariant[];
};

const BREEDS: BreedEntry[] = [
  { name: "Акита ину", price: "65 €" },
  { name: "Аляски маламут", price: "85 €" },
  { name: "Английски булдог", price: "45 €" },
  { name: "Басет хаунд", price: "45 €" },
  { name: "Бийвър", price: "45 €" },
  { name: "Бийгъл", price: "45 €" },
  { name: "Бордър коли", price: "65 €" },
  { name: "Бишон", price: "45 €" },
  { name: "Борзой", price: "80 €" },
  { name: "Българско овчарско куче", price: "110 €" },
  { name: "Голдън ретривър", price: "65 €" },
  { name: "Далматин", price: "50 €" },
  {
    name: "Йоркширски териер",
    variants: [
      { label: "до 5 кг", price: "40 €" },
      { label: "над 5 кг", price: "45 €" },
    ],
  },
  {
    name: "Кавалер",
    variants: [
      { label: "до 7 кг", price: "45 €" },
      { label: "над 7 кг", price: "50 €" },
    ],
  },
  { name: "Кокер", price: "55 €" },
  { name: "Корги", price: "40 €" },
  { name: "Коли", price: "70 €" },
  { name: "Каракачанско куче", price: "110 €" },
  { name: "Лабрадор", price: "50 €" },
  { name: "Лагото романьоло", price: "65 €" },
  { name: "Малтийска болонка", price: "40 €" },
  { name: "Мопс", price: "35 €" },
  {
    name: "Немска овчарка",
    price: "75 €",
    variants: [{ label: "дългокосместа", price: "85 €" }],
  },
  { name: "Нюфаундленд", price: "120 €" },
  { name: "Пекинез", price: "40 €" },
  {
    name: "Померан",
    variants: [
      { label: "до 5 кг", price: "45 €" },
      { label: "над 5 кг", price: "50 €" },
    ],
  },
  {
    name: "Пудел",
    variants: [
      { label: "той, мини", price: "50 €" },
      { label: "среден", price: "55 €" },
      { label: "голям", price: "70 €" },
    ],
  },
  { name: "Самоед", price: "80 €" },
  { name: "Санбернар", price: "120 €" },
  { name: "Уести", price: "45 €" },
  { name: "Френски булдог", price: "35 €" },
  { name: "Хъски", price: "75 €" },
  { name: "Чау-чау", price: "75 €" },
  { name: "Чихуахуа (късокосместо)", price: "35 €" },
  { name: "Чихуахуа (дългокосместо)", price: "45 €" },
  { name: "Ши тцу", price: "45 €" },
  { name: "Шиба ину", price: "45 €" },
  {
    name: "Шнауцер",
    variants: [
      { label: "мини", price: "40 €" },
      { label: "среден", price: "45 €" },
      { label: "голям", price: "50 €" },
    ],
  },
  { name: "Немски шпиц", price: "50 €" },
];

const BATHING = [
  { label: "до 5 кг", price: "23 €" },
  { label: "до 10 кг", price: "28 €" },
  { label: "до 20 кг", price: "40 €" },
  { label: "до 30 кг", price: "50 €" },
];

const ADDON_SERVICES = [
  { label: "Рязане на нокти", price: "10 €" },
  { label: "Почистване на уши", price: "10 €" },
  { label: "Почистване на зъбен камък", price: "50 €" },
];

function PriceLine({
  label,
  price,
  indent = false,
}: {
  label: string;
  price: string;
  indent?: boolean;
}) {
  return (
    <div
      className={`flex items-baseline gap-2 ${indent ? "pl-4" : ""}`}
    >
      <span
        className={`shrink-0 text-brand-brown ${indent ? "text-sm" : ""}`}
      >
        {indent ? `– ${label}` : label}
      </span>
      <span className="flex-1 border-b border-dotted border-brand-beige mx-1 mb-1" />
      <span className="shrink-0 font-medium text-brand-brown">{price}</span>
    </div>
  );
}

function BreedItem({ breed }: { breed: BreedEntry }) {
  const hasOnlyVariants = !breed.price && !!breed.variants;

  return (
    <div className="space-y-1">
      {!hasOnlyVariants && breed.price && (
        <PriceLine label={breed.name} price={breed.price} />
      )}
      {hasOnlyVariants && (
        <p className="font-medium text-brand-brown">{breed.name}</p>
      )}
      {breed.variants?.map((v) => (
        <PriceLine
          key={v.label}
          label={v.label}
          price={v.price}
          indent={!!breed.price || hasOnlyVariants}
        />
      ))}
    </div>
  );
}

function PriceCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-brand-beige bg-white p-6 md:p-8 shadow-[0_6px_20px_rgba(75,65,57,0.08)]">
      <div className="h-1 w-12 rounded-full bg-brand-green mb-5" />
      <h3 className="text-2xl font-display text-brand-brown mb-6">{title}</h3>
      {children}
    </div>
  );
}

export function BreedPrices() {
  const splitAt = BREEDS.findIndex((b) => b.name === "Немска овчарка") + 1;
  const leftColumn = BREEDS.slice(0, splitAt);
  const rightColumn = BREEDS.slice(splitAt);

  return (
    <div>
      <h3 className="text-3xl font-display text-center mb-3 text-brand-brown">
        Цялостен груминг по порода
      </h3>
      <p className="text-center text-brand-brown/70 mb-8 max-w-xl mx-auto text-sm">
        Цените са за пълен груминг и могат да варират според състоянието на
        козината и поведението на кучето.
      </p>

      <div className="rounded-2xl border border-brand-beige bg-white p-6 md:p-10 shadow-[0_6px_20px_rgba(75,65,57,0.08)]">
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-3">
          <div className="space-y-3">
            {leftColumn.map((breed) => (
              <BreedItem key={breed.name} breed={breed} />
            ))}
          </div>
          <div className="space-y-3">
            {rightColumn.map((breed) => (
              <BreedItem key={breed.name} breed={breed} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function BathingAndAddons() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <PriceCard title="Къпане">
        <div className="space-y-3">
          {BATHING.map((item) => (
            <PriceLine key={item.label} label={item.label} price={item.price} />
          ))}
        </div>
      </PriceCard>

      <PriceCard title="Отделни услуги">
        <div className="space-y-3">
          {ADDON_SERVICES.map((item) => (
            <PriceLine key={item.label} label={item.label} price={item.price} />
          ))}
        </div>
        <div className="mt-6 pt-5 border-t border-brand-beige space-y-2">
          <p className="text-sm font-medium text-brand-brown">Условия</p>
          <ul className="space-y-2 text-sm text-brand-brown/75">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
              Достъпни само за кучета, записани за цялостен груминг при нас.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
              Извършват се след преценка на грумъра на място.
            </li>
          </ul>
        </div>
      </PriceCard>
    </div>
  );
}
