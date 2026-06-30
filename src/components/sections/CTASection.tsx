import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface CTASectionProps {
  title?: React.ReactNode;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title = <span>Pronto ad <span className="text-shine-red">Automatizzare</span> il tuo Servizio?</span>,
  subtitle = "Parla con gli ingegneri di sala Microlys — partner ZCS Zucchetti per l'Italia — e ricevi un'analisi personalizzata dei flussi e una demo gratuita nel tuo locale.",
  primaryLabel = "Richiedi una Demo sul Posto",
  primaryHref = "/demo/",
  secondaryLabel = "Parla con il nostro Team",
  secondaryHref = "/contatti/",
}: CTASectionProps) {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="container-wide mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-[#F8F9FA] p-10 md:p-16 shadow-xl text-[#0A0A0A] border border-black/10">
          {/* Top red accent line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#E8001D]" />
          
          {/* Background red radial glow */}
          <div className="absolute -top-32 right-10 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(232,0,29,0.08)_0%,_transparent_70%)] rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E8001D]/20 bg-[#E8001D]/[0.08] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E8001D] font-mono">
              <Sparkles className="h-3.5 w-3.5 text-[#E8001D]" />
              Eccellenza Robotica ZCS Amico & KEENON
            </div>
            <h2 className="text-3xl font-black tracking-tight text-[#0A0A0A] md:text-5xl leading-tight">
              {title}
            </h2>
            <p className="mt-5 text-lg text-zinc-600 leading-relaxed max-w-2xl font-normal">
              {subtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#E8001D] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#E8001D]/25 transition hover:bg-[#D0001A]"
              >
                <span>{primaryLabel}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 bg-white px-8 py-4 text-base font-bold text-[#0A0A0A] shadow-sm transition hover:bg-zinc-100"
              >
                <span>{secondaryLabel}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
