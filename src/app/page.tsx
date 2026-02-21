"use client";
import React from "react";

// Importación exclusiva de las secciones de contenido
import Hero from "./components/Hero";
import Bento from "./components/Bento";
import Pricing from "./components/Pricing";
import WhatsAppButton from "./components/WhatsAppButton";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white antialiased">
      
      {/* Fondo Ambiental Dinámico (Degradado sutil corporativo) */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(at_0%_0%,_rgba(37,99,235,0.03)_0px,transparent_50%),radial-gradient(at_100%_100%,_rgba(15,23,42,0.03)_0px,transparent_50%)]" />

      <main>
        <Hero />
        <Bento />
        <Pricing />
        <WhatsAppButton/>
      </main>
      
    </div>
  );
}