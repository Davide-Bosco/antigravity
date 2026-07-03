"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Tre modalità della lente:
// "none"   → piccolo cerchio di default
// "title"  → lente HUD ottica su titoli grandi (h1, h2)
// "header" → scansione laser su navbar/header (colori invertiti dentro il cerchio)
type LensMode = "none" | "title" | "header";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);
  const [lensMode, setLensMode] = useState<LensMode>("none");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const dot = dotRef.current;
    const lens = lensRef.current;
    if (!dot || !lens) return;

    // Centramento GSAP — xPercent/yPercent -50 per centrare esattamente sul cursore
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

      // — HEADER MODE: attiva scansione laser sul nav e tutti gli elementi dentro l'header
      const isHeader = target.closest("header, nav, [data-cursor='header']");
      if (isHeader) {
        setLensMode("header");
        return;
      }

      // — Escludi bottoni, link e altri interattivi al di fuori dell'header
      if (target.closest("a, button, input, textarea, footer, [data-cursor='none']")) {
        setLensMode("none");
        return;
      }

      // — TITLE MODE: lente HUD cristallo sui titoli h1, h2 grandi
      const isTitle = target.closest("h1, h2, .text-4xl, .text-5xl, .text-6xl, [data-cursor='lens']");
      if (isTitle) {
        setLensMode("title");
        return;
      }

      setLensMode("none");
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
      {/* Punto centrale — cambia colore in base alla modalità */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 z-[9999] pointer-events-none hidden lg:block rounded-full transition-all duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          lensMode === "header"
            ? "w-3 h-3 bg-white shadow-[0_0_14px_rgba(255,255,255,1)]"
            : lensMode === "title"
            ? "w-2.5 h-2.5 bg-[#E8001D] shadow-[0_0_12px_rgba(232,0,29,1)]"
            : "w-2.5 h-2.5 bg-[#E8001D] shadow-[0_0_8px_rgba(232,0,29,0.8)]"
        }`}
      />

      {/* Lente principale */}
      <div
        ref={lensRef}
        className={`fixed top-0 left-0 pointer-events-none hidden lg:flex items-center justify-center rounded-full transition-all duration-300 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          lensMode === "header"
            ? // LASER SCAN MODE — usa backdrop-filter per invertire e colorare tutto dentro il cerchio
              "z-[9999] w-36 h-36 border-2 border-white shadow-[0_0_30px_rgba(255,255,255,0.3),_inset_0_0_20px_rgba(255,255,255,0.08)]"
            : lensMode === "title"
            ? // CRYSTAL HUD MODE — lente ottica sui titoli
              "z-[9998] w-40 h-40 border-2 border-[#E8001D] bg-white/[0.25] backdrop-contrast-125 backdrop-saturate-150 shadow-[0_12px_35px_rgba(0,0,0,0.12),_0_0_25px_rgba(232,0,29,0.25),_inset_0_0_18px_rgba(255,255,255,0.9)]"
            : // DEFAULT — cerchietto discreto
              "z-[9998] w-7 h-7 border border-[#0A0A0A]/25 bg-transparent"
        }`}
        style={
          lensMode === "header"
            ? {
                // Il segreto: backdrop-filter inverte i colori e aggiunge tonalità laser rossa
                backdropFilter: "invert(1) hue-rotate(160deg) saturate(300%) brightness(1.1)",
                WebkitBackdropFilter: "invert(1) hue-rotate(160deg) saturate(300%) brightness(1.1)",
              }
            : undefined
        }
      >
        {/* Reticolo interno — HEADER laser scan */}
        {lensMode === "header" && (
          <>
            {/* Anello rotante esterno (lento) */}
            <div className="absolute inset-1 rounded-full border border-white/50 animate-[spin_8s_linear_infinite]" style={{ borderStyle: "dashed" }} />
            {/* Anello rotante interno (veloce, opposto) */}
            <div className="absolute inset-4 rounded-full border border-white/30 animate-[spin_4s_linear_infinite_reverse]" />
            {/* Croce di mira centrale */}
            <div className="absolute top-1/2 left-3 right-3 h-px bg-white/60 -translate-y-1/2" />
            <div className="absolute left-1/2 top-3 bottom-3 w-px bg-white/60 -translate-x-1/2" />
            {/* Tacche angolari agli 8 punti cardinali */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-px h-3 bg-white/80" />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-px h-3 bg-white/80" />
            <div className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-px bg-white/80" />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-px bg-white/80" />
          </>
        )}

        {/* Reticolo interno — TITLE lente HUD */}
        {lensMode === "title" && (
          <>
            <div className="absolute inset-2 rounded-full border border-dashed border-[#E8001D]/35 animate-[spin_12s_linear_infinite]" />
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-3 bg-[#E8001D]/80 rounded-full" />
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-3 bg-[#E8001D]/80 rounded-full" />
            <div className="absolute left-1 top-1/2 -translate-y-1/2 w-3 h-1.5 bg-[#E8001D]/80 rounded-full" />
            <div className="absolute right-1 top-1/2 -translate-y-1/2 w-3 h-1.5 bg-[#E8001D]/80 rounded-full" />
          </>
        )}
      </div>
    </>
  );
}
