import { type ReactNode } from "react";

export default function Section({
  id,
  title,
  children,
  className = "",
  background,
}: {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  background?: string;
}) {

  const isHome = id === "home";
  return (
    <section
      id={id}
       className={[
        "relative min-h-screen flex flex-col justify-center",
        "px-6 md:px-16",
        "py-20 md:py-28",              // вътрешно отстояние в секцията
        "scroll-mt-24 md:scroll-mt-28", // да не се скрива под sticky header при anchor
        !isHome ? "mt-10 md:mt-14" : "", // ✅ отстояние между секциите (само ако не е първата)
        className,
      ].join(" ")}
      style={
        background
          ? {
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
    >
      {id !== "home" && (
        <div className="absolute top-0 left-0 w-full border-t border-brand-pink/30"></div>
      )}

      {title && (
        <h2 className="text-4xl md:text-5xl font-display text-brand-brown mb-8 text-center">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
