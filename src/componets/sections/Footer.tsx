import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white py-12 px-6 relative overflow-hidden lg:pt-0 lg:overflow-visible">
      <img
        src="/assets/images/Footer/ilustracion fondo.svg"
        alt="Vector decorativo superior derecho"
        className="absolute top-0 left-0 w-[20rem] h-auto z-[2] rotate-180"
      />

      <img
        src="/assets/images/Footer/ilustracion fondo.svg"
        alt="Vector decorativo inferior derecho"
        className="absolute bottom-0 right-0 w-[20rem] h-auto z-[2]"
      />

      <div className="max-w-7xl mx-auto relative z-[3]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Columna 1 - Logo */}
          <div className="flex justify-center lg:justify-start">
            <img 
              src="/assets/images/Footer/logo_blanco.png" 
              alt="CEP Sagrado Corazón"
              className="h-20 w-auto"
            />
          </div>
          
          {/* Columna 2 - Información de contacto */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Contacto:</h3>
              <div className="space-y-2 text-gray-300 text-base">
                <p>Recepción: <span className="text-white font-medium">914850168</span></p>
                <p>Secretaría de Dirección: <span className="text-white font-medium">991875421</span></p>
                <p className="text-white font-medium">sagradocorazon@scorazon.edu.pe</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Atención:</h3>
              <p className="text-gray-300 text-base">Lunes a Viernes: 8:00 am a 4:00 pm</p>
            </div>
          </div>
          
          {/* Columna 3 - Mapa */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/assets/images/Footer/mapa.png" 
                alt="Ubicación del Colegio Sagrado Corazón"
                className="rounded-xl shadow-2xl max-w-md w-full h-auto border-2 border-slate-600 lg:relative lg:bottom-[3rem]"
              />
            </div>
          </div>
        </div>
        
        {/* Línea divisoria */}
        <div className="w-full h-px bg-slate-600 my-8"></div>
        
        {/* Redes sociales */}
        <div className="flex justify-end items-center">
          <div className="flex items-center space-x-6">
            <span className="text-base text-gray-300 font-medium">Síguenos:</span>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-500 transform hover:scale-110"
                aria-label="Facebook"
              >
                <img 
                  src="/assets/images/Footer/facebook.svg" 
                  alt="Facebook"
                  className="w-8 h-8"
                />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-500 transform hover:scale-110"
                aria-label="Instagram"
              >
                <img 
                  src="/assets/images/Footer/instagram.svg" 
                  alt="Instagram"
                  className="w-8 h-8"
                />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-500 transform hover:scale-110"
                aria-label="YouTube"
              >
                <img 
                  src="/assets/images/Footer/youtube.svg" 
                  alt="YouTube"
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;