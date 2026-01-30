import { ArrowLeft, PlayCircle, BookOpen, FileText, Clock } from 'lucide-react';

interface CapacitacionProps {
  onBack: () => void;
}

export function Capacitacion({ onBack }: CapacitacionProps) {
  const videos = [
    {
      id: 1,
      titulo: 'Introducción al rol del testigo electoral',
      duracion: '5:32',
      descripcion: 'Conoce tus responsabilidades y derechos'
    },
    {
      id: 2,
      titulo: 'Cómo identificar irregularidades',
      duracion: '8:15',
      descripcion: 'Aprende a detectar y reportar anomalías'
    },
    {
      id: 3,
      titulo: 'Proceso de llenado del acta E-14',
      duracion: '6:48',
      descripcion: 'Paso a paso del registro de resultados'
    },
    {
      id: 4,
      titulo: 'Protocolo de seguridad personal',
      duracion: '4:20',
      descripcion: 'Medidas de seguridad en el día electoral'
    }
  ];

  const guias = [
    {
      id: 1,
      titulo: 'Guía rápida del testigo electoral',
      tipo: 'PDF'
    },
    {
      id: 2,
      titulo: 'Manual de procedimientos',
      tipo: 'PDF'
    },
    {
      id: 3,
      titulo: 'Preguntas frecuentes',
      tipo: 'PDF'
    }
  ];

  return (
    <div className="h-full bg-gradient-to-br from-purple-50 to-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-purple-700 px-5 py-4 shadow-lg">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 active:scale-95 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div>
            <h2 className="font-bold text-white">Capacitación</h2>
            <p className="text-sm text-purple-100">Material de apoyo y tutoriales</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-5">
        
        {/* Videos Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <PlayCircle className="w-5 h-5 text-purple-600" />
            <h3 className="font-bold text-gray-800">Videos Tutoriales</h3>
          </div>
          
          <div className="space-y-3">
            {videos.map((video) => (
              <button
                key={video.id}
                className="w-full bg-white rounded-xl shadow-md p-4 hover:shadow-lg active:scale-[0.98] transition-all text-left"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <PlayCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 mb-1">{video.titulo}</h4>
                    <p className="text-sm text-gray-600 mb-2">{video.descripcion}</p>
                    <div className="flex items-center gap-1 text-xs text-purple-600">
                      <Clock className="w-3 h-3" />
                      <span>{video.duracion}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Guides Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-5 h-5 text-purple-600" />
            <h3 className="font-bold text-gray-800">Guías y Documentos</h3>
          </div>
          
          <div className="space-y-3">
            {guias.map((guia) => (
              <button
                key={guia.id}
                className="w-full bg-white rounded-xl shadow-md p-4 hover:shadow-lg active:scale-[0.98] transition-all text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{guia.titulo}</h4>
                      <p className="text-sm text-purple-600">{guia.tipo}</p>
                    </div>
                  </div>
                  <div className="text-purple-600 text-xl">→</div>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
