'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function ValueSection() {
  const cardsRef = useRef<HTMLDivElement>(null);

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

    const cards = cardsRef.current?.querySelectorAll('.value-card');
    cards?.forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      image: '/assets/events/1.1.JPEG',
      title: 'Menos caos, más control',
      description: 'Diseñado para eventos que no se repiten. Cada celebración es única y merece ser recordada para siempre.',
    },
    {
      image: '/assets/events/1.3.JPEG',
      title: 'Sin apps, sin fricción',
      description: 'Tus invitados son los fotógrafos. Todos los recuerdos, en un solo lugar. Sin complicaciones.',
    },
    {
      image: '/assets/events/1.2.JPEG',
      title: 'Experiencia sin improvisaciones',
      description: 'Sistema probado. Proceso claro. Pensado para quienes organizan eventos en serio.',
    },
  ];

  return (
    <section id="como-funciona" className="py-24 px-4 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
        >
          {values.map((value, index) => (
            <div
              key={index}
              className="value-card opacity-0 translate-y-5 transition-all duration-700 ease-out bg-gray-50 rounded-2xl border border-gray-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#F5C842] overflow-hidden group h-full flex flex-col"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden flex-shrink-0">
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
