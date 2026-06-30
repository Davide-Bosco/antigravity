import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { SectionTitle } from "@/components/ui/SectionTitle";
import Link from "next/link";
import { getRobotsByCategory } from "@/data/robots/robots";
import { RobotCard } from "@/components/cards/RobotCard";
import { UtensilsCrossed, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Soluzioni Robot per Ristorazione | Microlys Robotics",
  description:
    "Robot KEENON DINERBOT e ZCS Amico Robot per ristoranti, hotel e catering. Consegna autonoma ai tavoli, sbarazzo rapido e servizio 24/7.",
};

export default function SoluzioneRistorazionePage() {
  const robots = getRobotsByCategory("catering");

  return (
    <div className="bg-white text-[#0A0A0A]">
      <section className="relative overflow-hidden bg-white px-6 pb-20 pt-32 md:px-12 lg:px-20 border-b border-black/5">
        <div className="absolute inset-0 bg-[radial-gradient(#0A0A0A_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
        <div className="container-wide relative mx-auto max-w-4xl">
          <div className="flex items-center gap-2 mb-6 text-xs font-mono font-bold uppercase tracking-wider text-zinc-500">
            <Link href="/soluzioni/" className="hover:text-[#E8001D] transition-colors">Soluzioni</Link>
            <span>/</span>
            <span className="text-[#E8001D]">Ristorazione & Sala</span>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8001D] text-white shadow-md mb-6">
            <UtensilsCrossed className="h-6 w-6" />
          </div>
          <h1 className="mb-4 text-4xl font-black text-[#0A0A0A] md:text-6xl">
            Automazione e Robot per la <span className="text-shine-red">Ristorazione</span>
          </h1>
          <p className="max-w-2xl text-lg text-zinc-600 font-normal leading-relaxed">
            I robot DINERBOT di KEENON, distribuiti con garanzia ZCS Zucchetti da Microlys Robotics, automatizzano il servizio ai tavoli e lo sbarazzo, liberando il personale per l'accoglienza clienti.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F8F9FA] border-b border-black/5">
        <div className="container-wide mx-auto px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 border border-black/5 shadow-sm">
              <h2 className="mb-6 text-2xl font-black text-[#0A0A0A]">Le Sfide di Sala e Cucina</h2>
              <ul className="space-y-4">
                {[
                  "Difficoltà strutturale a trovare personale di sala qualificato",
                  "Affaticamento fisico dei camerieri per lunghi tragitti con piatti pesanti",
                  "Picchi di lavoro festivi ad altissima intensità difficili da smaltire",
                  "Tempi di attesa elevati che incidono negativamente sul turn-over tavoli",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-zinc-700 font-medium text-sm">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#E8001D]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-8 border border-black/5 shadow-sm">
              <h2 className="mb-6 text-2xl font-black text-[#0A0A0A]">La Soluzione DINERBOT / ZCS</h2>
              <ul className="space-y-4">
                {[
                  "Consegna multipla ai tavoli con vassoi di grande portata (fino a 40 kg)",
                  "Navigazione LiDAR 3D e SLAM in spazi ristretti con clienti e bambini in movimento",
                  "Abbattimento dei tempi di sbarazzo e riallestimento tavoli fino al 45%",
                  "Camerieri più concentrati sulla cura dell'ospite e sulla vendita di vini e dessert",
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
            title="Modelli DINERBOT Consigliati per la Ristorazione" 
            subtitle="Selezionati dai nostri ingegneri per affidabilità, agilità in sala e durata della batteria."
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
          <h2 className="mb-4 text-3xl font-black text-[#0A0A0A]">Vuoi vedere il robot all'opera nel tuo ristorante?</h2>
          <p className="mb-8 text-zinc-600 font-normal">I nostri consulenti portano un DINERBOT direttamente nella tua sala per un test operativo gratuito sui tuoi percorsi.</p>
          <Link href="/demo/" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E8001D] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#E8001D]/25 transition hover:bg-[#D0001A]">
            Richiedi una Demo sul Posto <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
