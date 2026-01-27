'use client';

interface SuccessMessageProps {
  show: boolean;
  onClose: () => void;
}

export default function SuccessMessage({ show, onClose }: SuccessMessageProps) {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-2xl max-w-md text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">
          Gracias. Estás dentro de la lista de acceso anticipado.
        </h3>
        <p className="text-gray-600 text-base">
          Te contactaremos antes del lanzamiento público.
        </p>
      </div>
    </div>
  );
}
