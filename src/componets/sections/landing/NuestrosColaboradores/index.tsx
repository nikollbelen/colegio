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
          <h2 className="text-5xl font-extrabold text-[#284159] leading-tight">
            NUESTROS
            <br />
            COLABORADORES
          </h2>
        </div>

        {/* Logos a la Derecha */}
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
          {collaborators.map((collaborator) => (
            <img
              key={collaborator.name}
              src={collaborator.logo}
              alt={`Logo de ${collaborator.name}`}
              title={collaborator.name}
              className="h-18 max-w-28 w-auto object-contain transition-transform duration-500 hover:scale-110"
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default NuestrosColaboradores;