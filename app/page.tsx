'use client';

import { useState } from 'react';
import { Wifi, WifiOff, Cloud, ChevronDown, ChevronUp, AlertTriangle, Camera, PlayCircle, User, Phone, MessageCircle, ExternalLink, FileCheck } from 'lucide-react';
import { ReporteNovedades } from '@/app/components/ReporteNovedades';
import { ReportePreconteo } from '@/app/components/ReportePreconteo';
import { Capacitacion } from '@/app/components/Capacitacion';
import { PanicAlert } from '@/app/components/PanicAlert';
import { ReporteAlertasProceso } from '@/app/components/ReporteAlertasProceso';

type Screen = 'home' | 'novedades' | 'preconteo' | 'capacitacion' | 'alertas-proceso';

export default function App() {
  const [isConnected, setIsConnected] = useState(true);
  const [isTestigoInfoExpanded, setIsTestigoInfoExpanded] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [showPanicAlert, setShowPanicAlert] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-0 md:p-6">
      {/* Main Container - Constrained width for mobile feel on desktop */}
      <div className="w-full max-w-md bg-white shadow-xl md:rounded-[2rem] relative overflow-y-auto overflow-x-hidden min-h-screen md:min-h-[800px] md:h-auto">
        
        {/* Render different screens based on state */}
        {currentScreen === 'home' && (
          <div className="animate-in fade-in duration-500 pb-28 md:pb-12">
            {/* Header Section */}
            <header className="px-6 pt-8 pb-6 sticky top-0 z-10 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 md:rounded-t-[2rem]">
              <div className="flex items-center justify-between mb-6">
                <div>
                   <h1 className="font-extrabold text-2xl text-gray-900 leading-none tracking-tight">
                     Testigo<br/>Electoral
                   </h1>
                </div>

                <div className="flex items-center gap-3">
                   {/* Cloud Icon */}
                   <Cloud className={`w-6 h-6 ${isConnected ? 'text-green-500' : 'text-slate-400'}`} />
                   
                   {/* Connection Status Badge */}
                   <button
                      onClick={() => setIsConnected(!isConnected)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-colors duration-200 ${isConnected ? 'bg-green-50 text-green-700 border-green-500 hover:bg-green-100' : 'bg-red-50 text-red-600 border-red-500 hover:bg-red-100'}`}
                   >
                      {isConnected ? <Wifi className="w-3.5 h-3.5" /> : <WifiOff className="w-3.5 h-3.5" />}
                      <span>{isConnected ? 'Conectado' : 'Desconectado'}</span>
                   </button>
                </div>
              </div>

              {/* User Profile Card */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-110 duration-500"></div>
                
                <div className="flex items-center gap-4 relative z-10">
                   <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-blue-200 shadow-lg ring-4 ring-blue-50">
                      <User className="w-7 h-7" />
                   </div>
                   <div className="flex-1">
                      <h2 className="font-bold text-gray-800 text-xl leading-tight">Juan Pérez García</h2>
                      <div className="flex items-center gap-2 mt-1.5">
                         <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-lg border border-gray-200">Mesa 145</span>
                         <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-lg border border-gray-200">Zona 3</span>
                      </div>
                   </div>
                   <button onClick={() => setIsTestigoInfoExpanded(!isTestigoInfoExpanded)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      {isTestigoInfoExpanded ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                   </button>
                </div>

                {/* Detailed Info (Collapsible) */}
                 {isTestigoInfoExpanded && (
                  <div className="pt-5 mt-5 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
                     <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-3 rounded-xl border border-gray-100/50 hover:border-blue-100 transition-colors">
                           <div className="mb-2">
                              <p className="text-[10px] uppercase text-gray-400 font-bold mb-1 tracking-wider">Líder</p>
                              <p className="text-xs font-bold text-gray-800 truncate">Juan Pérez</p>
                           </div>
                           <div className="flex gap-1.5">
                              <button className="flex-1 py-1.5 bg-green-500 rounded-lg text-white hover:bg-green-600 flex items-center justify-center transition-transform active:scale-95"><MessageCircle className="w-3.5 h-3.5" /></button>
                              <button className="flex-1 py-1.5 bg-blue-500 rounded-lg text-white hover:bg-blue-600 flex items-center justify-center transition-transform active:scale-95"><Phone className="w-3.5 h-3.5" /></button>
                           </div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-xl border border-gray-100/50 hover:border-blue-100 transition-colors">
                           <div className="mb-2">
                              <p className="text-[10px] uppercase text-gray-400 font-bold mb-1 tracking-wider">Coord.</p>
                              <p className="text-xs font-bold text-gray-800 truncate">Diana Méndez</p>
                           </div>
                           <div className="flex gap-1.5">
                              <button className="flex-1 py-1.5 bg-green-500 rounded-lg text-white hover:bg-green-600 flex items-center justify-center transition-transform active:scale-95"><MessageCircle className="w-3.5 h-3.5" /></button>
                              <button className="flex-1 py-1.5 bg-blue-500 rounded-lg text-white hover:bg-blue-600 flex items-center justify-center transition-transform active:scale-95"><Phone className="w-3.5 h-3.5" /></button>
                           </div>
                        </div>
                     </div>
                  </div>
                )}
              </div>

              {/* Verification Button - Mobile Position (Default) */}
              <a
                href="https://www.registraduria.gov.co/-Testigos-electorales-1201-.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 w-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white py-3.5 px-4 rounded-xl font-bold shadow-lg shadow-purple-500/20 active:scale-[0.98] transition-all text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Verificar Mesa CNE</span>
              </a>
            </header>

            {/* Main Menu - Single Column Stack */}
            <div className="px-5 mt-2 md:mt-6">
              <div className="grid grid-cols-1 gap-4">
                
                {/* Card 1: Reporte de Novedades */}
                <button 
                  onClick={() => setCurrentScreen('novedades')}
                  className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-orange-200 active:scale-[0.99] transition-all p-5 text-left group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                      <AlertTriangle className="w-7 h-7 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-0.5 leading-tight">Reportar Novedades</h3>
                      <p className="text-gray-500 text-xs font-medium">Irregularidades en mesa</p>
                    </div>
                    <div className="p-2 text-gray-300 group-hover:text-orange-500 transition-colors">
                        <ChevronDown className="w-5 h-5 -rotate-90" />
                    </div>
                  </div>
                </button>

                {/* Card 2: Reporte de Preconteo */}
                <button 
                  onClick={() => setCurrentScreen('preconteo')}
                  className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 active:scale-[0.99] transition-all p-5 text-left group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <Camera className="w-7 h-7 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-0.5 leading-tight">Reporte Proceso de Preconteo</h3>
                      <p className="text-gray-500 text-xs font-medium">Captura de E-14</p>
                    </div>
                    <div className="p-2 text-gray-300 group-hover:text-blue-500 transition-colors">
                        <ChevronDown className="w-5 h-5 -rotate-90" />
                    </div>
                  </div>
                </button>

                {/* Card 3: Reporte de Alertas del Proceso */}
                <button 
                  onClick={() => setCurrentScreen('alertas-proceso')}
                  className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-yellow-200 active:scale-[0.99] transition-all p-5 text-left group"
                >
                   <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-yellow-50 flex items-center justify-center group-hover:bg-yellow-100 transition-colors">
                      <FileCheck className="w-7 h-7 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-0.5 leading-tight">Alertas del Proceso</h3>
                      <p className="text-gray-500 text-xs font-medium">Verificaciones y firmas</p>
                    </div>
                    <div className="p-2 text-gray-300 group-hover:text-yellow-500 transition-colors">
                        <ChevronDown className="w-5 h-5 -rotate-90" />
                    </div>
                  </div>
                </button>

                {/* Card 4: Capacitación */}
                <button 
                  onClick={() => setCurrentScreen('capacitacion')}
                  className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-purple-200 active:scale-[0.99] transition-all p-5 text-left group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                      <PlayCircle className="w-7 h-7 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-0.5 leading-tight">Capacitación</h3>
                      <p className="text-gray-500 text-xs font-medium">Tutoriales y guías</p>
                    </div>
                    <div className="p-2 text-gray-300 group-hover:text-purple-500 transition-colors">
                        <ChevronDown className="w-5 h-5 -rotate-90" />
                    </div>
                  </div>
                </button>

              </div>
            </div>
            
            {/* Desktop Footer Info */}
            <div className="hidden md:block text-center mt-12 text-gray-400 text-sm pb-6">
                Testigo Electoral App &copy; 2026 - Conectado al Puesto de Mando Unificado
            </div>
          </div>
        )}

        {currentScreen === 'novedades' && (
          <ReporteNovedades onBack={() => setCurrentScreen('home')} />
        )}

        {currentScreen === 'preconteo' && (
          <ReportePreconteo onBack={() => setCurrentScreen('home')} />
        )}

        {currentScreen === 'capacitacion' && (
          <Capacitacion onBack={() => setCurrentScreen('home')} />
        )}

        {currentScreen === 'alertas-proceso' && (
          <ReporteAlertasProceso onBack={() => setCurrentScreen('home')} />
        )}

        {/* Panic Button - Fixed at bottom right */}
        {currentScreen === 'home' && (
          <button 
            onClick={() => setShowPanicAlert(true)}
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-red-600 to-red-700 rounded-full shadow-lg shadow-red-600/40 hover:shadow-red-600/60 hover:scale-105 active:scale-90 transition-all flex items-center justify-center group z-50 ring-4 ring-white/50"
          >
            <span className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping opacity-75"></span>
            <div className="flex flex-col items-center">
              <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-white mb-0.5" />
              <span className="text-[9px] md:text-[11px] text-white font-bold tracking-wider">PÁNICO</span>
            </div>
          </button>
        )}

        {/* Panic Alert Modal */}
        {showPanicAlert && (
          <PanicAlert onClose={() => setShowPanicAlert(false)} />
        )}

      </div>
    </div>
  );
}
