import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termini di Servizio | Microlys Robotics",
};

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0A0A0A] px-6 pb-16 pt-28 md:px-12 lg:px-20">
        <div className="container-wide relative mx-auto">
          <Badge variant="red" className="mb-6">Termini & Accordi</Badge>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white">Termini di Servizio</h1>
          <p className="text-white/60">Ultimo aggiornamento: 30 Giugno 2026</p>
        </div>
      </section>

      <section className="py-16 bg-[#0A0A0A]">
        <div className="container-wide mx-auto max-w-3xl">
          <div className="rounded-3xl bg-[#141414] p-8 sm:p-12 border border-white/[0.08] space-y-8 text-white/80 leading-relaxed">
            <section>
              <h2 className="mb-3 text-xl font-bold text-white">1. Titolarità del Servizio</h2>
              <p>Il sito è operato da Microlys Robotics, partner strategico di ZCS Zucchetti per la distribuzione delle soluzioni di automazione robotica KEENON sul territorio italiano.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">2. Proprietà Intellettuale</h2>
              <p>I marchi KEENON, DINERBOT, BUTLERBOT e KLEENBOT appartengono ai rispettivi titolari di brevetto. Le foto e le schede tecniche provengono da fonti verificate ZCS Amico Robot e KEENON Robotics Co., Ltd.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-white">3. Richieste Commerciali</h2>
              <p>Le richieste di demo e preventivazione effettuate tramite il sito non hanno carattere vincolante e sono soggette a verifica tecnica preventiva di fattibilità da parte degli ingegneri di sala Microlys.</p>
            </section>

            <div className="pt-4 border-t border-white/10">
              <Link href="/privacy/" className="text-[#E8001D] hover:underline font-bold text-sm">← Leggi la Privacy Policy</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
