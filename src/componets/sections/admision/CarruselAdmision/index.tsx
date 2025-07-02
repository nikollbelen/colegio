import { useState } from "react";

interface TabContent {
  id: string;
  title: string;
  content: React.ReactNode;
  isExternal?: boolean;
  externalUrl?: string;
}

export default function CarruselAdmision() {
  const tabs: TabContent[] = [
    {
      id: "proceso",
      title: "Proceso de Admisión",
      content: (
        <div className="p-6 py-12 rounded-b-lg md:rounded-b-xl xl:rounded-b-[2rem] relative overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 relative z-10">
            {/* Timeline Section - Left side */}
            <div className="flex-1 max-w-2xl">
              {/* Step 1 */}
              <div className="flex items-start mb-8">
                <div className="flex flex-col items-center mr-6">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-base">
                    1
                  </div>
                  <div className="w-1 h-28 bg-yellow-400"></div>
                </div>
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-3">
                    1: Inscripción en Cubicol
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      • Ingreso a plataforma:{" "}
                      <span className="bg-red-500 px-2 py-1 rounded text-xs">
                        Ir a cubicol ↗
                      </span>{" "}
                      o <span className="underline">ver instrucciones</span>.
                    </li>
                    <li>
                      • Llenado de ficha digital (postulante, padres y
                      apoderado).
                    </li>
                    <li>• Aceptación de política de privacidad.</li>
                    <li>
                      • Pago por derecho de inscripción: S/. 300.00 (no
                      reembolsable).
                    </li>
                    <li>
                      • Documentos obligatorios: Todos los documentos son
                      obligatorios.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start mb-8">
                <div className="flex flex-col items-center mr-6">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-base">
                    2
                  </div>
                  <div className="w-1 h-36 bg-green-400"></div>
                </div>
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-3">
                    2: Evaluación y Entrevista
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-semibold mb-1">
                        • Evaluaciones diagnósticas: El colegio se comunicará
                        para agendar
                      </div>
                      <div className="ml-4 space-y-1">
                        <div>○ Evaluación académica</div>
                        <div>○ Evaluación psicológica y socioemocional</div>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">
                        • Entrevista Familiar: Presencial con Dirección y equipo
                        de Admisión
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start">
                <div className="flex flex-col items-center mr-6">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-base">
                    ✓
                  </div>
                </div>
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-3">
                    3: Resultados y Matrícula
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-semibold mb-2">
                        Comunicación de resultados:
                      </div>
                      <div>
                        El colegio notificará los resultados por correo y en la
                        plataforma cubicol.
                      </div>
                    </div>

                    <div className="bg-green-700 p-3 rounded-lg">
                      <div className="text-xs">
                        ✓ Solo recibirán notificación quienes hayan completado
                        todas las etapas del proceso.
                      </div>
                    </div>

                    <div>
                      <div className="font-semibold mb-2">
                        Proceso de matrículas:
                      </div>
                      <div className="mb-2">
                        Las familias admitidas recibirán un mensaje oficial con:
                      </div>
                      <ul className="ml-4 space-y-1">
                        <li>
                          • Plazo para pagar el derecho de ingreso (5 días).
                        </li>
                        <li>
                          • Instrucciones para formalizar la matrícula (en
                          octubre).
                        </li>
                        <li>• Entrega de documentos finales.</li>
                        <li>• Firma de ficha y compromisos.</li>
                        <li>
                          • Pago de matrícula y conceptos correspondientes.
                        </li>
                      </ul>
                    </div>

                    <div className="bg-yellow-600 p-3 rounded-lg mt-4">
                      <div className="text-xs">
                        ⚠ No cumplir con los plazos o los requisitos, puede
                        invalidar su ingreso.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section - Right side */}
            <div className="w-full max-w-sm lg:max-w-md flex-shrink-0">
              <div className="bg-gradient-to-br from-red-400 via-yellow-400 via-green-400 to-blue-400 p-1 rounded-2xl">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <img
                    src="/assets/images/Admision/pagos.png"
                    alt="Familia en proceso de admisión"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              </div>

              {/* Scroll indicator */}
              <div className="flex justify-center mt-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <div className="text-blue-600">↑</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "pagos",
      title: "Pagos y pensiones",
      content: (
        <div className="py-12 rounded-b-lg md:rounded-b-xl xl:rounded-b-[2rem] relative overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8 p-6 relative z-10">
            {/* Left side - Image */}
            <div className="md:w-80 flex-shrink-0">
              <div className="bg-gradient-to-br from-yellow-400 to-red-400 p-1 rounded-2xl">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <img
                    src="/assets/images/Admision/pagos.png"
                    alt="Estudiantes del colegio"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>

              {/* Scroll indicator */}
              <div className="flex justify-center mt-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <div className="text-blue-600">↑</div>
                </div>
              </div>
            </div>

            {/* Right side - Payment options */}
            <div className="flex-1 space-y-4">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-30">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">💳</span>
                  </div>
                  <h3 className="text-white text-lg font-semibold">
                    Cuota de ingreso
                  </h3>
                </div>
              </div>

              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-30">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📄</span>
                  </div>
                  <h3 className="text-white text-lg font-semibold">
                    Matrícula y pensiones
                  </h3>
                </div>
              </div>

              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-30">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">ℹ️</span>
                  </div>
                  <h3 className="text-white text-lg font-semibold">
                    Información de pago
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "recomendaciones",
      title: "Recomendaciones",
      content: (
        <div className="py-12 rounded-b-lg md:rounded-b-xl xl:rounded-b-[2rem] relative overflow-hidden">
          <div className="p-6 relative z-10">
            <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
              {/* Left section - Images and recommendations */}
              <div className="flex-1 space-y-6">
                {/* Two images at top */}
                <div className="flex gap-4">
                  <div className="flex-1 bg-gradient-to-br from-blue-400 to-purple-400 p-1 rounded-xl">
                    <div className="bg-white rounded-xl overflow-hidden">
                      <img
                        src="/assets/images/Admision/pagos.png"
                        alt="Ceremonia escolar"
                        className="w-full h-32 object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-red-400 to-pink-400 p-1 rounded-xl">
                    <div className="bg-white rounded-xl overflow-hidden">
                      <img
                        src="/assets/images/Admision/pagos.png"
                        alt="Estudiantes celebrando"
                        className="w-full h-32 object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Recommendations box */}
                <div className="bg-green-500 bg-opacity-90 rounded-xl p-4">
                  <ul className="text-white text-sm space-y-2">
                    <li>
                      • Verifica cuidadosamente cada paso antes de enviar la
                      información.
                    </li>
                    <li>
                      • Conserva el comprobante de pago y el correo de
                      confirmación.
                    </li>
                    <li>
                      • La inscripción solo se considera válida al completar
                      todos los pasos:
                    </li>
                    <li className="ml-4">
                      ficha, entrega de documentos y aceptación de condiciones.
                    </li>
                  </ul>
                  <div className="bg-red-500 text-white text-xs px-2 py-1 rounded mt-2 inline-block">
                    558
                  </div>
                </div>

                {/* WhatsApp contact */}
                <div className="bg-yellow-400 rounded-xl p-4 flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📱</span>
                  </div>
                  <div className="text-black text-sm">
                    <p>
                      Para más información o asistencia personalizada,
                      escríbenos haciendo clic en{" "}
                      <span className="underline font-semibold">
                        este enlace
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </div>

              {/* Right section - Large image */}
              <div className="md:w-80 flex-shrink-0">
                <div className="bg-gradient-to-br from-red-400 via-yellow-400 to-green-400 p-1 rounded-2xl">
                  <div className="bg-white rounded-2xl overflow-hidden relative">
                    <img
                      src="/assets/images/Admision/pagos.png"
                      alt="Estudiantes en el patio"
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      276
                    </div>
                    <div className="absolute bottom-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      122
                    </div>
                  </div>
                </div>

                {/* Numbers at bottom */}
                <div className="flex justify-center mt-4">
                  <div className="bg-red-500 text-white text-sm px-3 py-1 rounded">
                    200
                  </div>
                </div>

                {/* WhatsApp icon */}
                <div className="flex justify-center mt-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">💬</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "inscripcion",
      title: "Inscripción 2026 ↗",
      isExternal: true,
      externalUrl: "https://cubicol.edu.pe/inscripcion-2026", // Cambia esta URL por la correcta
      content: null, // No necesita contenido porque redirige
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tab: TabContent) => {
    if (tab.isExternal && tab.externalUrl) {
      // Abrir en nueva pestaña
      window.open(tab.externalUrl, '_blank');
    } else {
      // Comportamiento normal de tab
      setActiveTab(tab.id);
    }
  };

  return (
    <div className="rounded-b-lg md:rounded-b-xl xl:rounded-b-[2rem] w-full bg-[#00509D] relative overflow-hidden">
      {/* Background illustrations - Global positioning */}
      {activeTab === "proceso" && (
        <>
          <img
            src="/assets/images/Admision/rojo vista 1.svg"
            alt=""
            className="absolute top-0 left-0 w-20 h-20 z-0"
          />
          <img
            src="/assets/images/Admision/amarillo vista 1.svg"
            alt=""
            className="absolute bottom-[-1rem] right-0 w-32 h-32 z-0"
          />
        </>
      )}
      {activeTab === "pagos" && (
        <>
          <img
            src="/assets/images/Admision/amarillo vista 2.svg"
            alt=""
            className="absolute top-0 left-0 w-32 h-32 z-0"
          />
          <img
            src="/assets/images/Admision/rojo vista 2.svg"
            alt=""
            className="absolute bottom-0 right-0 w-24 h-24 z-0"
          />
        </>
      )}
      {activeTab === "recomendaciones" && (
        <>
          <img
            src="/assets/images/Admision/amarillo vista 3.svg"
            alt=""
            className="absolute top-0 right-0 w-32 h-32 z-0"
          />
          <img
            src="/assets/images/Admision/verde vista 3.svg"
            alt=""
            className="absolute bottom-0 left-0 w-24 h-24 z-0"
          />
        </>
      )}

      {/* Header - Centrado en la parte superior */}
      <div className="text-center py-12">
        <h1 className="text-5xl md:text-6xl text-white tracking-wide">
          ADMISIÓN 2026
        </h1>
      </div>

      {/* Navigation Tabs - Centrados horizontalmente */}
      <div className="flex justify-center px-4">
        <div className="flex flex-wrap gap-8 md:gap-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab)}
              className={`px-4 py-2 font-medium text-lg transition-all duration-200 border-b-2 ${
                activeTab === tab.id && !tab.isExternal
                  ? "text-yellow-400 border-yellow-400"
                  : "text-white border-transparent hover:text-yellow-200"
              } ${tab.isExternal ? "hover:text-yellow-300" : ""}`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="my-12">
        {["proceso", "pagos", "recomendaciones"].includes(activeTab) ? (
          // First three tabs have full blue background
          tabs.find((tab) => tab.id === activeTab)?.content
        ) : (
          // Last tab has content in white card (pero no se mostrará porque redirige)
          <div className="mx-4 pb-12">
            <div className="bg-white rounded-lg shadow-lg max-w-5xl mx-auto">
              {tabs.find((tab) => tab.id === activeTab)?.content}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
