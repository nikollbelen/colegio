'use client';

import "./PorQueElegirnos.css";
import Image from "next/image";

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
    columnType: 'left' | 'center' | 'right';
  }

  const Card = ({ id, image, icon, title, additionalText, bgColor, textColor, isImageCard, columnType }: CardProps) => {
    return (
      <div
        className={`card-item relative rounded-xl overflow-hidden shadow-lg p-4 sm:p-6 flex flex-col w-full
                    ${isImageCard ? 'bg-cover bg-center' : bgColor}
                    ${isImageCard ? 'justify-end' : 'justify-center items-start'}
                    ${columnType !== 'center' ? 'card-with-sibling' : 'card-single'}`}
        data-column={columnType}
      >
        {isImageCard && (
          <Image
            src={image}
            alt={title || "Background image"}
            className="card-image absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 ease-out"
            width={1920}
            height={1080}
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
                <div className={`mb-3 sm:mb-4 rounded-full p-2 ${title ? 'self-start' : 'self-center'}`}>
                    <Image src={icon} alt="Icono" className={`w-6 h-6 sm:w-8 sm:h-8 ${textColor}`} width={1920} height={1080} />
                </div>
            )}
            {title && (
                <div className="space-y-2 sm:space-y-3">
                  <p className={`text-base sm:text-lg font-semibold leading-tight ${textColor} ${title ? 'text-left' : ''}`}>
                      {title}
                  </p>
                  {additionalText && (
                    <p className={`card-description text-xs sm:text-sm leading-relaxed ${textColor} transition-all duration-500 ease-out transform`}>
                      {additionalText}
                    </p>
                  )}
                </div>
            )}
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="relative py-16 sm:py-20 lg:py-28 bg-[#EEEBE7] overflow-hidden">
        <Image
          src="/assets/images/vector elegirnos.svg"
          alt="Vector decorativo superior derecho"
          className="absolute top-0 left-0 w-48 sm:w-64 lg:w-[30rem] h-auto z-[2]"
          width={1920}
          height={1080}
        />

        <Image
          src="/assets/images/fondo elegirnos.svg"
          alt="Vector decorativo inferior derecho"
          className="absolute bottom-0 right-0 w-48 sm:w-64 lg:w-[30rem] h-auto z-[2] rotate-180"
          width={1920}
          height={1080}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-4 relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-10 lg:mb-12 text-[#284159]">
            ¿POR QUÉ ELEGIRNOS?
          </h1>

          {/* Layout Mobile - Stack vertical con orden específico */}
          <div className="block lg:hidden space-y-4 sm:space-y-6 max-w-md mx-auto">
            {/* 1. Tarjeta central primero */}
            <div className="h-48 sm:h-56">
              <Card
                {...cardsData[1]} // card 2 - central
                columnType="center"
              />
            </div>
            
            {/* 2. Primera columna */}
            <div className="h-48 sm:h-56">
              <Card
                {...cardsData[0]} // card 1
                columnType="center"
              />
            </div>
            <div className="h-48 sm:h-56">
              <Card
                {...cardsData[3]} // card 4
                columnType="center"
              />
            </div>
            
            {/* 3. Tercera columna - primero el texto, luego la imagen */}
            <div className="h-48 sm:h-56">
              <Card
                {...cardsData[2]} // card 3 - texto
                columnType="center"
              />
            </div>
            <div className="h-48 sm:h-56">
              <Card
                {...cardsData[4]} // card 5 - imagen
                columnType="center"
              />
            </div>
          </div>

          {/* Layout Desktop - Grid de 3 columnas */}
          <div className="hidden lg:block">
            <div 
              className="cards-container grid grid-cols-3 gap-8 justify-items-center max-w-[1031px] mx-auto" 
              style={{ height: '70vh', minHeight: '600px' }}
            >
              {/* Columna Izquierda */}
              <div className="card-column card-column-left flex flex-col gap-8 w-full h-full">
                <Card
                    key={cardsData[0].id}
                    {...cardsData[0]}
                    columnType="left"
                />
                <Card
                    key={cardsData[3].id}
                    {...cardsData[3]}
                    columnType="left"
                />
              </div>

              {/* Columna Central */}
              <div className="card-column card-column-center w-full h-full">
                <Card 
                  key={cardsData[1].id} 
                  {...cardsData[1]} 
                  columnType="center"
                />
              </div>

              {/* Columna Derecha */}
              <div className="card-column card-column-right flex flex-col gap-8 w-full h-full">
                <Card
                    key={cardsData[4].id}
                    {...cardsData[4]}
                    columnType="right"
                />
                <Card
                    key={cardsData[2].id}
                    {...cardsData[2]}
                    columnType="right"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}