import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProgramasEducativos = () => {
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
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[80vw] mx-auto">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl text-[#284159] leading-tight tracking-wide">
            VIVIENDO EN LUZ,<br />
            PREDICANDO LA VERDAD
          </h1>
        </div>

        {/* Contenedor de carrusel */}
        <div className="relative">
          {/* Botón izquierdo - Solo se muestra si se puede ir hacia atrás */}
          {canGoBack && (
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 sm:-translate-x-12 lg:-translate-x-16 z-10 bg-white rounded-full p-2 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-300 hidden sm:block"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </button>
          )}

          {/* Carrusel de tarjetas */}
          <div 
            className="overflow-hidden touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-4 md:gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`
              }}
            >
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="bg-[#EEEBE7] p-6 md:p-8 rounded-xl flex-shrink-0"
                  style={{
                    width: `calc(${100 / visibleCards}% - ${visibleCards > 1 ? '1rem' : '0px'})`
                  }}
                >
                  {/* Icono */}
                  <div className="flex justify-start mb-4">
                    <img 
                      src={program.icon} 
                      alt={`${program.title} icon`}
                      className="w-12 h-12"
                    />
                  </div>

                  {/* Título */}
                  <h3 className="text-lg font-semibold text-[#18212D] text-left mb-3 leading-tight">
                    {program.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-[#18212D] text-sm leading-relaxed text-left">
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
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 sm:translate-x-12 lg:translate-x-16 z-10 bg-white rounded-full p-2 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-300 hidden sm:block"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProgramasEducativos;