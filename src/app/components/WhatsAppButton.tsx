import React from 'react';
import { MessageSquare } from 'lucide-react';

/**
 * Componente WhatsAppButton
 * Botón flotante optimizado con el número específico del cliente.
 */
const WhatsAppButton = () => {
  // Número configurado: +593995649140
  const phoneNumber = "593995649140";
  const message = "Hola, me interesa obtener más información sobre los planes de ActivaWeb.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[999] group">
      {/* Tooltip informativo (visible al pasar el mouse) */}
      <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-[#0F172A] text-white text-[10px] font-bold uppercase tracking-widest py-2 px-4 rounded-lg shadow-xl whitespace-nowrap border border-white/10">
          ¿Hablamos por WhatsApp?
          {/* Triangulito del tooltip */}
          <div className="absolute top-full right-5 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#0F172A]"></div>
        </div>
      </div>

      {/* Botón Principal */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-2xl shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] hover:-translate-y-1.5 active:scale-95 transition-all duration-300 group"
        aria-label="Contactar por WhatsApp"
      >
        {/* Icono con animación de pulso sutil */}
        <div className="relative">
          <MessageSquare className="w-7 h-7 md:w-8 md:h-8 fill-current" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;