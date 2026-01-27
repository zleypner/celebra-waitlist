'use client';

interface CTAsSectionProps {
  onCTAClick: () => void;
}

export default function CTAsSection({ onCTAClick }: CTAsSectionProps) {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button
            onClick={onCTAClick}
            className="bg-transparent hover:border-[#F5C842] hover:text-[#F5C842] text-gray-900 border-2 border-gray-200 px-6 py-4 text-base font-medium rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            Quiero ser parte del lanzamiento
          </button>
          
          <button
            onClick={onCTAClick}
            className="bg-transparent hover:border-[#F5C842] hover:text-[#F5C842] text-gray-900 border-2 border-gray-200 px-6 py-4 text-base font-medium rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            Acceso exclusivo para organizadores
          </button>
          
          <button
            onClick={onCTAClick}
            className="bg-transparent hover:border-[#F5C842] hover:text-[#F5C842] text-gray-900 border-2 border-gray-200 px-6 py-4 text-base font-medium rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            Crear recuerdos antes que nadie
          </button>
        </div>
      </div>
    </section>
  );
}
