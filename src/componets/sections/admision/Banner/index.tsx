"use client";

import { useTranslations } from "@/locales/useTranslations";
import { useParams } from "next/navigation";
import Image from "next/image";
import "./Banner.css";

export default function Banner() {
  const params = useParams();
  const t = useTranslations(params.lang as "es" | "en");

  return (
    <div className="banner-container rounded-b-lg md:rounded-b-xl xl:rounded-b-[2rem] relative w-[100%] h-[80vh] shrink-0 overflow-hidden flex justify-center items-center">
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

      <Image
        src="/assets/images/Vector.svg"
        alt="Elemento de fondo de vector superior derecho"
        className="absolute top-0 right-0 w-[184.6px] h-[160.7px] shrink-0 fill-[#EB0723]"
        width={184.6}
        height={160.7}
      />

      <Image
        src="/assets/images/Vector.svg"
        alt="Elemento de fondo de vector inferior izquierdo"
        className="absolute -bottom-10 left-8 w-[184.6px] h-[160.7px] rotate-[140deg] shrink-0 fill-[#EB0723]"
        width={184.6}
        height={160.7}
      />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center p-10 z-10">
        <div className="relative">
          <Image
            src="/assets/images/vector azul.svg"
            alt="Ilustración de fondo azul"
            className="w-[auto] h-[auto] pr-8"
            width={184.6}
            height={160.7}
          />
          <span className="pl-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl whitespace-nowrap">
            <h1>{t("NB007")}</h1>
          </span>
        </div>

        <p className="text-white text-2xl ml-12 whitespace-nowrap">
          {t("NB008")}<br />{t("NB009")}
        </p>
      </div>
    </div>
  );
}