import React from 'react';
import { useParams } from 'next/navigation';

const Admision2026 = () => {
  const params = useParams();
  return (
    <div className="w-full py-8 px-4 mb-[-18rem] z-10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#003467] rounded-3xl px-8 py-8 md:pl-0 md:pb-0 text-white relative overflow-hidden min-h-[200px] z-10">
        
          {/* Mancha amarilla - pegada a la izquierda */}
          <div className="absolute left-0 bottom-1/3 transform translate-y-1/2 z-10">
            <img 
              src="/assets/images/Admision2026/Vector amarillo.svg" 
              alt="Mancha amarilla" 
              className="w-64 h-64 md:w-80 md:h-80"
            />
          </div>
          
          {/* Mancha roja - arriba */}
          <div className="absolute top-[-3rem] left-1/3 transform -translate-x-1/2 z-10">
            <img 
              src="/assets/images/Admision2026/Vector rojo.svg" 
              alt="Mancha roja" 
              className="w-52 h-52 md:w-64 md:h-64"
            />
          </div>
          
          {/* Mancha azul claro - abajo */}
          <div className="absolute bottom-[-4rem] left-1/2 transform -translate-x-1/2 z-30">
            <img 
              src="/assets/images/Admision2026/Vector azul claro.svg" 
              alt="Mancha azul claro" 
              className="w-52 h-52 md:w-64 md:h-64"
            />
          </div>
          
          {/* Contenedor principal - layout responsive */}
          <div className="relative z-10 flex items-center justify-center min-h-[350px]">
            
            {/* Lado izquierdo - vacío en móvil, imagen en desktop */}
            <div className="hidden md:flex flex-1 justify-start items-end">
              <img 
                src="/assets/images/Admision2026/niñas.png" 
                alt="Niñas estudiantes" 
                className="w-auto h-80 lg:h-96 object-cover object-top rounded-tr-2xl"
              />
            </div>
            
            {/* Contenido de texto - centrado */}
            <div className="flex-1 flex flex-col justify-center items-center text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 tracking-wide">
                ADMISIÓN 2026
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed opacity-90 max-w-md">
                Forma parte de una comunidad que<br className="hidden md:block" />
                <span className="md:hidden"> </span>educa con el corazón, en Luz y Verdad.
              </p>
              
              <button onClick={() => window.location.href = `/${params.lang as "es" | "en"}/admision`} className="cursor-pointer bg-[#FFB700] text-white font-semibold px-6 md:px-8 py-2 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-lg">
                Ver más →
              </button>


            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Admision2026;