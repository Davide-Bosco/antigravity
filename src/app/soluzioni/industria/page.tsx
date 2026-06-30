import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { SectionTitle } from "@/components/ui/SectionTitle";
import Link from "next/link";
import { getRobotsByCategory } from "@/data/robots/robots";
import { RobotCard } from "@/components/cards/RobotCard";
import { Truck, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Soluzioni Robot per Industria & Logistica | Microlys Robotics",
  description:
    "Robot KEENON AMR e ZCS per logistica industriale. Trasporto interno fino a 300 kg, deploy rapido senza guide a pavimento, operatività 24/7.",
};

export default function SoluzioneIndustriaPage() {
  const robots = getRobotsByCategory("heavy-load");

  return (
    <div className="bg-white text-[#0A0A0A]">
      <section className="relative overflow-hidden bg-white px-6 pb-20 pt-32 md:px-12 lg:px-20 border-b border-black/5">
        <div className="absolute inset-0 bg-[radial-gradient(#0A0A0A_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
        <div className="container-wide relative mx-auto max-w-4xl">
          <div className="flex items-center gap-2 mb-6 text-xs font-mono font-bold uppercase tracking-wider text-zinc-500">
            <Link href="/soluzioni/" className="hover:text-[#E8001D] transition-colors">Soluzioni</Link>
            <span>/</span>
            <span className="text-[#E8001D]">Industria & Logistica 4.0</span>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8001D] text-white shadow-md mb-6">
            <Truck className="h-6 w-6" />
          </div>
          <h1 className="mb-4 text-4xl font-black text-[#0A0A0A] md:text-6xl">
            Robot AMR per <span className="text-shine-red">Industria & Logistica</span>
          </h1>
          <p className="max-w-2xl text-lg text-zinc-600 font-normal leading-relaxed">
            Robot autonomi AMR per la movimentazione interna di carichi e pallet. Portate pesanti, installazione rapida senza guide a pavimento e operatività ininterrotta supportata da ZCS.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F8F9FA] border-b border-black/5">
        <div className="container-wide mx-auto px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 border border-black/5 shadow-sm">
              <h2 className="mb-6 text-2xl font-black text-[#0A0A0A]">Le Sfide del Magazzino e della Produzione</h2>
              <ul className="space-y-4">
                {[
                  "Movimentazione manuale ripetitiva di carichi pesanti con rischi ergonomici e infortuni",
                  "Colli di bottiglia nei flussi di picking tra reparto produttivo e area di confezionamento",
                  "Costi operativi elevati per mantenere operativi i turni logistici notturni",
                  "Impossibilità di modificare infrastrutture esistenti o posare binari a pavimento",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-zinc-700 font-medium text-sm">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#E8001D]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-8 border border-black/5 shadow-sm">
              <h2 className="mb-6 text-2xl font-black text-[#0A0A0A]">La Soluzione AMR KEENON / ZCS</h2>
              <ul className="space-y-4">
                {[
                  "Trasporto autonomo fino a 300 kg con navigazione LiDAR naturale senza nastri o QR code",
                  "Messa in funzione in 24 ore: la mappa digitale viene creata istantaneamente dagli ingegneri",
                  "Operatività 24/7 con ricarica intelligente e sostituzione rapida batteria (hot-swap)",
                  "Sicurezza industriale certificata: doppio LiDAR di profondità e telecamere stereoscopiche 3D",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-3 text-zinc-800 font-semibold text-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#E8001D]" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-wide mx-auto px-6">
          <SectionTitle 
            title="Gamma AMR KEENON per Logistica Industriale" 
            subtitle="I modelli ad alta portata progettati per magazzini, reparti produttivi e spedizioni."
            centered 
            dark={false} 
          />
          <div className="grid gap-8 md:grid-cols-2">
            {robots.map((r) => (
              <RobotCard key={r.slug} robot={r} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F9FA] border-t border-black/5">
        <div className="container-wide mx-auto px-6 text-center max-w-3xl">
          <h2 className="mb-4 text-3xl font-black text-[#0A0A0A]">Vuoi valutare l'integrazione nel tuo impianto?</h2>
          <p className="mb-8 text-zinc-600 font-normal">Un nostro ingegnere logistico analizza gratuitamente il tuo layout planimetrico e calcola il ROI stimato.</p>
          <Link href="/demo/" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E8001D] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#E8001D]/25 transition hover:bg-[#D0001A]">
            Richiedi Analisi Fattibilità <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
