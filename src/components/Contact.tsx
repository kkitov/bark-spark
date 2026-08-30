const COLORS = {
  green: "#A2AF9B",
  ecru: "#F8F7F2",
  beige: "#DCCFC0",
  brown: "#4B4139",
};

// ✅ ПОПЪЛНИ ТУК:
const SALON = {
  name: "Bark & Spark Grooming",
  phoneDisplay: "+359 888 222 057",
  phoneTel: "+359888222057",
  address: 'ul. "Sv. Kipriyan" 44, 1799 Sofia, Bulgaria',
  lat: "42°38'35.9\"N",
  lng: "23°21'59.0\"E",
  instagram: "https://www.instagram.com/grooming.bark.and.spark/",
  facebook: "https://www.facebook.com/profile.php?id=61583855435147",
  tiktok: "https://www.tiktok.com/@grooming.bark.and.spark",
};

function mapsLinkFromAddress(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
}

function mapsEmbedFromLatLng(lat: string, lng: string) {
  // ✅ Embed карта без API key (най-лесно)
  return `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`;
}

export default function ContactsSection() {
  const mapsUrl = mapsLinkFromAddress(SALON.address);
  const mapsEmbed = mapsEmbedFromLatLng(SALON.lat, SALON.lng);

  return (
    <div
      style={{
        backgroundColor: COLORS.ecru,
        borderTop: `1px solid ${COLORS.beige}`,
        borderBottom: `1px solid ${COLORS.beige}`,
      }}
      className="py-16 md:py-24"
    >
      <div className="px-6 md:px-16 max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2
            className="text-4xl md:text-5xl mb-3"
            style={{ color: COLORS.brown }}
          >
            Контакти
          </h2>
          <p style={{ color: "rgba(75,65,57,0.75)" }}>
            Свържете се с нас за записване на час или въпроси относно услугите ни.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left: info card */}
          <div
            className="rounded-2xl p-6 md:p-8 border"
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: COLORS.beige,
              boxShadow: "0 6px 20px rgba(75,65,57,0.12)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="h-10 w-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: COLORS.green }}
                aria-hidden="true"
              >
                <span style={{ color: COLORS.ecru, fontWeight: 700 }}>📞</span>
              </div>
              <div>
                <div style={{ color: COLORS.brown, fontWeight: 600 }}>
                  {SALON.name}
                </div>
                <div
                  style={{ color: "rgba(75,65,57,0.7)" }}
                  className="text-sm"
                >
                  Груминг салон за кучета
                </div>
              </div>
            </div>

            {/* Phone (click to call) */}
            <div className="mb-5">
              <div
                className="text-sm mb-1"
                style={{ color: "rgba(75,65,57,0.65)" }}
              >
                Телефон
              </div>
              <a
                href={`tel:${SALON.phoneTel}`}
                className="inline-flex items-center gap-2 font-medium"
                style={{ color: COLORS.brown }}
              >
                {SALON.phoneDisplay}
              </a>
            </div>
            {/* Address (click to open Google Maps) */}
            <div className="mb-8">
              <div
                className="text-sm mb-1"
                style={{ color: "rgba(75,65,57,0.65)" }}
              >
                Адрес
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4"
                style={{ color: COLORS.brown }}
              >
                {SALON.address}
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mb-8">
              {/* Instagram */}
              <a
                href={SALON.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4B4139"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition"
                  style={{}}
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37a4 4 0 1 1-7.37-2.37A4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={SALON.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4B4139"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href={SALON.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="group"
                style={{ color: "#4B4139" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#A2AF9B")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4B4139")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* TikTok note */}
                  <path d="M9 3v10.5a3.5 3.5 0 1 1-2.5-3.35" />
                  <path d="M9 3c1.2 2.2 3.4 3.6 6 3.8v3.2c-2.6-.2-4.8-1.6-6-3.6v6.1" />
                </svg>
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${SALON.phoneTel}`}
                className="inline-flex justify-center items-center px-6 py-3 rounded-full font-medium transition"
                style={{
                  backgroundColor: COLORS.green,
                  color: COLORS.ecru,
                  border: `1px solid ${COLORS.beige}`,
                }}
              >
                Обади се
              </a>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-6 py-3 rounded-full font-medium transition"
                style={{
                  backgroundColor: "transparent",
                  color: COLORS.brown,
                  border: `1px solid ${COLORS.beige}`,
                }}
              >
                Отвори в Maps
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div
            className="rounded-2xl overflow-hidden border"
            style={{
              borderColor: COLORS.beige,
              boxShadow: "0 6px 20px rgba(75,65,57,0.12)",
            }}
          >
            <iframe
              title="Google Map"
              src={mapsEmbed}
              width="100%"
              height="100%"
              style={{ minHeight: 360, border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* small note */}
        <div className="text-center mt-8">
          <span style={{ color: "rgba(75,65,57,0.6)" }} className="text-sm">
            Работно време: 
            <br/>
            Понеделник - Събота 10:00 -19:00
          </span>
        </div>
      </div>
    </div>
  );
}
