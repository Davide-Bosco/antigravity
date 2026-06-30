import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { SectionTitle } from "@/components/ui/SectionTitle";
import Link from "next/link";
import { getRobotBySlug } from "@/data/robots/robots";
import { RobotCard } from "@/components/cards/RobotCard";
import { Building2, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Soluzioni Robot per Hotel & Hospitality | Microlys Robotics",
  description:
    "Robot KEENON BUTLERBOT e ZCS per hotel, resort e hospitality. Room service 24/7, consegne multi-piano e chiamata ascensore autonoma.",
};

export default function SoluzioneHotelPage() {
  const robots = [
    getRobotBySlug("butlerbot-w3"),
    getRobotBySlug("dinerbot-t10"),
    getRobotBySlug("kleenbot-c30"),
  ].filter(Boolean) as NonNullable<ReturnType<typeof getRobotBySlug>>[];

  return (
    <div className="bg-white text-[#0A0A0A]">
      <section className="relative overflow-hidden bg-white px-6 pb-20 pt-32 md:px-12 lg:px-20 border-b border-black/5">
        <div className="absolute inset-0 bg-[radial-gradient(#0A0A0A_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
        <div className="container-wide relative mx-auto max-w-4xl">
          <div className="flex items-center gap-2 mb-6 text-xs font-mono font-bold uppercase tracking-wider text-zinc-500">
            <Link href="/soluzioni/" className="hover:text-[#E8001D] transition-colors">Soluzioni</Link>
            <span>/</span>
            <span className="text-[#E8001D]">Hotel & Hospitality</span>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8001D] text-white shadow-md mb-6">
            <Building2 className="h-6 w-6" />
          </div>
          <h1 className="mb-4 text-4xl font-black text-[#0A0A0A] md:text-6xl">
            Robot per <span className="text-shine-red">Hotel & Hospitality</span>
          </h1>
          <p className="max-w-2xl text-lg text-zinc-600 font-normal leading-relaxed">
            I robot BUTLERBOT di KEENON, integrati con garanzia e supporto ZCS Zucchetti, gestiscono room service multi-piano, chiamano l'ascensore e accolgono gli ospiti H24.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F8F9FA] border-b border-black/5">
        <div className="container-wide mx-auto px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 border border-black/5 shadow-sm">
              <h2 className="mb-6 text-2xl font-black text-[#0A0A0A]">Le Sfide dell'Ospitalità</h2>
              <ul className="space-y-4">
                {[
                  "Gestione del room service notturno ad altissimo impatto sul costo del personale",
                  "Richieste continue di asciugamani, bevande o cortesia che distraggono la reception",
                  "Necessità di sorprendere gli ospiti con un'esperienza di soggiorno moderna e tecnologica",
                  "Spostamento di carichi di biancheria o pulizia tra i piani in orari critici",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-zinc-700 font-medium text-sm">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#E8001D]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-8 border border-black/5 shadow-sm">
              <h2 className="mb-6 text-2xl font-black text-[#0A0A0A]">La Soluzione BUTLERBOT / ZCS</h2>
              <ul className="space-y-4">
                {[
                  "Consegna autonoma direttamente alla porta della camera con scomparto chiuso a PIN",
                  "Comunicazione diretta via cloud con centralità telefonica della camera e ascensori",
                  "Disponibilità H24 senza interruzioni con ricarica automatica al dock",
                  "Personale del desk libero di dedicarsi ad accoglienza, concierge e cura del cliente",
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
            title="Modelli Consigliati per Hotel e Resort" 
            subtitle="Dall'accoglienza in lobby alle consegne in camera ad alta discrezione."
            centered 
            dark={false} 
          />
          <div className="grid gap-8 md:grid-cols-3">
            {robots.map((r) => (
              <RobotCard key={r.slug} robot={r} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F9FA] border-t border-black/5">
        <div className="container-wide mx-auto px-6 text-center max-w-3xl">
          <h2 className="mb-4 text-3xl font-black text-[#0A0A0A]">Vuoi testare il room service autonomo?</h2>
          <p className="mb-8 text-zinc-600 font-normal">Senza impegno. Organizziamo una simulazione con ascensore direttamente nel tuo hotel.</p>
          <Link href="/demo/" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E8001D] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#E8001D]/25 transition hover:bg-[#D0001A]">
            Prenota Demo in Hotel <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
