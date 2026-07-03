"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Due modalità:
// false → puntino discreto di default
// true  → scansione laser (solo sulla sezione Hero della homepage)
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);
  const [laserMode, setLaserMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const dot = dotRef.current;
    const lens = lensRef.current;
    if (!dot || !lens) return;

    // Centramento GSAP assoluto — xPercent/yPercent -50 garantisce
    // che il centro del cerchio coincida sempre col puntatore
    gsap.set(dot, { xPercent: -50, yPercent: -50 });
    gsap.set(lens, { xPercent: -50, yPercent: -50 });

    const xDot = gsap.quickTo(dot, "x", { duration: 0.03, ease: "power3" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.03, ease: "power3" });
    const xLens = gsap.quickTo(lens, "x", { duration: 0.08, ease: "power3" });
    const yLens = gsap.quickTo(lens, "y", { duration: 0.08, ease: "power3" });

    const moveCursor = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      xDot(e.clientX);
      yDot(e.clientY);
      xLens(e.clientX);
      yLens(e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Laser scan attivo solo dentro la sezione Hero (data-cursor="laser")
      const isLaserZone = !!target.closest("[data-cursor='laser']");
      setLaserMode(isLaserZone);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Puntino centrale — bianco in laser mode, rosso altrove */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 z-[9999] pointer-events-none hidden lg:block rounded-full transition-all duration-250 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          laserMode
            ? "w-2.5 h-2.5 bg-white shadow-[0_0_12px_rgba(255,255,255,1)]"
            : "w-2.5 h-2.5 bg-[#E8001D] shadow-[0_0_8px_rgba(232,0,29,0.8)]"
        }`}
      />

      {/* Lente */}
      <div
        ref={lensRef}
        className={`fixed top-0 left-0 pointer-events-none hidden lg:flex items-center justify-center rounded-full transition-all duration-300 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          laserMode
            ? "z-[9999] w-36 h-36 border-2 border-white/70 shadow-[0_0_30px_rgba(255,255,255,0.2),_inset_0_0_20px_rgba(255,255,255,0.06)]"
            : "z-[9998] w-7 h-7 border border-[#0A0A0A]/25 bg-transparent"
        }`}
        style={
          laserMode
            ? {
                // Inverte tutti i colori dentro il cerchio + hue-rotate per dominante laser ciano-verde
                backdropFilter:
                  "invert(1) hue-rotate(160deg) saturate(300%) brightness(1.1)",
                WebkitBackdropFilter:
                  "invert(1) hue-rotate(160deg) saturate(300%) brightness(1.1)",
              }
            : undefined
        }
      >
        {/* Reticolo laser — visibile solo in laser mode */}
        {laserMode && (
          <>
            {/* Anello esterno tratteggiato — rotazione lenta */}
            <div
              className="absolute inset-1 rounded-full border border-white/50"
              style={{
                borderStyle: "dashed",
                animation: "spin-slow 8s linear infinite",
              }}
            />
            {/* Anello interno — rotazione inversa più veloce */}
            <div
              className="absolute inset-5 rounded-full border border-white/25"
              style={{ animation: "spin-reverse 4s linear infinite" }}
            />
            {/* Croce di mira */}
            <div className="absolute top-1/2 left-4 right-4 h-px bg-white/55 -translate-y-1/2" />
            <div className="absolute left-1/2 top-4 bottom-4 w-px bg-white/55 -translate-x-1/2" />
            {/* Tacche ai 4 punti cardinali */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-px h-3 bg-white/75" />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-px h-3 bg-white/75" />
            <div className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-px bg-white/75" />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-px bg-white/75" />
          </>
        )}
      </div>
    </>
  );
}
