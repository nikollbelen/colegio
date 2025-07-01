import { useTranslations } from "@/locales/useTranslations";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  const params = useParams();
  const t = useTranslations(params.lang as "es" | "en");

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNosotrosOpen, setIsNosotrosOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleNosotros = () => {
    setIsNosotrosOpen(!isNosotrosOpen);
  };

  return (
    <nav
      className={`navbar ${
        isScrolled ? "scrolled" : ""
      } flex w-full justify-between items-center bg-[var(--beige,#EEEBE7)] shadow-[0px_4px_5px_1px_rgba(0,0,0,0.15)] px-8 sm:px-16 lg:px-20 py-2`}
    >
      {/* Logo */}
      <div className="w-[165px] h-[55px] shrink-0 aspect-[3/1]">
        <Link href="/" className="flex items-center">
          <img
            src="/assets/images/logo.png"
            alt="Colegio Sagrado Corazón Logo"
            width={220}
            height={60}
            className="navbar__logo-image"
          />
        </Link>
      </div>

      {/* Enlaces centrales */}
      <div className="flex-grow flex justify-end items-center">
        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-600 hover:text-gray-900"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-8 px-0 py-1">
          <li>
            <Link
              href="/"
              className="text-[#18212D] hover:text-gray-900 font-medium"
            >
              {t("NB001")}
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={toggleNosotros}
              className="text-[#18212D] hover:text-gray-900 font-medium flex items-center"
            >
              {t("NB002")}
              <svg
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                  isNosotrosOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isNosotrosOpen && (
              <div className="absolute top-full left-0 mt-8 w-48 bg-[var(--beige,#EEEBE7)] rounded-md shadow-lg border border-gray-200 z-50">
                <div className="py-1">
                  <Link
                    href="/historia"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Historia
                  </Link>
                  <Link
                    href="/mision-vision"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Misión y Visión
                  </Link>
                  <Link
                    href="/equipo"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Equipo Directivo
                  </Link>
                  <Link
                    href="/instalaciones"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Instalaciones
                  </Link>
                </div>
              </div>
            )}
          </li>
          <li>
            <Link
              href={`/${params.lang as "es" | "en"}/propuesta-educativa`}
              className="text-[#18212D] hover:text-gray-900 font-medium"
            >
              {t("NB003")}
            </Link>
          </li>
          <li>
            <Link
              href={`/${params.lang as "es" | "en"}/cultural`}
              className="text-[#18212D] hover:text-gray-900 font-medium"
            >
              {t("NB004")}
            </Link>
          </li>
          <li>
            <Link
              href={`/${params.lang as "es" | "en"}/contacto`}
              className="text-[#18212D] hover:text-gray-900 font-medium"
            >
              {t("NB005")}
            </Link>
          </li>
          <li>
            <Link
              href={`/${params.lang as "es" | "en"}/admision`}
              className="bg-[#00509D] text-white px-6 py-2 rounded-md font-medium "
            >
              {t("NB006")}
            </Link>
          </li>
        </ul>
      </div>

      {/* Menú móvil */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white shadow-lg transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden z-50`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="flex items-center">
              <img
                src="/assets/images/logo.png"
                alt="Colegio Sagrado Corazón Logo"
                width={220}
                height={60}
                className="navbar__logo-image"
              />
            </Link>
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className="block text-gray-700 hover:text-gray-900 font-medium"
                onClick={toggleMenu}
              >
                {t("NB001")}
              </Link>
            </li>
            <li>
              <button
                onClick={toggleNosotros}
                className="flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900 font-medium"
              >
                {t("NB002")}
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isNosotrosOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isNosotrosOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    href="/historia"
                    className="block text-gray-600 hover:text-gray-900"
                    onClick={toggleMenu}
                  >
                    Historia
                  </Link>
                  <Link
                    href="/mision-vision"
                    className="block text-gray-600 hover:text-gray-900"
                    onClick={toggleMenu}
                  >
                    Misión y Visión
                  </Link>
                  <Link
                    href="/equipo"
                    className="block text-gray-600 hover:text-gray-900"
                    onClick={toggleMenu}
                  >
                    Equipo Directivo
                  </Link>
                  <Link
                    href="/instalaciones"
                    className="block text-gray-600 hover:text-gray-900"
                    onClick={toggleMenu}
                  >
                    Instalaciones
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link
                href="/propuesta-educativa"
                className="block text-gray-700 hover:text-gray-900 font-medium"
                onClick={toggleMenu}
              >
                {t("NB003")}
              </Link>
            </li>
            <li>
              <Link
                href="/cubicol"
                className="block text-gray-700 hover:text-gray-900 font-medium"
                onClick={toggleMenu}
              >
                {t("NB004")}
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                className="block text-gray-700 hover:text-gray-900 font-medium"
                onClick={toggleMenu}
              >
                {t("NB005")}
              </Link>
            </li>
          </ul>

          <div className="mt-8">
            <Link
              href="/admision"
              className="block w-full text-center bg-[#00509D] text-white px-6 py-2 rounded-md font-medium "
              onClick={toggleMenu}
            >
              {t("NB006")}
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute right-0 top-full mt-2 w-full bg-white shadow-lg border border-gray-200 z-50">
          <div className="py-2 px-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-gray-900 py-2"
              onClick={toggleMenu}
            >
              {t("NB001")}
            </Link>
            <button
              onClick={toggleNosotros}
              className="w-full text-left text-gray-700 hover:text-gray-900 py-2 flex items-center justify-between"
            >
              {t("NB002")}
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  isNosotrosOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isNosotrosOpen && (
              <div className="pl-4">
                <Link
                  href="/historia"
                  className="block text-gray-600 hover:text-gray-900 py-2"
                  onClick={toggleMenu}
                >
                  Historia
                </Link>
                <Link
                  href="/mision-vision"
                  className="block text-gray-600 hover:text-gray-900 py-2"
                  onClick={toggleMenu}
                >
                  Misión y Visión
                </Link>
              </div>
            )}
            <Link
              href="/propuesta-educativa"
              className="block text-gray-700 hover:text-gray-900 py-2"
              onClick={toggleMenu}
            >
              {t("NB003")}
            </Link>
            <Link
              href="/cultural"
              className="block text-gray-700 hover:text-gray-900 py-2"
              onClick={toggleMenu}
            >
              {t("NB004")}
            </Link>
            <Link
              href="/contacto"
              className="block text-gray-700 hover:text-gray-900 py-2"
              onClick={toggleMenu}
            >
              {t("NB005")}
            </Link>
            <Link
              href="/admision"
              className="block text-gray-700 hover:text-gray-900 py-2"
              onClick={toggleMenu}
            >
              {t("NB006")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
