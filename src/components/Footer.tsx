export default function Footer() {
  return (
    <footer className="bg-brand-brown text-brand-beige py-8 mt-16">
      <div className="container mx-auto text-center space-y-2">
        <p className="font-display text-xl tracking-wide">Stefi Pets</p>
        <p className="text-sm opacity-90">
          София • ул. „Любов към животните“ №5 • ☎️{" "}
          <a href="tel:+359888123456" className="underline hover:text-brand-pink">
            +359 888 123 456
          </a>
        </p>
        <p className="text-xs opacity-70">
          © {new Date().getFullYear()} Stefi Pets Grooming Salon
        </p>
      </div>
    </footer>
  );
}
