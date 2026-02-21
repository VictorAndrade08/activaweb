import React from 'react';
import { 
  MapPin, 
  MessageSquare, 
  ShieldCheck, 
  TrendingUp, 
  Layout, 
  Cpu 
} from 'lucide-react';

export default function BentoGrid() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@700;800&display=swap');
      `}} />

      <section id="solucion" className="py-20 md:py-32 px-6 sm:px-8 bg-white font-['Inter'] antialiased">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Tarjeta Principal (Izquierda) */}
            <div className="lg:col-span-7 bg-[#F8FAFC] rounded-[2.5rem] p-10 md:p-14 lg:p-16 border border-gray-100 flex flex-col justify-between overflow-hidden relative group">
              
              {/* Contenido Principal */}
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm border border-gray-100">
                  <Layout size={22} className="text-[#2563EB]" />
                </div>
                
                <h2 className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl lg:text-[56px] font-extrabold mb-6 leading-[1.05] tracking-tighter text-[#0F172A]">
                  Su consultorio no puede <br className="hidden md:block" />
                  permitirse ser <span className="text-[#2563EB]">segundo.</span>
                </h2>
                
                <p className="text-lg md:text-xl text-[#64748B] max-w-lg leading-relaxed font-medium">
                  Optimizamos para los Core Web Vitals de Google. Su negocio aparecerá arriba porque su web carga al instante.
                </p>
              </div>

              {/* Badges / Etiquetas */}
              <div className="mt-12 md:mt-20 flex flex-wrap gap-4 relative z-10">
                <div className="flex items-center gap-2.5 bg-white px-5 py-2.5 rounded-xl border border-gray-100 shadow-sm text-[11px] font-bold uppercase tracking-[0.15em] text-[#0F172A]">
                  <div className="w-2 h-2 bg-[#22C55E] rounded-full" />
                  SEO On-Page Activo
                </div>
                <div className="flex items-center gap-2.5 bg-white px-5 py-2.5 rounded-xl border border-gray-100 shadow-sm text-[11px] font-bold uppercase tracking-[0.15em] text-[#0F172A]">
                  <Cpu size={14} className="text-[#2563EB]" />
                  Infraestructura Cloud
                </div>
              </div>

              {/* Decoración de Fondo (Círculo Azul Suave) */}
              <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-[#EEF2FF] rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-105" />
            </div>

            {/* Grid de Sub-Tarjetas (Derecha) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Tarjeta 1: Google Maps (Oscura) */}
              <div className="bg-[#0F172A] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between aspect-square hover:-translate-y-1 transition-transform duration-300 shadow-xl shadow-slate-900/5">
                <MapPin className="text-[#2563EB]" size={32} />
                <div className="mt-8">
                  <h4 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[12px] uppercase tracking-[0.2em] mb-2 text-white">
                    Google Maps
                  </h4>
                  <p className="text-sm text-[#94A3B8] leading-relaxed font-medium">
                    Dominación de búsqueda local.
                  </p>
                </div>
              </div>

              {/* Tarjeta 2: WhatsApp */}
              <div className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between aspect-square hover:-translate-y-1 transition-transform duration-300">
                <MessageSquare className="text-[#2563EB]" size={32} />
                <div className="mt-8">
                  <h4 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[12px] uppercase tracking-[0.2em] mb-2 text-[#0F172A]">
                    WhatsApp
                  </h4>
                  <p className="text-sm text-[#64748B] leading-relaxed font-medium">
                    Conversión directa de leads.
                  </p>
                </div>
              </div>

              {/* Tarjeta 3: Seguridad */}
              <div className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between aspect-square hover:-translate-y-1 transition-transform duration-300">
                <ShieldCheck className="text-[#2563EB]" size={32} />
                <div className="mt-8">
                  <h4 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[12px] uppercase tracking-[0.2em] mb-2 text-[#0F172A]">
                    Seguridad
                  </h4>
                  <p className="text-sm text-[#64748B] leading-relaxed font-medium">
                    Protección de datos y SSL.
                  </p>
                </div>
              </div>

              {/* Tarjeta 4: ROI Real */}
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between aspect-square hover:-translate-y-1 transition-transform duration-300">
                <TrendingUp className="text-[#2563EB]" size={32} />
                <div className="mt-8">
                  <h4 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[12px] uppercase tracking-[0.2em] mb-2 text-[#0F172A]">
                    ROI Real
                  </h4>
                  <p className="text-sm text-[#2563EB] leading-relaxed font-semibold italic">
                    Pago único por su activo digital.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}