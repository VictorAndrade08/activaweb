import React from 'react';
import { MapPin, Zap, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@700;800&display=swap');
      `}} />

      <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6 sm:px-8 font-['Inter'] antialiased">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
            
            <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
              <a href="#" className="inline-block mb-6 group">
                <img 
                  src="https://capitalstudioec.com/wp-content/uploads/activa-web.png" 
                  alt="ActivaWeb Logo" 
                  className="h-12 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </a>
              <p className="text-[#64748B] text-base leading-relaxed font-semibold max-w-[340px] mb-8">
                Desarrollamos infraestructura web de carga instantánea enfocada en la captación de clientes para profesionales exigentes.
              </p>
              <div className="flex items-center gap-4 bg-[#F8FAFC] px-5 py-3 rounded-xl border border-gray-100">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E0E7FF] text-[#2563EB]">
                  <Zap size={20} className="fill-current" />
                </div>
                <div className="flex flex-col text-left">
                  {/* INYECCIÓN DEL NÚMERO: Contacto corporativo claro */}
                  <span className="text-xs font-black uppercase tracking-widest text-[#0F172A]">Contacto Directo</span>
                  <span className="text-xs font-bold text-[#64748B]">WhatsApp: +593 99 471 5278</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 flex flex-col items-center md:items-start">
              <h4 className="font-['Plus_Jakarta_Sans'] text-sm font-extrabold uppercase tracking-[0.2em] text-[#0F172A] mb-6">
                Cobertura
              </h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                {['Ambato', 'Quito', 'Guayaquil', 'Cuenca'].map((city) => (
                  <div key={city} className="flex items-center gap-3 group cursor-default">
                    <MapPin size={18} className="text-[#CBD5E1] group-hover:text-[#2563EB] transition-colors" />
                    <span className="text-base font-bold text-[#64748B] group-hover:text-[#0F172A] transition-colors">
                      {city}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col items-center md:items-end text-center md:text-right">
              <h4 className="font-['Plus_Jakarta_Sans'] text-sm font-extrabold uppercase tracking-[0.2em] text-[#0F172A] mb-6">
                Infraestructura
              </h4>
              <div className="flex flex-col gap-4 w-full max-w-[240px]">
                
                <div className="flex items-center gap-4 bg-white border border-gray-200 px-5 py-4 rounded-xl shadow-sm hover:border-[#22C55E] hover:shadow-md transition-all">
                  <ShieldCheck size={22} className="text-[#22C55E]" />
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-bold text-[#0F172A] leading-none mb-1.5">Seguridad SSL</span>
                    <span className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider">Certificado Activo</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white border border-gray-200 px-5 py-4 rounded-xl shadow-sm hover:border-black hover:shadow-md transition-all">
                  <div className="flex items-center justify-center w-6 h-6 bg-black rounded-full text-white">
                    <span className="text-xs font-bold">N</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-bold text-[#0F172A] leading-none mb-1.5">Next.js Framework</span>
                    <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-wider">Rendimiento Edge</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest text-center md:text-left">
              © {currentYear} ActivaWeb. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6 text-xs font-bold text-[#94A3B8] uppercase tracking-widest">
              <a href="#" className="hover:text-[#2563EB] transition-colors">Privacidad</a>
              <a href="#" className="hover:text-[#2563EB] transition-colors">Términos</a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}