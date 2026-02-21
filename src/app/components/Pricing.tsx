import React from 'react';
import { CheckCircle2, ArrowRight, Building2 } from 'lucide-react';

export default function Pricing() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@700;800&display=swap');
      `}} />

      <section id="precios" className="py-24 md:py-32 px-4 sm:px-6 bg-[#F8FAFC] relative overflow-hidden font-['Inter'] antialiased">
        {/* Fondo decorativo */}
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-white to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header de Precios */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-6 tracking-tighter">
              Inversión clara. <span className="text-[#2563EB]">Sin sorpresas.</span>
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto font-medium">
              Elija la infraestructura que su consultorio o despacho necesita. Todos nuestros planes son de pago único, sin mensualidades ocultas.
            </p>
          </div>

          {/* Grid de Precios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-center">
            
            {/* Plan 1: Business Pro ($300) - A LA IZQUIERDA */}
            <div className="bg-white border border-gray-200 rounded-[2rem] p-8 md:p-10 flex flex-col h-full shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="mb-8">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold uppercase tracking-widest text-[#0F172A] mb-4">
                  Business Pro
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl lg:text-6xl font-black tracking-tighter text-[#0F172A]">$300</span>
                  <span className="text-[#64748B] font-bold text-sm">/ pago único</span>
                </div>
                <p className="text-sm text-[#64748B] font-medium italic">
                  Sitio multi-página para escalar su autoridad.
                </p>
              </div>

              <div className="space-y-5 mb-10 flex-1">
                {[
                  'Sitio Web Completo (5 Páginas)',
                  'Hospedaje Cloud de por vida',
                  'Sistema de Citas / Reservas',
                  'Sección de Noticias / Blog',
                  'Correos Corporativos (5)',
                  'Soporte Prioritario VIP'
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm font-semibold text-[#0F172A]">
                    <CheckCircle2 size={18} className="text-[#64748B] shrink-0 mt-0.5" />
                    {text}
                  </div>
                ))}
              </div>

              <a 
                href="https://wa.me/593XXXXXXXXX?text=Hola%20ActivaWeb,%20me%20interesa%20el%20plan%20Business%20Pro%20de%20$300" 
                className="block w-full text-center bg-white border-2 border-[#0F172A] text-[#0F172A] py-4 rounded-xl font-bold text-base hover:bg-[#0F172A] hover:text-white transition-all active:scale-95"
              >
                Elegir Business Pro
              </a>
            </div>

            {/* Plan 2: Profesional ($150) - EN EL CENTRO Y RECOMENDADO */}
            <div className="bg-white border-4 border-[#2563EB] rounded-[2rem] p-8 md:p-10 flex flex-col h-full shadow-[0_30px_60px_rgba(37,99,235,0.15)] relative transform md:-translate-y-4">
              
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-lg whitespace-nowrap">
                Recomendado • Más Vendido
              </div>

              <div className="mb-8 mt-2">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold uppercase tracking-widest text-[#2563EB] mb-4">
                  Profesional
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl lg:text-7xl font-black tracking-tighter text-[#0F172A]">$150</span>
                  <span className="text-[#64748B] font-bold text-sm">/ pago único</span>
                </div>
                <p className="text-sm text-[#64748B] font-medium italic">
                  Todo lo necesario para conseguir pacientes hoy.
                </p>
              </div>

              <div className="space-y-5 mb-10 flex-1">
                {[
                  'Landing Page Alta Conversión',
                  'Hospedaje Cloud de por vida',
                  'Dominio .com (1er año)',
                  'Dominación Google Maps',
                  'Botón WhatsApp Integrado',
                  'Entrega ágil en 48 Horas'
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm font-bold text-[#0F172A]">
                    <CheckCircle2 size={18} className="text-[#2563EB] shrink-0 mt-0.5" />
                    {text}
                  </div>
                ))}
              </div>

              <a 
                href="https://wa.me/593XXXXXXXXX?text=Hola%20ActivaWeb,%20me%20interesa%20el%20plan%20Profesional%20de%20$150" 
                className="block w-full text-center bg-[#2563EB] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#1d4ed8] transition-all shadow-xl shadow-blue-500/25 active:scale-95"
              >
                Activar Profesional
              </a>
            </div>

            {/* Plan 3: Élite Corporativo ($450) - A LA DERECHA (Ancla de precio) */}
            <div className="bg-white border border-gray-200 rounded-[2rem] p-8 md:p-10 flex flex-col h-full shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="mb-8">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold uppercase tracking-widest text-[#0F172A] mb-4">
                  Élite Corporativo
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl lg:text-6xl font-black tracking-tighter text-[#0F172A]">$450</span>
                  <span className="text-[#64748B] font-bold text-sm">/ pago único</span>
                </div>
                <p className="text-sm text-[#64748B] font-medium italic">
                  Solución integral para firmas grandes.
                </p>
              </div>

              <div className="space-y-5 mb-10 flex-1">
                {[
                  'Páginas Ilimitadas (CMS Propio)',
                  'Integración con Pasarela de Pagos',
                  'Soporte Multilingüe (2 idiomas)',
                  'Catálogo de Servicios Avanzado',
                  'Automatización de CRM',
                  'Mantenimiento Gratuito 1 Año'
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm font-semibold text-[#0F172A]">
                    <CheckCircle2 size={18} className="text-[#64748B] shrink-0 mt-0.5" />
                    {text}
                  </div>
                ))}
              </div>

              <a 
                href="https://wa.me/593XXXXXXXXX?text=Hola%20ActivaWeb,%20me%20interesa%20el%20plan%20Elite%20de%20$450" 
                className="block w-full text-center bg-white border-2 border-[#0F172A] text-[#0F172A] py-4 rounded-xl font-bold text-base hover:bg-[#0F172A] hover:text-white transition-all active:scale-95"
              >
                Elegir Élite
              </a>
            </div>

          </div>

          {/* Banner de Cotización Personalizada */}
          <div className="mt-16 bg-[#0F172A] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#2563EB] opacity-20 blur-3xl rounded-full pointer-events-none" />
            
            <div className="flex items-center gap-6 relative z-10 text-center md:text-left">
              <div className="hidden md:flex w-16 h-16 bg-white/10 rounded-2xl items-center justify-center border border-white/5 shrink-0">
                <Building2 size={32} className="text-[#2563EB]" />
              </div>
              <div>
                <h4 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-extrabold text-white mb-2">
                  ¿Necesita un sistema a medida?
                </h4>
                <p className="text-[#94A3B8] font-medium max-w-xl">
                  Portales de pacientes, intranets legales o aplicaciones web complejas. Desarrollamos soluciones escalables de alto nivel.
                </p>
              </div>
            </div>

            <a 
              href="https://wa.me/593XXXXXXXXX?text=Hola%20ActivaWeb,%20necesito%20cotizar%20un%20proyecto%20a%20medida" 
              className="group flex shrink-0 items-center justify-center gap-3 bg-white text-[#0F172A] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all active:scale-95 w-full md:w-auto z-10"
            >
              Cotizar Proyecto
              <ArrowRight size={20} className="text-[#2563EB] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <p className="text-center mt-12 text-[11px] text-[#64748B] font-bold uppercase tracking-widest">
            📍 Especialistas en Abogados y Dentistas en Ecuador
          </p>

        </div>
      </section>
    </>
  );
}