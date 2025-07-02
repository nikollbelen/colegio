'use client';

import Navbar from '@/componets/sections/Navbar';
import Footer from '@/componets/sections/Footer';
import VideoPlayer from '@/componets/ui/VideoPlayer';
import Admision2026 from '@/componets/sections/landing/Admision2026';
import TrabajaConNosotros from '@/componets/sections/landing/TrabajaConNosotros';
import NuestrosColaboradores from '@/componets/sections/landing/NuestrosColaboradores';
import Actualidad from '@/componets/sections/landing/Actualidad';
import ProgramasEducativos from '@/componets/sections/landing/ProgramasEducativos';

export default function Home() {

  return (
    <>
    <Navbar />
    <VideoPlayer videoSrc="/assets/videos/video.mp4" />
    <ProgramasEducativos />
    <Admision2026 />
    <Actualidad />
    <NuestrosColaboradores />
    <TrabajaConNosotros />
    <Footer />
    </>
  );
}
