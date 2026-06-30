import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | Microlys Robotics",
};

export default function CookiePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0A0A0A] px-6 pb-16 pt-28 md:px-12 lg:px-20">
        <div className="container-wide relative mx-auto">
          <Badge variant="red" className="mb-6">Cookie Policy</Badge>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white">Gestione dei Cookie</h1>
          <p className="text-white/60">Ultimo aggiornamento: 30 Giugno 2026</p>
        </div>
      </section>

      <section className="py-16 bg-[#0A0A0A]">
        <div className="container-wide mx-auto max-w-3xl">
          <div className="rounded-3xl bg-[#141414] p-8 sm:p-12 border border-white/[0.08] space-y-8 text-white/80 leading-relaxed">
            <section>
              <h2 className="mb-3 text-xl font-bold text-white">Cosa sono i cookie tecnici</h2>
              <p>Il nostro portale utilizza esclusivamente cookie tecnici e di sessione indispensabili per garantire la stabilità della navigazione, il salvataggio dei filtri del catalogo robot e la sicurezza informatica della sessione.</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white">Tabella Cookie Utilizzati</h2>
              <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
                <table className="w-full text-sm">
                  <thead className="bg-[#1C1C1C]">
                    <tr>
                      <th className="px-4 py-3 text-left font-mono text-xs text-white/50">NOME</th>
                      <th className="px-4 py-3 text-left font-mono text-xs text-white/50">TIPO</th>
                      <th className="px-4 py-3 text-left font-mono text-xs text-white/50">DURATA</th>
                      <th className="px-4 py-3 text-left font-mono text-xs text-white/50">FUNZIONE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.06] bg-[#111111]">
                    <tr>
                      <td className="px-4 py-3.5 font-mono font-bold text-[#E8001D]">next-session</td>
                      <td className="px-4 py-3.5 text-white/70">Tecnico</td>
                      <td className="px-4 py-3.5 text-white/70">Sessione</td>
                      <td className="px-4 py-3.5 text-white/70">Mantenimento preferenze di navigazione</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <div className="pt-4 border-t border-white/10">
              <Link href="/privacy/" className="text-[#E8001D] hover:underline font-bold text-sm">← Torna alla Privacy Policy</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
