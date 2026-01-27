'use client';

import Image from 'next/image';

interface HeroProps {
  onCTAClick: () => void;
}

export default function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white py-16 px-4 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/assets/events/event5.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Background gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/60 pointer-events-none" />
      
      {/* Additional subtle gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(245,200,66,0.08),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-12">
            <Image
              src="/assets/celebralogo.png"
              alt="Celebra"
              width={200}
              height={80}
              className="mx-auto"
              priority
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900 tracking-tight">
            Acceso anticipado para quienes crean experiencias inolvidables
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Antes del lanzamiento público, abrimos un cupo limitado para organizadores de eventos.
            Estamos habilitando acceso anticipado a una plataforma premium diseñada para elevar la experiencia de eventos elegantes y celebraciones únicas.
          </p>
          
          <div className="mt-12">
            <button
              onClick={onCTAClick}
              className="bg-[#F5C842] hover:bg-[#D4A836] text-gray-900 px-12 py-5 text-lg font-semibold rounded-xl shadow-lg shadow-yellow-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-yellow-500/35 active:translate-y-0"
            >
              Acceder antes que el público
            </button>
            <p className="mt-4 text-sm text-gray-500 font-normal">
              Acceso limitado · Sin compromiso · Prioridad por orden de registro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
