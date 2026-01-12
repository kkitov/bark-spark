const weightsFullGrooming = [
  "до 5 кг",
  "5–10 кг",
  "10–20 кг",
  "20–40 кг",
  "над 40 кг",
];

const fullGrooming = [
  {
    label: "Късокосмести",
    prices: ["25 €", "30 €", "35 €", "40 €", "50 €"],
  },
  {
    label: "Дългокосмести",
    prices: ["35 €", "40 €", "45 €", "55 €", "65 €"],
  },
  {
    label: "Обемни",
    prices: ["35 €", "40 €", "45 €", "55 €", "65 €"],
  },
];

export function FullGroomingTable() {
  return (
    <div>
      <h3 className="text-3xl font-display text-center mb-8">
        Цялостен груминг
      </h3>

      <div className="overflow-x-auto">
        <table
          className="w-full rounded-xl shadow-soft"
          style={{
            backgroundColor: "#F8F7F2", // ecru
            border: "1px solid #DCCFC0", // beige border
          }}
        >
          <thead className="bg-[#AEB9A5] text-white">
            <tr>
              <th className="p-4 text-left">Тип козина</th>
              {weightsFullGrooming.map((w) => (
                <th key={w} className="p-4 text-center">
                  {w}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {fullGrooming.map((row, i) => (
              <tr
                key={i}
                style={{
                  backgroundColor:
                    i % 2 === 0 ? "transparent" : "rgba(220,207,192,0.18)",
                }}
              >
                <td className="p-4 font-medium">{row.label}</td>

                {row.prices.map((p, idx) => (
                  <td key={idx} className="p-4 text-center">
                    {p}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p
          className="mt-4 text-brand-brown italic text-center"
          style={{ color: "rgba(75,65,57,0.6)" }}
        >
          Бебешки груминг(до 6 месеца) - 20% отстъпка от цената за пълния
          груминг
        </p>
      </div>
    </div>
  );
}

const weights = ["до 5 кг", "5–10 кг", "10–20 кг", "20–40 кг", "над 40 кг"];

const services = [
  {
    title: "Разресване",
    prices: ["17 €", "23 €", "28 €", "33 €", "38 €"],
  },
  {
    title: "Почистване на уши",
    prices: ["5 €", "5 €", "5 €", "5 €", "5 €"],
  },
  {
    title: "Рязане на нокти",
    prices: ["5 €", "5 €", "5 €", "5 €", "5 €"],
  },
  {
    title: "Къпане и сушене",
    prices: ["15 €", "17 €", "20 €", "25 €", "38 €"],
  },
];

export function IndividualServicesTables() {
  return (
    <div>
      <h3 className="text-3xl font-display text-center mb-8">Отделни услуги</h3>

      <div className="overflow-x-auto">
        <table
          className="w-full rounded-xl shadow-soft"
          style={{
            backgroundColor: "#F8F7F2", // ecru
            border: "1px solid #DCCFC0", // beige border
          }}
        >
          <thead style={{ backgroundColor: "#A2AF9B" }}>
            <tr>
              <th className="p-4 text-left" style={{ color: "#F8F7F2" }}>
                Тип услуга
              </th>
              {weights.map((w) => (
                <th
                  key={w}
                  className="p-4 text-center"
                  style={{ color: "#F8F7F2" }}
                >
                  {w}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {services.map((row, i) => (
              <tr
                key={row.title}
                style={{
                  borderTop: "1px solid #DCCFC0",
                  backgroundColor:
                    i % 2 === 0 ? "transparent" : "rgba(220,207,192,0.18)",
                }}
              >
                <td className="p-4 font-medium" style={{ color: "#4B4139" }}>
                  {row.title}
                </td>

                {row.prices.map((p, idx) => (
                  <td
                    key={idx}
                    className="p-4 text-center"
                    style={{ color: "#4B4139" }}
                  >
                    {p}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
