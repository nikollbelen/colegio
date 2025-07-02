"use client";

import { useTranslations } from "@/locales/useTranslations";
import { useParams } from "next/navigation";
import Image from "next/image";
import "./Banner.css";

export default function Banner() {
  const params = useParams();
  const t = useTranslations(params.lang as "es" | "en");

  return (
    <div className="banner-container rounded-b-lg md:rounded-b-xl xl:rounded-b-[2rem] relative w-[100%] h-[60vh] sm:h-[70vh] md:h-[80vh] shrink-0 overflow-hidden flex justify-center items-center">
      <div className="image-wrapper absolute inset-0">
        <Image
          src="/assets/images/banner.jpg"
          alt="Main Banner"
          className="banner-image w-full h-full object-cover"
          width={1920}
          height={1080}
          priority
        />
      </div>

      <div className="absolute inset-0 [background:linear-gradient(180deg,rgba(194,225,255,0)_42.08%,rgba(12,57,101,0.50)_74.24%,#282828_99.97%)]"></div>

      {/* Vector superior derecho - Oculto en móvil */}
      <Image
        src="/assets/images/Vector.svg"
        alt="Elemento de fondo de vector superior derecho"
        className="absolute top-0 right-0 w-[120px] h-[104px] sm:w-[150px] sm:h-[130px] md:w-[184.6px] md:h-[160.7px] shrink-0 fill-[#EB0723] hidden sm:block"
        width={184.6}
        height={160.7}
      />

      {/* Vector inferior izquierdo - Oculto en móvil */}
      <Image
        src="/assets/images/Vector.svg"
        alt="Elemento de fondo de vector inferior izquierdo"
        className="absolute -bottom-6 sm:-bottom-8 md:-bottom-10 left-4 sm:left-6 md:left-8 w-[120px] h-[104px] sm:w-[150px] sm:h-[130px] md:w-[184.6px] md:h-[160.7px] rotate-[140deg] shrink-0 fill-[#EB0723] hidden sm:block"
        width={184.6}
        height={160.7}
      />

      {/* Contenido principal */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row items-center justify-center p-4 sm:p-6 md:p-10 z-10 w-full max-w-6xl">
        
        {/* Logo y título */}
        <div className="relative flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
          <div className="relative">
            <Image
              src="/assets/images/vector azul.svg"
              alt="Ilustración de fondo azul"
              className="w-[150px] h-[130px] sm:w-[170px] sm:h-[148px] md:w-[auto] md:h-[auto] sm:pr-4 md:pr-8"
              width={184.6}
              height={160.7}
            />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap">
              <h1>{t("NB007")}</h1>
            </span>
          </div>
        </div>

        {/* Texto descriptivo */}
        <div className="text-center sm:text-left sm:ml-6 md:ml-12">
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
            <span className="block">{t("NB008")}</span>
            <span className="block">{t("NB009")}</span>
          </p>
        </div>
        
      </div>
    </div>
  );
}