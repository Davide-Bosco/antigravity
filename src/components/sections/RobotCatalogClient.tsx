"use client";

import { useState } from "react";
import { robots } from "@/data/robots/robots";
import { RobotCard } from "@/components/cards/RobotCard";
import { Sparkles } from "lucide-react";

const categories = [
  { slug: "all", label: "Tutti i Modelli" },
  { slug: "catering", label: "Catering & Delivery" },
  { slug: "hotel", label: "Hotel & Hospitality" },
  { slug: "cleaning", label: "Cleaning & Facility" },
  { slug: "heavy-load", label: "Heavy Load AMR" },
  { slug: "humanoid", label: "Humanoid VLA" },
];

export default function RobotCatalogClient() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? robots
      : robots.filter((r) => r.category_slug === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white px-6 pb-16 pt-36 md:pt-40 md:px-12 lg:px-20 border-b border-black/5">
        <div className="absolute inset-0 bg-[radial-gradient(#0A0A0A_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(232,0,29,0.07)_0%,_transparent_70%)] rounded-full blur-[90px] pointer-events-none" />

        <div className="container-wide relative z-10 mx-auto text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E8001D]/20 bg-[#E8001D]/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E8001D] mb-6 font-mono">
            <Sparkles className="h-3.5 w-3.5 text-[#E8001D]" />
            Catalogo Ufficiale ZCS Amico & KEENON
          </div>
          <h1 className="text-4xl font-black tracking-tight text-[#0A0A0A] md:text-6xl mb-6">
            Gamma Modelli <span className="text-shine-red">Robotica</span>
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed font-normal">
            Tutti i robot di servizio commerciali KEENON importati, certificati e assistiti in tutta Italia attraverso la partnership societaria tra Microlys Robotics e ZCS Zucchetti Centro Sistemi.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="sticky top-[76px] md:top-[84px] z-40 border-b border-black/[0.08] bg-white/95 backdrop-blur-md px-6 py-4 shadow-sm">
        <div className="container-wide mx-auto">
          <div className="flex flex-wrap gap-2.5 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                id={`filter-${cat.slug}`}
                onClick={() => setActiveCategory(cat.slug)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 font-mono ${
                  activeCategory === cat.slug
                    ? "bg-[#E8001D] text-white shadow-md shadow-[#E8001D]/30 scale-105"
                    : "border border-black/10 bg-[#F4F4F5] text-zinc-600 hover:border-black/20 hover:text-[#0A0A0A] hover:bg-zinc-200/60"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-[#F8F9FA] relative min-h-[60vh]">
        <div className="container-wide mx-auto px-6">
          <div className="mb-10 flex items-center justify-between border-b border-black/[0.08] pb-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-400">
              Elenco Filtri Attivi
            </span>
            <span className="font-mono text-sm font-black text-[#0A0A0A]">
              {filtered.length} {filtered.length === 1 ? "Modello Disponibile" : "Modelli Disponibili"}
            </span>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((robot) => (
              <RobotCard key={robot.slug} robot={robot} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
