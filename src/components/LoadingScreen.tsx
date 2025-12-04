"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Esperar a que el DOM esté completamente cargado
    const handleLoad = () => {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 800); // Duración del fade out
      }, 500); // Pequeño delay para que se vea el logo
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0d101f] flex items-center justify-center transition-opacity duration-800 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse" />
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Logo container */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Loading Image with pulse animation */}
        <div className="relative animate-pulse-slow">
          <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-2xl animate-ping" />
          <img
            src="/loading/loading-image.png"
            alt="Loading"
            className="relative w-64 md:w-80 h-auto drop-shadow-2xl animate-fade-in"
          />
        </div>

        {/* Loading animation */}
        <div className="flex flex-col items-center gap-4">
          {/* Animated dots */}
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
          </div>

          {/* Loading bar */}
          <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-loading-bar" />
          </div>
        </div>
      </div>
    </div>
  );
}
