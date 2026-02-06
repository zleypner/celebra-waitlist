'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ScarcitySectionProps {
  onCTAClick: () => void;
}

export default function ScarcitySection({ onCTAClick }: ScarcitySectionProps) {
  const [spotsLeft, setSpotsLeft] = useState(23);
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Simular spots restantes (decrementar cada 30 segundos)
    const spotsInterval = setInterval(() => {
      setSpotsLeft((prev) => {
        if (prev > 15) return prev - 1;
        return prev;
      });
    }, 30000);

    // Simular countdown (decrementar cada segundo)
    const timeInterval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => {
      clearInterval(spotsInterval);
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,200,66,0.1),transparent_70%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="order-2 md:order-1">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/events/2-5.66.JPEG"
                alt="Evento exclusivo"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Urgency Badge */}
              <div className="absolute top-6 right-6 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                ⚡ Acceso Limitado
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Los cupos se están agotando
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Solo quedan <strong className="text-[#F5C842]">{spotsLeft} espacios</strong> disponibles en la lista de acceso anticipado.
            </p>

            {/* Spots Counter */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
              <div className="text-sm text-white/70 mb-2">Espacios restantes</div>
              <div className="text-5xl font-bold text-[#F5C842] mb-4">{spotsLeft}</div>
              
              {/* Progress Bar */}
              <div className="w-full bg-white/10 rounded-full h-3 mb-4">
                <div 
                  className="bg-[#F5C842] h-3 rounded-full transition-all duration-500"
                  style={{ width: `${(spotsLeft / 50) * 100}%` }}
                />
              </div>
              
              <div className="text-xs text-white/60">
                {50 - spotsLeft} de 50 organizadores ya están dentro
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-3 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-[#F5C842]">{timeLeft.days}</div>
                <div className="text-xs text-white/70 mt-1">Días</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-[#F5C842]">{timeLeft.hours}</div>
                <div className="text-xs text-white/70 mt-1">Horas</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-[#F5C842]">{timeLeft.minutes}</div>
                <div className="text-xs text-white/70 mt-1">Minutos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-[#F5C842]">{timeLeft.seconds}</div>
                <div className="text-xs text-white/70 mt-1">Segundos</div>
              </div>
            </div>

            <p className="text-white/80 mb-8 text-sm md:text-base">
              El acceso anticipado cierra en <strong>{timeLeft.days} días</strong>. Después, tendrás que esperar al lanzamiento público.
            </p>

            {/* Multiple CTAs basados en FOMO */}
            <div className="space-y-4">
              <button
                onClick={onCTAClick}
                className="w-full bg-[#F5C842] hover:bg-[#D4A836] text-gray-900 px-8 py-5 text-lg font-bold rounded-xl shadow-lg shadow-yellow-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-500/40"
              >
                ⚡ Reservar mi espacio ahora
              </button>
              
              <button
                onClick={onCTAClick}
                className="w-full bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-[#F5C842] px-8 py-4 text-base font-semibold rounded-xl transition-all duration-300"
              >
                No quiero quedarme fuera
              </button>
            </div>

            <p className="mt-6 text-sm text-white/60">
              🔒 Sin compromiso · Cancelación en cualquier momento
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
