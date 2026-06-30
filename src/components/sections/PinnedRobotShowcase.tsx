"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import { TextSplitReveal } from "@/components/ui/TextSplitReveal";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Zap, ShieldCheck, Cpu, BatteryCharging } from "lucide-react";

const pinnedFeatures = [
  {
    icon: Zap,
    title: "Navigazione 3D SLAM Ultra-Precisa",
    subtitle: "Rappresentata da DINERBOT T9",
    description:
      "Algoritmi brevettati KEENON per la mappatura dell'ambiente al millimetro. Il triplo sensore ottico e LiDAR identifica ed evita ostacoli dinamici, sedie, animali domestici o vassoi caduti a terra istantaneamente a 60 fps.",
    image: "https://www.zcsamicorobot.com/uploads/robots/t9/T9_2026-03-18-153219_jbrd.png",
  },
  {
    icon: ShieldCheck,
    title: "Ecosistema ZCS Amico & Garanzia Italia",
    subtitle: "Rappresentata da BUTLERBOT W3",
    description:
      "Nessuna preoccupazione per ricambi e assistenza tecnica. L'alleanza strategica tra Microlys Robotics e Zucchetti Centro Sistemi garantisce ingegneri e tecnici certificati pronti a intervenire nel tuo locale H24 su tutto il territorio italiano.",
    image: "https://www.zcsamicorobot.com/uploads/robots/w3/W3_2026-03-18-153244_rfha.png",
  },
  {
    icon: Cpu,
    title: "Sospensioni Industriali & Vassoio Intelligente",
    subtitle: "Rappresentata da DINERBOT T11",
    description:
      "Trasporta zuppe bollenti, calici da vino alti e cocktail senza una singola goccia versata grazie al telaio ammortizzato di grado automobilistico a sospensioni indipendenti e sensori di peso ad altissima risposta dinamica.",
    image: "https://www.zcsamicorobot.com/uploads/robots/zcs-amico-t11/T11.png",
  },
  {
    icon: BatteryCharging,
    title: "Ricarica Autonoma H24 Senza Presidio",
    subtitle: "Rappresentata da KLEENBOT C40",
    description:
      "Quando il livello di batteria scende sotto la soglia di sicurezza durante il turno di lavoro, il robot rientra autonomamente alla sua stazione di ricarica rapida e riprende il servizio appena pronto, garantendo operatività continua giorno e notte.",
    image: "https://www.zcsamicorobot.com/uploads/robots/c40/C40.png",
  },
];

export default function PinnedRobotShowcase() {
  return (
    <section className="py-24 bg-white relative border-b border-black/5 text-[#0A0A0A]">
      <div className="container-wide mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge variant="red" className="mb-4 font-mono">
            Effetto Section Pinning & Parallax
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6">
            <TextSplitReveal text="Ingegneria Robotica " />
            <span className="text-shine-red">Senza Compromessi</span>
          </h2>
          <p className="text-zinc-600 text-lg">
            Mentre scorri, l'ammiraglia DINERBOT T10 resta fissa come punto focale mentre sveli le tecnologie che rendono l'intera gamma unica al mondo.
          </p>
        </div>

        {/* Griglia Pinned Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative items-start">
          {/* Colonna Sinistra Fissa (Section Pinning in CSS sticky) (~5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col items-center justify-center p-8 rounded-3xl bg-[#F8F9FA] border border-black/5 shadow-inner">
            <div className="relative w-full aspect-square flex items-center justify-center">
              <div className="absolute w-64 h-64 rounded-full bg-[radial-gradient(circle,_rgba(232,0,29,0.12)_0%,_transparent_70%)] blur-2xl pointer-events-none" />
              <img
                src="https://www.zcsamicorobot.com/uploads/robots/t10/T10.png"
                alt="DINERBOT T10 Pinned Showcase"
                className="relative z-10 max-h-[420px] w-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.22)] animate-float"
              />
            </div>
            <div className="mt-4 text-center">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E8001D]">
                Ammiraglia KEENON / ZCS
              </span>
              <h3 className="text-2xl font-black text-[#0A0A0A]">DINERBOT T10</h3>
            </div>
          </div>

          {/* Colonna Destra Scorrimento Specifiche (~7 cols) */}
          <div className="lg:col-span-7 space-y-12">
            {pinnedFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-3xl border border-black/10 bg-white p-8 sm:p-10 shadow-lg hover:border-[#E8001D] transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8001D]/10 text-[#E8001D] group-hover:bg-[#E8001D] group-hover:text-white transition-all shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                          Punto Chiave #{idx + 1}
                        </span>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E8001D]">
                          • {feat.subtitle}
                        </span>
                      </div>
                      <h4 className="text-xl sm:text-2xl font-black text-[#0A0A0A] mt-0.5">
                        {feat.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-zinc-600 leading-relaxed text-base mb-8">
                    {feat.description}
                  </p>

                  {/* Parallax Image Box con sfondo radiale abbinato al robot */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-[#F4F4F5] border border-black/5 shadow-md flex items-center justify-center p-6">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(232,0,29,0.08)_0%,_transparent_70%)]" />
                    <ParallaxImage
                      src={feat.image}
                      alt={feat.title}
                      className="w-full h-full flex items-center justify-center"
                      speed={18}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
