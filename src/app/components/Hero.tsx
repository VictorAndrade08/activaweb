import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <>
      {/* Importamos las fuentes directamente para asegurar que se vean perfectas */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@700;800&display=swap');
      `}} />

      {/* Agregamos 'antialiased' para que las letras se vean ultra nítidas */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-32 px-6 sm:px-8 overflow-hidden font-['Inter'] antialiased">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl">
            
            {/* Badge Superior */}
            <div className="inline-flex items-center gap-2 bg-[#F0F5FF] text-[#2563EB] px-4 py-2 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-widest mb-8 md:mb-10">
              <Zap size={14} className="text-[#2563EB] fill-[#2563EB]" />
              Activamos su presencia digital en 48 horas
            </div>
            
            {/* Título Principal */}
            <h1 className="font-['Plus_Jakarta_Sans'] text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-extrabold leading-[1.05] md:leading-[0.95] text-[#0F172A] mb-6 md:mb-8 tracking-tighter">
              Su prestigio merece una <br className="hidden md:block" /> 
              web con <span className="text-[#2563EB]">tecnología ágil.</span>
            </h1>

            {/* Párrafo Descriptivo */}
            <p className="text-lg md:text-xl lg:text-[22px] text-[#475569] mb-10 md:mb-12 max-w-2xl leading-relaxed font-medium">
              Desarrollamos infraestructura de alto rendimiento para <span className="text-[#0F172A] font-semibold">Abogados y Médicos</span> en Ecuador. Sin suscripciones eternas.
            </p>
            
            {/* Grupo de Botón y Score (CTA) */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10">
              
              {/* Botón Principal */}
              <a 
                href="https://wa.me/593XXXXXXXXX?text=Hola%20ActivaWeb,%20necesito%20el%20plan%20de%20$150" 
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#0F172A] text-white px-8 py-4 md:px-10 md:py-5 rounded-xl text-base md:text-lg font-bold hover:bg-[#1e293b] transition-all group shadow-xl shadow-slate-900/10 active:scale-95"
              >
                Plan Lanzamiento $150
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Separador (Visible solo en Desktop) */}
              <div className="hidden sm:block h-12 w-[1px] bg-gray-200"></div>

              {/* Lighthouse Score */}
              <div className="flex items-center gap-4 sm:gap-0 sm:flex-col sm:items-start">
                <span className="text-[#2563EB] font-['Plus_Jakarta_Sans'] font-extrabold text-4xl md:text-[44px] tracking-tighter leading-none">
                  100/100
                </span>
                <span className="text-[9px] md:text-[10px] text-[#64748B] font-bold uppercase tracking-[0.2em] mt-1 sm:mt-2">
                  Lighthouse Score
                </span>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}