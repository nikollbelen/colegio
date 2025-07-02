import React from 'react';
import Image from 'next/image';

// Define una lista de colaboradores para que sea fácil de actualizar
const collaborators = [
  {
    name: 'Universidad Católica de Santa María',
    logo: '/assets/images/colaboradores/ucsm.png',
  },
  {
    name: 'Alliance Française',
    logo: '/assets/images/colaboradores/af.png',
  },
  {
    name: 'Universidad Católica San Pablo',
    logo: '/assets/images/colaboradores/ucsp.png',
  },
  {
    name: 'Centro Integral',
    logo: '/assets/images/colaboradores/integral.png',
  },
  {
    name: 'Microsoft',
    logo: '/assets/images/colaboradores/microsoft.png',
  },
];

export default function NuestrosColaboradores() {
  // Duplicamos los colaboradores para crear el efecto de loop infinito
  const duplicatedCollaborators = [...collaborators, ...collaborators];

  return (
    <section className="bg-[#F7F7F7] py-24 md:py-48 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-x-24 gap-y-16">
        
        {/* Título a la Izquierda */}
        <div className="text-center lg:text-left lg:w-auto flex-shrink-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#284159] leading-tight">
            NUESTROS
            <br />
            COLABORADORES
          </h1>
        </div>

        {/* Contenedor del Carousel */}
        <div className="w-full lg:flex-1 overflow-hidden py-4">
          <div className="relative">
            {/* Carousel Container */}
            <div className="flex animate-scroll-right">
              {duplicatedCollaborators.map((collaborator, index) => (
                <div
                  key={`${collaborator.name}-${index}`}
                  className="flex-shrink-0 mx-4"
                >
                  <div
                    className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer"
                    title={collaborator.name}
                  >
                    <Image
                      src={collaborator.logo}
                      alt={`Logo de ${collaborator.name}`}
                      width={96}
                      height={96}
                      className="w-16 h-16 md:w-24 md:h-24 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>

      {/* Estilos CSS para la animación */}
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 20s linear infinite;
          width: fit-content;
        }

        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};