import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { SectionTitle } from "@/components/ui/SectionTitle";
import Link from "next/link";
import { getRobotsByCategory } from "@/data/robots/robots";
import { RobotCard } from "@/components/cards/RobotCard";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Soluzioni Robot per Cleaning & Sanità | Microlys Robotics",
  description:
    "Robot KEENON KLEENBOT per pulizia e sanificazione professionale. Da 500 a 50.000 m², gestione remota e assistenza ZCS.",
};

export default function SoluzioneHealthcarePage() {
  const robots = getRobotsByCategory("cleaning");

  return (
    <div className="bg-white text-[#0A0A0A]">
      <section className="relative overflow-hidden bg-white px-6 pb-20 pt-32 md:px-12 lg:px-20 border-b border-black/5">
        <div className="absolute inset-0 bg-[radial-gradient(#0A0A0A_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
        <div className="container-wide relative mx-auto max-w-4xl">
          <div className="flex items-center gap-2 mb-6 text-xs font-mono font-bold uppercase tracking-wider text-zinc-500">
            <Link href="/soluzioni/" className="hover:text-[#E8001D] transition-colors">Soluzioni</Link>
            <span>/</span>
            <span className="text-[#E8001D]">Cleaning Industriale & Sanità</span>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8001D] text-white shadow-md mb-6">
            <Sparkles className="h-6 w-6" />
          </div>
          <h1 className="mb-4 text-4xl font-black text-[#0A0A0A] md:text-6xl">
            Robot per <span className="text-shine-red">Cleaning & Sanità</span>
          </h1>
          <p className="max-w-2xl text-lg text-zinc-600 font-normal leading-relaxed">
            Pulizia e sanificazione professionale automatizzata per ospedali, cliniche e grandi superfici. I robot KLEENBOT spazzano, aspirano, lavano e asciugano in un unico passaggio.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F8F9FA] border-b border-black/5">
        <div className="container-wide mx-auto px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 border border-black/5 shadow-sm">
              <h2 className="mb-6 text-2xl font-black text-[#0A0A0A]">Le Sfide della Pulizia Professionale</h2>
              <ul className="space-y-4">
                {[
                  "Costi elevati del personale per turni notturni e festivi di sanificazione",
                  "Difficoltà a mantenere standard costanti su superfici estese oltre i 2.000 m²",
                  "Consumi eccessivi di acqua e detergenti chimici con metodi tradizionali",
                  "Necessità di tracciabilità certificata per ambienti clinici e ospedalieri",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-zinc-700 font-medium text-sm">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#E8001D]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-8 border border-black/5 shadow-sm">
              <h2 className="mb-6 text-2xl font-black text-[#0A0A0A]">La Soluzione KLEENBOT / ZCS</h2>
              <ul className="space-y-4">
                {[
                  "Sistema integrato 4-in-1: spazza, aspira ad alta potenza, lava con rullo e asciuga",
                  "Autonomia continua fino a 12 ore con cambio rapido batteria in 5 secondi",
                  "Report di sanificazione digitali scaricabili da portale Cloud e App mobile",
                  "Rete di manutenzione e ricambi garantita in tutta Italia da ZCS Zucchetti",
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
            title="Gamma KLEENBOT per Grandi Superfici e Sanità" 
            subtitle="I modelli ideali per pavimentazioni tecniche, ospedali e centri commerciali."
            centered 
            dark={false} 
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {robots.map((r) => (
              <RobotCard key={r.slug} robot={r} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F9FA] border-t border-black/5">
        <div className="container-wide mx-auto px-6 text-center max-w-3xl">
          <h2 className="mb-4 text-3xl font-black text-[#0A0A0A]">Vuoi verificare l'efficienza sui tuoi pavimenti?</h2>
          <p className="mb-8 text-zinc-600 font-normal">Organizziamo una prova di lavaggio e sanificazione automatica direttamente nella tua struttura.</p>
          <Link href="/demo/" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E8001D] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#E8001D]/25 transition hover:bg-[#D0001A]">
            Prenota Prova di Pulizia <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
