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
      {/* Main Container - Constrained width for mobile feel on desktop, no frame */}
      <div className="w-full max-w-md bg-white shadow-xl md:rounded-[2rem] relative overflow-y-auto overflow-x-hidden min-h-screen md:min-h-[800px] md:h-auto bg-gradient-to-br from-blue-50 to-gray-50">
        
          {/* Render different screens based on state */}
          {currentScreen === 'home' && (
            <>
              {/* Header with Connection Toggle */}
              <header className="bg-white shadow-sm px-5 py-4 sticky top-0 z-10 border-b border-gray-100 md:rounded-t-[2rem]">
                <div className="flex items-center justify-between mb-3">
                  <h1 className="font-bold text-gray-800 text-lg">Testigo Electoral</h1>
                  
                  <div className="flex items-center gap-3">
                    {/* Sync Icon */}
                    <Cloud className={`w-5 h-5 ${isConnected ? 'text-green-600' : 'text-gray-400'}`} />
                    
                    {/* Connection Toggle */}
                    <button
                      onClick={() => setIsConnected(!isConnected)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                        isConnected 
                          ? 'bg-green-100 text-green-700 border-green-500' 
                          : 'bg-red-100 text-red-700 border-red-500'
                      }`}
                    >
                      {isConnected ? (
                        <>
                          <Wifi className="w-3.5 h-3.5" />
                          <span>Conectado</span>
                        </>
                      ) : (
                        <>
                          <WifiOff className="w-3.5 h-3.5" />
                          <span>Desconectado</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Verification Link */}
                <a
                  href="https://www.registraduria.gov.co/-Testigos-electorales-1201-.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-2.5 px-4 rounded-xl font-medium shadow-md hover:shadow-lg active:scale-[0.98] transition-all text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Verificar Mesa CNE</span>
                </a>
              </header>

              {/* Testigo Info Section - Collapsible */}
              <div className="mx-4 mt-4">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setIsTestigoInfoExpanded(!isTestigoInfoExpanded)}
                    className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors active:bg-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-md shadow-blue-200">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-gray-800">Juan Pérez García</p>
                        <p className="text-xs text-gray-500 font-medium">Mesa 145 - Zona 3</p>
                      </div>
                    </div>
                    {isTestigoInfoExpanded ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>

                  {/* Expanded Info */}
                  {isTestigoInfoExpanded && (
                    <div className="px-5 pb-4 pt-2 border-t border-gray-100 bg-gray-50">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center bg-white p-2 rounded-lg border border-gray-100">
                          <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Testigo</span>
                          <span className="text-sm font-bold text-gray-800">Juan Pérez García</span>
                        </div>
                        
                        {/* Líder Responsable con botones */}
                        <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                          <div className="flex justify-between items-center mb-3">
                             <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Líder</span>
                             <span className="text-sm font-bold text-gray-800">Juan Pérez</span>
                          </div>
                          <div className="flex gap-2">
                            <button className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 active:scale-95 text-white py-2 px-3 rounded-lg transition-all shadow-sm">
                              <MessageCircle className="w-3.5 h-3.5" />
                              <span className="text-xs font-bold">WhatsApp</span>
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 active:scale-95 text-white py-2 px-3 rounded-lg transition-all shadow-sm">
                              <Phone className="w-3.5 h-3.5" />
                              <span className="text-xs font-bold">Llamar</span>
                            </button>
                          </div>
                        </div>

                        {/* Coordinador de Zona con botones */}
                        <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                          <div className="flex justify-between items-center mb-3">
                             <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Coordinador</span>
                             <span className="text-sm font-bold text-gray-800">Diana Méndez</span>
                          </div>
                          <div className="flex gap-2">
                            <button className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 active:scale-95 text-white py-2 px-3 rounded-lg transition-all shadow-sm">
                              <MessageCircle className="w-3.5 h-3.5" />
                              <span className="text-xs font-bold">WhatsApp</span>
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 active:scale-95 text-white py-2 px-3 rounded-lg transition-all shadow-sm">
                              <Phone className="w-3.5 h-3.5" />
                              <span className="text-xs font-bold">Llamar</span>
                            </button>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-2">
                            <div className="bg-white p-2 rounded-lg border border-gray-100 text-center">
                              <span className="block text-[10px] text-gray-400 font-bold uppercase">Zona</span>
                              <span className="block text-sm font-bold text-gray-800">Zona 3</span>
                            </div>
                            <div className="bg-white p-2 rounded-lg border border-gray-100 text-center">
                              <span className="block text-[10px] text-gray-400 font-bold uppercase">Mesa</span>
                              <span className="block text-sm font-bold text-gray-800">145</span>
                            </div>
                            <div className="bg-white p-2 rounded-lg border border-gray-100 text-center col-span-2">
                              <span className="block text-[10px] text-gray-400 font-bold uppercase">Lugar</span>
                              <span className="block text-sm font-bold text-gray-800">SANTANDER - Floridablanca</span>
                            </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Main Menu - Action Cards */}
              <div className="px-5 mt-6 pb-28">
                <div className="grid gap-4">
                  
                  {/* Card 1: Reporte de Novedades */}
                  <button 
                    onClick={() => setCurrentScreen('novedades')}
                    className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-[0.99] transition-all p-6 text-left group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors shadow-inner">
                        <AlertTriangle className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-1 leading-tight">Reporte de Novedades e Inconsistencias</h3>
                        <p className="text-orange-100 text-xs font-medium">Reportar irregularidades o incidentes</p>
                      </div>
                    </div>
                  </button>

                  {/* Card 2: Reporte de Preconteo */}
                  <button 
                    onClick={() => setCurrentScreen('preconteo')}
                    className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-[0.99] transition-all p-6 text-left group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors shadow-inner">
                        <Camera className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-1 leading-tight">Resultados de Preconteo</h3>
                        <p className="text-blue-100 text-xs font-medium">Capturar foto del formato E-14</p>
                      </div>
                    </div>
                  </button>

                  {/* Card 3: Reporte de Alertas del Proceso */}
                  <button 
                    onClick={() => setCurrentScreen('alertas-proceso')}
                    className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-[0.99] transition-all p-6 text-left group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors shadow-inner">
                        <FileCheck className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-1 leading-tight">Alertas del Proceso</h3>
                        <p className="text-yellow-100 text-xs font-medium">Verificaciones y reclamaciones</p>
                      </div>
                    </div>
                  </button>

                  {/* Card 4: Capacitación */}
                  <button 
                    onClick={() => setCurrentScreen('capacitacion')}
                    className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-[0.99] transition-all p-6 text-left group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors shadow-inner">
                        <PlayCircle className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-1 leading-tight">Capacitación</h3>
                        <p className="text-green-100 text-xs font-medium">Videos y material de entrenamiento</p>
                      </div>
                    </div>
                  </button>

                </div>
              </div>
            </>
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

          {/* Panic Button - Floating Action Button (only on home screen) */}
          {currentScreen === 'home' && (
            <button 
              onClick={() => setShowPanicAlert(true)}
              className="fixed bottom-6 right-6 md:absolute md:bottom-8 md:right-8 w-16 h-16 bg-red-600 rounded-full shadow-2xl hover:bg-red-700 active:scale-95 transition-all flex items-center justify-center group z-50"
            >
              <div className="flex flex-col items-center">
                <AlertTriangle className="w-7 h-7 text-white animate-pulse" />
                <span className="text-[10px] text-white font-bold mt-0.5">PÁNICO</span>
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
