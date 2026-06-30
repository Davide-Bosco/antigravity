import { sectors } from "@/data/sectors/sectors";
import { SectorCard } from "@/components/cards/SectorCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function SectorsShowcase() {
  return (
    <section className="py-24 bg-[#F4F4F5] border-y border-black/[0.06] relative overflow-hidden text-[#0A0A0A]">
      <div className="container-wide mx-auto px-6 relative z-10">
        <SectionTitle
          title={<span>Settori Applicativi su tutto il <span className="text-shine-red">Territorio</span></span>}
          subtitle="Ingegneria ZCS Amico Robot e tecnologia KEENON integrate nei flussi di ristoranti, hotel alberghieri, cliniche e poli logistici."
          centered
          dark={false}
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <SectorCard key={sector.slug} sector={sector} />
          ))}
        </div>
      </div>
    </section>
  );
}
