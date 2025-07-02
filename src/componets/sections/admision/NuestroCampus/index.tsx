import React, { useState } from 'react';
import Image from 'next/image';

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

export default function CampusCarousel() {
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
    <div className="w-full bg-[#EEEBE7] py-12 md:py-20 lg:py-28 pb-16 md:pb-24 lg:pb-32 relative overflow-hidden">
      
      {/* Título */}
      <div className="text-center mb-6 md:mb-8 relative z-10 px-4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-[#284159]">
          NUESTRO CAMPUS
        </h1>
      </div>

      {/* Contenedor principal del carrusel */}
      <div className="max-w-7xl mx-auto px-3 md:px-4 relative z-10">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl overflow-visible relative">
          <div className="relative rounded-2xl md:rounded-3xl">
            {/* Imagen principal grande */}
            <div className="relative h-48 sm:h-64 md:h-96 lg:h-[500px] xl:h-[600px] overflow-hidden rounded-2xl md:rounded-3xl">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Panel inferior derecho con miniaturas - Responsive */}
            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-8 md:right-6 lg:bottom-16">
              <div className="flex space-x-1 sm:space-x-2">
                {activeCategory.images.slice(0, 3).map((image, index) => (
                  <div
                    key={image.id}
                    className={`cursor-pointer rounded-md md:rounded-lg overflow-hidden transition-all duration-500 transform hover:scale-105 ${
                      index === currentImageIndex 
                        ? 'ring-2 md:ring-3 ring-white shadow-lg md:shadow-xl' 
                        : 'hover:shadow-lg'
                    }`}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={500}
                      height={500}
                      className="w-8 h-6 sm:w-12 sm:h-9 md:w-16 md:h-12 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Botones de categorías - Solo visible en desktop, flotando */}
          <div className="hidden md:block absolute -bottom-8 left-1/2 transform -translate-x-1/2">
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
                    className={`cursor-pointer flex items-center space-x-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-all duration-500 transform hover:scale-105 shadow-lg ${
                      activeCategory.id === category.id
                        ? `${category.buttonColor} ring-4 ring-white/50`
                        : `${category.buttonColor}`
                    }`}
                  >
                    <Image 
                      src={iconSrc} 
                      alt={`${category.name} icon`} 
                      width={1920} 
                      height={1080} 
                      className="w-5 h-5 mr-2" 
                    />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Botones de categorías para móvil y tablet - Debajo del carrusel */}
        <div className="block md:hidden mt-4">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2 px-4">
            {categories.map((category) => {
              let iconSrc = '';
              if (category.id === 'servicios') iconSrc = '/assets/images/NuestroCampus/servicios.svg';
              else if (category.id === 'academica') iconSrc = '/assets/images/NuestroCampus/academica.svg';
              else if (category.id === 'recreacion') iconSrc = '/assets/images/NuestroCampus/recreacion.svg';
              
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category)}
                  className={`cursor-pointer flex items-center justify-center space-x-2 px-4 py-3 rounded-full text-white font-semibold text-sm transition-all duration-500 transform hover:scale-105 shadow-lg w-full sm:w-auto ${
                    activeCategory.id === category.id
                      ? `${category.buttonColor} ring-2 ring-white/50`
                      : `${category.buttonColor}`
                  }`}
                >
                  <Image 
                    src={iconSrc} 
                    alt={`${category.name} icon`} 
                    width={500} 
                    height={500} 
                    className="w-4 h-4 flex-shrink-0" 
                  />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};