"use client";
import React from 'react';
import { MessageSquare, Clock } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "593994715278";
  const message = "Hola Víctor, me interesa obtener más información sobre los planes de ActivaWeb.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const trackFloatingClick = () => {
    console.log(`[Tracking Fantasma] Clic en Botón Flotante WhatsApp`);
  };

  return (
    <>
      <div className="hidden md:block fixed bottom-6 right-6 z-[999] group">
        <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-[#0F172A] text-white text-[10px] font-bold uppercase tracking-widest py-2 px-4 rounded-lg shadow-xl whitespace-nowrap border border-white/10">
            ¿Hablamos por WhatsApp?
            <div className="absolute top-full right-5 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#0F172A]"></div>
          </div>
        </div>

        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackFloatingClick}
          className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-2xl shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] hover:-translate-y-1.5 active:scale-95 transition-all duration-300 group"
          aria-label="Contactar por WhatsApp"
        >
          <div className="relative">
            <MessageSquare className="w-8 h-8 fill-current" aria-hidden="true" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
          </div>
        </a>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 w-full z-[999] bg-white border-t border-gray-200 p-4 pb-6 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackFloatingClick}
          className="flex flex-col items-center justify-center w-full bg-[#25D366] text-white py-3.5 rounded-xl font-extrabold text-lg shadow-lg active:scale-95 transition-transform"
        >
          <div className="flex items-center gap-2">
            <MessageSquare className="w-6 h-6 fill-current" aria-hidden="true" />
            <span>Hablar con un Experto Hoy</span>
          </div>
          <div className="flex items-center gap-1.5 mt-1 opacity-90">
            <Clock size={12} aria-hidden="true" />
            <span className="text-[10px] uppercase tracking-widest">+593 99 471 5278 • Respuesta en 5 minutos</span>
          </div>
        </a>
      </div>
      
      <div className="md:hidden h-28 w-full bg-transparent" aria-hidden="true"></div>
    </>
  );
};

export default WhatsAppButton;