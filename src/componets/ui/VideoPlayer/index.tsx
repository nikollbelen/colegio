import React, { useState, useRef, useEffect } from 'react';

interface VideoPlayerProps {
  videoSrc?: string;
  poster?: string;
}

const VideoPlayer = ({ videoSrc, poster }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-reproducir el video cuando se monta el componente
  useEffect(() => {
    if (videoRef.current && videoSrc) {
      // Intentar reproducir automáticamente
      videoRef.current.play().catch((error) => {
        console.log('Autoplay fue bloqueado:', error);
        // Si el autoplay falla, mostrar controles
        setShowControls(true);
      });
    }
  }, [videoSrc]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((error) => {
          console.log('Error al reproducir:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    if (videoSrc) {
      handlePlayPause();
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
    setShowControls(false);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
    setShowControls(true);
  };

  const handleVideoEnded = () => {
    // Con loop activado, esto no debería ejecutarse, pero por seguridad
    setIsPlaying(false);
    setShowControls(true);
  };

  return (
    <div 
      className={`relative w-full overflow-hidden cursor-pointer ${
        videoSrc ? 'h-screen' : 'lg:h-[80vh] md:h-[60vh] h-[40vh]'
      }`} 
      onClick={handleVideoClick}
    >
      {/* Video de fondo fullscreen o fondo gris */}
      {videoSrc ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          poster={poster}
          onPlay={handleVideoPlay}
          onPause={handleVideoPause}
          onEnded={handleVideoEnded}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={videoSrc} type="video/mp4" />
          Tu navegador no soporta el elemento video.
        </video>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
      )}

      {/* Overlay oscuro sutil para mejor legibilidad del contenido */}
      {videoSrc && (
        <div className="absolute inset-0 bg-opacity-20 pointer-events-none"></div>
      )}

      {/* Botón de play/pause - Solo se muestra si el video está pausado */}
      {showControls && videoSrc && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="relative group">
            {/* Círculo exterior con efecto hover */}
            <svg 
              width="120" 
              height="120" 
              viewBox="0 0 120 120" 
              className="transition-all duration-500 group-hover:scale-110 drop-shadow-2xl"
            >
              {/* Círculo de fondo semi-transparente */}
              <circle
                cx="60"
                cy="60"
                r="55"
                fill="rgba(0, 0, 0, 0.4)"
                stroke="#ffffff"
                strokeWidth="3"
                className="transition-colors duration-500 group-hover:stroke-blue-400"
              />
              
              {/* Triángulo de play o pausa */}
              {!isPlaying ? (
                <polygon
                  points="45,40 45,80 85,60"
                  fill="#ffffff"
                  className="transition-colors duration-500 group-hover:fill-blue-400"
                />
              ) : (
                <g fill="#ffffff" className="transition-colors duration-500 group-hover:fill-blue-400">
                  <rect x="45" y="40" width="8" height="40" />
                  <rect x="67" y="40" width="8" height="40" />
                </g>
              )}
            </svg>
            
            {/* Efecto de resplandor en hover */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-white blur-xl"></div>
          </div>
        </div>
      )}

      {/* Información del video - Solo visible cuando está pausado */}
      {videoSrc && !isPlaying && showControls && (
        <div className="absolute bottom-8 left-8 text-white z-10">
          <p className="text-sm opacity-75 bg-black bg-opacity-30 px-3 py-1 rounded-full">
            Click para reproducir
          </p>
        </div>
      )}

      {/* Indicador de que el video está en mute (opcional) */}
      {videoSrc && isPlaying && (
        <div className="absolute bottom-8 right-8 text-white z-10">
          <div className="bg-black bg-opacity-30 px-3 py-1 rounded-full flex items-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
            </svg>
            <span className="ml-1 text-xs">Silenciado</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;