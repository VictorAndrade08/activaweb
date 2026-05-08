import React from 'react';
import { MessageSquare, Send, Zap } from 'lucide-react';

export default function Process() {
  return (
    <section id="proceso" className="py-20 md:py-32 px-6 sm:px-8 bg-white relative overflow-hidden antialiased">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#0F172A] mb-5 md:mb-6 leading-tight md:leading-none tracking-tight md:tracking-tighter">
              Un proceso <span className="text-[#2563EB]">sin fricción.</span>
            </h2>
            <p className="text-base md:text-2xl text-[#64748B] max-w-2xl mx-auto font-semibold">
              Obtenga su página web profesional lista para captar pacientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            
            {/* PASO 1 */}
            <div className="bg-[#F8FAFC] border border-gray-100 rounded-[2rem] p-8 md:p-12 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-gray-100 text-[#2563EB]">
                <MessageSquare size={36} />
              </div>
              <h3 className="font-display text-3xl font-extrabold text-[#0F172A] mb-4">1. Escribe</h3>
              <p className="text-lg text-[#64748B] font-medium leading-relaxed">
                Haga clic en cualquier botón de esta página para iniciar un chat directo por WhatsApp con nuestro equipo.
              </p>
            </div>

            {/* PASO 2 */}
            <div className="bg-[#F8FAFC] border border-gray-100 rounded-[2rem] p-8 md:p-12 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-gray-100 text-[#2563EB]">
                <Send size={36} />
              </div>
              <h3 className="font-display text-3xl font-extrabold text-[#0F172A] mb-4">2. Envía la Información</h3>
              <p className="text-lg text-[#64748B] font-medium leading-relaxed">
                Compártanos su logotipo, fotos de su consultorio y los servicios o especialidades que ofrece.
              </p>
            </div>

            {/* PASO 3 */}
            <div className="bg-white border-4 border-[#2563EB] rounded-[2rem] p-8 md:p-12 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 shadow-[0_30px_60px_rgba(37,99,235,0.15)]">
              <div className="w-20 h-20 bg-[#2563EB] rounded-2xl flex items-center justify-center mb-8 shadow-md text-white">
                <Zap size={36} className="fill-current" />
              </div>
              <h3 className="font-display text-3xl font-extrabold text-[#2563EB] mb-4">3. Paga y Revisa</h3>
              <p className="text-lg text-[#0F172A] font-bold leading-relaxed">
                Realice su pago único y reciba su sitio web 100% optimizado y publicado en menos de 48 horas.
              </p>
            </div>

          </div>
        </div>
    </section>
  );
}