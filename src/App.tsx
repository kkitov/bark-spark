import Header from "./components/Header";
import Section from "./components/Section";
import bgDesktop from "./assets/background.jpg";
import bgMobile from "./assets/background_mobile.jpg";
import PricesSection from "./components/Prices";
import ServicesSection from "./components/Services";
import RulesSection from "./components/Rules";
import ContactsSection from "./components/Contact";
import FloatingCallButton from "./components/FloatingCallButton";

export default function App() {
  const background = window.innerWidth < 768 ? bgMobile : bgDesktop;

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-white text-brand-brown">
      <Header />

      {/* 🏠 HOME SECTION */}
      <Section id="home" background={background}>
        {/* Full-section blur overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        {/* Text content */}
        <div className="relative text-center px-6 max-w-full">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-lora text-white mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] break-words">
  Bark & Spark Grooming
</h1>


          <p className="text-lg text-white max-w-2xl mx-auto drop-shadow">
            Груминг, съобразен с нуждите на всяко куче.
Внимание, търпение и качествена грижа за здрава и блестяща козина.
          </p>
        </div>
      </Section>

      {/* ✂️ SERVICES */}
      <Section id="services" className="bg-brand-ecru">
        <ServicesSection />
      </Section>

      {/* 💰 PRICES */}
      <Section id="prices" title="Цени" className="bg-brand-ecru">
        <PricesSection />
      </Section>

      {/* 📋 RULES */}
      <Section id="rules" title="Правила" className="bg-brand-ecru">
        <RulesSection />
      </Section>

      {/* 📞 CONTACTS */}
      <Section id="contacts" className="p-0">
        <ContactsSection />
      </Section>

      <FloatingCallButton phoneTel="+359888222057"/>
    </div>
  );
}
