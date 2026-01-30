import { useState } from 'react';
import { ArrowLeft, CheckCircle, Upload, FileCheck } from 'lucide-react';

interface ReporteAlertasProcesoProps {
  onBack: () => void;
}

interface CheckItem {
  id: string;
  label: string;
  value: boolean | null;
  requiresEvidence?: boolean;
  file?: File | null;
}

export function ReporteAlertasProceso({ onBack }: ReporteAlertasProcesoProps) {
  const [showSuccess, setShowSuccess] = useState(false);

  // Proceso de preconteo
  const [procesoItems, setProcesoItems] = useState<CheckItem[]>([
    { id: 'e11', label: 'El E11 fue correctamente diligenciado y se anularon los espacios no usados a las 4 pm', value: null },
    { id: 'votos', label: 'Los votos fueron calificados correctamente', value: null },
    { id: 'e14', label: 'El acta E14 fue diligenciada correctamente', value: null },
  ]);

  // Reclamaciones
  const [reclamacionItems, setReclamacionItems] = useState<CheckItem[]>([
    { id: 'sufragantes', label: 'El número de sufragantes de una mesa exceda el de ciudadanos que podían votar en ella', value: null, requiresEvidence: true, file: null },
    { id: 'error_nombre', label: 'En el acta de escrutinio se incurrió en el error al anotar el nombre o apellidos de uno o más candidatos', value: null, requiresEvidence: true, file: null },
    { id: 'error_aritmetico', label: 'Se incurrió en error aritmético al sumar o contabilizar los votos', value: null, requiresEvidence: true, file: null },
    { id: 'firmas', label: 'Las actas están firmados por menos de tres (3) jurados', value: null, requiresEvidence: true, file: null },
    { id: 'transmision', label: 'Los resultados de las votaciones no están siendo transmitidos correctamente', value: null, requiresEvidence: true, file: null },
    { id: 'recuento', label: 'Solicité recuento de votos y quedó constancia en el acta del recuento (E-13)', value: null, requiresEvidence: true, file: null },
  ]);

  // Otras
  const [otrasItems, setOtrasItems] = useState<CheckItem[]>([
    { id: 'otras_irreg', label: 'Otras irregularidades observadas en la mesa', value: null, requiresEvidence: true, file: null },
    { id: 'sobre_claveros', label: 'Verifiqué que las reclamaciones fueron introducidas en el sobre de claveros', value: null, requiresEvidence: true, file: null },
    { id: 'mesa_justicia', label: 'Informé a la mesa de justicia irregularidades presentadas durante el día de elecciones', value: null, requiresEvidence: true, file: null },
    { id: 'transporte', label: 'Acompañé el transporte del sobre de claveros al lugar de los escrutinios', value: null, requiresEvidence: true, file: null },
  ]);

  const updateItem = (items: CheckItem[], setItems: React.Dispatch<React.SetStateAction<CheckItem[]>>, id: string, value: boolean) => {
    setItems(items.map(item => item.id === id ? { ...item, value } : item));
  };

  const handleFileUpload = (items: CheckItem[], setItems: React.Dispatch<React.SetStateAction<CheckItem[]>>, id: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setItems(items.map(item => item.id === id ? { ...item, file } : item));
  };

  const handleSubmit = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onBack();
    }, 2000);
  };

  const renderCheckboxGroup = (
    items: CheckItem[], 
    setItems: React.Dispatch<React.SetStateAction<CheckItem[]>>, 
    title: string
  ) => (
    <div className="bg-white rounded-xl shadow-md p-4 mb-4">
      <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wide border-b pb-2">
        {title}
      </h3>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="border-l-4 border-yellow-500 pl-3 py-2">
            <p className="text-sm text-gray-700 mb-2">{item.label}</p>
            
            <div className="flex items-center gap-3 mb-2">
              <button
                onClick={() => updateItem(items, setItems, item.id, true)}
                className={`flex-1 py-2 px-4 rounded-lg font-medium text-sm transition-all ${
                  item.value === true
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Sí
              </button>
              <button
                onClick={() => updateItem(items, setItems, item.id, false)}
                className={`flex-1 py-2 px-4 rounded-lg font-medium text-sm transition-all ${
                  item.value === false
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                No
              </button>
            </div>

            {item.requiresEvidence && item.value === true && (
              <div className="mt-2">
                <label className="flex items-center gap-2 bg-blue-50 border-2 border-dashed border-blue-300 rounded-lg p-3 cursor-pointer hover:bg-blue-100 transition-all">
                  <input
                    type="file"
                    accept="image/*,video/*"
                    onChange={(e) => handleFileUpload(items, setItems, item.id, e)}
                    className="hidden"
                  />
                  <Upload className="w-4 h-4 text-blue-600" />
                  <span className="text-xs text-blue-700 font-medium">
                    {item.file ? item.file.name : 'Cargar foto o video corto'}
                  </span>
                </label>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="h-full bg-gradient-to-br from-yellow-50 to-orange-50 relative">
      {/* Header */}
      <header className="bg-gradient-to-r from-yellow-600 to-yellow-700 px-5 py-4 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h2 className="font-bold text-white text-lg">Reporte Proceso de Preconteo</h2>
            <p className="text-xs text-yellow-100">Verificaciones y reclamaciones</p>
          </div>
          <FileCheck className="w-6 h-6 text-white" />
        </div>
      </header>

      {/* Content */}
      <div className="p-4 pb-24 overflow-y-auto">
        {renderCheckboxGroup(procesoItems, setProcesoItems, 'Durante el Proceso de Preconteo de Mesa')}
        {renderCheckboxGroup(reclamacionItems, setReclamacionItems, 'Reclamaciones')}
        {renderCheckboxGroup(otrasItems, setOtrasItems, 'Otras Verificaciones')}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <CheckCircle className="w-5 h-5" />
          Enviar Reporte
        </button>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center animate-in zoom-in duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-2">¡Reporte Enviado!</h3>
            <p className="text-gray-600 text-sm">
              El reporte ha sido enviado exitosamente al sistema central
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
