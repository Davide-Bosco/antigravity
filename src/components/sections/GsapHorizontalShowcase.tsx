"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { ArrowRight, Zap, ShieldCheck, Cpu, BatteryCharging, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const showcasePanels = [
  {
    id: "01",
    title: "Navigazione 3D SLAM Ultra-Precisa",
    subtitle: "LiDAR + Tripla Telecamera di Profondità",
    model: "DINERBOT T10",
    desc: "Il robot scansiona l'ambiente 60 volte al secondo in 3D. Rileva ostacoli dinamici, scarpe, animali o sedie spostate con precisione millimetrica e ricalcola la rotta istantaneamente senza fermare il servizio.",
    image: "https://www.zcsamicorobot.com/uploads/robots/t10/T10.png",
    icon: Zap,
    tag: "Sicurezza Attiva 100%",
    stats: "0.1 sec",
    statsLabel: "Tempo di Risposta",
  },
  {
    id: "02",
    title: "Sospensioni Industriali Ammortizzate",
    subtitle: "Zero Vibrazioni per Liquidi e Calici",
    model: "DINERBOT T11",
    desc: "Progettato per la ristorazione di lusso: il telaio indipendente con ammortizzatori bibraccio assorbe ogni sconnessione del pavimento, trasportando zuppe bollenti e calici da vino alti a massima velocità senza versare una singola goccia.",
    image: "https://www.zcsamicorobot.com/uploads/robots/zcs-amico-t11/T11.png",
    icon: Cpu,
    tag: "Stabilità Brevettata",
    stats: "300+ kg",
    statsLabel: "Capacità Carico AMR",
  },
  {
    id: "03",
    title: "Ecosistema ZCS Amico & Garanzia",
    subtitle: "Assistenza Diretta sul Territorio Italiano",
    model: "BUTLERBOT W3",
    desc: "L'esclusiva partnership tra Microlys Robotics e Zucchetti Centro Sistemi ti assicura installazione chiavi in mano, mappatura 3D del locale e tecnici specializzati pronti a intervenire tempestivamente H24 in tutta Italia.",
    image: "https://www.zcsamicorobot.com/uploads/robots/w3/W3_2026-03-18-153244_rfha.png",
    icon: ShieldCheck,
    tag: "Supporto ZCS H24",
    stats: "100%",
    statsLabel: "Copertura Italia",
  },
  {
    id: "04",
    title: "Operatività H24 & Ricarica Autonoma",
    subtitle: "Rientro Automatico in Stazione",
    model: "KLEENBOT C40",
    desc: "Nessun intervento umano richiesto per la ricarica. Quando la batteria scende sotto la soglia programmata, il robot termina il ciclo di pulizia o consegna, torna autonomamente alla dock station e riprende il lavoro a ricarica ultimata.",
    image: "https://www.zcsamicorobot.com/uploads/robots/c40/C40.png",
    icon: BatteryCharging,
    tag: "Efficienza Continua",
    stats: "24/7",
    statsLabel: "Autonomia Operativa",
  },
];

export default function GsapHorizontalShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Evita l'animazione di pinning orizzontale su schermi piccoli dove il touch verticale è preferito
      if (typeof window !== "undefined" && window.innerWidth < 1024) return;

      const track = trackRef.current;
      const container = containerRef.current;
      if (!track || !container) return;

      // Calcola di quanto deve scorrere in orizzontale la traccia (larghezza totale traccia - larghezza schermo)
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

      // Animazione principale orizzontale (Scrubbing + Pinning)
      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 1.2,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressBarRef.current) {
              gsap.to(progressBarRef.current, {
                width: `${self.progress * 100}%`,
                duration: 0.1,
              });
            }
          },
        },
      });

      // Animazione parallasse sulle immagini dei robot dentro i pannelli
      const cards = gsap.utils.toArray<HTMLElement>(".showcase-panel");
      cards.forEach((card) => {
        const img = card.querySelector(".panel-robot-img");
        const ghostNum = card.querySelector(".panel-ghost-number");

        if (img) {
          gsap.fromTo(
            img,
            { scale: 0.88, rotate: -3 },
            {
              scale: 1.05,
              rotate: 3,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                containerAnimation: tween,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            }
          );
        }

        if (ghostNum) {
          gsap.fromTo(
            ghostNum,
            { x: -100 },
            {
              x: 150,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                containerAnimation: tween,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            }
          );
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative bg-[#111115] text-white overflow-hidden border-y border-white/10"
    >
      {/* Intestazione Fissa in alto durante il Pin */}
      <div className="absolute top-0 left-0 right-0 z-30 pt-8 px-8 md:px-16 pointer-events-none flex items-center justify-between">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-[#E8001D]/40 bg-[#E8001D]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FF4455] font-mono backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>GSAP Interactive Technology Tour</span>
        </div>
        <div className="hidden md:flex items-center gap-3 text-xs font-mono text-zinc-400">
          <span>SCORRI PER ESPLORARE</span>
          <div className="w-8 h-[1px] bg-zinc-600" />
          <span className="text-[#E8001D] font-bold">01 - 04</span>
        </div>
      </div>

      {/* Track orizzontale */}
      <div
        ref={trackRef}
        className="flex lg:h-screen lg:w-max flex-col lg:flex-row items-stretch py-24 lg:py-0"
      >
        {showcasePanels.map((panel, idx) => {
          const Icon = panel.icon;
          return (
            <div
              key={panel.id}
              className="showcase-panel w-full lg:w-screen h-auto lg:h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-20 relative flex-shrink-0 border-b lg:border-b-0 lg:border-r border-white/10 last:border-none py-16 lg:py-0"
            >
              {/* Ghost Number in Parallasse */}
              <div className="panel-ghost-number absolute left-10 lg:left-24 top-1/2 -translate-y-1/2 select-none pointer-events-none font-mono font-black text-white/[0.035] text-[12rem] lg:text-[22rem] tracking-tighter leading-none z-0">
                {panel.id}
              </div>

              {/* Contenuto Grid del Pannello */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10 max-w-7xl mx-auto w-full">
                {/* Immagine Robot con Parallasse 3D (~6 cols) */}
                <div className="lg:col-span-6 flex items-center justify-center relative">
                  <div className="absolute w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-[radial-gradient(circle,_rgba(232,0,29,0.2)_0%,_transparent_70%)] blur-3xl pointer-events-none" />
                  <img
                    src={panel.image}
                    alt={panel.model}
                    className="panel-robot-img relative z-10 max-h-[360px] lg:max-h-[540px] w-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.6)] will-change-transform"
                  />
                </div>

                {/* Specifiche & Copy Glass Card (~6 cols) */}
                <div className="lg:col-span-6 rounded-3xl border border-white/15 bg-white/[0.04] p-8 lg:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-[#E8001D]/60 transition-colors duration-500">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E8001D] to-transparent opacity-70" />
                  
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8001D] text-white shadow-lg shadow-[#E8001D]/30">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF4455]">
                          {panel.tag}
                        </span>
                        <h4 className="text-lg font-black tracking-tight text-white">{panel.model}</h4>
                      </div>
                    </div>

                    <div className="text-right font-mono border-l border-white/10 pl-4 hidden sm:block">
                      <div className="text-2xl font-black text-[#FF4455]">{panel.stats}</div>
                      <div className="text-[10px] uppercase text-zinc-400">{panel.statsLabel}</div>
                    </div>
                  </div>

                  <h3
                    data-cursor="lens"
                    className="text-2xl lg:text-4xl font-black tracking-tight mb-4 text-white leading-tight"
                  >
                    {panel.title}
                  </h3>
                  
                  <p className="text-base lg:text-lg text-zinc-300 font-normal leading-relaxed mb-8">
                    {panel.desc}
                  </p>

                  <div className="flex items-center gap-4">
                    <MagneticButton>
                      <Link
                        href="/robot/"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E8001D] px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#E8001D]/25 hover:bg-[#D0001A] transition-all group/btn"
                      >
                        <span>Esplora {panel.model}</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress Bar in basso durante lo scorrimento */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10 z-30 pointer-events-none hidden lg:block">
        <div ref={progressBarRef} className="h-full bg-[#E8001D] w-0 transition-all duration-75 shadow-[0_0_12px_rgba(232,0,29,1)]" />
      </div>
    </section>
  );
}
