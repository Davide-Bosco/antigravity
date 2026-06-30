import type { Metadata } from "next";
import { company } from "@/data/company/company";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { Target, Heart, Rocket, Users, Award, Globe, ShieldCheck, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Chi Siamo | Microlys Robotics — Partner ZCS & Distributore KEENON",
  description:
    "Microlys Robotics è partner ufficiale di ZCS Zucchetti per la distribuzione delle soluzioni di robotica di servizio KEENON in Italia.",
};

const timeline = [
  { year: "2020", event: "Nascita della divisione automazione e robotica di servizio Microlys" },
  { year: "2021", event: "Avvio delle prime sperimentazioni operative nella ristorazione commerciale" },
  { year: "2022", event: "Accordo di partnership strategica per la distribuzione sul territorio italiano" },
  { year: "2023", event: "Espansione verso i settori sanitario, alberghiero e facility cleaning" },
  { year: "2024", event: "Integrazione della linea di robotica pesante AMR per l'industria 4.0" },
  { year: "2025", event: "Rete capillare di assistenza e manutenzione rapida su tutta Italia" },
];

export default function ChiSiamoPage() {
  return (
    <div className="bg-white text-[#0A0A0A]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white px-6 pb-20 pt-36 md:pt-40 md:px-12 lg:px-20 border-b border-black/5">
        <div className="absolute inset-0 bg-[radial-gradient(#0A0A0A_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(232,0,29,0.06)_0%,_transparent_70%)] rounded-full blur-[90px] pointer-events-none" />

        <div className="container-wide relative z-10 mx-auto max-w-4xl">
          <Badge variant="red" className="mb-6 font-mono">L'Azienda & Partnership Societaria</Badge>
          <h1 className="mb-6 text-4xl font-black tracking-tight text-[#0A0A0A] md:text-6xl leading-[1.06]">
            L'Eccellenza Italiana nell' <span className="text-shine-red">Automazione Robotica</span>
          </h1>
          <p className="max-w-2xl text-lg sm:text-xl text-zinc-600 leading-relaxed font-normal">
            Microlys Robotics unisce la tecnologia mondiale di KEENON, la garanzia infrastrutturale di ZCS Zucchetti e il supporto ingegneristico sul campo per trasformare l'efficienza della tua azienda.
          </p>
        </div>
      </section>

      {/* Stats row */}
      <section className="py-16 bg-[#F8F9FA] border-b border-black/5">
        <div className="container-wide mx-auto px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {company.stats.map((stat) => (
              <div key={stat.label} className="group rounded-3xl border border-black/5 bg-white p-8 text-center transition-all duration-300 hover:border-[#E8001D] hover:shadow-xl">
                <div className="mb-2 text-4xl font-black font-mono text-[#0A0A0A] group-hover:text-[#E8001D] transition-colors">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider font-bold text-zinc-500 font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-white relative overflow-hidden border-b border-black/5">
        <div className="container-wide mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#E8001D]/10 text-[#E8001D] px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-4 font-mono">
              I Nostri Pilastri
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A0A0A] leading-tight mb-4">
              La nostra missione sul campo
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed font-normal">
              Portare l'automazione intelligente dove crea valore tangibile: affiancare i team umani per eliminare fatica, errori logistici e inefficienze.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-[#F8F9FA] p-8 border border-black/5 transition hover:bg-white hover:shadow-xl hover:border-[#E8001D]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8001D] text-white shadow-md">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#0A0A0A]">Affidabilità Assoluta</h3>
              <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                Selezioniamo e testiamo solo robot di grado industriale costruiti per lavorare fino a 15 ore consecutive con precisione millimetrica.
              </p>
            </div>
            <div className="rounded-3xl bg-[#F8F9FA] p-8 border border-black/5 transition hover:bg-white hover:shadow-xl hover:border-[#E8001D]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8001D] text-white shadow-md">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#0A0A0A]">Al centro le Persone</h3>
              <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                I nostri robot non sostituiscono il calore umano e il servizio, ma sollevano il personale dai compiti pesanti o logoranti.
              </p>
            </div>
            <div className="rounded-3xl bg-[#F8F9FA] p-8 border border-black/5 transition hover:bg-white hover:shadow-xl hover:border-[#E8001D]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8001D] text-white shadow-md">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#0A0A0A]">Garanzia ZCS Italia</h3>
              <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                Un grande gruppo italiano a garanzia dell'infrastruttura, della continuità dei ricambi e dell'assistenza tecnica post-vendita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership ZCS Box - All White / Bright */}
      <section className="py-24 bg-[#F8F9FA] border-b border-black/5">
        <div className="container-wide mx-auto px-6">
          <div className="rounded-3xl bg-white p-10 sm:p-14 text-[#0A0A0A] border border-black/10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#E8001D]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,_rgba(232,0,29,0.06)_0%,_transparent_70%)] rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#E8001D] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white font-mono shadow-md">
                <Award className="h-4 w-4" /> La Forza della Rete
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A0A0A]">
                Microlys & ZCS Zucchetti Centro Sistemi
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed font-normal">
                La collaborazione strategica tra <strong className="text-[#0A0A0A]">Microlys Robotics</strong> e <strong className="text-[#0A0A0A]">ZCS Zucchetti</strong> crea un punto di riferimento unico per la robotica autonoma in Italia. Garantiamo alle imprese un accesso diretto alla tecnologia di punta KEENON con la certezza di un supporto locale solido e strutturato.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/contatti/"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E8001D] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#E8001D]/25 transition hover:bg-[#D0001A]"
                >
                  Contatta la nostra Sede
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white border-b border-black/5">
        <div className="container-wide mx-auto px-6">
          <SectionTitle
            title="Le Tappe della Nostra Crescita"
            subtitle="Dalle prime installazioni di sala alla leadership tecnica sul territorio."
            centered
            dark={false}
          />
          <div className="max-w-4xl mx-auto relative mt-16">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#E8001D]/20 -translate-x-1/2" />
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={item.year}
                    className={`relative flex flex-col md:flex-row items-start ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-[#E8001D] border-4 border-white shadow-md -translate-x-1/2 mt-1.5 z-10" />
                    <div className={`pl-16 md:pl-0 w-full md:w-1/2 ${isEven ? "md:pl-12 text-left" : "md:pr-12 md:text-right"}`}>
                      <span className="text-sm font-mono font-black text-[#E8001D] block mb-1 tracking-wider">
                        {item.year}
                      </span>
                      <div className="rounded-2xl border border-black/5 bg-[#F8F9FA] p-6 shadow-sm hover:border-[#E8001D] transition-colors">
                        <p className="text-zinc-700 font-semibold text-sm leading-relaxed">
                          {item.event}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container-wide mx-auto px-6 text-center max-w-2xl">
          <h2 className="mb-4 text-3xl font-black text-[#0A0A0A]">Vieni a Conoscerci</h2>
          <p className="mb-8 text-zinc-600 font-normal">Siamo pronti ad ascoltare le tue esigenze logistiche e studiare il progetto robotico perfetto per il tuo business.</p>
          <Link href="/contatti/" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E8001D] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#E8001D]/25 transition hover:bg-[#D0001A]">
            Parla con un Nostro Consulente
          </Link>
        </div>
      </section>
    </div>
  );
}
