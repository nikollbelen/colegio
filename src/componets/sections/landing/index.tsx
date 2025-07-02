import React from 'react';

const TrabajaConNosotros = () => {
  return (
    <div className="bg-[#003467] text-white flex flex-col items-center justify-center pt-40 pb-32 px-5 text-center relative overflow-hidden">
      {/* Ilustraciones de fondo */}
      <img
        src="/assets/images/TrabajaConNosotros/Vector amarillo.svg"
        alt="Manchón de color amarillo decorativo"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 md:w-80 z-0"
      />
      <img
        src="/assets/images/TrabajaConNosotros/Vector rojo.svg"
        alt="Manchón de color rojo decorativo"
        className="absolute bottom-0 left-24 w-52 md:w-80 z-0"
      />
       <img
        src="/assets/images/TrabajaConNosotros/Vector linea.svg"
        alt="Línea punteada amarilla decorativa"
        className="absolute bottom-0 left-0 w-14 z-0"
      />
       <img
        src="/assets/images/TrabajaConNosotros/Vector linea2.svg"
        alt="Línea punteada amarilla decorativa"
        className="absolute top-0 right-0 w-32 z-0"
      />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center mt-8">
        <h1 className="text-5xl mb-4">
          TRABAJA CON NOSOTROS
        </h1>
        <p className="text-xl mb-10">
          Te invitamos a ser parte de nuestra comunidad educativa
        </p>
        <button
          className="bg-[#FFB700] text-[#003467] font-bold py-2 px-8 rounded-md flex items-center justify-center transition-transform duration-500 hover:scale-105 cursor-pointer"
          onClick={() => {
            // Lógica de navegación aquí
          }}
          aria-label="Ver más sobre oportunidades laborales"
        >
          Ver más
          {/* SVG de la flecha */}
          <svg 
            width="10"
            height="10" 
            viewBox="0 0 10 10" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="ml-3.5"
          >
            <path 
              d="M1 9L9 1M9 1H1M9 1V9" 
              stroke="#003467"
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TrabajaConNosotros;