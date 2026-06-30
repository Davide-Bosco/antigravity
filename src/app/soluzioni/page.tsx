import type { Metadata } from "next";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import {
  UtensilsCrossed, Building2, Sparkles, Truck, Heart, ShoppingCart,
  ArrowRight, CheckCircle2, Zap, TrendingDown, Clock, Shield
} from "lucide-react";

export const metadata: Metadata = {
  title: "Soluzioni Robotiche | Microlys Robotics — Partner ZCS Zucchetti",
  description:
    "Soluzioni complete di automazione robotica ZCS Amico Robot e KEENON per ristorazione, logistica industriale, sanità e hotel.",
};

const solutions = [
  {
    icon: UtensilsCrossed,
    title: "Ristorazione & Sala",
    href: "/robot/",
    desc: "Consegna al tavolo rapida, sbarazzo automatizzato e marketing interattivo con la serie DINERBOT.",
    tag: "In Evidenza",
  },
  {
    icon: Sparkles,
    title: "Pulizia Industriale 4-in-1",
    href: "/robot/",
    desc: "Lava, spazza, aspira e asciuga in un unico passaggio. La serie KLEENBOT per superfici professionali.",
    tag: null,
  },
  {
    icon: Building2,
    title: "Hotel Room Service",
    href: "/robot/",
    desc: "Navigazione autonoma su più piani con chiamata ascensore integrata per room service discreto H24.",
    tag: null,
  },
  {
    icon: Truck,
    title: "Logistica AMR Pesante",
    href: "/robot/",
    desc: "Trasporto pallet e carichi interni fino a 300 kg con navigazione LiDAR 3D senza guide a pavimento.",
    tag: "Industria 4.0",
  },
  {
    icon: Heart,
    title: "Sanità & Ospedali",
    href: "/robot/",
    desc: "Trasporto sicuro di analisi, farmaci e biancheria con scomparti sigillati e tracciamento.",
    tag: null,
  },
  {
    icon: ShoppingCart,
    title: "Retail & Supermercati",
    href: "/robot/",
    desc: "Accoglienza clienti guidata, promozione prodotti promozionali in corsia e pulizia notturna.",
    tag: null,
  },
];

const process = [
  {
    step: "01",
    title: "Sopralluogo & Analisi",
    desc: "I nostri specialisti studiano i flussi di sala o magazzino del tuo locale per identificare la soluzione ideale.",
  },
  {
    step: "02",
    title: "Mappatura Laser 3D",
    desc: "Creiamo la mappa digitale millimetrica degli ambienti con percorsi dedicati e zone vietate programmate.",
  },
  {
    step: "03",
    title: "Installazione Rapida",
    desc: "Messa in opera in meno di 24 ore, senza scavi, cablaggi complessi o modifiche strutturali.",
  },
  {
    step: "04",
    title: "Affiancamento & Supporto",
    desc: "Formazione pratica del tuo staff e assistenza tecnica continuativa garantita dalla rete ZCS in Italia.",
  },
];

export default function SoluzioniPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white px-6 pb-20 pt-32 md:px-12 lg:px-20 border-b border-black/5">
        <div className="absolute inset-0 bg-[radial-gradient(#0A0A0A_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(232,0,29,0.06)_0%,_transparent_70%)] rounded-full blur-[90px] pointer-events-none" />

        <div className="container-wide relative z-10 mx-auto max-w-3xl text-center">
          <Badge variant="red" className="mb-6 font-mono">Partner ZCS Zucchetti & Distributore KEENON</Badge>
          <h1 className="mb-6 text-4xl font-black tracking-tight text-[#0A0A0A] sm:text-6xl">
            Soluzioni <span className="text-shine-red">su Misura</span> per ogni Settore
          </h1>
          <p className="text-lg leading-relaxed text-zinc-600 font-normal">
            Non vendiamo semplici macchine, ma progettiamo sistemi di automazione operativa completi integrando le tecnologie KEENON con l'affidabilità di ZCS Amico Robot.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-[#F8F9FA] relative">
        <div className="container-wide mx-auto px-6">
          <SectionTitle
            title={<span>Sistemi Integrati <span className="text-shine-red">pronti all'Uso</span></span>}
            subtitle="Dall'accoglienza in sala alla sanificazione delle aree produttive."
            centered
            dark={false}
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <div
                key={s.title}
                className="group relative flex flex-col justify-between rounded-3xl border border-black/5 bg-white p-8 transition-all duration-300 hover:border-[#E8001D]/40 hover:shadow-2xl hover:-translate-y-1.5"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8001D]/10 text-[#E8001D] group-hover:bg-[#E8001D] group-hover:text-white transition-all shadow-sm">
                      <s.icon className="h-6 w-6" />
                    </div>
                    {s.tag && (
                      <span className="rounded-full bg-[#E8001D] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white font-mono shadow-sm">
                        {s.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-[#0A0A0A] group-hover:text-[#E8001D] transition-colors">
                    {s.title}
                  </h3>
                  <p className="mb-8 text-sm leading-relaxed text-zinc-600 font-normal">
                    {s.desc}
                  </p>
                </div>

                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E8001D] pt-4 border-t border-black/5 transition group-hover:translate-x-1"
                >
                  Scopri i Modelli <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White High-Contrast Process Section */}
      <section className="py-24 bg-white border-t border-black/5">
        <div className="container-wide mx-auto px-6">
          <SectionTitle
            title="Come Attiviamo l'Automazione nel Tuo Locale"
            subtitle="Un protocollo chiaro, collaudato e senza stress, gestito dal nostro team di ingegneri in Italia."
            centered
            dark={false}
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div
                key={p.step}
                className="relative rounded-3xl border border-black/10 bg-[#F4F4F5] p-8 transition hover:border-[#E8001D]/40 hover:bg-white hover:shadow-xl"
              >
                <div className="mb-6 font-mono text-4xl font-black text-[#E8001D]">
                  {p.step}
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#0A0A0A]">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 font-normal">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-20 bg-[#F8F9FA] border-t border-black/5">
        <div className="container-wide mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-black text-[#0A0A0A] mb-4">Vuoi vedere i robot in azione nel tuo locale?</h2>
          <p className="text-zinc-600 mb-8 font-normal">Senza impegno. Ti mostriamo quanto tempo e quante risorse puoi risparmiare dal primo giorno.</p>
          <Link
            href="/demo/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E8001D] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#E8001D]/25 transition hover:bg-[#D0001A]"
          >
            Prenota Prova Gratuita
          </Link>
        </div>
      </section>
    </>
  );
}
