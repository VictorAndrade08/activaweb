import React from 'react';
import { Zap, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-32 px-6 sm:px-8 overflow-hidden antialiased">
        
        <div className="hidden lg:block absolute right-[-5%] top-[10%] w-[55%] pointer-events-none z-0">
          <img 
            src="https://pub-25cde2184a5249da96fa022aae951321.r2.dev/activaweb/hero.webp" 
            alt="Fondo de Infraestructura Web" 
            loading="eager"
            className="w-full h-auto rounded-[2rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] -rotate-3 border border-gray-100 opacity-20" 
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-5xl">
            
            <div className="inline-flex items-center gap-2 bg-[#F0F5FF] text-[#2563EB] px-4 py-2 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-widest mb-8 md:mb-10">
              <Zap size={14} className="text-[#2563EB] fill-[#2563EB]" aria-hidden="true" />
              Activamos su presencia digital en 48 horas
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-extrabold leading-[1.05] md:leading-[0.95] text-[#0F172A] mb-6 md:mb-8 tracking-tighter relative z-20">
              Su prestigio merece una <br className="hidden md:block" /> 
              web con <span className="text-[#2563EB]">tecnología ágil.</span>
            </h1>

            <p className="text-xl md:text-[22px] text-[#475569] mb-10 md:mb-12 max-w-2xl leading-relaxed font-medium relative z-20">
              Desarrollamos infraestructura de alto rendimiento para <span className="text-[#0F172A] font-semibold">Abogados y Médicos</span> en Ecuador. Sin suscripciones eternas.
            </p>
            
            <div className="relative z-20">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10">
                
                <a 
                  href="https://wa.me/593994715278?text=Hola,%20me%20gustaría%20saber%20si%20califico%20para%20el%20plan%20de%20$150" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Consultar Disponibilidad por WhatsApp"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#0F172A] text-white px-8 py-5 rounded-xl text-base md:text-lg font-extrabold hover:bg-[#1e293b] transition-all group shadow-xl shadow-slate-900/10 active:scale-95"
                >
                  Consultar Disponibilidad
                  <ArrowRight size={20} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="hidden sm:block h-12 w-[1px] bg-gray-200" aria-hidden="true"></div>

                <div className="flex items-center gap-4 sm:gap-0 sm:flex-col sm:items-start bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white shadow-sm">
                  <span className="text-[#2563EB] font-display font-extrabold text-4xl md:text-[44px] tracking-tighter leading-none">
                    100/100
                  </span>
                  <span className="text-[9px] md:text-[10px] text-[#64748B] font-bold uppercase tracking-[0.2em] mt-1 sm:mt-2">
                    Lighthouse Score
                  </span>
                </div>
              </div>
              
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#64748B]">
                <ShieldCheck size={16} aria-hidden="true" className="text-[#22C55E]" />
                Sin compromiso. Respondemos en WhatsApp (+593 99 471 5278) de inmediato.
              </div>
            </div>

          </div>
        </div>
    </section>
  );
}