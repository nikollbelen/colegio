'use client';

import Banner from '@/componets/sections/Banner';
import PorQueElegirnos from '@/componets/sections/PorQueElegirnos';
import Navbar from '@/componets/sections/Navbar';
import NuestroCampus from '@/componets/sections/NuestroCampus';
import Admision from '@/componets/sections/Admision';
import Footer from '@/componets/sections/Footer';

export default function Home() {

  return (
    <>
    <Navbar />
    <Banner />
    <PorQueElegirnos />
    <Admision />
    <NuestroCampus />
    <Footer />
    </>
  );
}
