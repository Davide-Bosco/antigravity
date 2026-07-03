"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const items = [
  "100.000 Robot Installati nel Mondo",
  "Partner Ufficiale ZCS Zucchetti",
  "Distributore Esclusivo KEENON Italia",
  "70+ Paesi con Operatività Attiva",
  "Garanzia & Assistenza H24",
  "Navigazione 3D SLAM Ultra-Precisa",
  "Sospensioni Brevettate Anti-Vibrazione",
  "Ricarica Autonoma Senza Presidio",
];

export function GsapTextMarquee({ dark = false }: { dark?: boolean }) {
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const track1 = track1Ref.current;
    const track2 = track2Ref.current;
    if (!track1 || !track2) return;

    const width = track1.scrollWidth / 2;

    // Track 1: scorre a sinistra
    gsap.to(track1, {
      x: -width,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    // Track 2: scorre a destra (opposto), più lento
    gsap.to(track2, {
      x: width / 2,
      duration: 38,
      ease: "none",
      repeat: -1,
    });
  });

  const baseText = dark
    ? "text-zinc-300 text-xs font-bold uppercase tracking-[0.18em] font-mono"
    : "text-zinc-500 text-xs font-bold uppercase tracking-[0.18em] font-mono";

  const sep = dark ? "text-[#E8001D]" : "text-[#E8001D]";

  return (
    <div
      className={`relative overflow-hidden py-5 border-y ${
        dark ? "bg-[#0D0D11] border-white/10" : "bg-[#F8F9FA] border-black/5"
      }`}
    >
      {/* Fade maschere sui lati */}
      <div
        className={`pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 ${
          dark
            ? "bg-gradient-to-r from-[#0D0D11] to-transparent"
            : "bg-gradient-to-r from-[#F8F9FA] to-transparent"
        }`}
      />
      <div
        className={`pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 ${
          dark
            ? "bg-gradient-to-l from-[#0D0D11] to-transparent"
            : "bg-gradient-to-l from-[#F8F9FA] to-transparent"
        }`}
      />

      {/* Riga 1 — scorre a sinistra */}
      <div ref={track1Ref} className="flex gap-0 whitespace-nowrap mb-2.5 w-max">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center">
            <span className={baseText}>{item}</span>
            <span className={`mx-5 text-base leading-none ${sep}`}>◆</span>
          </span>
        ))}
      </div>

      {/* Riga 2 — scorre a destra (opposto) */}
      <div
        ref={track2Ref}
        className="flex gap-0 whitespace-nowrap w-max"
        style={{ transform: "translateX(-50%)" }}
      >
        {[...items.slice(4), ...items, ...items.slice(0, 4)].map((item, i) => (
          <span key={i} className="flex items-center">
            <span className={baseText}>{item}</span>
            <span className={`mx-5 text-base leading-none ${sep}`}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
