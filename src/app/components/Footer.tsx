import React from 'react';

export default function Footer() {
  return (
    <>
      {/* Importación de fuente para asegurar que mantenga el estilo si se prueba aislado */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
      `}} />

      <footer className="py-16 md:py-20 lg:py-24 bg-[#F8FAFC] border-t border-gray-100 px-6 sm:px-8 font-['Inter'] antialiased">
        <div className="max-w-7xl mx-auto">
          
          {/* Grid de 3 columnas para Desktop, 1 columna para Mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            
            {/* Columna Izquierda: Logo y Subtítulo */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <a href="#" className="inline-block mb-5 group">
                <img 
                  src="https://capitalstudioec.com/wp-content/uploads/activa-web.png" 
                  alt="ActivaWeb Logo" 
                  className="h-10 md:h-12 w-auto opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </a>
              <p className="text-[10px] md:text-[11px] text-[#64748B] font-bold uppercase tracking-[0.15em] lg:tracking-[0.2em]">
                Socio Tecnológico Senior • Ecuador 2026
              </p>
            </div>
            
            {/* Columna Central: Navegación de Ciudades */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#64748B]">
              <span className="hover:text-[#2563EB] cursor-pointer transition-colors">Ambato</span>
              <div className="w-1 h-1 bg-gray-300 rounded-full" />
              <span className="hover:text-[#2563EB] cursor-pointer transition-colors">Quito</span>
              <div className="w-1 h-1 bg-gray-300 rounded-full" />
              <span className="hover:text-[#2563EB] cursor-pointer transition-colors">Guayaquil</span>
              <div className="w-1 h-1 bg-gray-300 rounded-full" />
              <span className="hover:text-[#2563EB] cursor-pointer transition-colors">Cuenca</span>
            </div>

            {/* Columna Derecha: Información Legal y Técnica */}
            <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
              <p className="text-[10px] md:text-[11px] text-[#64748B] leading-relaxed uppercase font-bold tracking-tight mb-3 lg:mb-4 max-w-[320px]">
                Ingeniería web de alta velocidad para profesionales que exigen rentabilidad.
              </p>
              <div className="flex flex-col items-center lg:items-end gap-1.5">
                <span className="text-[8px] md:text-[9px] text-[#94A3B8] uppercase font-bold tracking-widest">
                  © Todos los derechos reservados.
                </span>
                <span className="text-[9px] md:text-[10px] text-[#2563EB] font-black uppercase tracking-widest">
                  Next.js Framework 16
                </span>
              </div>
            </div>

          </div>

        </div>
      </footer>
    </>
  );
}