import React from 'react';

// Define una lista de colaboradores para que sea fácil de actualizar
const collaborators = [
  {
    name: 'Universidad Católica de Santa María',
    logo: '/assets/images/colaboradores/ucsm.png', // Reemplaza con tu ruta
  },
  {
    name: 'Alliance Française',
    logo: '/assets/images/colaboradores/af.png', // Reemplaza con tu ruta
  },
  {
    name: 'Universidad Católica San Pablo',
    logo: '/assets/images/colaboradores/ucsp.png', // Reemplaza con tu ruta
  },
  {
    name: 'Centro Integral',
    logo: '/assets/images/colaboradores/integral.png', // Reemplaza con tu ruta
  },
  {
    name: 'Microsoft',
    logo: '/assets/images/colaboradores/microsoft.png', // Reemplaza con tu ruta
  },
];

const NuestrosColaboradores = () => {
  return (
    <section className="bg-[#F7F7F7] py-48">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-x-24 gap-y-16">
        
        {/* Título a la Izquierda */}
        <div className="text-center lg:text-left lg:w-auto flex-shrink-0">
          <h1 className="text-5xl text-[#284159] leading-tight">
            NUESTROS
            <br />
            COLABORADORES
          </h1>
        </div>

        {/* Logos a la Derecha */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8">
          {collaborators.map((collaborator) => (
            <div
              key={collaborator.name}
              className="w-32 h-32 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl"
              title={collaborator.name}
            >
              <img
                src={collaborator.logo}
                alt={`Logo de ${collaborator.name}`}
                className="w-24 h-24 object-contain"
              />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default NuestrosColaboradores;