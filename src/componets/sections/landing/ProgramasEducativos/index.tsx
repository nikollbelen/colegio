import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function ProgramasEducativos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const programs = [
    {
      icon: "/assets/images/programas/icon1.svg",
      title: "Inglés Cambridge",
      description: "Preparamos a nuestros estudiantes para obtener certificaciones internacionales durante su etapa escolar."
    },
    {
      icon: "/assets/images/programas/icon2.svg",
      title: "Formación Integral y en virtudes",
      description: "Educamos en valores y competencias para que nuestros estudiantes transformen la sociedad."
    },
    {
      icon: "/assets/images/programas/icon3.svg",
      title: "Excelencia académica",
      description: "Fomentamos el desarrollo de competencias con altos estándares de calidad educativa."
    },
    {
      icon: "/assets/images/programas/icon4.svg",
      title: "Orientación Familiar",
      description: "Educamos en valores y competencias para que nuestros estudiantes transformen la sociedad."
    },
    {
      icon: "/assets/images/programas/icon2.svg",
      title: "Formación Integral y en virtudes",
      description: "Educamos en valores y competencias para que nuestros estudiantes transformen la sociedad."
    },
    {
      icon: "/assets/images/programas/icon3.svg",
      title: "Excelencia académica",
      description: "Fomentamos el desarrollo de competencias con altos estándares de calidad educativa."
    },
    {
      icon: "/assets/images/programas/icon4.svg",
      title: "Orientación Familiar",
      description: "Educamos en valores y competencias para que nuestros estudiantes transformen la sociedad."
    },
    {
      icon: "/assets/images/programas/icon2.svg",
      title: "Soporte Psicopedagógico y Espiritual",
      description: "Acompañamos el desarrollo emocional, personal y espiritual de nuestros estudiantes."
    }
  ];

  // Función para obtener las tarjetas visibles según el tamaño de pantalla
  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1536) return 4; // 2xl: 4 tarjetas
      if (window.innerWidth >= 1280) return 3; // xl: 3 tarjetas
      if (window.innerWidth >= 768) return 2;  // md: 2 tarjetas
      return 1; // móvil: 1 tarjeta
    }
    return 4; // fallback para SSR
  };

  const [visibleCards, setVisibleCards] = React.useState(4); // Valor inicial fijo para SSR
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    // Establecer que estamos en el cliente y calcular visibleCards
    setIsClient(true);
    setVisibleCards(getVisibleCards());
    setCurrentIndex(0);
  }, []);

  React.useEffect(() => {
    if (!isClient) return;
    
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
      setCurrentIndex(0); // Reset al redimensionar
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]);

  // Funciones para determinar si se pueden mostrar las flechas
  const canGoBack = currentIndex > 0;
  const canGoForward = currentIndex + visibleCards < programs.length;

  const nextSlide = () => {
    if (canGoForward) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (canGoBack) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Funciones para manejar gestos táctiles
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(0); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && canGoForward) {
      nextSlide();
    }
    if (isRightSwipe && canGoBack) {
      prevSlide();
    }
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 overflow-y-visible">
      <div className="max-w-[80vw] mx-auto overflow-y-visible">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl text-[#284159] leading-tight tracking-wide">
            VIVIENDO EN LUZ,<br />
            PREDICANDO LA VERDAD
          </h1>
        </div>

        {/* Contenedor de carrusel con espacio extra arriba para el hover */}
        <div className="relative pt-12 overflow-y-visible">
          {/* Botón izquierdo - Solo se muestra si se puede ir hacia atrás */}
          {canGoBack && (
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 sm:-translate-x-12 lg:-translate-x-16 z-10 bg-white rounded-full p-2 shadow-sm hover:shadow-md transition-all duration-500 border border-gray-300 hidden sm:block cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#18212D]" />
            </button>
          )}

          {/* Carrusel de tarjetas */}
          <div 
            className="overflow-y-visible overflow-x-clip touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-4 md:gap-6 overflow-y-visible"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`
              }}
            >
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="group bg-[#EEEBE7] p-6 md:p-8 rounded-xl flex-shrink-0 transition-colors duration-500 hover:bg-[#F7C953] overflow-y-visible relative"
                  style={{
                    width: `calc(${100 / visibleCards}% - ${visibleCards > 1 ? '1rem' : '0px'})`
                  }}
                >
                  {/* Icono con contenedor que permite el overflow */}
                  <div className="flex justify-start mb-4 overflow-y-visible relative z-10">
                    <div className="transition-transform duration-500 group-hover:-translate-y-14 overflow-y-visible bg-[#E1F0FF] group-hover:bg-white p-4 rounded-full">
                      <Image 
                        src={program.icon} 
                        alt={`${program.title} icon`}
                        className="w-10 h-10"
                        width={48}
                        height={48}
                      />
                    </div>
                  </div>

                  {/* Título */}
                  <h3 className="text-lg font-semibold text-[#18212D] text-left mb-3 leading-tight transition-transform duration-500 group-hover:-translate-y-14">
                    {program.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-[#18212D] text-sm leading-relaxed text-left transition-transform duration-500 group-hover:-translate-y-14">
                    {program.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Botón derecho - Solo se muestra si se puede ir hacia adelante */}
          {canGoForward && (
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 sm:translate-x-12 lg:translate-x-16 z-10 bg-white rounded-full p-2 shadow-sm hover:shadow-md transition-all duration-500 border border-gray-300 hidden sm:block cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#18212D]" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};