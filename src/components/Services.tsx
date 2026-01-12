import { useState } from "react";

const SERVICES = {
  full: [
    {
      title: "Цялостен груминг",
      points: [
        "Къпане и сушене",
        "Подстригване / оформяне",
        "Разресване",
        "Уши и нокти",
      ],
    },
    {
      title: "Бебешки груминг",
      points: [
        "Щадящо измиване",
        "Деликатно оформяне",
        "Хигиенна грижа",
        "Адаптация към груминг среда"
      
      ],
    },
  ],
  individual: [
    {
      title: "Разресване",
      points: ["Премахване на излишна козина", "Внимателно разплитане", "Финално оформяне"],
    },
    {
      title: "Почистване на уши",
      points: ["Деликатна хигиенна грижа", "Щадящи и хипоалергенни продукти"],
    },
    {
      title: "Рязане на нокти",
      points: ["Подрязване", "Заглаждане"],
    },
    {
      title: "Къпане и сушене",
      points: ["Двойно почистване с подходящи шампоани", "Балсам или маска според типа на козината", "Финален блясък и мекота"],
    },
  ],
};

function Card({
  title,
  points,
}: {
  title: string;
  points: string[];
}) {
  return (
    <div
      className="
        group
        bg-brand-ecru
        rounded-2xl
        p-6
        border border-brand-beige
        shadow-soft
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* accent line */}
      <div
        className="
          h-1
          w-12
          rounded-full
          bg-brand-green
          mb-4
          transition-all
          group-hover:w-20
        "
      />

      <h3 className="text-lg font-semibold text-brand-brown mb-3">
        {title}
      </h3>

      <ul className="space-y-1 text-sm text-brand-brown/80">
        {points.map((p) => (
          <li key={p} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}


function AccordionItem({
  title,
  points,
  open,
  onToggle,
}: {
  title: string;
  points: string[];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-white rounded-xl shadow-soft overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center px-5 py-4 text-left"
      >
        <span className="font-medium text-brand-brown">{title}</span>
        <span
          className={`transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {open && (
        <div className="px-5 pb-4">
          <ul className="space-y-2 text-sm text-brand-brown/70">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#AEB9A5]" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function ServicesSection() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="space-y-14">
      {/* intro */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display text-brand-brown mb-4">
          Услуги
        </h2>
        <p className="text-brand-brown/70">
          Изчистена грижа, съобразена с породата, козината и нуждите на всяко куче.
        </p>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block space-y-12">
        <div>
          <h3 className="text-2xl font-display mb-6 text-brand-brown">
            Цялостен груминг
          </h3>
          <div className="grid grid-cols-2 gap-6">
            {SERVICES.full.map((s) => (
              <Card key={s.title} {...s} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-display mb-6 text-brand-brown">
            Отделни услуги
          </h3>
          <div className="grid grid-cols-2 gap-6">
            {SERVICES.individual.map((s) => (
              <Card key={s.title} {...s} />
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden space-y-4">
        {[...SERVICES.full, ...SERVICES.individual].map((s) => (
          <AccordionItem
            key={s.title}
            title={s.title}
            points={s.points}
            open={open === s.title}
            onToggle={() =>
              setOpen(open === s.title ? null : s.title)
            }
          />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="#prices"
          className="inline-block px-8 py-3 rounded-full bg-brand-green text-white font-medium hover:opacity-90 transition"
        >
          Виж цени
        </a>
      </div>
    </div>
  );
}
