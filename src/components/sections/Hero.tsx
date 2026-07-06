"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";
import { TiltCard } from "@/components/ui/TiltCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextSplitReveal } from "@/components/ui/TextSplitReveal";

export default function Hero() {
  return (
    <section data-cursor="laser" className="relative min-h-[88vh] flex items-center overflow-hidden bg-white pt-36 pb-24 border-b border-black/[0.06]">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#0A0A0A_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035] pointer-events-none z-0" />

      {/* Atmospheric Soft Red Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(232,0,29,0.07)_0%,_transparent_70%)] rounded-full blur-[80px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(232,0,29,0.05)_0%,_transparent_70%)] rounded-full blur-[90px] pointer-events-none z-0" />

      <div className="container-wide relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & CTAs (~7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#E8001D]/20 bg-[#E8001D]/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E8001D] shadow-sm font-mono">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E8001D] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E8001D]" />
              </span>
              Partner ZCS Zucchetti & Distributore KEENON
            </div>

            {/* Main Headline */}
            <h1 className="mb-6 text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0A0A0A] leading-[1.15] py-1">
              <TextSplitReveal text="Automazione" /> <br />
              <span className="text-shine-red inline-block py-1">Intelligente</span> <TextSplitReveal text="per il Tuo Locale" delay={200} />
            </h1>

            {/* Subtitle */}
            <p className="mb-9 max-w-xl text-lg sm:text-xl font-normal leading-relaxed text-zinc-600">
              Dalla ristorazione all'ospitalità, portiamo l'innovazione della robotica autonoma di servizio nella tua azienda con flussi operativi continui, sicuri ed efficienti 24/7.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-14">
              <MagneticButton>
                <Link
                  href="/demo/"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#E8001D] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#E8001D]/25 transition-all hover:bg-[#D0001A] hover:shadow-2xl group"
                >
                  <span>Richiedi Prova sul Posto</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.25}>
                <Link
                  href="/robot/"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 bg-white px-8 py-4 text-base font-bold text-[#0A0A0A] shadow-sm transition hover:bg-zinc-100 hover:border-black/25"
                >
                  <span>Esplora i Modelli</span>
                </Link>
              </MagneticButton>
            </div>

            {/* Stats Ticker Row */}
            <div className="grid grid-cols-3 gap-6 sm:gap-12 border-t border-black/[0.08] pt-8 w-full max-w-xl">
              <div>
                <div className="text-2xl sm:text-4xl font-black tracking-tight text-[#0A0A0A] font-mono">
                  <CountUp end={100} suffix="k+" />
                </div>
                <div className="text-xs text-zinc-500 uppercase font-semibold tracking-wider mt-1 font-mono">
                  Robot nel Mondo
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-black tracking-tight text-[#E8001D] font-mono">
                  <CountUp end={24} suffix="/7" />
                </div>
                <div className="text-xs text-zinc-500 uppercase font-semibold tracking-wider mt-1 font-mono">
                  Autonomia Operativa
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-black tracking-tight text-[#0A0A0A] font-mono">
                  <CountUp end={100} suffix="%" />
                </div>
                <div className="text-xs text-zinc-500 uppercase font-semibold tracking-wider mt-1 font-mono">
                  Garanzia Italia ZCS
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Robot Showcase (~5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-8 lg:pt-0">
            {/* Robot Image Container with Tilt & Float Animation */}
            <TiltCard maxTilt={10} className="w-full max-w-md lg:max-w-none">
              <div className="relative w-full flex items-center justify-center animate-float group py-8">
                {/* Soft Backlight Ring */}
                <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-[#E8001D]/15 bg-gradient-to-br from-[#E8001D]/10 to-transparent blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />

                {/* Pulsing Floor Shadow / Radar Base */}
                <div className="absolute bottom-2 w-56 h-10 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.18)_0%,_transparent_70%)] rounded-full animate-pulse pointer-events-none" />

                {/* Robot Image & Secret Laser-Revealed Logo */}
                <div className="relative z-10 w-4/5 sm:w-full flex justify-center overflow-hidden py-4">
                  <div className="relative inline-flex justify-center items-center">
                    <img
                      src="https://www.zcsamicorobot.com/uploads/robots/t10/T10.png"
                      alt="DINERBOT T10"
                      className="w-full h-auto max-h-[520px] object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.18)]"
                    />
                    
                    {/* Easter Egg Ottico: Logo MICROLYS ROBOTICS nello schermo del robot */}
                    {/* Normalmente invisibile ad occhio nudo (nero su nero #151518); si illumina di bianco/ciano solo sotto il filtro laser! */}
                    <div className="absolute top-[17%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36%] flex flex-col items-center justify-center pointer-events-none select-none z-20">
                      <div className="flex items-center gap-1 text-[#151518] font-mono font-black text-[10px] sm:text-xs md:text-sm tracking-widest leading-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                        <span>[</span>
                        <span>MICROLYS</span>
                        <span>]</span>
                      </div>
                      <div className="font-mono font-bold text-[6px] sm:text-[7px] md:text-[8px] tracking-[0.24em] text-[#1a0c10] uppercase mt-0.5 sm:mt-1 drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                        ROBOTICS • ZCS
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Feature Card Left */}
                <div className="absolute left-0 bottom-10 z-30 hidden sm:flex items-center gap-3.5 rounded-2xl border border-black/10 bg-white/95 p-4 shadow-2xl backdrop-blur-md transition-transform duration-500 hover:-translate-y-1">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8001D] text-white shadow-md">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0A0A0A]">Navigazione 3D SLAM</div>
                    <div className="text-[10px] text-zinc-500 font-mono">Evitamento ostacoli istantaneo</div>
                  </div>
                </div>

                {/* Floating Feature Card Right */}
                <div className="absolute right-0 top-10 z-30 hidden sm:flex items-center gap-3.5 rounded-2xl border border-black/10 bg-white/95 p-4 shadow-2xl backdrop-blur-md transition-transform duration-500 hover:-translate-y-1">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0A0A0A] text-white shadow-md">
                    <ShieldCheck className="h-5 w-5 text-[#E8001D]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0A0A0A]">Ecosistema ZCS Amico</div>
                    <div className="text-[10px] text-zinc-500 font-mono">Garanzia & Supporto Locale</div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
