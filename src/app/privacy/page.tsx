import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Microlys Robotics",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0A0A0A] px-6 pb-16 pt-28 md:px-12 lg:px-20">
        <div className="container-wide relative mx-auto">
          <Badge variant="red" className="mb-6">Privacy & Trattamento Dati</Badge>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white">Privacy Policy</h1>
          <p className="text-white/60">Ultimo aggiornamento: 30 Giugno 2026</p>
        </div>
      </section>

      <section className="py-16 bg-[#0A0A0A]">
        <div className="container-wide mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[300px_1fr]">
            {/* Sidebar */}
            <div className="space-y-2 rounded-2xl bg-[#141414] p-6 border border-white/[0.08] h-fit">
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#E8001D] mb-4">Indice Sezioni</p>
              {[
                "1. Titolare del trattamento",
                "2. Dati raccolti e modalità",
                "3. Finalità operative",
                "4. Base giuridica",
                "5. Conservazione dei dati",
                "6. Diritti dell'interessato",
                "7. Gestione Cookie",
              ].map((s) => (
                <div key={s} className="block rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/[0.05] hover:text-white transition cursor-pointer">
                  {s}
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="rounded-3xl bg-[#141414] p-8 sm:p-12 border border-white/[0.08] text-white/80 space-y-8 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-white mb-3">1. Titolare del trattamento</h2>
                <p>
                  Microlys Robotics S.r.l., partner ufficiale di ZCS Zucchetti per le soluzioni KEENON.
                  Sede legale: Milano (MI), Italia. Email di contatto: <a href="mailto:privacy@microlys.robotics" className="text-[#E8001D] font-bold hover:underline">privacy@microlys.robotics</a>
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">2. Dati raccolti</h2>
                <p>Nell'erogazione dei servizi di consulenza e preventivazione robotica raccogliamo:</p>
                <ul className="list-disc list-inside space-y-1 text-white/70 mt-2">
                  <li>Dati anagrafici e aziendali: nome, cognome, ragione sociale, partita IVA</li>
                  <li>Dati di recapito: email aziendale, recapito telefonico, indirizzo sede o locale</li>
                  <li>Dati tecnici: planimetrie o specifiche fornite facoltativamente dal cliente per lo studio 3D</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">3. Finalità del trattamento</h2>
                <p>Il trattamento è indirizzato alla corretta esecuzione delle richieste di sopralluogo, alla formulazione di preventivi personalizzati e all'installazione di apparecchiature robotiche di servizio.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">4. Diritti dell'Interessato</h2>
                <p>
                  Ai sensi del GDPR, puoi richiedere in qualsiasi istante l'aggiornamento, la cancellazione o la limitazione del trattamento inviando una comunicazione a <a href="mailto:privacy@microlys.robotics" className="text-[#E8001D] font-bold hover:underline">privacy@microlys.robotics</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
