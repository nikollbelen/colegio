'use client';

import Banner from '@/componets/sections/admision/Banner';
import PorQueElegirnos from '@/componets/sections/admision/PorQueElegirnos';
import Navbar from '@/componets/sections/Navbar';
import NuestroCampus from '@/componets/sections/admision/NuestroCampus';
import CarruselAdmision from '@/componets/sections/admision/CarruselAdmision';
import Footer from '@/componets/sections/Footer';

export default function Admision() {

  return (
    <>
    <Navbar />
    <Banner />
    <PorQueElegirnos />
    <CarruselAdmision />
    <NuestroCampus />
    <Footer />
    </>
  );
}