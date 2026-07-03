"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const timelineEvents = [
  { year: "2020", event: "Nascita della divisione automazione e robotica di servizio Microlys" },
  { year: "2021", event: "Avvio delle prime sperimentazioni operative nella ristorazione commerciale" },
  { year: "2022", event: "Accordo di partnership strategica per la distribuzione sul territorio italiano" },
  { year: "2023", event: "Espansione verso i settori sanitario, alberghiero e facility cleaning" },
  { year: "2024", event: "Integrazione della linea di robotica pesante AMR per l'industria 4.0" },
  { year: "2025", event: "Rete capillare di assistenza e manutenzione rapida su tutta Italia" },
];

export function GsapTimelineReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const line = lineRef.current;
      if (!section || !line) return;

      // La linea verticale si "disegna" mentre si scorre
      gsap.fromTo(
        line,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 0.8,
          },
        }
      );

      // Ogni evento appare con stagger + effetto slide-right
      const items = gsap.utils.toArray<HTMLElement>(".timeline-item");
      items.forEach((item, i) => {
        const dot = item.querySelector(".timeline-dot");
        const content = item.querySelector(".timeline-content");
        const year = item.querySelector(".timeline-year");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });

        // Il punto esplode
        tl.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2.5)" }
        );

        // L'anno scivola da destra, contenuto da sinistra
        tl.fromTo(
          year,
          { x: 30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.45, ease: "power3.out" },
          "-=0.2"
        );
        tl.fromTo(
          content,
          { x: -25, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.45, ease: "power3.out" },
          "<"
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-24 bg-white border-b border-black/5 overflow-hidden">
      <div className="container-wide mx-auto px-6">
        {/* Intestazione */}
        <div className="mb-16 max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E8001D]/10 text-[#E8001D] px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-4 font-mono">
            Il Nostro Percorso
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A0A0A] leading-tight">
            5 Anni di{" "}
            <span className="text-shine-red">Innovazione</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {/* Linea verticale animata */}
          <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-black/5">
            <div
              ref={lineRef}
              className="absolute inset-0 bg-gradient-to-b from-[#E8001D] via-[#E8001D]/70 to-[#E8001D]/10"
            />
          </div>

          <div className="space-y-10 pl-10">
            {timelineEvents.map((ev, idx) => (
              <div key={idx} className="timeline-item relative">
                {/* Dot */}
                <div className="timeline-dot absolute -left-10 top-1 flex h-4 w-4 items-center justify-center">
                  <span className="relative flex h-4 w-4">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E8001D] opacity-40" />
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-[#E8001D] ring-4 ring-white" />
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Anno */}
                  <div className="timeline-year flex-shrink-0">
                    <span className="inline-block font-mono font-black text-xl sm:text-2xl text-[#E8001D] tracking-tight w-16">
                      {ev.year}
                    </span>
                  </div>

                  {/* Testo evento */}
                  <div className="timeline-content rounded-2xl border border-black/8 bg-[#F8F9FA] px-6 py-4 hover:border-[#E8001D] hover:bg-white hover:shadow-lg transition-all duration-300 flex-1">
                    <p className="text-sm sm:text-base font-medium text-[#0A0A0A] leading-relaxed">
                      {ev.event}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
