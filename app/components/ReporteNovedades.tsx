import { useState } from 'react';
import { ArrowLeft, AlertTriangle, Send, Image as ImageIcon, CheckCircle, XCircle, Video, Upload } from 'lucide-react';

interface ReporteNovedadesProps {
  onBack: () => void;
}

type VerificacionResponse = 'si' | 'no' | '';
type CheckResponse = 'ok' | 'x' | '';

export function ReporteNovedades({ onBack }: ReporteNovedadesProps) {
  const [tipoIncidente, setTipoIncidente] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // Estados para las verificaciones antes de iniciar
  const [verificacion1, setVerificacion1] = useState<VerificacionResponse>('');
  const [verificacion2, setVerificacion2] = useState<CheckResponse>('');
  const [verificacion3, setVerificacion3] = useState<CheckResponse>('');
  const [verificacion4, setVerificacion4] = useState<CheckResponse>('');
  const [verificacion5, setVerificacion5] = useState<CheckResponse>('');
  const [verificacion6, setVerificacion6] = useState<CheckResponse>('');

  // Estados para anomalías durante las votaciones
  const [anomalia1, setAnomalia1] = useState(false);
  const [anomalia1Evidencia, setAnomalia1Evidencia] = useState(false);
  const [anomalia2, setAnomalia2] = useState(false);
  const [anomalia2Evidencia, setAnomalia2Evidencia] = useState(false);
  const [anomalia3, setAnomalia3] = useState(false);
  const [anomalia3Evidencia, setAnomalia3Evidencia] = useState(false);
  const [anomalia4, setAnomalia4] = useState(false);
  const [anomalia4Evidencia, setAnomalia4Evidencia] = useState(false);
  const [anomalia5, setAnomalia5] = useState(false);
  const [anomalia5Evidencia, setAnomalia5Evidencia] = useState(false);
  const [anomalia6, setAnomalia6] = useState(false);
  const [anomalia6Evidencia, setAnomalia6Evidencia] = useState(false);
  const [anomalia7, setAnomalia7] = useState(false);
  const [anomalia7Evidencia, setAnomalia7Evidencia] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setTipoIncidente('');
      setDescripcion('');
      setVerificacion1('');
      setVerificacion2('');
      setVerificacion3('');
      setVerificacion4('');
      setVerificacion5('');
      setVerificacion6('');
      setAnomalia1(false);
      setAnomalia1Evidencia(false);
      setAnomalia2(false);
      setAnomalia2Evidencia(false);
      setAnomalia3(false);
      setAnomalia3Evidencia(false);
      setAnomalia4(false);
      setAnomalia4Evidencia(false);
      setAnomalia5(false);
      setAnomalia5Evidencia(false);
      setAnomalia6(false);
      setAnomalia6Evidencia(false);
      setAnomalia7(false);
      setAnomalia7Evidencia(false);
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
          
          {/* ANTES DE INICIAR LAS VOTACIONES */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              ANTES DE INICIAR LAS VOTACIONES
            </h3>
            
            <div className="space-y-4">
              {/* Verificación 1 */}
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-700 mb-3">
                  1. La identidad de todas las personas que se presentaron como jurados de votación el día de las elecciones fue verificada.
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setVerificacion1('si')}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                      verificacion1 === 'si'
                        ? 'bg-green-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    ☐ Sí
                  </button>
                  <button
                    type="button"
                    onClick={() => setVerificacion1('no')}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                      verificacion1 === 'no'
                        ? 'bg-red-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    ☐ No
                  </button>
                </div>
              </div>

              {/* Verificación 2 */}
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-700 mb-3">
                  2. Las actas y demás documentos electorales no fueron diligenciados previamente.
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setVerificacion2('ok')}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                      verificacion2 === 'ok'
                        ? 'bg-green-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <CheckCircle className="w-4 h-4" />
                    OK
                  </button>
                  <button
                    type="button"
                    onClick={() => setVerificacion2('x')}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                      verificacion2 === 'x'
                        ? 'bg-red-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <XCircle className="w-4 h-4" />
                    X
                  </button>
                </div>
              </div>

              {/* Verificación 3 */}
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-700 mb-3">
                  3. Los paquetes de las tarjetas electorales permanecieron cerrados y sin diligenciar antes de las 8:00 a.m.
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setVerificacion3('ok')}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                      verificacion3 === 'ok'
                        ? 'bg-green-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <CheckCircle className="w-4 h-4" />
                    OK
                  </button>
                  <button
                    type="button"
                    onClick={() => setVerificacion3('x')}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                      verificacion3 === 'x'
                        ? 'bg-red-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <XCircle className="w-4 h-4" />
                    X
                  </button>
                </div>
              </div>

              {/* Verificación 4 */}
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-700 mb-3">
                  4. La urna se encontraba completamente vacía al momento de cerrarla y sellarla durante la instalación de la mesa de votación.
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setVerificacion4('ok')}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                      verificacion4 === 'ok'
                        ? 'bg-green-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <CheckCircle className="w-4 h-4" />
                    OK
                  </button>
                  <button
                    type="button"
                    onClick={() => setVerificacion4('x')}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                      verificacion4 === 'x'
                        ? 'bg-red-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <XCircle className="w-4 h-4" />
                    X
                  </button>
                </div>
              </div>

              {/* Verificación 5 */}
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-700 mb-3">
                  5. Las votaciones no iniciaron antes de las 8:00 a.m.
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setVerificacion5('ok')}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                      verificacion5 === 'ok'
                        ? 'bg-green-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <CheckCircle className="w-4 h-4" />
                    OK
                  </button>
                  <button
                    type="button"
                    onClick={() => setVerificacion5('x')}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                      verificacion5 === 'x'
                        ? 'bg-red-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <XCircle className="w-4 h-4" />
                    X
                  </button>
                </div>
              </div>

              {/* Verificación 6 */}
              <div>
                <p className="text-sm text-gray-700 mb-3">
                  6. La mesa de votación fue instalada y abierta con un mínimo de dos (2) jurados presentes.
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setVerificacion6('ok')}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                      verificacion6 === 'ok'
                        ? 'bg-green-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <CheckCircle className="w-4 h-4" />
                    OK
                  </button>
                  <button
                    type="button"
                    onClick={() => setVerificacion6('x')}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                      verificacion6 === 'x'
                        ? 'bg-red-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <XCircle className="w-4 h-4" />
                    X
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ANOMALÍAS DURANTE LAS VOTACIONES */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              DURANTE LAS VOTACIONES - ANOMALÍAS
            </h3>
            
            <div className="space-y-4">
              {/* Anomalia 1 */}
              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-start gap-2 mb-3">
                  <button
                    type="button"
                    onClick={() => setAnomalia1(!anomalia1)}
                    className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 transition-all ${
                      anomalia1
                        ? 'bg-red-600 border-red-600'
                        : 'border-gray-400 bg-white'
                    }`}
                  >
                    {anomalia1 && <span className="text-white text-xs">✓</span>}
                  </button>
                  <p className="text-sm text-gray-700 flex-1">
                    En mi mesa los votantes no concurren libremente
                  </p>
                </div>
                {anomalia1 && (
                  <button
                    type="button"
                    onClick={() => setAnomalia1Evidencia(!anomalia1Evidencia)}
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                      anomalia1Evidencia
                        ? 'bg-green-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-dashed border-gray-300'
                    }`}
                  >
                    <Upload className="w-4 h-4" />
                    {anomalia1Evidencia ? 'Evidencia adjunta ✓' : 'Cargar prueba de foto o video corto'}
                  </button>
                )}
              </div>

              {/* Anomalia 2 */}
              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-start gap-2 mb-3">
                  <button
                    type="button"
                    onClick={() => setAnomalia2(!anomalia2)}
                    className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 transition-all ${
                      anomalia2
                        ? 'bg-red-600 border-red-600'
                        : 'border-gray-400 bg-white'
                    }`}
                  >
                    {anomalia2 && <span className="text-white text-xs">✓</span>}
                  </button>
                  <p className="text-sm text-gray-700 flex-1">
                    En mi mesa no se está votando en secreto
                  </p>
                </div>
                {anomalia2 && (
                  <button
                    type="button"
                    onClick={() => setAnomalia2Evidencia(!anomalia2Evidencia)}
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                      anomalia2Evidencia
                        ? 'bg-green-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-dashed border-gray-300'
                    }`}
                  >
                    <Upload className="w-4 h-4" />
                    {anomalia2Evidencia ? 'Evidencia adjunta ✓' : 'Cargar prueba de foto o video corto'}
                  </button>
                )}
              </div>

              {/* Anomalia 3 */}
              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-start gap-2 mb-3">
                  <button
                    type="button"
                    onClick={() => setAnomalia3(!anomalia3)}
                    className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 transition-all ${
                      anomalia3
                        ? 'bg-red-600 border-red-600'
                        : 'border-gray-400 bg-white'
                    }`}
                  >
                    {anomalia3 && <span className="text-white text-xs">✓</span>}
                  </button>
                  <p className="text-sm text-gray-700 flex-1">
                    En mi mesa existe interferencia o presión al momento de depositar el voto
                  </p>
                </div>
                {anomalia3 && (
                  <button
                    type="button"
                    onClick={() => setAnomalia3Evidencia(!anomalia3Evidencia)}
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                      anomalia3Evidencia
                        ? 'bg-green-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-dashed border-gray-300'
                    }`}
                  >
                    <Upload className="w-4 h-4" />
                    {anomalia3Evidencia ? 'Evidencia adjunta ✓' : 'Cargar prueba de foto o video corto'}
                  </button>
                )}
              </div>

              {/* Anomalia 4 */}
              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-start gap-2 mb-3">
                  <button
                    type="button"
                    onClick={() => setAnomalia4(!anomalia4)}
                    className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 transition-all ${
                      anomalia4
                        ? 'bg-red-600 border-red-600'
                        : 'border-gray-400 bg-white'
                    }`}
                  >
                    {anomalia4 && <span className="text-white text-xs">✓</span>}
                  </button>
                  <p className="text-sm text-gray-700 flex-1">
                    En mi mesa están votando con fotocopias, contraseñas o documentos distintos a la cédula
                  </p>
                </div>
                {anomalia4 && (
                  <button
                    type="button"
                    onClick={() => setAnomalia4Evidencia(!anomalia4Evidencia)}
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                      anomalia4Evidencia
                        ? 'bg-green-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-dashed border-gray-300'
                    }`}
                  >
                    <Upload className="w-4 h-4" />
                    {anomalia4Evidencia ? 'Evidencia adjunta ✓' : 'Cargar prueba de foto o video corto'}
                  </button>
                )}
              </div>

              {/* Anomalia 5 */}
              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-start gap-2 mb-3">
                  <button
                    type="button"
                    onClick={() => setAnomalia5(!anomalia5)}
                    className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 transition-all ${
                      anomalia5
                        ? 'bg-red-600 border-red-600'
                        : 'border-gray-400 bg-white'
                    }`}
                  >
                    {anomalia5 && <span className="text-white text-xs">✓</span>}
                  </button>
                  <p className="text-sm text-gray-700 flex-1">
                    Existen personas y miembros de la autoridad interfiriendo indebidamente en el proceso de votación
                  </p>
                </div>
                {anomalia5 && (
                  <button
                    type="button"
                    onClick={() => setAnomalia5Evidencia(!anomalia5Evidencia)}
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                      anomalia5Evidencia
                        ? 'bg-green-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-dashed border-gray-300'
                    }`}
                  >
                    <Upload className="w-4 h-4" />
                    {anomalia5Evidencia ? 'Evidencia adjunta ✓' : 'Cargar prueba de foto o video corto'}
                  </button>
                )}
              </div>

              {/* Anomalia 6 */}
              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-start gap-2 mb-3">
                  <button
                    type="button"
                    onClick={() => setAnomalia6(!anomalia6)}
                    className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 transition-all ${
                      anomalia6
                        ? 'bg-red-600 border-red-600'
                        : 'border-gray-400 bg-white'
                    }`}
                  >
                    {anomalia6 && <span className="text-white text-xs">✓</span>}
                  </button>
                  <p className="text-sm text-gray-700 flex-1">
                    Mi mesa está funcionando con menos de dos (2) jurados de votación
                  </p>
                </div>
                {anomalia6 && (
                  <button
                    type="button"
                    onClick={() => setAnomalia6Evidencia(!anomalia6Evidencia)}
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                      anomalia6Evidencia
                        ? 'bg-green-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-dashed border-gray-300'
                    }`}
                  >
                    <Upload className="w-4 h-4" />
                    {anomalia6Evidencia ? 'Evidencia adjunta ✓' : 'Cargar prueba de foto o video corto'}
                  </button>
                )}
              </div>

              {/* Anomalia 7 */}
              <div>
                <div className="flex items-start gap-2 mb-3">
                  <button
                    type="button"
                    onClick={() => setAnomalia7(!anomalia7)}
                    className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 transition-all ${
                      anomalia7
                        ? 'bg-red-600 border-red-600'
                        : 'border-gray-400 bg-white'
                    }`}
                  >
                    {anomalia7 && <span className="text-white text-xs">✓</span>}
                  </button>
                  <p className="text-sm text-gray-700 flex-1">
                    En mi mesa las tarjetas electorales fueron sustraídas del recinto de votación
                  </p>
                </div>
                {anomalia7 && (
                  <button
                    type="button"
                    onClick={() => setAnomalia7Evidencia(!anomalia7Evidencia)}
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                      anomalia7Evidencia
                        ? 'bg-green-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-dashed border-gray-300'
                    }`}
                  >
                    <Upload className="w-4 h-4" />
                    {anomalia7Evidencia ? 'Evidencia adjunta ✓' : 'Cargar prueba de foto o video corto'}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Tipo de Incidente */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Otros tipos de Incidentes
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
