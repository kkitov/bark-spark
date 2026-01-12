const COLORS = {
  green: "#A2AF9B",
  ecru: "#F8F7F2",
  beige: "#DCCFC0",
  brown: "#4B4139",
};

type Props = {
  phoneTel: string;      // +359888123456
  phoneDisplay?: string; // optional
};

function PhoneIcon({ size = 18, color = COLORS.ecru }: { size?: number; color?: string }) {
  // Simple, clean phone icon (original drawing)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <path
        d="M7.5 3.8h2.2c.5 0 .9.3 1 .8l.6 2.8c.1.4-.1.8-.4 1l-1.4 1c.9 1.8 2.3 3.3 4.1 4.2l1-1.5c.2-.3.6-.5 1-.4l2.8.6c.5.1.8.5.8 1v2.2c0 .6-.4 1-1 1C12 19.7 4.3 12 4.3 4.8c0-.6.4-1 1-1Z"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FloatingCallButton({ phoneTel }: Props) {
  return (
    <>
      {/* Inline keyframes (no extra CSS file needed) */}
      <style>{`
        @keyframes bs-pulse {
          0% { transform: scale(1); box-shadow: 0 10px 30px rgba(75,65,57,0.18); }
          50% { transform: scale(1.04); box-shadow: 0 14px 40px rgba(75,65,57,0.22); }
          100% { transform: scale(1); box-shadow: 0 10px 30px rgba(75,65,57,0.18); }
        }
        @keyframes bs-ring {
          0% { transform: scale(0.9); opacity: 0.55; }
          70% { transform: scale(1.35); opacity: 0; }
          100% { transform: scale(1.35); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .bs-animate { animation: none !important; }
        }
      `}</style>

      <a
        href={`tel:${phoneTel}`}
        aria-label="Обади ни се"
        className="fixed left-4 bottom-4 md:left-6 md:bottom-6 z-[9999] select-none"
        style={{ textDecoration: "none" }}
      >
        {/* Ring effect behind */}
        <span
          className="bs-animate absolute inset-0 rounded-full"
          style={{
            backgroundColor: COLORS.green,
            animation: "bs-ring 1.6s ease-out infinite",
            filter: "blur(0.2px)",
          }}
        />

        {/* Button */}
        <span
          className="bs-animate relative inline-flex items-center gap-3 rounded-full px-5 py-3 border"
          style={{
            backgroundColor: COLORS.green,
            borderColor: COLORS.beige,
            color: COLORS.ecru,
            animation: "bs-pulse 1.8s ease-in-out infinite",
          }}
        >
          <span
            className="inline-flex items-center justify-center rounded-full"
            style={{
              width: 34,
              height: 34,
              backgroundColor: "rgba(248,247,242,0.14)",
              border: `1px solid rgba(248,247,242,0.25)`,
            }}
          >
            <PhoneIcon />
          </span>

          <span className="hidden md:inline" style={{ fontWeight: 600, letterSpacing: "0.2px" }}>
            Обади ни се
          </span>
        </span>
      </a>
    </>
  );
}
