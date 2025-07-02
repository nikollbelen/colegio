import React, { useState } from 'react';

interface ImageData {
  id: number;
  src: string;
  alt: string;
}

interface CategoryData {
  id: string;
  name: string;
  buttonColor: string;
  images: ImageData[];
}

const CampusCarousel: React.FC = () => {
  const categories: CategoryData[] = [
    {
      id: 'servicios',
      name: 'Servicios',
      buttonColor: 'bg-[#00509D] hover:bg-[#00509D]',
      images: [
        { id: 1, src: '/assets/images/NuestroCampus/Servicios/img1.jpg', alt: 'Servicios 1' },
        { id: 2, src: '/assets/images/NuestroCampus/Servicios/img2.jpg', alt: 'Servicios 2' },
        { id: 3, src: '/assets/images/NuestroCampus/Servicios/img3.png', alt: 'Servicios 3' },
        { id: 4, src: '/assets/images/NuestroCampus/Servicios/img4.jpg', alt: 'Servicios 4' }
      ]
    },
    {
      id: 'academica',
      name: 'Académica',
      buttonColor: 'bg-[#EB0723] hover:bg-[#EB0723]',
      images: [
        { id: 5, src: '/assets/images/NuestroCampus/Academica/img1.png', alt: 'Académica 1' },
        { id: 6, src: '/assets/images/NuestroCampus/Academica/img2.png', alt: 'Académica 2' },
        { id: 7, src: '/assets/images/NuestroCampus/Academica/img3.png', alt: 'Académica 3' },
        { id: 8, src: '/assets/images/NuestroCampus/Academica/img4.png', alt: 'Académica 4' }
      ]
    },
    {
      id: 'recreacion',
      name: 'Recreación',
      buttonColor: 'bg-[#FFB700] hover:bg-[#FFB700]',
      images: [
        { id: 9, src: '/assets/images/NuestroCampus/Recreacion/img1.png', alt: 'Recreación 1' },
        { id: 10, src: '/assets/images/NuestroCampus/Recreacion/img2.png', alt: 'Recreación 2' },
        { id: 11, src: '/assets/images/NuestroCampus/Recreacion/img3.png', alt: 'Recreación 3' },
        { id: 12, src: '/assets/images/NuestroCampus/Recreacion/img4.png', alt: 'Recreación 4' }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleCategoryChange = (category: CategoryData) => {
    setActiveCategory(category);
    setCurrentImageIndex(0);
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const currentImage = activeCategory.images[currentImageIndex];

  return (
    <div className="w-full bg-[#EEEBE7] py-28 pb-32 relative overflow-hidden">
      
      {/* Imágenes decorativas de fondo */}
      <img
        src="/assets/images/vector elegirnos.svg"
        alt="Vector decorativo superior derecho"
        className="absolute top-0 left-0 w-[30rem] h-auto z-[2]"
      />

      <img
        src="/assets/images/fondo elegirnos.svg"
        alt="Vector decorativo inferior derecho"
        className="absolute bottom-0 right-0 w-[30rem] h-auto z-[2] rotate-180"
      />
      
      {/* Título */}
      <div className="text-center mb-8 relative z-10">
        <h1 className="text-5xl text-[#4A5765] tracking-widest">
          NUESTRO CAMPUS
        </h1>
      </div>

      {/* Contenedor principal del carrusel */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative">
            {/* Imagen principal grande */}
            <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay con gradiente sutil */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
              
            </div>

            {/* Panel inferior derecho con miniaturas */}
            <div className="absolute bottom-16 right-6">
              <div className="flex space-x-2">
                {activeCategory.images.slice(0, 3).map((image, index) => (
                  <div
                    key={image.id}
                    className={`cursor-pointer rounded-lg overflow-hidden transition-all duration-500 transform hover:scale-105 ${
                      index === currentImageIndex 
                        ? 'ring-3 ring-white shadow-xl' 
                        : 'hover:shadow-lg'
                    }`}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-16 h-12 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Botones de categorías flotando fuera del carrusel en el centro inferior */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-3">
              {categories.map((category) => {
                let iconSrc = '';
                if (category.id === 'servicios') iconSrc = '/assets/images/NuestroCampus/servicios.svg';
                else if (category.id === 'academica') iconSrc = '/assets/images/NuestroCampus/academica.svg';
                else if (category.id === 'recreacion') iconSrc = '/assets/images/NuestroCampus/recreacion.svg';
                
                return (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-all duration-500 transform hover:scale-105 shadow-lg ${
                      activeCategory.id === category.id
                        ? `${category.buttonColor} ring-4 ring-white/50`
                        : `${category.buttonColor}`
                    }`}
                  >
                    <img src={iconSrc} alt={`${category.name} icon`} className="w-5 h-5" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusCarousel;