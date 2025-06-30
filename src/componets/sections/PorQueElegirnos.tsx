'use client';

import { useState } from "react";

export default function PorQueElegirnos() {
  const cardsData = [
    {
      id: 1,
      image: "",
      icon: "/assets/images/Icon 1.svg",
      title: "Desarrollo de talentos desde la infancia",
      additionalText: "Talleres artísticos, tecnológicos y deportivos con selecciones en diversas disciplinas.",
      bgColor: "bg-[#EB0723]",
      textColor: "text-white",
      isImageCard: false,
    },
    {
      id: 2,
      image: "/assets/images/card2.jpg",
      icon: "/assets/images/Icon 2.svg",
      title: "Pedagogía de luz y verdad con formación inclusiva.",
      additionalText: "Formación integral con acompañamiento psicopedagógico y enseñanza trilingüe desde inicial.",
      bgColor: "",
      textColor: "text-white",
      isImageCard: true,
    },
    {
      id: 3,
      image: "",
      icon: "/assets/images/Icon 3.svg",
      title: "Formación en valores y espiritualidad",
      additionalText: "Educación espiritual basada en AMAR y PEC, inspirada en el carisma de las Hermanas Dominicas.",
      bgColor: "bg-[#FFB700]",
      textColor: "text-white",
      isImageCard: false,
    },
    {
        id: 4,
        image: "/assets/images/card1.jpg",
        icon: "",
        title: "",
        additionalText: "",
        bgColor: "",
        textColor: "text-white",
        isImageCard: true,
      },
    {
        id: 5,
        image: "/assets/images/card3.jpg",
        icon: "",
        title: "",
        additionalText: "",
        bgColor: "",
        textColor: "text-white",
        isImageCard: true,
      },
  ];

  interface CardProps {
    id: number;
    image: string;
    icon: string;
    title: string;
    additionalText: string;
    bgColor: string;
    textColor: string;
    isImageCard: boolean;
    className?: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    currentHeight: { flexGrow: number; flexBasis: string; height?: string; };
    isHovered: boolean;
  }

  const Card = ({ id, image, icon, title, additionalText, bgColor, textColor, isImageCard, className = '', onMouseEnter, onMouseLeave, currentHeight, isHovered }: CardProps) => {
    return (
      <div
        className={`relative rounded-xl overflow-hidden shadow-lg p-6 flex flex-col w-full
                    ${isImageCard ? 'bg-cover bg-center' : bgColor}
                    ${isImageCard ? 'justify-end' : 'justify-center items-start'}
                    ${className}`}
        style={{
          flexGrow: currentHeight.flexGrow || 1,
          flexBasis: currentHeight.flexBasis || '50%',
          height: currentHeight.height || 'auto',
          transition: 'flex-grow 1.8s cubic-bezier(0.23, 1, 0.32, 1), flex-basis 1.8s cubic-bezier(0.23, 1, 0.32, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {isImageCard && (
          <img
            src={image}
            alt={title || "Background image"}
            className={`absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 ease-out ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
        )}

        {isImageCard && id !== 2 && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-[1]"></div>
        )}

        {isImageCard && id === 2 && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C3965] to-transparent z-[1]"></div>
        )}
        
        <div className={`relative z-10 flex flex-col h-full grow ${isImageCard ? 'justify-end' : 'justify-center'}`}>
            {icon && (
                <div className={`mb-4 rounded-full p-2 ${title ? 'self-start' : 'self-center'}`}>
                    <img src={icon} alt="Icono" className={`w-8 h-8 ${textColor}`} />
                </div>
            )}
            {title && (
                <div className="space-y-3">
                  <p className={`text-lg font-semibold leading-tight ${textColor} ${title ? 'text-left' : ''}`}>
                      {title}
                  </p>
                  {additionalText && isHovered && (
                    <p className={`text-sm leading-relaxed ${textColor} opacity-90 transition-opacity duration-300`}>
                      {additionalText}
                    </p>
                  )}
                </div>
            )}
        </div>
      </div>
    );
  };

  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);

  const getCardHeight = (cardId: number, columnCards: number[]) => {
    if (hoveredCardId === null) {
      return { flexGrow: 1, flexBasis: '100%', height: '100%' };
    }

    if (hoveredCardId === cardId) {
      return { flexGrow: 1.3, flexBasis: '65%', height: '100%' };
    }

    if (columnCards.includes(cardId) && columnCards.includes(hoveredCardId)) {
      return { flexGrow: 0.7, flexBasis: '35%' };
    }

    return { flexGrow: 1, flexBasis: '50%' };
  };

  const getAnimationClass = (cardId: number, columnCards: number[]) => {
    if (hoveredCardId === null) return '';
    
    if (hoveredCardId === cardId) {
      return 'animate-smooth-expand';
    }
    
    if (columnCards.includes(cardId) && columnCards.includes(hoveredCardId)) {
      return 'animate-smooth-shrink';
    }
    
    return '';
  };

  const handleMouseEnter = (cardId: number) => {
    setHoveredCardId(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCardId(null);
  };

  return (
    <section className="relative py-28 bg-[#EEEBE7] overflow-hidden">
      <style jsx>{`
        @keyframes smoothExpand {
          0% { 
            transform: scale(1); 
            filter: brightness(1);
          }
          30% { 
            transform: scale(1.005); 
            filter: brightness(1.02);
          }
          100% { 
            transform: scale(1.01); 
            filter: brightness(1.05);
          }
        }
        
        @keyframes smoothShrink {
          0% { 
            transform: scale(1); 
            filter: brightness(1);
          }
          30% { 
            transform: scale(0.995); 
            filter: brightness(0.98);
          }
          100% { 
            transform: scale(0.99); 
            filter: brightness(0.95);
          }
        }
        
        @keyframes smoothReturn {
          0% { 
            transform: scale(1.01); 
            filter: brightness(1.05);
          }
          70% { 
            transform: scale(1.005); 
            filter: brightness(1.02);
          }
          100% { 
            transform: scale(1); 
            filter: brightness(1);
          }
        }
        
        .animate-smooth-expand {
          animation: smoothExpand 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .animate-smooth-shrink {
          animation: smoothShrink 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .animate-smooth-return {
          animation: smoothReturn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>

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
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#4A5765]">
          ¿POR QUÉ ELEGIRNOS?
        </h2>

        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:gap-8 justify-items-center max-w-[1031px] mx-auto" style={{ height: '70vh', minHeight: '600px' }}>

          {/* Columna Izquierda */}
          <div className="flex flex-col gap-8 w-full" style={{ height: '100%' }}>
            <Card
                key={cardsData[0].id}
                {...cardsData[0]}
                currentHeight={getCardHeight(cardsData[0].id, [cardsData[0].id, cardsData[3].id])}
                onMouseEnter={() => handleMouseEnter(cardsData[0].id)}
                onMouseLeave={handleMouseLeave}
                className={getAnimationClass(cardsData[0].id, [cardsData[0].id, cardsData[3].id])}
                isHovered={hoveredCardId === cardsData[0].id}
            />
            <Card
                key={cardsData[3].id}
                {...cardsData[3]}
                currentHeight={getCardHeight(cardsData[3].id, [cardsData[0].id, cardsData[3].id])}
                onMouseEnter={() => handleMouseEnter(cardsData[3].id)}
                onMouseLeave={handleMouseLeave}
                className={getAnimationClass(cardsData[3].id, [cardsData[0].id, cardsData[3].id])}
                isHovered={hoveredCardId === cardsData[3].id}
            />
          </div>

          {/* Columna Central */}
          <div className="w-full" style={{ height: '100%' }}>
            <Card 
              key={cardsData[1].id} 
              {...cardsData[1]} 
              className="" 
              currentHeight={{ flexGrow: 1, flexBasis: '0', height: '100%' }}
              onMouseEnter={() => handleMouseEnter(cardsData[1].id)}
              onMouseLeave={handleMouseLeave}
              isHovered={hoveredCardId === cardsData[1].id}
            />
          </div>

          {/* Columna Derecha */}
          <div className="flex flex-col gap-8 w-full" style={{ height: '100%' }}>
            <Card
                key={cardsData[4].id}
                {...cardsData[4]}
                currentHeight={getCardHeight(cardsData[4].id, [cardsData[4].id, cardsData[2].id])}
                onMouseEnter={() => handleMouseEnter(cardsData[4].id)}
                onMouseLeave={handleMouseLeave}
                className={getAnimationClass(cardsData[4].id, [cardsData[4].id, cardsData[2].id])}
                isHovered={hoveredCardId === cardsData[4].id}
            />
            <Card
                key={cardsData[2].id}
                {...cardsData[2]}
                currentHeight={getCardHeight(cardsData[2].id, [cardsData[4].id, cardsData[2].id])}
                onMouseEnter={() => handleMouseEnter(cardsData[2].id)}
                onMouseLeave={handleMouseLeave}
                className={getAnimationClass(cardsData[2].id, [cardsData[4].id, cardsData[2].id])}
                isHovered={hoveredCardId === cardsData[2].id}
            />
          </div>
        </div>
      </div>
    </section>
  );
}