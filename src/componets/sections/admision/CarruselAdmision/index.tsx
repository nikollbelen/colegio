import { useState } from "react";
import Image from "next/image";

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
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-center gap-12 relative z-10">
            {/* Timeline Section - Left side */}
            <div className="flex-1 max-w-2xl">
              {/* Step 1 */}
              <div className="flex items-start mb-12">
                <div className="flex flex-col items-center mr-6">
                  {/* SVG placeholder for number 1 */}
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image
                      src="/assets/images/Admision/numero1.svg" // Ruta vacía para que pongas tu SVG
                      alt="Número 1"
                      width={48}
                      height={48}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="absolute top-0 translate-x-1/2 w-0.5 h-125 bg-white -z-10"></div>
                </div>
                <div className="text-white pt-2">
                  <h3 className="text-xl mb-4 text-white">
                    1: Inscripción en Cubicol
                  </h3>
                  <ul className="space-y-3 text-sm leading-relaxed">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Ingreso a plataforma:{" "}
                        <button className="bg-red-500 px-2 py-1 rounded text-xs font-medium cursor-pointer hover:scale-105">
                          Ir a cubicol ↗
                        </button>{" "}
                        o <span className="underline cursor-pointer">ver instrucciones</span>.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Llenado de ficha digital (postulante, padres y apoderado).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Aceptación de política de privacidad.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Pago por derecho de inscripción: S/. 300.00 (no reembolsable).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Documentos obligatorios: Todos los documentos son obligatorios.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start mb-12">
                <div className="flex flex-col items-center mr-6">
                  {/* SVG placeholder for number 2 */}
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image
                      src="/assets/images/Admision/numero2.svg" // Ruta vacía para que pongas tu SVG
                      alt="Número 2"
                      width={48}
                      height={48}
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="text-white pt-2">
                  <h3 className="text-xl mb-4 text-white">
                    2: Evaluación y Entrevista
                  </h3>
                  <div className="space-y-4 text-sm leading-relaxed">
                    <div>
                      <div className="font-semibold mb-2 flex items-start">
                        <span className="mr-2">•</span>
                        <span>Evaluaciones diagnósticas: El colegio se comunicará para agendar</span>
                      </div>
                      <div className="ml-6 space-y-2">
                        <div className="flex items-start">
                          <span className="mr-2">○</span>
                          <span>Evaluación académica</span>
                        </div>
                        <div className="flex items-start">
                          <span className="mr-2">○</span>
                          <span>Evaluación psicológica y socioemocional</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-2">•</span>
                      <div>
                        <span className="font-semibold">Entrevista Familiar:</span> Presencial con Dirección y equipo de Admisión
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start">
                <div className="flex flex-col items-center mr-6">
                  {/* SVG placeholder for checkmark */}
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image
                      src="/assets/images/Admision/numero3.svg" // Ruta vacía para que pongas tu SVG del check
                      alt="Check"
                      width={48}
                      height={48}
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="text-white pt-2">
                  <h3 className="text-xl mb-4 text-white">
                    3: Resultados y Matrícula
                  </h3>
                  <div className="space-y-4 text-sm leading-relaxed">
                    <div>
                      <div className="font-semibold mb-2">
                        Comunicación de resultados:
                      </div>
                      <div>
                        El colegio notificará los resultados por correo y en la plataforma cubicol.
                      </div>
                    </div>

                    <div className="bg-[#D9D9D9]/40 p-3 rounded-lg">
                      <div className="text-xs flex items-start">
                        <span className="mr-2 text-green-200">✓</span>
                        <span>Solo recibirán notificación quienes hayan completado <strong>todas las etapas del proceso</strong>.</span>
                      </div>
                    </div>

                    <div>
                      <div className="font-semibold mb-2">
                        Proceso de matrículas:
                      </div>
                      <div className="mb-3">
                        Las familias admitidas recibirán un mensaje oficial con:
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Plazo para pagar el derecho de ingreso (5 días).</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Instrucciones para formalizar la matrícula (en octubre).</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Entrega de documentos finales.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Firma de ficha y compromisos.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Pago de matrícula y conceptos correspondientes.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-[#D9D9D9]/40 p-3 rounded-lg">
                      <div className="text-xs flex items-start">
                        <span className="mr-2 text-yellow-200">⚠</span>
                        <span>No cumplir con los plazos o los requisitos, puede invalidar su ingreso.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section - Right side */}
            <div className="max-w-lg flex-shrink-0 mx-auto">
              <div className="h-[58rem]">
                <div className="overflow-hidden h-full">
                  <Image
                    src="/assets/images/Admision/proceso.png"
                    alt="Familia en proceso de admisión"
                    className="w-full h-full object-cover"
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>

              {/* Scroll indicator */}
              {/* <div className="flex justify-center mt-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-blue-600 font-bold">↑</div>
                </div>
              </div> */}
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
                  <Image
                    src="/assets/images/Admision/pagos.png"
                    alt="Estudiantes del colegio"
                    className="w-full h-[500px] object-cover"
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>

              {/* Scroll indicator */}
              <div className="flex justify-center mt-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-blue-600 font-bold">↑</div>
                </div>
              </div>
            </div>

            {/* Right side - Payment options */}
            <div className="flex-1 space-y-6 max-w-md">
              <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">💰</span>
                  </div>
                  <h3 className="text-blue-900 text-xl font-bold">
                    Cuota de ingreso
                  </h3>
                </div>
              </div>

              <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">📋</span>
                  </div>
                  <h3 className="text-blue-900 text-xl font-bold">
                    Matrícula y pensiones
                  </h3>
                </div>
              </div>

              <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">ℹ️</span>
                  </div>
                  <h3 className="text-blue-900 text-xl font-bold">
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
                  <div className="flex-1 bg-white p-1 rounded-2xl shadow-lg">
                    <div className="rounded-2xl overflow-hidden">
                      <Image
                        src="/assets/images/Admision/recomendaciones1.jpg"
                        alt="Ceremonia escolar"
                        className="w-full h-32 object-cover"
                        width={1920}
                        height={1080}
                      />
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-1 rounded-2xl shadow-lg">
                    <div className="rounded-2xl overflow-hidden">
                      <Image
                        src="/assets/images/Admision/recomendaciones2.jpg"
                        alt="Estudiantes celebrando"
                        className="w-full h-32 object-cover"
                        width={1920}
                        height={1080}
                      />
                    </div>
                  </div>
                </div>

                {/* Recommendations box */}
                <div className="bg-green-500 bg-opacity-95 rounded-2xl p-6 shadow-lg">
                  <ul className="text-white text-sm space-y-3 leading-relaxed">
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Verifica cuidadosamente cada paso antes de enviar la información.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Conserva el comprobante de pago y el correo de confirmación.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>La inscripción solo se considera válida al completar todos los pasos:</span>
                    </li>
                    <li className="ml-6 flex items-start">
                      <span>ficha, entrega de documentos y aceptación de condiciones.</span>
                    </li>
                  </ul>
                </div>

                {/* WhatsApp contact */}
                <div className="bg-yellow-400 rounded-2xl p-6 flex items-center space-x-4 shadow-lg">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">💬</span>
                  </div>
                  <div className="text-black">
                    <p className="text-sm leading-relaxed">
                      Para más información o asistencia personalizada, escríbenos haciendo{" "}
                      <span className="underline font-bold cursor-pointer text-blue-700">
                        clic en este enlace
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </div>

              {/* Right section - Large image */}
              <div className="md:w-80 flex-shrink-0">
                <div className="bg-gradient-to-br from-yellow-400 to-red-400 p-1 rounded-2xl">
                  <div className="bg-white rounded-2xl overflow-hidden">
                    <Image
                      src="/assets/images/Admision/recomendaciones3.png"
                      alt="Estudiantes en el patio"
                      width={500}
                      height={500}
                      className="w-full h-[500px] object-cover"
                    />
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
      externalUrl: "https://cubicol.edu.pe/inscripcion-2026",
      content: null,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tab: TabContent) => {
    if (tab.isExternal && tab.externalUrl) {
      window.open(tab.externalUrl, '_blank');
    } else {
      setActiveTab(tab.id);
    }
  };

  return (
    <div className="rounded-b-lg md:rounded-b-xl xl:rounded-b-[2rem] w-full bg-[#00509D] relative overflow-hidden">
      {/* Background illustrations - Global positioning */}
      {activeTab === "proceso" && (
        <>
          <Image
            src="/assets/images/Admision/rojo vista 1.svg"
            alt=""
            width={500}
            height={500}
            className="absolute top-0 left-0 w-20 h-20 z-0"
          />
          <Image
            src="/assets/images/Admision/amarillo vista 1.svg"
            alt=""
            width={500}
            height={500}
            className="absolute bottom-[-1rem] right-0 w-32 h-32 z-0"
          />
        </>
      )}
      {activeTab === "pagos" && (
        <>
          <Image
            src="/assets/images/Admision/amarillo vista 2.svg"
            alt=""
            width={500}
            height={500}
            className="absolute top-0 left-0 w-32 h-32 z-0"
          />
          <Image
            src="/assets/images/Admision/rojo vista 2.svg"
            alt=""
            width={500}
            height={500}
            className="absolute bottom-0 right-0 w-24 h-24 z-0"
          />
        </>
      )}
      {activeTab === "recomendaciones" && (
        <>
          <Image
            src="/assets/images/Admision/amarillo vista 3.svg"
            alt=""
            width={500}
            height={500}
            className="absolute top-0 right-0 w-32 h-32 z-0"
          />
          <Image
            src="/assets/images/Admision/verde vista 3.svg"
            alt=""
            width={500}
            height={500}
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
          tabs.find((tab) => tab.id === activeTab)?.content
        ) : (
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