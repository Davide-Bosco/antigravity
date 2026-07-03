"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GsapImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

/**
 * Rivela un'immagine con effetto "tenda/curtain" via clip-path GSAP.
 * La tenda scivola nella direzione specificata rivelando l'immagine.
 */
export function GsapImageReveal({
  src,
  alt,
  className = "",
  direction = "up",
}: GsapImageRevealProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const clipStart: Record<string, string> = {
    up: "inset(100% 0 0 0)",
    down: "inset(0 0 100% 0)",
    left: "inset(0 100% 0 0)",
    right: "inset(0 0 0 100%)",
  };

  useGSAP(
    () => {
      const wrap = wrapRef.current;
      const img = imgRef.current;
      if (!wrap || !img) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // L'immagine si rivela alzando la tenda (clip-path)
      tl.fromTo(
        wrap,
        { clipPath: clipStart[direction] },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.1,
          ease: "power4.inOut",
        }
      );

      // In parallelo l'immagine scala leggermente verso il basso (ken-burns)
      tl.fromTo(
        img,
        { scale: 1.18 },
        { scale: 1, duration: 1.3, ease: "power3.out" },
        "<"
      );
    },
    { scope: wrapRef }
  );

  return (
    <div
      ref={wrapRef}
      className={`overflow-hidden ${className}`}
      style={{ clipPath: clipStart[direction] }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover will-change-transform"
      />
    </div>
  );
}
