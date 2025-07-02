'use client';

import "./PorQueElegirnos.css";

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
        className={`card-item relative rounded-xl overflow-hidden shadow-lg p-6 flex flex-col w-full
                    ${isImageCard ? 'bg-cover bg-center' : bgColor}
                    ${isImageCard ? 'justify-end' : 'justify-center items-start'}
                    ${columnType !== 'center' ? 'card-with-sibling' : 'card-single'}`}
        data-column={columnType}
      >
        {isImageCard && (
          <img
            src={image}
            alt={title || "Background image"}
            className="card-image absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 ease-out"
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
                  {additionalText && (
                    <p className={`card-description text-sm leading-relaxed ${textColor} transition-all duration-500 ease-out transform`}>
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
      <section className="relative py-28 bg-[#EEEBE7] overflow-hidden">
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
          <h1 className="text-4xl md:text-5xl text-center mb-12 text-[#4A5765]">
            ¿POR QUÉ ELEGIRNOS?
          </h1>

          <div className="cards-container flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:gap-8 justify-items-center max-w-[1031px] mx-auto" style={{ height: '70vh', minHeight: '600px' }}>

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
      </section>
    </>
  );
}