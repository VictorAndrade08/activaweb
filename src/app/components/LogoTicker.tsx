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
    <section className="py-12 md:py-20 lg:py-28 bg-white border-b border-gray-100 overflow-hidden antialiased">
        <div className="max-w-full mx-auto px-0">

          <p className="text-center text-xs md:text-sm lg:text-base font-extrabold uppercase tracking-[0.2em] text-[#94A3B8] mb-10 md:mb-14 lg:mb-20 px-6">
            Infraestructura confiable para firmas y consultorios de élite
          </p>

          <div className="relative w-full overflow-hidden flex">

            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 lg:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 lg:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex items-center w-max animate-carousel gap-10 md:gap-20 lg:gap-32 pl-10 md:pl-20 lg:pl-32">
              {duplicatedLogos.map((src, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center shrink-0"
                >
                  <img
                    src={src}
                    alt={`Firma Asociada ${index + 1}`}
                    loading="lazy"
                    className="h-12 md:h-20 lg:h-28 w-auto object-contain transition-all duration-500 ease-out
                               grayscale opacity-70 contrast-125 hover:grayscale-0 hover:opacity-100 hover:scale-110
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