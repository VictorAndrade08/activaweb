"use client";
import React from 'react';
import { CheckCircle2, ArrowRight, Building2, Clock, Zap, MessageCircle, MessageSquare } from 'lucide-react';

export default function Pricing() {
  // Función de Tracking Fantasma para tu base de datos
  const trackIntent = (plan: string) => {
    // Aquí conectas tu API route de Next.js hacia Supabase
    // fetch('/api/track-lead', { method: 'POST', body: JSON.stringify({ plan, timestamp: new Date() }) });
    console.log(`[Tracking Fantasma] Intención registrada: ${plan}`);
  };

  return (
    <section id="precios" className="py-20 md:py-32 px-4 sm:px-6 bg-[#F8FAFC] relative overflow-hidden antialiased">
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-white to-transparent pointer-events-none" aria-hidden="true" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#0F172A] mb-5 md:mb-6 leading-tight md:leading-none tracking-tight md:tracking-tighter">
              Inversión clara. <span className="text-[#2563EB]">Sin sorpresas.</span>
            </h2>
            <p className="text-base md:text-2xl text-[#64748B] max-w-2xl mx-auto font-semibold">
              Todos nuestros planes son de pago único. Elija su velocidad de entrega.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-center">
            
            <div className="order-2 md:order-1 bg-white border border-gray-200 rounded-[2rem] p-8 md:p-10 flex flex-col h-full shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="mb-8">
                <h3 className="font-display text-2xl font-extrabold uppercase tracking-widest text-[#0F172A] mb-4">Business Pro</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl lg:text-7xl font-black tracking-tighter text-[#0F172A]">$300</span>
                  <span className="text-[#64748B] font-bold text-lg">/ pago único</span>
                </div>
                <p className="text-lg text-[#64748B] font-medium italic mt-3">Sitio multi-página para escalar su autoridad.</p>
              </div>

              <div className="space-y-6 mb-12 flex-1 opacity-80">
                {['Sitio Web Completo (5 Páginas)', 'Hospedaje Cloud', 'Sistema de Citas / Reservas', 'Sección de Noticias / Blog'].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-lg font-semibold text-[#0F172A]">
                    <CheckCircle2 size={24} aria-hidden="true" className="text-[#64748B] shrink-0 mt-0.5" />
                    {text}
                  </div>
                ))}
              </div>

              <a 
                href="https://wa.me/593994715278?text=Hola,%20me%20gustaría%20hacerte%20unas%20preguntas%20sobre%20el%20plan%20Business%20Pro%20de%20$300" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackIntent('Business Pro $300')}
                className="flex items-center justify-center gap-2 w-full text-center bg-white border-2 border-[#0F172A] text-[#0F172A] py-5 rounded-xl font-bold text-xl hover:bg-gray-50 transition-all active:scale-95"
              >
                <MessageCircle size={20} aria-hidden="true" />
                Hablamos del Plan
              </a>
            </div>

            <div className="order-1 md:order-2 bg-white border-4 border-[#2563EB] rounded-[2rem] p-8 md:p-10 flex flex-col h-full shadow-[0_30px_60px_rgba(37,99,235,0.15)] relative transform md:-translate-y-4">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-lg whitespace-nowrap">
                Entrega Inmediata
              </div>

              <div className="mb-8 mt-3">
                <h3 className="font-display text-2xl font-extrabold uppercase tracking-widest text-[#2563EB] mb-4">Profesional</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-7xl lg:text-8xl font-black tracking-tighter text-[#0F172A]">$150</span>
                  <span className="text-[#64748B] font-bold text-lg">/ pago único</span>
                </div>
                <div className="flex items-center gap-2 text-base font-bold text-[#2563EB] bg-blue-50 px-4 py-2 rounded-xl w-max mb-4 mt-3">
                  <Zap size={20} aria-hidden="true" className="fill-current" /> Se despliega HOY mismo
                </div>
                <p className="text-lg text-[#64748B] font-medium italic">Todo lo necesario para conseguir pacientes hoy.</p>
              </div>

              <div className="space-y-6 mb-12 flex-1">
                {['Landing Page Alta Conversión', 'Hospedaje Cloud', 'Dominio .com (1er año)', 'Dominación Google Maps', 'Botón WhatsApp Integrado', 'Entrega garantizada hoy'].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-lg font-bold text-[#0F172A]">
                    <CheckCircle2 size={24} aria-hidden="true" className="text-[#2563EB] shrink-0 mt-0.5" />
                    {text}
                  </div>
                ))}
              </div>

              <a 
                href="https://wa.me/593994715278?text=Hola,%20quisiera%20saber%20si%20mi%20clínica%20aplica%20para%20la%20web%20de%20$150%20con%20entrega%20hoy" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackIntent('Profesional $150')}
                className="flex items-center justify-center gap-2 w-full text-center bg-[#2563EB] text-white py-5 rounded-xl font-bold text-xl hover:bg-[#1d4ed8] transition-all shadow-xl shadow-blue-500/25 active:scale-95"
              >
                <MessageSquare aria-hidden="true" className="fill-current" size={20} />
                Consultar por WhatsApp
              </a>
            </div>

            <div className="order-3 md:order-3 bg-white border border-gray-200 rounded-[2rem] p-8 md:p-10 flex flex-col h-full shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="mb-8">
                <h3 className="font-display text-2xl font-extrabold uppercase tracking-widest text-[#0F172A] mb-4">Élite Corporativo</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl lg:text-7xl font-black tracking-tighter text-[#0F172A]">$450</span>
                  <span className="text-[#64748B] font-bold text-lg">/ pago único</span>
                </div>
                <p className="text-lg text-[#64748B] font-medium italic mt-3">Solución integral para firmas grandes.</p>
              </div>

              <div className="space-y-6 mb-12 flex-1 opacity-80">
                {['Estructura Adaptada a su Negocio', 'Pasarela de Pagos', 'Soporte Multilingüe', 'Automatización de CRM'].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-lg font-semibold text-[#0F172A]">
                    <CheckCircle2 size={24} aria-hidden="true" className="text-[#64748B] shrink-0 mt-0.5" />
                    {text}
                  </div>
                ))}
              </div>

              <a 
                href="https://wa.me/593994715278?text=Hola,%20necesito%20detalles%20del%20plan%20Elite%20para%20mi%20negocio" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackIntent('Elite Corporativo $450')}
                className="flex items-center justify-center gap-2 w-full text-center bg-white border-2 border-[#0F172A] text-[#0F172A] py-5 rounded-xl font-bold text-xl hover:bg-gray-50 transition-all active:scale-95"
              >
                <MessageCircle size={20} aria-hidden="true" />
                Pedir Detalles
              </a>
            </div>

          </div>

          <div id="proceso" className="mt-24 relative pt-10 -mt-10">
            <div className="hidden lg:block absolute left-[5%] top-[-15%] w-72 z-0 opacity-40">
               <img 
                 src="https://pub-25cde2184a5249da96fa022aae951321.r2.dev/activaweb/proud.webp" 
                 alt="Plantilla Web Abogados" 
                 loading="lazy"
                 className="w-full h-auto rounded-2xl shadow-2xl -rotate-6" 
               />
            </div>
            
            <div className="hidden lg:block absolute right-[5%] bottom-[-10%] w-72 z-0 opacity-40">
               <img 
                 src="https://pub-25cde2184a5249da96fa022aae951321.r2.dev/activaweb/success.webp" 
                 alt="Plantilla Web Médicos" 
                 loading="lazy"
                 className="w-full h-auto rounded-2xl shadow-2xl rotate-6" 
               />
            </div>

            <div className="bg-[#0F172A] rounded-[2rem] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group z-10 w-full max-w-4xl mx-auto border border-[#1e293b]">
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#2563EB] opacity-20 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />

              <div className="flex items-center gap-8 relative z-10 text-center md:text-left">
                <div className="hidden md:flex w-20 h-20 bg-white/10 rounded-2xl items-center justify-center border border-white/5 shrink-0">
                  <Building2 size={40} aria-hidden="true" className="text-[#2563EB]" />
                </div>
                <div>
                  <h4 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
                    ¿Necesita un sistema a medida?
                  </h4>
                  <p className="text-xl text-[#94A3B8] font-medium max-w-xl">
                    Portales de pacientes, intranets legales o aplicaciones web complejas. Desarrollamos soluciones escalables de alto nivel.
                  </p>
                </div>
              </div>

              <a 
                href="https://wa.me/593994715278?text=Hola,%20tengo%20un%20proyecto%20complejo%20y%20necesito%20cotizarlo%20a%20medida" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackIntent('Proyecto A Medida')}
                className="group flex shrink-0 items-center justify-center gap-4 bg-white text-[#0F172A] px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all active:scale-95 w-full md:w-auto z-10"
              >
                Escribir por WhatsApp
                <ArrowRight size={24} aria-hidden="true" className="text-[#2563EB] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <p className="text-center mt-14 text-sm font-bold uppercase tracking-[0.2em] text-[#64748B] relative z-20">
            📍 Especialistas en Abogados y Dentistas en Ecuador
          </p>

        </div>
    </section>
  );
}