import Hero from "./components/Hero";
import LogoTicker from "./components/LogoTicker";
import Bento from "./components/Bento";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import WhatsAppButton from "./components/WhatsAppButton";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white antialiased">
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(at_0%_0%,_rgba(37,99,235,0.03)_0px,transparent_50%),radial-gradient(at_100%_100%,_rgba(15,23,42,0.03)_0px,transparent_50%)]" />

      <Hero />
      <LogoTicker />
      <Bento />
      <Process />
      <Pricing />
      <WhatsAppButton />
    </div>
  );
}
