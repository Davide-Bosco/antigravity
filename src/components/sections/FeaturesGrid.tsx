import { SectionTitle } from "@/components/ui/SectionTitle";
import { Zap, TrendingDown, Smile, Clock, Shield, Headphones } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Efficienza Operativa",
    text: "Automatizza i compiti logistici ripetitivi in sala, cucina o magazzino liberando il personale per attività a maggior valore aggiunto e cura del cliente.",
  },
  {
    icon: TrendingDown,
    title: "Abbattimento Costi",
    text: "Riduci sensibilmente i costi operativi della logistica interna, minimizzando rotture, errori di trasporto e rallentamenti di flusso.",
  },
  {
    icon: Smile,
    title: "Esperienza WOW per i Clienti",
    text: "Un servizio tecnologico, interattivo e preciso che differenzia il tuo locale, incuriosisce i clienti e migliora le recensioni online.",
  },
  {
    icon: Clock,
    title: "Operatività H24 Ininterrotta",
    text: "I robot lavorano con precisione costante, rientrando autonomamente alla base di ricarica con sistema di swap batteria ultra-rapido.",
  },
  {
    icon: Shield,
    title: "Partner ZCS & Sicurezza 360°",
    text: "Navigazione LiDAR 3D brevettata, sensori stereoscopici anti-collisione e la garanzia istituzionale di ZCS Zucchetti Centro Sistemi.",
  },
  {
    icon: Headphones,
    title: "Supporto e Ricambi Italia",
    text: "Installazione rapida in meno di 24 ore senza opere murarie, affiancamento ingegneristico e assistenza tecnica capillare.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 bg-white relative overflow-hidden text-[#0A0A0A]">
      <div className="container-wide mx-auto px-6 relative z-10">
        <SectionTitle
          title={<span>I vantaggi concreti dell'<span className="text-shine-red">automazione sul campo</span></span>}
          subtitle="Non si tratta di sostituire le persone, ma di potenziarne il lavoro eliminando fatica e inefficienze logistiche."
          centered
          dark={false}
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-3xl border border-black/[0.06] bg-[#F8F9FA] p-8 transition-all duration-300 hover:bg-white hover:border-[#E8001D]/30 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8001D] text-white shadow-lg shadow-[#E8001D]/25 group-hover:scale-110 transition-transform duration-300">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#0A0A0A] group-hover:text-[#E8001D] transition-colors">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 font-normal">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
