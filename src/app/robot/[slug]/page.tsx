import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getRobotBySlug, getRelatedRobots, robots } from "@/data/robots/robots";
import { Badge } from "@/components/ui/Badge";
import { SpecTable } from "@/components/ui/SpecTable";
import { RobotCard } from "@/components/cards/RobotCard";
import Link from "next/link";
import { ArrowLeft, ExternalLink, AlertTriangle, CheckCircle2, ShieldCheck, Zap, Award } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return robots.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const robot = getRobotBySlug(slug);
  if (!robot) return {};
  return {
    title: `${robot.name} — ${robot.category} | Microlys Robotics`,
    description: robot.description,
  };
}

export default async function RobotDetailPage({ params }: Props) {
  const { slug } = await params;
  const robot = getRobotBySlug(slug);
  if (!robot) notFound();

  const related = getRelatedRobots(slug, 3);

  return (
    <>
      {/* Breadcrumb */}
      <section className="border-b border-black/5 bg-white px-6 py-4 pt-32">
        <div className="container-wide mx-auto flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-500">
          <Link href="/" className="hover:text-[#E8001D] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/robot/" className="hover:text-[#E8001D] transition-colors">Modelli</Link>
          <span>/</span>
          <span className="text-[#E8001D] font-bold">{robot.name}</span>
        </div>
      </section>

      {/* Hero product */}
      <section className="py-16 bg-white relative overflow-hidden text-[#0A0A0A]">
        <div className="absolute inset-0 bg-[radial-gradient(#0A0A0A_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(232,0,29,0.06)_0%,_transparent_70%)] rounded-full blur-[90px] pointer-events-none" />

        <div className="container-wide mx-auto px-6 relative z-10">
          <Link
            href="/robot/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-zinc-600 hover:text-[#E8001D] transition-all group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Torna all'elenco modelli
          </Link>

          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Image showcase (~6 cols) */}
            <div className="lg:col-span-6 relative flex aspect-square items-center justify-center rounded-3xl border border-black/10 bg-[#F8F9FA] p-8 overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(232,0,29,0.08)_0%,_transparent_70%)] opacity-80" />
              
              {robot.image ? (
                <img
                  src={robot.image}
                  alt={robot.name}
                  className="relative z-10 max-h-[85%] w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)] transition-transform duration-700 hover:scale-105"
                />
              ) : (
                <svg className="h-32 w-32 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )}

              {robot.data_completeness !== "complete" && (
                <div className="absolute right-4 top-4 z-20">
                  <Badge variant="outline" className="gap-1 border-amber-500/40 bg-amber-500/10 text-amber-600 text-xs backdrop-blur-md font-mono">
                    <AlertTriangle className="h-3 w-3" />
                    In validazione
                  </Badge>
                </div>
              )}

              <div className="absolute left-4 top-4 z-20">
                <span className="rounded-full border border-black/10 bg-white/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0A0A0A] shadow-sm backdrop-blur-md font-mono">
                  {robot.category}
                </span>
              </div>
            </div>

            {/* Info (~6 cols) */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge variant="red">Partner ZCS Amico Robot</Badge>
                {robot.sector.map((s) => (
                  <Badge key={s} variant="outline">{s}</Badge>
                ))}
              </div>

              <h1 className="mb-4 text-4xl font-black tracking-tight text-[#0A0A0A] sm:text-5xl">
                {robot.name.includes(" ") ? (
                  <>
                    {robot.name.split(" ")[0]} <span className="text-shine-red">{robot.name.split(" ").slice(1).join(" ")}</span>
                  </>
                ) : (
                  <span className="text-shine-red">{robot.name}</span>
                )}
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-zinc-600 font-normal">
                {robot.description}
              </p>

              <h2 className="mb-4 text-xs font-mono font-bold uppercase tracking-widest text-[#E8001D]">Punti di Forza Tecnologici</h2>
              <ul className="mb-8 space-y-3.5">
                {robot.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-zinc-800 font-semibold text-sm sm:text-base">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#E8001D]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 pt-6 border-t border-black/[0.08]">
                <Link
                  href="/demo/"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E8001D] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#E8001D]/25 transition hover:bg-[#D0001A]"
                >
                  <Zap className="h-4 w-4" /> Richiedi Prova sul Posto
                </Link>
                <a
                  href={robot.source_url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 bg-[#F8F9FA] px-6 py-4 text-sm font-bold text-[#0A0A0A] transition hover:bg-zinc-200/60"
                >
                  Scheda Ufficiale <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Box garanzia e assistenza italiana */}
      <section className="py-16 bg-[#F4F4F5] border-y border-black/5">
        <div className="container-wide mx-auto px-6">
          <div className="rounded-3xl bg-[#0A0A0A] p-10 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-black/10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#E8001D]/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-3xl relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#E8001D] text-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-4 font-mono shadow-md">
                <Award className="h-4 w-4" /> Garanzia & Assistenza Italia
              </div>
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-4">
                Perché installare {robot.name} con Microlys?
              </h3>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-6 font-normal">
                Siamo distributori per l'Italia di <strong>ZCS Zucchetti Centro Sistemi</strong> (distributore ufficiale di KEENON Robotics). Ogni robot viene consegnato chiavi in mano con programmazione dei percorsi, mappatura millimetrica degli ambienti e assistenza tecnica diretta garantita in tutta Italia.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-white">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[#E8001D]" /> Mappatura 3D Inclusa
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[#E8001D]" /> Formazione del Personale
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[#E8001D]" /> Assistenza Prioritaria
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 bg-white">
        <div className="container-wide mx-auto px-6 max-w-4xl">
          <h2 className="mb-8 text-2xl font-black text-[#0A0A0A]">Specifiche Tecniche Dettagliate</h2>
          {robot.data_completeness !== "complete" && (
            <div className="mb-6 flex items-start gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm font-medium text-amber-600">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
              <span>
                Alcune specifiche tecniche sono in fase di validazione da fonte ufficiale.
                {robot.note && ` ${robot.note}`}
              </span>
            </div>
          )}
          <SpecTable specs={robot.specs} />
          <p className="mt-5 text-xs text-zinc-400 font-mono">
            Fonte dati verificate:{" "}
            <a
              href={robot.source_url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E8001D] underline transition-colors font-bold"
            >
              {robot.source_label}
            </a>
            {" · "}Ultimo aggiornamento: {robot.last_verified}
          </p>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-20 bg-[#F8F9FA] border-t border-black/5">
          <div className="container-wide mx-auto px-6">
            <h2 className="mb-8 text-2xl font-black text-[#0A0A0A]">Modelli Correlati della stessa Gamma</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {related.map((r) => (
                <RobotCard key={r.slug} robot={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
