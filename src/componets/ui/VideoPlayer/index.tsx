import React, { useState, useRef } from 'react';

interface VideoPlayerProps {
  videoSrc?: string;
  poster?: string;
}

const VideoPlayer = ({ videoSrc, poster }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    if (videoSrc) {
      handlePlayPause();
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setShowControls(true);
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
    setShowControls(false);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
    setShowControls(true);
  };

  return (
    <div 
      className={`relative w-full overflow-hidden cursor-pointer ${
        videoSrc ? 'h-auto' : 'lg:h-[80vh] md:h-[60vh] h-[40vh]'
      }`} 
      onClick={handleVideoClick}
    >
      {/* Video de fondo o fondo gris */}
      {videoSrc ? (
        <video
          ref={videoRef}
          className="w-full h-auto object-contain"
          poster={poster}
          onEnded={handleVideoEnded}
          onPlay={handleVideoPlay}
          onPause={handleVideoPause}
          muted
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Tu navegador no soporta el elemento video.
        </video>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
      )}

      {/* Botón de play/pause */}
      {showControls && (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Overlay oscuro para mejor contraste */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
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

      {/* Información del video (opcional) */}
      {videoSrc && !isPlaying && (
        <div className="absolute bottom-8 left-8 text-white">
          <p className="text-sm opacity-75">Click para reproducir</p>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;