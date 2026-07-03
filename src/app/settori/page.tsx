import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import {
  UtensilsCrossed, Building2, Sparkles, Truck, Heart, ShoppingCart,
  ArrowRight, CheckCircle2
} from "lucide-react";
import { GsapTextMarquee } from "@/components/ui/GsapTextMarquee";
import { GsapStaggerReveal } from "@/components/ui/GsapStaggerReveal";

export const metadata: Metadata = {
  title: "Settori Applicativi | Microlys Robotics — Partner ZCS Zucchetti",
  description:
    "Soluzioni robotiche KEENON / ZCS per ristorazione, hotel, healthcare, retail, industria e facility management.",
};

const sectors = [
  {
    slug: "ristorazione",
    icon: UtensilsCrossed,
    title: "Ristorazione & Catering",
    subtitle: "Dal fast food al ristorante stellato",
    description:
      "I robot DINERBOT ottimizzano il servizio in sala, riducono i chilometri percorsi dai camerieri e accelerano lo sbarazzo dei tavoli, garantendo una customer experience memorabile.",
    benefits: [
      "Consegna autonoma a tavoli multipli",
      "Evitamento ostacoli istantaneo con LiDAR 3D",
      "Personale dedicato interamente alla cura del cliente",
      "Interazione vocale e display promozionale",
    ],
    robots: ["DINERBOT T10", "DINERBOT T9", "DINERBOT T8", "DINERBOT T3"],
  },
  {
    slug: "hotel",
    icon: Building2,
    title: "Hotel & Hospitality",
    subtitle: "Esperienza ospiti a 5 stelle",
    description:
      "Room service automatizzato con integrazione ascensori e telefonate automatiche in camera. Il robot BUTLERBOT consegna spuntini, biancheria e ordini direttamente alla porta dell'ospite.",
    benefits: [
      "Servizio in camera H24 senza presidio notturno",
      "Integrazione domotica ascensori e porte automatiche",
      "Scomparto chiuso con codice PIN di sicurezza",
      "Accoglienza e concierge digitale",
    ],
    robots: ["BUTLERBOT W3", "DINERBOT T10", "XMAN-R1"],
  },
  {
    slug: "healthcare",
    icon: Heart,
    title: "Healthcare & Strutture Sanitarie",
    subtitle: "Igiene e tracciabilità clinica",
    description:
      "Consegna protetta di referti, farmaci, campioni biologici e pasti nelle cliniche e negli ospedali, riducendo le occasioni di contagio e ottimizzando il lavoro del personale infermieristico.",
    benefits: [
      "Trasporto igienico e sigillato elettronica",
      "Sanificazione automatica e raggi UV",
      "Operatività silenziosa e rispettosa del riposo",
      "Tracciabilità in tempo reale di ogni consegna",
    ],
    robots: ["DINERBOT T3", "KEENON S100", "BUTLERBOT W3"],
  },
  {
    slug: "retail",
    icon: ShoppingCart,
    title: "Retail & GDO",
    subtitle: "Efficienza nei grandi punti vendita",
    description:
      "Pulizia automatizzata notturna e diurna lungo le corsie commerciali, unita alla promozione dinamica dei prodotti e assistenza informativa ai clienti negli ipermercati.",
    benefits: [
      "Lavasciuga pavimenti automatica per grandi aree",
      "Movimentazione pallet e ceste di magazzino",
      "Riduzione drastica dei costi di pulizia",
      "Nessun ostacolo al passaggio dei clienti",
    ],
    robots: ["KLEENBOT C40", "KLEENBOT C30", "KEENON S100"],
  },
  {
    slug: "industria",
    icon: Truck,
    title: "Industria & Logistica 4.0",
    subtitle: "Carichi pesanti AMR fino a 300 kg",
    description:
      "Trasporto interno di componenti, bancali e ceste tra linee di produzione e magazzino. I robot serie S navigano senza bande magnetiche o binari a terra.",
    benefits: [
      "Capacità di carico fino a 300 kg",
      "Installazione rapida senza opere murarie",
      "Stazione di ricarica e cambio batteria ultra-rapido",
      "Interfacciamento con WMS e PLC aziendali",
    ],
    robots: ["KEENON S100", "KEENON S300"],
  },
  {
    slug: "facility",
    icon: Sparkles,
    title: "Facility Management & Uffici",
    subtitle: "Pulizia professionale 4-in-1",
    description:
      "Spazzano, aspirano, lavano e asciugano in un singolo passaggio. Monitoraggio consumi acqua ed energia tramite piattaforma cloud ZCS / KEENON in tempo reale.",
    benefits: [
      "Tecnologia lavasciuga 4-in-1 brevettata",
      "Gestione remota delle mappe e pianificazione orari",
      "Sensori anticaduta per scale e soppalchi",
      "Integrazione di stazioni di scarico acqua e ricarica",
    ],
    robots: ["KLEENBOT C55", "KLEENBOT C40", "KLEENBOT C30"],
  },
];

export default function SettoriPage() {
  return (
    <div className="bg-white text-[#0A0A0A]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white px-6 pb-20 pt-36 md:pt-40 md:px-12 lg:px-20 border-b border-black/5">
        <div className="absolute inset-0 bg-[radial-gradient(#0A0A0A_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(232,0,29,0.06)_0%,_transparent_70%)] rounded-full blur-[90px] pointer-events-none" />

        <div className="container-wide relative z-10 mx-auto text-center max-w-4xl">
          <Badge variant="red" className="mb-6 font-mono">Flessibilità & Adattabilità Operativa</Badge>
          <h1 className="mb-6 text-4xl font-black tracking-tight text-[#0A0A0A] md:text-6xl leading-[1.06]">
            Robot per <span className="text-shine-red">Ogni Settore</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed font-normal">
            Dalla ristorazione all'industria manifatturiera: l'infrastruttura tecnologica KEENON e l'assistenza italiana ZCS Zucchetti coprono ogni esigenza di automazione professionale.
          </p>
        </div>
      </section>

      {/* Marquee dark */}
      <GsapTextMarquee dark />

      {/* Sectors List — con Stagger 3D GSAP */}
      <section className="py-20 bg-[#F8F9FA] relative border-b border-black/5">
        <GsapStaggerReveal className="container-wide mx-auto px-6 space-y-10">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.slug}
                className="group relative overflow-hidden rounded-3xl p-8 md:p-12 transition-all duration-300 border bg-white text-[#0A0A0A] border-black/10 shadow-xl hover:border-[#E8001D] hover:shadow-2xl"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#E8001D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative grid gap-10 md:grid-cols-12 items-start">
                  <div className="md:col-span-7">
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8001D] text-white shadow-md">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E8001D]">
                        {sector.subtitle}
                      </span>
                    </div>
                    <h2 className="mb-4 text-2xl sm:text-3xl font-black tracking-tight text-[#0A0A0A] group-hover:text-[#E8001D] transition-colors">{sector.title}</h2>
                    <p className="mb-6 text-base leading-relaxed text-zinc-600 font-normal">
                      {sector.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {sector.benefits.map((b) => (
                        <div key={b} className="flex items-center gap-2.5 text-sm font-semibold text-zinc-800">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-[#E8001D]" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-5 rounded-2xl p-6 border bg-[#F8F9FA] border-black/5">
                    <h3 className="mb-4 text-xs font-mono font-bold uppercase tracking-widest text-zinc-500">
                      Modelli Consigliati
                    </h3>
                    <div className="space-y-2.5 mb-6">
                      {sector.robots.map((r) => (
                        <div
                          key={r}
                          className="rounded-xl px-4 py-3 text-sm font-mono font-bold flex items-center justify-between bg-white text-[#0A0A0A] border border-black/5 shadow-sm"
                        >
                          <span>{r}</span>
                          <span className="text-[10px] text-[#E8001D] uppercase tracking-wider font-sans font-bold">ZCS Amico</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/demo/"
                      className="inline-flex items-center justify-between w-full rounded-xl px-4 py-3.5 text-xs font-bold uppercase tracking-wider transition-all bg-[#E8001D] text-white hover:bg-[#D0001A] shadow-md"
                    >
                      <span>Richiedi Prova per {sector.title.split("&")[0].trim()}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </GsapStaggerReveal>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container-wide mx-auto px-6 text-center max-w-2xl">
          <h2 className="mb-4 text-3xl font-black text-[#0A0A0A]">Non hai trovato la specifica del tuo settore?</h2>
          <p className="mb-8 text-zinc-600 font-normal text-base">
            Contattaci per uno studio di fattibilità su misura. Il nostro team ingegnerizza percorsi autonomi per ogni ambiente di lavoro.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contatti/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E8001D] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#E8001D]/25 transition hover:bg-[#D0001A]"
            >
              Parla con un Ingegnere
            </Link>
            <Link
              href="/robot/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 bg-[#F8F9FA] px-8 py-4 text-base font-bold text-[#0A0A0A] transition hover:bg-zinc-200/60"
            >
              Vedi Tutti i Modelli
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
