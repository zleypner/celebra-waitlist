'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface SocialProofSectionProps {
  onCTAClick: () => void;
}

export default function SocialProofSection({ onCTAClick }: SocialProofSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const cards = sectionRef.current?.querySelectorAll('.proof-card');
    cards?.forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const events = [
    {
      image: '/assets/events/2-5.4.JPEG',
      alt: 'Evento elegante',
      title: 'Bodas de ensueño',
      description: 'Organizadores que ya están en lista',
    },
    {
      image: '/assets/events/2-5.15.JPG',
      alt: 'Celebración especial',
      title: 'Quinceañeras únicas',
      description: 'Experiencias que no se repiten',
    },
    {
      image: '/assets/events/event3.jpg',
      alt: 'Evento premium',
      title: 'Celebraciones memorables',
      description: 'Cada detalle cuenta',
    },
  ];

  return (
    <section id="para-quien" className="py-24 px-4 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
            Elegido por quienes cuidan cada detalle
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Algunos organizadores ya están en lista. No es nuevo, solo nuevo para vos.
          </p>
        </div>

        <div 
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {events.map((event, index) => (
            <div
              key={index}
              className="proof-card opacity-0 translate-y-5 transition-all duration-700 ease-out group cursor-pointer"
              onClick={onCTAClick}
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                <Image
                  src={event.image}
                  alt={event.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {event.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#F5C842] mb-2">50+</div>
            <div className="text-gray-600">Organizadores en lista</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#F5C842] mb-2">200+</div>
            <div className="text-gray-600">Eventos gestionados</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#F5C842] mb-2">98%</div>
            <div className="text-gray-600">Satisfacción</div>
          </div>
        </div>

        {/* CTA basado en Reciprocidad */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            <strong className="text-gray-900">Únete a ellos.</strong> Acceso anticipado disponible solo para organizadores selectos.
          </p>
          <button
            onClick={onCTAClick}
            className="bg-[#F5C842] hover:bg-[#D4A836] text-gray-900 px-10 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-yellow-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-yellow-500/35"
          >
            Quiero estar entre los primeros
          </button>
        </div>
      </div>
    </section>
  );
}
