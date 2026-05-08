import Image from 'next/image';
import { MapPin, MessageSquare, ShieldCheck, TrendingUp, Layout, Cpu } from 'lucide-react';

export default function BentoGrid() {
  return (
    <section id="solucion" className="py-16 md:py-32 px-6 sm:px-8 bg-white antialiased">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-6">
            
            <div className="lg:col-span-7 bg-[#F8FAFC] rounded-[2.5rem] p-8 md:p-14 lg:p-16 border border-gray-100 flex flex-col justify-between overflow-hidden relative group">
              
              <Image
                src="https://pub-25cde2184a5249da96fa022aae951321.r2.dev/activaweb/cozy.webp"
                alt=""
                width={800}
                height={1000}
                sizes="(max-width: 768px) 0px, 50vw"
                loading="lazy"
                className="hidden md:block absolute right-0 bottom-0 h-full w-[55%] object-cover object-left-top opacity-20 rounded-tl-[3rem] transition-transform duration-700 group-hover:scale-[1.02] pointer-events-none z-0"
              />

              <div className="relative z-10 md:w-[70%]">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 md:mb-10 shadow-sm border border-gray-100">
                  <Layout size={26} className="text-[#2563EB]" />
                </div>
                
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-extrabold mb-5 md:mb-6 leading-tight md:leading-[1.05] tracking-tight md:tracking-tighter text-[#0F172A]">
                  No deje que sus <br className="hidden md:block" />pacientes
                  se vayan al <span className="text-[#2563EB]">vecino.</span>
                </h2>

                <p className="text-base md:text-2xl text-[#64748B] max-w-sm leading-relaxed font-semibold">
                  El 80% de los clientes abandonan un sitio si tarda más de 3 segundos en cargar. Su consultorio no puede permitirse tener una página lenta o caída.
                </p>
              </div>

              <div className="mt-8 md:mt-16 flex flex-wrap gap-4 relative z-10">
                <div className="flex items-center gap-2.5 bg-white px-5 py-3.5 rounded-xl border border-gray-100 shadow-sm text-sm font-bold uppercase tracking-[0.15em] text-[#0F172A]">
                  <div className="w-3 h-3 bg-[#22C55E] rounded-full" />
                  Dominación Local Activa
                </div>
                <div className="flex items-center gap-2.5 bg-white px-5 py-3.5 rounded-xl border border-gray-100 shadow-sm text-sm font-bold uppercase tracking-[0.15em] text-[#0F172A]">
                  <Cpu size={18} className="text-[#2563EB]" />
                  Carga Ultra Rápida
                </div>
              </div>

              <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-[#EEF2FF] rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-105" />
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3 md:gap-6">
              <div className="bg-white border border-gray-100 rounded-2xl md:rounded-[2rem] p-5 md:p-8 flex flex-col justify-between min-h-[150px] md:min-h-[220px] sm:aspect-square hover:-translate-y-1 transition-transform duration-300 shadow-sm">
                <MapPin className="text-[#2563EB] w-7 h-7 md:w-10 md:h-10" />
                <div className="mt-4 md:mt-6">
                  <h3 className="font-display font-extrabold text-xs md:text-base uppercase tracking-[0.15em] md:tracking-[0.2em] mb-1.5 md:mb-3 text-[#0F172A]">Google Maps</h3>
                  <p className="text-sm md:text-lg text-[#64748B] leading-snug md:leading-relaxed font-semibold">Sea el primero en su ciudad.</p>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl md:rounded-[2rem] p-5 md:p-8 flex flex-col justify-between min-h-[150px] md:min-h-[220px] sm:aspect-square hover:-translate-y-1 transition-transform duration-300 shadow-sm">
                <MessageSquare className="text-[#2563EB] w-7 h-7 md:w-10 md:h-10" />
                <div className="mt-4 md:mt-6">
                  <h3 className="font-display font-extrabold text-xs md:text-base uppercase tracking-[0.15em] md:tracking-[0.2em] mb-1.5 md:mb-3 text-[#0F172A]">WhatsApp</h3>
                  <p className="text-sm md:text-lg text-[#64748B] leading-snug md:leading-relaxed font-semibold">Pacientes directos a su celular.</p>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl md:rounded-[2rem] p-5 md:p-8 flex flex-col justify-between min-h-[150px] md:min-h-[220px] sm:aspect-square hover:-translate-y-1 transition-transform duration-300 shadow-sm">
                <ShieldCheck className="text-[#2563EB] w-7 h-7 md:w-10 md:h-10" />
                <div className="mt-4 md:mt-6">
                  <h3 className="font-display font-extrabold text-xs md:text-base uppercase tracking-[0.15em] md:tracking-[0.2em] mb-1.5 md:mb-3 text-[#0F172A]">Seguridad</h3>
                  <p className="text-sm md:text-lg text-[#64748B] leading-snug md:leading-relaxed font-semibold">Certificado SSL contra hackeos.</p>
                </div>
              </div>

              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl md:rounded-[2rem] p-5 md:p-8 flex flex-col justify-between min-h-[150px] md:min-h-[220px] sm:aspect-square hover:-translate-y-1 transition-transform duration-300">
                <TrendingUp className="text-[#2563EB] w-7 h-7 md:w-10 md:h-10" />
                <div className="mt-4 md:mt-6">
                  <h3 className="font-display font-extrabold text-xs md:text-base uppercase tracking-[0.15em] md:tracking-[0.2em] mb-1.5 md:mb-3 text-[#0F172A]">ROI Real</h3>
                  <p className="text-sm md:text-lg text-[#2563EB] leading-snug md:leading-relaxed font-bold italic">Sin ataduras. Pago único real.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}