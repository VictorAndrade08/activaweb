"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Zap } from 'lucide-react';

/**
 * Componente Header ActivaWeb - Edición Refinada 2026
 * Características: Responsive, Desktop-Optimized, Scroll-Aware.
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efecto para detectar el scroll y cambiar el estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solución', href: '#solucion' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Inversión', href: '#precios' },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Plus+Jakarta+Sans:wght@700;800&display=swap');
      `}} />

      <nav 
        className={`fixed top-0 w-full z-[100] transition-all duration-500 font-['Inter'] ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100 py-3 shadow-sm' 
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo ActivaWeb */}
          <div className="flex items-center group cursor-pointer relative z-[110]">
            <img 
              src="https://capitalstudioec.com/wp-content/uploads/activa-web.png" 
              alt="ActivaWeb Logo" 
              className={`transition-all duration-300 object-contain ${
                isScrolled ? 'h-8 md:h-10' : 'h-10 md:h-14'
              } group-hover:scale-105`}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            <div className="flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-[#64748B]">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="hover:text-[#2563EB] transition-colors relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2563EB] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
            
            <a 
              href="https://wa.me/593XXXXXXXXX?text=Hola%20ActivaWeb,%20necesito%20un%20proyecto" 
              className="bg-[#2563EB] text-white px-8 py-3.5 rounded-lg text-[11px] font-black uppercase tracking-widest hover:bg-[#1d4ed8] hover:shadow-2xl hover:shadow-blue-500/30 transition-all active:scale-95 whitespace-nowrap"
            >
              Iniciar Proyecto
            </a>
          </div>

          {/* Mobile UI Controls */}
          <div className="flex lg:hidden items-center gap-3 relative z-[110]">
            <a 
              href="https://wa.me/593XXXXXXXXX"
              className="bg-[#2563EB] text-white p-2.5 rounded-lg shadow-lg shadow-blue-500/20"
              aria-label="WhatsApp"
            >
              <MessageSquare size={18} />
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#0F172A] p-1 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Fullscreen Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-white z-[100] transition-all duration-500 lg:hidden ${
            isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-10'
          }`}
        >
          <div className="flex flex-col h-full justify-center px-10 gap-10 bg-[radial-gradient(at_0%_0%,_rgba(37,99,235,0.05)_0px,transparent_50%)]">
            <div className="space-y-6">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#2563EB]">Navegación</p>
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-5xl font-['Plus_Jakarta_Sans'] font-extrabold tracking-tighter text-[#0F172A] hover:text-[#2563EB] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-10 space-y-6 border-t border-gray-100 pt-10">
              <a 
                href="https://wa.me/593XXXXXXXXX"
                className="flex items-center justify-center gap-3 w-full bg-[#0F172A] text-white py-6 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-transform"
              >
                <Zap size={24} className="fill-[#2563EB] text-[#2563EB]" />
                Comenzar Ahora
              </a>
              <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-[#64748B]">
                <span>Ecuador 2026</span>
                <span>Ambato • Quito</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;