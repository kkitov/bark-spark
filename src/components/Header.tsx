import { useState } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { path: "#home", label: "Начало" },
    { path: "#services", label: "Услуги" },
    { path: "#prices", label: "Цени" },
    { path: "#contacts", label: "Контакти" },
  ];

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setOpen(false);
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-brand-pink/30">
      <nav className="relative container mx-auto md:mx-15 flex items-center justify-between px-6 py-3">
        {/* Лого – Desktop + Mobile */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="flex items-center gap-2 z-[60]"
        >
          <img
            src={logo}
            alt="Glam Pets Logo"
            className="w-auto h-[46px] hidden md:block"
          />
          <img
            src={logo}
            alt="Glam Pets Logo"
            className="w-auto h-[36px] md:hidden"
          />
        </a>

        {/* Desktop меню */}
        <ul className="hidden md:flex gap-10 text-brand-brown font-medium ml-10">
          {navItems.map((item) => (
            <li key={item.path}>
              <a
                href={item.path}
                onClick={(e) => handleScroll(e, item.path)}
                className="hover:text-brand-pink transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Burger – Mobile */}
        <button
          className="md:hidden relative z-[60] w-8 h-8 flex flex-col justify-between items-center group"
          onClick={() => setOpen(!open)}
          aria-label="Отвори меню"
        >
          <span
            className={`block h-[2px] w-full bg-black rounded transition-all duration-300 ${
              open ? "rotate-45 translate-y-[14px] translate-x-[6px]" : ""
            }`}
          ></span>
          <span
            className={`block h-[2px] w-full bg-black rounded transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-[2px] w-full bg-black rounded transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-[14px] translate-x-[6px]" : ""
            }`}
          ></span>
        </button>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* Slide-in menu (mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b border-brand-pink/20">
          <h2 className="font-display text-xl text-brand-brown">Меню</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-brand-brown hover:text-brand-pink transition"
          >
          </button>
        </div>

        <ul className="flex flex-col gap-6 px-6 mt-6 text-brand-brown font-medium">
          {navItems.map((item) => (
            <li key={item.path}>
              <a
                href={item.path}
                onClick={(e) => handleScroll(e, item.path)}
                className="block hover:text-brand-pink transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
