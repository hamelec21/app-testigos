import { useState } from 'react';
import { ArrowLeft, AlertTriangle, Send, Image as ImageIcon } from 'lucide-react';

interface ReporteNovedadesProps {
  onBack: () => void;
}

export function ReporteNovedades({ onBack }: ReporteNovedadesProps) {
  const [tipoIncidente, setTipoIncidente] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setTipoIncidente('');
      setDescripcion('');
    }, 3000);
  };

  return (
    <div className="h-full bg-gradient-to-br from-orange-50 to-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-4 shadow-lg">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 active:scale-95 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div>
            <h2 className="font-bold text-white">Reporte de Novedades</h2>
            <p className="text-sm text-orange-100">Reportar irregularidades o incidentes</p>
          </div>
        </div>
      </header>

      {/* Form */}
      <div className="flex-1 overflow-y-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Tipo de Incidente */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tipo de Incidente
            </label>
            <select
              value={tipoIncidente}
              onChange={(e) => setTipoIncidente(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none text-gray-800"
              required
            >
              <option value="">Seleccione un tipo</option>
              <option value="irregularidad">Irregularidad en votación</option>
              <option value="intimidacion">Intimidación</option>
              <option value="compra-votos">Compra de votos</option>
              <option value="violencia">Violencia o amenazas</option>
              <option value="retraso">Retraso en apertura</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          {/* Descripción */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Descripción del Incidente
            </label>
            <textarea
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none text-gray-800 min-h-[120px] resize-none"
              placeholder="Describa detalladamente lo ocurrido..."
              required
            />
          </div>

          {/* Adjuntar Foto */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-400 hover:bg-orange-50 transition-all"
            >
              <ImageIcon className="w-6 h-6 text-gray-500" />
              <span className="text-gray-700 font-medium">Adjuntar Foto (Opcional)</span>
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Enviar Reporte
          </button>

        </form>

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed top-20 left-4 right-4 bg-green-600 text-white px-5 py-4 rounded-xl shadow-2xl animate-bounce">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-bold">¡Reporte enviado exitosamente!</p>
                <p className="text-sm text-green-100">Se notificará al líder responsable</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
