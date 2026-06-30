import React from "react";
import Link from "next/link";
import { SectorData } from "@/types/sector";
import { ArrowRight, UtensilsCrossed, Building2, Stethoscope, ShoppingCart, Factory } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  UtensilsCrossed,
  Building2,
  Stethoscope,
  ShoppingCart,
  Factory,
};

interface SectorCardProps {
  sector: SectorData;
}

export function SectorCard({ sector }: SectorCardProps) {
  const Icon = iconMap[sector.icon] || Factory;

  return (
    <Link
      href={`/soluzioni/`}
      className="group relative flex flex-col rounded-3xl border border-black/5 bg-white p-8 transition-all duration-300 hover:border-[#E8001D]/40 hover:shadow-2xl hover:-translate-y-1.5 overflow-hidden text-[#0A0A0A]"
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#E8001D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8001D]/10 text-[#E8001D] group-hover:bg-[#E8001D] group-hover:text-white transition-all duration-300 shadow-sm">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-3 text-xl font-bold tracking-tight text-[#0A0A0A] group-hover:text-[#E8001D] transition-colors duration-300">
        {sector.name}
      </h3>
      <p className="mb-8 flex-1 text-sm leading-relaxed text-zinc-600 font-normal">
        {sector.description}
      </p>
      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E8001D] pt-4 border-t border-black/5 transition group-hover:translate-x-1">
        Soluzioni per {sector.name} <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
