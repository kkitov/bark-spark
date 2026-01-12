import Header from "./components/Header";
import Section from "./components/Section";
import bgDesktop from "./assets/background.jpg";
import bgMobile from "./assets/background_mobile.jpg";
import {
  FullGroomingTable,
  IndividualServicesTables,
} from "./components/Prices";
import ServicesSection from "./components/Services";
import ContactsSection from "./components/Contact";
import FloatingCallButton from "./components/FloatingCallButton";

export default function App() {
  const background = window.innerWidth < 768 ? bgMobile : bgDesktop;

  return (
    <div className="bg-white text-brand-brown">
      <Header />

      {/* 🏠 HOME SECTION */}
      <Section id="home" background={background}>
        {/* Full-section blur overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        {/* Text content */}
        <div className="relative text-center px-6">
          <h1 className="text-6xl md:text-7xl font-lora text-white mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
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
        <div className="space-y-16">
          <FullGroomingTable />

          <IndividualServicesTables />
        </div>
      </Section>

      {/* 📞 CONTACTS */}
      <Section id="contacts" className="p-0">
        <ContactsSection />
      </Section>

      <FloatingCallButton phoneTel="+359888222057"/>
    </div>
  );
}
