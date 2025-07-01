import React from 'react';

const imageUrls = {
  left: '/assets/images/actualidad/Facebook.png',
  center: '/assets/images/actualidad/Instagram.png',
  right: '/assets/images/actualidad/Youtube.png',
};

const Actualidad = () => {
  return (
    <section 
      className="pb-48 pt-96 bg-center bg-no-repeat relative w-full min-w-full z-0"
      style={{
        backgroundImage: 'url(/assets/images/actualidad/fondo.svg)',
      }}
    >
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#284159] uppercase tracking-wider">
            Actualidad
          </h1>
          <p className="mt-4 text-lg text-[#284159] max-w-xl mx-auto">
            Conoce las actividades y el día a día del colegio a través de nuestras redes sociales.
          </p>
        </div>

        <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8">
          
          <div className="bg-white w-1/4 md:w-1/5 transition-transform duration-500 hover:scale-105 shadow-2xl overflow-hidden rounded-2xl">
            <img 
              src={imageUrls.left} 
              alt="Actividad del colegio 1" 
              className="w-full h-auto" 
            />
          </div>

          <div className="bg-white w-1/3 md:w-1/4 z-10 transition-transform duration-500 hover:scale-105 shadow-2xl overflow-hidden rounded-2xl">
            <img 
              src={imageUrls.center} 
              alt="Actividad principal del colegio" 
              className="w-full h-auto" 
            />
          </div>
          
          <div className="bg-white w-1/4 md:w-1/5 transition-transform duration-500 hover:scale-105 shadow-2xl overflow-hidden rounded-2xl">
            <img 
              src={imageUrls.right} 
              alt="Actividad del colegio 2" 
              className="w-full h-auto" 
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Actualidad;