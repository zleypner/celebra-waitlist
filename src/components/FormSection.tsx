'use client';

import { useState, FormEvent } from 'react';

interface FormSectionProps {
  onSuccess: () => void;
}

export default function FormSection({ onSuccess }: FormSectionProps) {
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!email || !whatsapp) {
      setError('Por favor completá todos los campos.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Por favor ingresá un email válido.');
      return;
    }

    if (whatsapp.length < 8) {
      setError('Por favor ingresá un número de WhatsApp válido con código de país.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          whatsapp,
          timestamp: new Date().toISOString(),
          source: 'waitlist-premium',
        }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      // Reset form
      setEmail('');
      setWhatsapp('');
      onSuccess();
    } catch (err) {
      setError('Hubo un error al enviar tu información. Por favor intentá de nuevo.');
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 leading-tight">
            Este acceso anticipado está pensado para empresas que cuidan cada detalle de la experiencia de sus eventos.
          </h2>
          <p className="text-gray-600 text-base">
            Elegido por quienes cuidan cada detalle. No es nuevo, solo nuevo para vos.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          <div className="mb-8">
            <label htmlFor="email" className="block font-medium mb-2 text-gray-900 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="tu@empresa.com"
              className="w-full px-4 py-4 text-base border-2 border-gray-200 rounded-xl font-sans transition-all focus:outline-none focus:border-[#F5C842] focus:ring-4 focus:ring-yellow-500/10 bg-white text-gray-900"
              disabled={isSubmitting}
            />
          </div>

          <div className="mb-8">
            <label htmlFor="whatsapp" className="block font-medium mb-2 text-gray-900 text-sm">
              WhatsApp
            </label>
            <input
              type="tel"
              id="whatsapp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              required
              placeholder="+506 8888 8888"
              className="w-full px-4 py-4 text-base border-2 border-gray-200 rounded-xl font-sans transition-all focus:outline-none focus:border-[#F5C842] focus:ring-4 focus:ring-yellow-500/10 bg-white text-gray-900"
              disabled={isSubmitting}
            />
            <small className="block mt-2 text-sm text-gray-500">
              Incluí el código de país
            </small>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#F5C842] hover:bg-[#D4A836] text-gray-900 py-5 text-lg font-semibold rounded-xl shadow-lg shadow-yellow-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-yellow-500/35 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 mt-4"
          >
            {isSubmitting ? 'Enviando...' : 'Ser de los primeros en usarlo'}
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm mb-2 pl-4">✓ No necesitás cambiar tu forma de trabajar</p>
          <p className="text-gray-600 text-sm mb-2 pl-4">✓ Funciona incluso si manejás pocos eventos</p>
          <p className="text-gray-600 text-sm pl-4">✓ No es solo para grandes productoras</p>
        </div>
      </div>
    </section>
  );
}
