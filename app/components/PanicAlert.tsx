import { useState } from 'react';
import { X, AlertTriangle, Scale, Shield, Heart, MapPin, CheckCircle2 } from 'lucide-react';

interface PanicAlertProps {
  onClose: () => void;
}

type AlertType = 'delito' | 'violencia' | 'medica' | null;

export function PanicAlert({ onClose }: PanicAlertProps) {
  const [selectedAlert, setSelectedAlert] = useState<AlertType>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleAlertSelection = (type: AlertType) => {
    setSelectedAlert(type);
    setShowConfirmation(true);
    
    // Simulate sending notification
    setTimeout(() => {
      setShowConfirmation(false);
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 3000);
  };

  const getAlertInfo = (type: AlertType) => {
    switch (type) {
      case 'delito':
        return {
          title: 'Delito Electoral',
          recipients: [
            'Tribunal de Garantías',
            'Sistema Central',
            'Coordinador de Zona'
          ],
          color: 'orange'
        };
      case 'violencia':
        return {
          title: 'Violencia',
          recipients: [
            'Policía Nacional',
            'Sistema Central',
            'Coordinador de Zona'
          ],
          color: 'red'
        };
      case 'medica':
        return {
          title: 'Emergencia Médica',
          recipients: [
            'Coordinador de Zona / Jefe Directo',
            'Sistema Central',
            'Coordinador de Zona'
          ],
          color: 'blue'
        };
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden animate-in zoom-in duration-300">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 px-5 py-4 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <AlertTriangle className="w-7 h-7 text-red-600 animate-pulse" />
            </div>
            <div>
              <h2 className="font-bold text-white text-xl">Alerta de Pánico</h2>
              <p className="text-sm text-red-100">Seleccione tipo de emergencia</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          
          {!showConfirmation ? (
            <div className="space-y-3">
              <p className="text-sm text-gray-700 font-medium mb-4">
                ¿Qué tipo de emergencia desea reportar?
              </p>

              {/* Opción 1: Delito Electoral */}
              <button
                onClick={() => handleAlertSelection('delito')}
                className="w-full bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 active:scale-[0.98] text-white p-4 rounded-xl transition-all shadow-lg hover:shadow-xl text-left"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <Scale className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg mb-1">Delito Electoral</h3>
                    <p className="text-xs text-orange-100">
                      Notifica a: Tribunal de Garantías
                    </p>
                  </div>
                </div>
              </button>

              {/* Opción 2: Violencia */}
              <button
                onClick={() => handleAlertSelection('violencia')}
                className="w-full bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 active:scale-[0.98] text-white p-4 rounded-xl transition-all shadow-lg hover:shadow-xl text-left"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg mb-1">Violencia</h3>
                    <p className="text-xs text-red-100">
                      Notifica a: Policía Nacional
                    </p>
                  </div>
                </div>
              </button>

              {/* Opción 3: Emergencia Médica */}
              <button
                onClick={() => handleAlertSelection('medica')}
                className="w-full bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 active:scale-[0.98] text-white p-4 rounded-xl transition-all shadow-lg hover:shadow-xl text-left"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg mb-1">Emergencia Médica</h3>
                    <p className="text-xs text-blue-100">
                      Notifica a: Coordinador / Jefe Directo
                    </p>
                  </div>
                </div>
              </button>

              <p className="text-xs text-center text-gray-500 pt-3">
                Todas las alertas se reportan al Sistema Central y Coordinador de Zona
              </p>
            </div>
          ) : (
            // Confirmation Message
            <div className="py-8 space-y-5">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 animate-bounce">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">
                  ¡Alerta Enviada!
                </h3>
                <p className="text-sm text-gray-600 text-center mb-4">
                  {getAlertInfo(selectedAlert)?.title}
                </p>
              </div>

              {/* Recipients List */}
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
                <p className="text-sm text-green-800 font-medium mb-2">
                  Notificación enviada a:
                </p>
                <ul className="space-y-2 text-sm text-green-700">
                  {getAlertInfo(selectedAlert)?.recipients.map((recipient, index) => (
                    <li key={index}>• {recipient}</li>
                  ))}
                </ul>
              </div>

              {/* Location */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Ubicación compartida</p>
                    <p className="text-xs text-gray-600 mt-1">
                      Mesa 145, Zona 3<br />
                      SANTANDER, Floridablanca
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-center text-gray-500 pt-2">
                Permanece en un lugar seguro. La ayuda está en camino.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
