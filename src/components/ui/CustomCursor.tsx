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

    const xDot = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3" });

    const xLens = gsap.quickTo(lens, "x", { duration: 0.28, ease: "power3" });
    const yLens = gsap.quickTo(lens, "y", { duration: 0.28, ease: "power3" });

    const moveCursor = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      xDot(e.clientX);
      yDot(e.clientY);
      xLens(e.clientX);
      yLens(e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Rileva se il mouse è sopra scritte importanti o titoli (Lente di ingrandimento attiva)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLensTarget = target.closest("h1, h2, h3, .text-shine-red, [data-cursor='lens']");
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
      {/* Punto centrale discreto (scompare in modalità lente) */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          lensMode
            ? "w-0 h-0 opacity-0"
            : "w-2.5 h-2.5 bg-[#E8001D] shadow-[0_0_8px_rgba(232,0,29,0.8)]"
        }`}
      />

      {/* Lente d'Ingrandimento GSAP ad alto contrasto sulle scritte */}
      <div
        ref={lensRef}
        className={`fixed top-0 left-0 z-[9998] pointer-events-none hidden md:block -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          lensMode
            ? "w-44 h-44 border-2 border-[#E8001D] bg-[#E8001D]/20 backdrop-invert backdrop-blur-[2px] shadow-[0_0_40px_rgba(232,0,29,0.5)] scale-110"
            : "w-6 h-6 border border-[#0A0A0A]/20 bg-transparent"
        }`}
      />
    </>
  );
}
