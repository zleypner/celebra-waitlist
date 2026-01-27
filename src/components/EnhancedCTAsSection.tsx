'use client';

interface EnhancedCTAsSectionProps {
  onCTAClick: () => void;
}

export default function EnhancedCTAsSection({ onCTAClick }: EnhancedCTAsSectionProps) {
  const cialdiniCTAs = [
    {
      principle: 'Escasez',
      text: 'Solo quedan 23 espacios disponibles',
      urgency: true,
      icon: '⚡',
    },
    {
      principle: 'Reciprocidad',
      text: 'Acceso gratuito ahora, valor después',
      urgency: false,
      icon: '🎁',
    },
    {
      principle: 'Compromiso',
      text: 'Únete a los organizadores que ya están dentro',
      urgency: false,
      icon: '🤝',
    },
    {
      principle: 'Autoridad',
      text: 'Recomendado por expertos en eventos',
      urgency: false,
      icon: '⭐',
    },
    {
      principle: 'Prueba Social',
      text: '50+ organizadores ya reservaron su acceso',
      urgency: false,
      icon: '👥',
    },
    {
      principle: 'Simpatía',
      text: 'Para quienes valoran cada detalle',
      urgency: false,
      icon: '💎',
    },
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
            No te quedes fuera
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Múltiples formas de acceder. Elegí la que más resuene con vos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cialdiniCTAs.map((cta, index) => (
            <button
              key={index}
              onClick={onCTAClick}
              className={`
                group relative p-6 rounded-2xl border-2 transition-all duration-300 text-left
                ${cta.urgency 
                  ? 'bg-gradient-to-br from-red-50 to-orange-50 border-red-200 hover:border-[#F5C842] hover:shadow-lg' 
                  : 'bg-white border-gray-200 hover:border-[#F5C842] hover:shadow-md'
                }
                hover:-translate-y-1
              `}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{cta.icon}</div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
                    {cta.principle}
                  </div>
                  <div className={`text-base font-semibold ${cta.urgency ? 'text-red-700' : 'text-gray-900'}`}>
                    {cta.text}
                  </div>
                </div>
                <div className="text-gray-400 group-hover:text-[#F5C842] transition-colors">
                  →
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Main CTA destacado */}
        <div className="bg-gradient-to-r from-[#F5C842] to-[#D4A836] rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            El tiempo se agota. Actuá ahora.
          </h3>
          <p className="text-gray-800 mb-8 text-lg max-w-2xl mx-auto">
            Cada día que pasa, más organizadores se suman. El acceso anticipado es limitado y exclusivo.
          </p>
          <button
            onClick={onCTAClick}
            className="bg-white hover:bg-gray-100 text-gray-900 px-12 py-5 text-lg font-bold rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Reservar acceso anticipado ahora
          </button>
          <p className="mt-4 text-sm text-gray-700">
            Sin compromiso · Cancelación gratuita · Prioridad garantizada
          </p>
        </div>
      </div>
    </section>
  );
}
