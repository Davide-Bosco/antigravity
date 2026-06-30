"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

export function StickyDemoWidget() {
  const [isMinimized, setIsMinimized] = useState(false);

  if (isMinimized) {
    return (
      <div className="fixed right-0 top-[65%] -translate-y-1/2 z-50 flex items-center">
        <button
          onClick={() => setIsMinimized(false)}
          className="group flex items-center gap-2 rounded-l-2xl bg-[#E8001D] px-3 py-3.5 text-white shadow-2xl transition-all duration-300 hover:bg-[#C50018] hover:pr-4"
          title="Apri Modulo Demo"
        >
          <div className="relative h-5 w-5 animate-bounce">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="15" y="25" width="70" height="50" rx="15" fill="white" stroke="#0A0A0A" strokeWidth="6" />
              <rect x="28" y="40" width="12" height="20" rx="6" fill="#00C2FF" />
              <rect x="60" y="40" width="12" height="20" rx="6" fill="#00C2FF" />
              <path d="M40 63 Q50 70 60 63" stroke="#00C2FF" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest writing-mode-vertical">
            Demo
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed right-0 top-[65%] -translate-y-1/2 z-50 flex items-center transition-transform duration-500 max-w-[210px]">
      {/* Container Compatto in Colori Microlys */}
      <div className="relative flex flex-col rounded-l-2xl bg-[#E8001D] p-4 text-white shadow-[0_15px_35px_rgba(232,0,29,0.3)] border-l border-t border-b border-white/20 backdrop-blur-md overflow-visible">
        {/* Pulsante chiudi/minimizza */}
        <button
          onClick={() => setIsMinimized(true)}
          className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors p-0.5"
          title="Minimizza"
        >
          <X className="h-3.5 w-3.5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          {/* Robotino Cartoon Compatto che saluta */}
          <div className="relative -ml-6 -mt-4 w-14 h-14 shrink-0 drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)] select-none pointer-events-none animate-float">
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <line x1="60" y1="20" x2="60" y2="8" stroke="white" strokeWidth="4" strokeLinecap="round" />
              <circle cx="60" cy="6" r="5" fill="#00C2FF" />
              <rect x="15" y="20" width="90" height="65" rx="20" fill="white" stroke="#0A0A0A" strokeWidth="5" />
              <rect x="22" y="27" width="76" height="51" rx="14" fill="#18181B" />
              <rect x="34" y="38" width="14" height="22" rx="7" fill="#00C2FF" />
              <rect x="72" y="38" width="14" height="22" rx="7" fill="#00C2FF" />
              <path d="M46 68 Q60 76 74 68" stroke="#00C2FF" strokeWidth="4" strokeLinecap="round" />
              <path d="M35 88 C35 88 45 84 60 84 C75 84 85 88 85 88 L80 115 L40 115 Z" fill="#E4E4E7" stroke="#0A0A0A" strokeWidth="4" />
              <g className="origin-bottom-left animate-pulse">
                <path d="M85 92 Q105 80 110 65" stroke="white" strokeWidth="8" strokeLinecap="round" />
                <circle cx="110" cy="65" r="7" fill="white" stroke="#0A0A0A" strokeWidth="3" />
              </g>
            </svg>
          </div>

          <div className="pr-4">
            <span className="block text-[9px] font-mono font-bold uppercase tracking-widest text-white/80">
              Microlys
            </span>
            <h4 className="text-xs font-black leading-tight text-white mt-0.5">
              Richiedi Demo
            </h4>
          </div>
        </div>

        <p className="text-[11px] text-white/90 leading-tight mb-3 font-normal">
          Vedi i robot nel tuo locale senza impegno.
        </p>

        <Link
          href="/demo/"
          className="group flex items-center justify-center gap-1.5 rounded-full bg-white px-4 py-2 text-[11px] font-black uppercase tracking-wider text-[#E8001D] shadow-md transition-all duration-300 hover:bg-[#0A0A0A] hover:text-white hover:scale-102 active:scale-95"
        >
          <span>Contattaci</span>
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
