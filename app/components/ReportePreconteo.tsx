import { useState } from 'react';
import { ArrowLeft, Camera, Save } from 'lucide-react';

interface ReportePreconteoProps {
  onBack: () => void;
}

export function ReportePreconteo({ onBack }: ReportePreconteoProps) {
  const [votos, setVotos] = useState({
    partido1: '',
    partido2: '',
    partido3: '',
    nulos: '',
    blancos: ''
  });
  const [fotoCapturada, setFotoCapturada] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onBack();
    }, 2500);
  };

  const totalVotos = Object.values(votos).reduce((acc, val) => acc + (parseInt(val) || 0), 0);

  return (
    <div className="h-full bg-gradient-to-br from-blue-50 to-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-4 shadow-lg">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 active:scale-95 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div>
            <h2 className="font-bold text-white">Reporte de Preconteo</h2>
            <p className="text-sm text-blue-100">Capturar E-14 y digitar resultados</p>
          </div>
        </div>
      </header>

      {/* Form */}
      <div className="flex-1 overflow-y-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Captura de Foto E-14 */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Fotografía del Acta E-14
            </label>
            <button
              type="button"
              onClick={() => setFotoCapturada(true)}
              className={`w-full flex items-center justify-center gap-3 py-6 border-2 rounded-lg transition-all ${
                fotoCapturada
                  ? 'border-green-500 bg-green-50 text-green-700'
                  : 'border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50'
              }`}
            >
              <Camera className={`w-8 h-8 ${fotoCapturada ? 'text-green-600' : 'text-gray-500'}`} />
              <span className="font-medium">
                {fotoCapturada ? '✓ Foto capturada' : 'Capturar Foto del Acta'}
              </span>
            </button>
          </div>

          {/* Digitación de Resultados */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Digitación de Resultados</h3>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                <input
                  type="number"
                  min="0"
                  value={votos.partido1}
                  onChange={(e) => setVotos({...votos, partido1: e.target.value})}
                  placeholder="Partido A"
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-gray-800"
                  required
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                <input
                  type="number"
                  min="0"
                  value={votos.partido2}
                  onChange={(e) => setVotos({...votos, partido2: e.target.value})}
                  placeholder="Partido B"
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-gray-800"
                  required
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                <input
                  type="number"
                  min="0"
                  value={votos.partido3}
                  onChange={(e) => setVotos({...votos, partido3: e.target.value})}
                  placeholder="Partido C"
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-gray-800"
                  required
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-gray-400"></div>
                <input
                  type="number"
                  min="0"
                  value={votos.nulos}
                  onChange={(e) => setVotos({...votos, nulos: e.target.value})}
                  placeholder="Votos Nulos"
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-gray-800"
                  required
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-white border-2 border-gray-400"></div>
                <input
                  type="number"
                  min="0"
                  value={votos.blancos}
                  onChange={(e) => setVotos({...votos, blancos: e.target.value})}
                  placeholder="Votos en Blanco"
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-gray-800"
                  required
                />
              </div>
            </div>

            {/* Total */}
            <div className="mt-4 pt-4 border-t-2 border-gray-200">
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-700">Total de Votos E11:</span>
                <span className="text-2xl font-bold text-blue-600">{totalVotos}</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!fotoCapturada}
            className={`w-full py-4 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 transition-all ${
              fotoCapturada
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-xl active:scale-[0.98]'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <Save className="w-5 h-5" />
            Guardar Preconteo
          </button>

        </form>

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed top-20 left-4 right-4 bg-green-600 text-white px-5 py-4 rounded-xl shadow-2xl animate-bounce">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Save className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-bold">¡Preconteo guardado exitosamente!</p>
                <p className="text-sm text-green-100">Datos sincronizados</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
