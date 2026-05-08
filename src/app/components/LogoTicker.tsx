import React from 'react';

export default function LogoTicker() {
  const logos = [
    "https://pub-25cde2184a5249da96fa022aae951321.r2.dev/activaweb/1_result.webp",
    "https://pub-25cde2184a5249da96fa022aae951321.r2.dev/activaweb/2_result.webp",
    "https://pub-25cde2184a5249da96fa022aae951321.r2.dev/activaweb/3_result.webp",
    "https://pub-25cde2184a5249da96fa022aae951321.r2.dev/activaweb/4_result.webp",
    "https://pub-25cde2184a5249da96fa022aae951321.r2.dev/activaweb/5_result.webp",
    "https://pub-25cde2184a5249da96fa022aae951321.r2.dev/activaweb/7_result.webp"
  ];

  // TRUCO UX: Duplicamos el array de logos para crear el efecto infinito sin cortes
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white border-b border-gray-100 overflow-hidden antialiased">
        <div className="max-w-full mx-auto px-0">
          
          {/* AUMENTO DE TEXTO AQUI: 
              Passou de text-[10px]/xs para text-sm (mobile), text-base (tablet) e text-lg (desktop). 
              Também mudou para font-extrabold para ter mais presença visual. */}
          <p className="text-center text-sm md:text-base lg:text-lg font-extrabold uppercase tracking-[0.2em] text-[#94A3B8] mb-12 md:mb-16 lg:mb-20 px-6">
            Infraestructura confiable para firmas y consultorios de élite
          </p>
          
          {/* Contenedor del Carrusel - Ancho total ocultando el desbordamiento */}
          <div className="relative w-full overflow-hidden flex">
            
            {/* Sombras de desvanecimiento laterales (Efecto difuminado en los bordes) */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            {/* Pista del Carrusel (Track) */}
            <div className="flex items-center w-max animate-carousel gap-16 md:gap-24 lg:gap-32 pl-16 md:pl-24 lg:pl-32">
              {duplicatedLogos.map((src, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center shrink-0"
                >
                  <img 
                    src={src} 
                    alt={`Firma Asociada ${index + 1}`} 
                    loading="lazy"
                    className="h-20 md:h-28 lg:h-32 w-auto object-contain transition-all duration-500 ease-out
                               grayscale opacity-60 contrast-125 hover:grayscale-0 hover:opacity-100 hover:scale-110
                               mix-blend-multiply cursor-default" 
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
    </section>
  );
}