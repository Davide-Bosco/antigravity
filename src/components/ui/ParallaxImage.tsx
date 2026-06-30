"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // velocità di parallasse (es. -20 o +20 pixel)
}

export function ParallaxImage({ src, alt, className = "", speed = 25 }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewHeight = window.innerHeight;

      // Se l'elemento è nel viewport
      if (rect.top <= viewHeight && rect.bottom >= 0) {
        const progress = (rect.top + rect.height / 2 - viewHeight / 2) / viewHeight;
        const offset = progress * speed * 2;
        gsap.set(img, { y: offset });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="will-change-transform transform-gpu transition-transform duration-100 ease-out w-full h-full max-h-[300px] object-contain mx-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.18)]"
      />
    </div>
  );
}
