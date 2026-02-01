'use client';

interface ExclusivitySectionProps {
  onCTAClick: () => void;
}

export default function ExclusivitySection({ onCTAClick }: ExclusivitySectionProps) {
  return (
    <section id="acceso-anticipado" className="py-24 px-4 bg-black text-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
          No llegaste tarde.
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight text-[#F5C842]">
          Llegaste justo a tiempo.
        </h2>

        <div className="mb-12 space-y-4">
          <p className="text-lg md:text-xl leading-relaxed text-white/90">
            Mientras algunos organizadores ya están entrando,<br />
            la mayoría todavía no se dio cuenta.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-white/70 italic">
            Estás viendo esto antes que otros.<br />
            Aprovechalo.
          </p>
        </div>
        
        <button
          onClick={onCTAClick}
          className="bg-transparent hover:bg-[#F5C842] text-[#F5C842] hover:text-gray-900 border-2 border-[#F5C842] px-10 py-4 text-base font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 mt-6"
        >
          Reservar acceso anticipado
        </button>
      </div>
    </section>
  );
}
