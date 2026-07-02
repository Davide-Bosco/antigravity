"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);
  const [lensMode, setLensMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const dot = dotRef.current;
    const lens = lensRef.current;
    if (!dot || !lens) return;

    // Tracking GSAP ultra-rapido per mantenere il cerchio e il punto perfettamente centrati
    const xDot = gsap.quickTo(dot, "x", { duration: 0.05, ease: "power3" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.05, ease: "power3" });

    const xLens = gsap.quickTo(lens, "x", { duration: 0.1, ease: "power3" });
    const yLens = gsap.quickTo(lens, "y", { duration: 0.1, ease: "power3" });

    const moveCursor = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      xDot(e.clientX);
      yDot(e.clientY);
      xLens(e.clientX);
      yLens(e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Delimita l'area di utilizzo ai soli titoli principali e scritte d'impatto della pagina (escludendo bottoni, link e footer)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Escludi elementi interattivi o aree secondarie dove la lente sarebbe di disturbo
      if (target.closest("a, button, input, textarea, footer, nav, [data-cursor='none']")) {
        setLensMode(false);
        return;
      }

      // Attiva la lente solo sui titoli H1, H2 grandi o sezioni contrassegnate con data-cursor="lens"
      const isLensTarget = target.closest("h1, h2, .text-4xl, .text-5xl, .text-6xl, [data-cursor='lens']");
      setLensMode(!!isLensTarget);
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
      {/* Punto centrale ad alta precisione (rimane sempre visibile al centro del cursore/lente) */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 z-[9999] pointer-events-none hidden lg:block -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          lensMode
            ? "w-2 h-2 bg-[#E8001D] shadow-[0_0_10px_rgba(232,0,29,1)]"
            : "w-2.5 h-2.5 bg-[#E8001D] shadow-[0_0_8px_rgba(232,0,29,0.8)]"
        }`}
      />

      {/* Lente d'Ingrandimento Trasparente, Hi-Tech e perfettamente Centrata */}
      <div
        ref={lensRef}
        className={`fixed top-0 left-0 z-[9998] pointer-events-none hidden lg:block -translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height,border-color,background-color,box-shadow,opacity] duration-300 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          lensMode
            ? "w-36 h-36 border-[1.5px] border-[#E8001D]/80 bg-white/[0.04] shadow-[0_0_30px_rgba(232,0,29,0.25),_inset_0_0_20px_rgba(232,0,29,0.1)]"
            : "w-7 h-7 border border-[#0A0A0A]/25 bg-transparent"
        }`}
      />
    </>
  );
}
