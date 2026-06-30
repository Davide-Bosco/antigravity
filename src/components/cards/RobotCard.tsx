"use client";

import Link from "next/link";
import { RobotData } from "@/types/robot";
import { Badge } from "@/components/ui/Badge";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ArrowRight, AlertTriangle, Battery, Weight, Gauge } from "lucide-react";

interface RobotCardProps {
  robot: RobotData;
}

export function RobotCard({ robot }: RobotCardProps) {
  return (
    <SpotlightCard className="h-full rounded-3xl">
      <article className="group relative flex flex-col h-full overflow-hidden rounded-3xl border border-black/10 bg-white transition-all duration-500 hover:border-[#E8001D] hover:shadow-2xl hover:-translate-y-1.5 text-[#0A0A0A]">
        {/* Top red accent line */}
        <div className="h-[3px] w-full bg-[#E8001D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Image area */}
        <div className="relative flex aspect-[4/3] items-center justify-center bg-[#F4F4F5] p-6 overflow-hidden">
          {/* Soft radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(232,0,29,0.06)_0%,_transparent_70%)] opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

          {robot.image ? (
            <img
              src={robot.image}
              alt={robot.name}
              className="relative z-10 max-h-48 w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105 drop-shadow-[0_15px_25px_rgba(0,0,0,0.18)]"
              loading="lazy"
            />
          ) : (
            <div className="relative z-10 text-zinc-300 group-hover:text-zinc-400 transition-colors">
              <svg className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          )}

          {robot.data_completeness !== "complete" && (
            <div className="absolute right-3 top-3 z-20">
              <Badge variant="outline" className="gap-1 border-amber-500/40 bg-amber-500/10 text-amber-600 text-[11px] backdrop-blur-md font-mono">
                <AlertTriangle className="h-3 w-3" />
                In validazione
              </Badge>
            </div>
          )}

          {/* Category badge top-left */}
          <div className="absolute left-3 top-3 z-20">
            <span className="rounded-full border border-black/10 bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-800 shadow-sm backdrop-blur-md">
              {robot.category_slug}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-2 text-xl font-black tracking-tight text-[#0A0A0A] group-hover:text-[#E8001D] transition-colors duration-300">
            {robot.name}
          </h3>
          <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-600 line-clamp-2 font-normal">
            {robot.description}
          </p>

          {/* Specs row */}
          <div className="mb-6 grid grid-cols-2 gap-3 border-t border-black/5 pt-4">
            {robot.specs.load_capacity && (
              <div className="flex items-center gap-2 rounded-xl bg-[#F8F9FA] px-3 py-2.5 border border-black/5">
                <Weight className="h-4 w-4 text-[#E8001D] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 font-mono">Carico Max</span>
                  <span className="font-mono text-xs font-bold text-[#0A0A0A]">{robot.specs.load_capacity}</span>
                </div>
              </div>
            )}
            {robot.specs.battery_life && (
              <div className="flex items-center gap-2 rounded-xl bg-[#F8F9FA] px-3 py-2.5 border border-black/5">
                <Battery className="h-4 w-4 text-[#E8001D] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 font-mono">Autonomia</span>
                  <span className="font-mono text-xs font-bold text-[#0A0A0A]">{robot.specs.battery_life}</span>
                </div>
              </div>
            )}
            {!robot.specs.load_capacity && robot.specs.cleaning_efficiency && (
              <div className="flex items-center gap-2 rounded-xl bg-[#F8F9FA] px-3 py-2.5 border border-black/5">
                <Gauge className="h-4 w-4 text-[#E8001D] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 font-mono">Efficienza</span>
                  <span className="font-mono text-xs font-bold text-[#0A0A0A]">{robot.specs.cleaning_efficiency}</span>
                </div>
              </div>
            )}
            {!robot.specs.battery_life && robot.specs.max_speed && (
              <div className="flex items-center gap-2 rounded-xl bg-[#F8F9FA] px-3 py-2.5 border border-black/5">
                <Gauge className="h-4 w-4 text-[#E8001D] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 font-mono">Velocità</span>
                  <span className="font-mono text-xs font-bold text-[#0A0A0A]">{robot.specs.max_speed}</span>
                </div>
              </div>
            )}
          </div>

          {/* CTA link */}
          <Link
            href={`/robot/${robot.slug}/`}
            className="inline-flex items-center justify-between rounded-xl bg-[#F4F4F5] px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#0A0A0A] transition-all duration-300 hover:bg-[#E8001D] hover:text-white hover:shadow-lg"
          >
            <span>Esplora Scheda Modello</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </article>
    </SpotlightCard>
  );
}
