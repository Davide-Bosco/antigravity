import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { SectionTitle } from "@/components/ui/SectionTitle";
import Link from "next/link";
import { getRobotsByCategory } from "@/data/robots/robots";
import { RobotCard } from "@/components/cards/RobotCard";
import { ShoppingCart, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Soluzioni Robot per Retail & GDO | Microlys Robotics",
  description:
    "Robot KEENON e ZCS Amico per retail, supermercati e centri commerciali. Pulizia automatizzata e supporto promozionale in punto vendita.",
};

export default function SoluzioneRetailPage() {
  const cleaningRobots = getRobotsByCategory("cleaning");
  const shown = cleaningRobots.slice(0, 3);

  return (
    <div className="bg-white text-[#0A0A0A]">
      <section className="relative overflow-hidden bg-white px-6 pb-20 pt-32 md:px-12 lg:px-20 border-b border-black/5">
        <div className="absolute inset-0 bg-[radial-gradient(#0A0A0A_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
        <div className="container-wide relative mx-auto max-w-4xl">
          <div className="flex items-center gap-2 mb-6 text-xs font-mono font-bold uppercase tracking-wider text-zinc-500">
            <Link href="/soluzioni/" className="hover:text-[#E8001D] transition-colors">Soluzioni</Link>
            <span>/</span>
            <span className="text-[#E8001D]">Retail & Supermercati</span>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8001D] text-white shadow-md mb-6">
            <ShoppingCart className="h-6 w-6" />
          </div>
          <h1 className="mb-4 text-4xl font-black text-[#0A0A0A] md:text-6xl">
            Robot per <span className="text-shine-red">Retail & GDO</span>
          </h1>
          <p className="max-w-2xl text-lg text-zinc-600 font-normal leading-relaxed">
            Automazione per negozi, showroom e supermercati: sanificazione continua notturna o diurna e accoglienza clienti differenziata guidata dalla tecnologia KEENON.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F8F9FA] border-b border-black/5">
        <div className="container-wide mx-auto px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 border border-black/5 shadow-sm">
              <h2 className="mb-6 text-2xl font-black text-[#0A0A0A]">Le Sfide del Punto Vendita</h2>
              <ul className="space-y-4">
                {[
                  "Staff di vendita distolto dall'assistenza clienti per compiti di pulizia o riordino",
                  "Costi operativi per le pulizie di grandi corsie fuori orario di apertura",
                  "Esigenza di catturare l'attenzione dei consumatori con promozioni interattive",
                  "Necessità di mantenere corsie sempre pulite e sicure durante le ore di punta",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-zinc-700 font-medium text-sm">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#E8001D]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-8 border border-black/5 shadow-sm">
              <h2 className="mb-6 text-2xl font-black text-[#0A0A0A]">La Soluzione Retail KEENON / ZCS</h2>
              <ul className="space-y-4">
                {[
                  "Sanificazione automatizzata 4-in-1 delle corsie programmabile negli orari di chiusura",
                  "Robot di accoglienza e promozione prodotti capaci di guidare il cliente a scaffale",
                  "Abbattimento dei costi operativi di facility management fino al 35%",
                  "Interfaccia cloud per la verifica in tempo reale della pulizia delle singole aree",
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
            title="Modelli Consigliati per Retail e GDO" 
            subtitle="I sistemi di sanificazione e accoglienza ideali per le corsie commerciali."
            centered 
            dark={false} 
          />
          <div className="grid gap-8 md:grid-cols-3">
            {shown.map((r) => (
              <RobotCard key={r.slug} robot={r} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F9FA] border-t border-black/5">
        <div className="container-wide mx-auto px-6 text-center max-w-3xl">
          <h2 className="mb-4 text-3xl font-black text-[#0A0A0A]">Vuoi testare l'automazione nel tuo punto vendita?</h2>
          <p className="mb-8 text-zinc-600 font-normal">Organizziamo una simulazione di pulizia o promozione in corsia direttamente da te.</p>
          <Link href="/demo/" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E8001D] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#E8001D]/25 transition hover:bg-[#D0001A]">
            Richiedi Prova in Negozio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
