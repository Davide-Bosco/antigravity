"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, Calendar, Phone, Video, Zap, Shield } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Inserisci il tuo nome"),
  email: z.string().email("Email non valida"),
  company: z.string().min(1, "Inserisci il nome dell'azienda"),
  phone: z.string().optional(),
  sector: z.string().min(1, "Seleziona il tuo settore"),
  robots: z.string().optional(),
  message: z.string().optional(),
  privacy: z.boolean().refine((v) => v, "Accetta la privacy policy per procedere"),
});

type FormData = z.infer<typeof schema>;

const demoTypes = [
  {
    icon: Calendar,
    title: "Demo sul Posto in Locale",
    desc: "Portiamo il robot ZCS / KEENON direttamente nel tuo ristorante, hotel o azienda per un test reale sui tuoi percorsi.",
    time: "Consigliata — Su appuntamento",
    highlight: true,
  },
  {
    icon: Video,
    title: "Demo Live Streaming",
    desc: "Videochiamata interattiva di presentazione dal nostro showroom con ingegnere di sala dedicato.",
    time: "30–45 minuti",
    highlight: false,
  },
  {
    icon: Phone,
    title: "Consulenza e ROI",
    desc: "Analisi preventiva dell'investimento, verifica delle planimetrie e scelta del modello idoneo.",
    time: "20–30 minuti",
    highlight: false,
  },
];

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Demo request:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white px-6 pb-20 pt-32 md:px-12 lg:px-20 border-b border-black/5">
        <div className="absolute inset-0 bg-[radial-gradient(#0A0A0A_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[radial-gradient(circle,_rgba(232,0,29,0.06)_0%,_transparent_70%)] rounded-full blur-[90px] pointer-events-none" />

        <div className="container-wide relative z-10 mx-auto text-center max-w-3xl">
          <Badge variant="red" className="mb-6 font-mono">Testa la Tecnologia sul Campo</Badge>
          <h1 className="mb-6 text-4xl font-black tracking-tight text-[#0A0A0A] md:text-6xl leading-[1.06]">
            Vedi i Robot <span className="text-shine-red">In Azione</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed font-normal">
            Prenota una prova gratuita con il team di ingegneria di sala Microlys — partner ZCS Zucchetti. Verificheremo insieme la navigazione 3D e l'efficienza nel tuo ambiente lavorativo.
          </p>
        </div>
      </section>

      {/* Modalità di Prova */}
      <section className="py-20 bg-[#F8F9FA] text-[#0A0A0A] relative border-b border-black/5">
        <div className="container-wide mx-auto px-6">
          <div className="mb-10 text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#E8001D]">Modalità di Prova</span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight mt-2 text-[#0A0A0A]">Scegli come scoprire i nostri robot</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {demoTypes.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.title}
                  className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                    d.highlight
                      ? "bg-[#0A0A0A] text-white shadow-2xl border-2 border-[#E8001D] scale-105"
                      : "bg-white text-[#0A0A0A] border border-black/5 hover:shadow-xl"
                  }`}
                >
                  {d.highlight && (
                    <div className="absolute -top-3 right-6 rounded-full bg-[#E8001D] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white font-mono shadow-md">
                      Più Richiesta
                    </div>
                  )}
                  <div>
                    <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${d.highlight ? "bg-[#E8001D] text-white shadow-md" : "bg-[#E8001D]/10 text-[#E8001D]"}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className={`mb-3 text-xl font-bold ${d.highlight ? "text-white" : "text-[#0A0A0A]"}`}>{d.title}</h3>
                    <p className={`mb-8 text-sm leading-relaxed font-normal ${d.highlight ? "text-white/80" : "text-zinc-600"}`}>{d.desc}</p>
                  </div>
                  <div className={`pt-4 border-t font-mono text-xs font-bold ${d.highlight ? "border-white/10 text-[#E8001D]" : "border-black/5 text-zinc-500"}`}>
                    {d.time}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form Section - Clean High Contrast */}
      <section className="py-24 bg-white relative">
        <div className="container-wide mx-auto px-6 max-w-3xl">
          {submitted ? (
            <div className="flex flex-col items-center justify-center rounded-3xl border border-black/10 bg-[#F8F9FA] p-16 text-center shadow-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8001D] text-white shadow-lg">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h2 className="mb-3 text-3xl font-black text-[#0A0A0A]">Richiesta Ricevuta!</h2>
              <p className="text-zinc-600 max-w-md leading-relaxed font-normal">
                Un consulente tecnico Microlys / ZCS ti contatterà entro 24 ore lavorative per accordare data e dettagli operativi della demo.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 rounded-full bg-[#0A0A0A] px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-zinc-800"
              >
                Invia una nuova richiesta
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 rounded-3xl border border-black/10 bg-[#F8F9FA] p-8 sm:p-12 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#E8001D]" />

              <div>
                <h2 className="text-2xl font-black text-[#0A0A0A]">Richiedi Prova e Analisi Operativa</h2>
                <p className="text-sm text-zinc-600 mt-1 font-normal">Compila il modulo senza impegno. Risposta rapida garantita dal nostro team.</p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="demo-name" className="mb-2 block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700">Nome e cognome *</label>
                  <input
                    id="demo-name"
                    {...register("name")}
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm text-[#0A0A0A] placeholder:text-zinc-400 focus:border-[#E8001D] focus:outline-none focus:ring-1 focus:ring-[#E8001D] transition-all"
                    placeholder="Mario Rossi"
                  />
                  {errors.name && <p className="mt-1 text-xs text-[#E8001D] font-bold">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="demo-email" className="mb-2 block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700">Email aziendale *</label>
                  <input
                    id="demo-email"
                    type="email"
                    {...register("email")}
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm text-[#0A0A0A] placeholder:text-zinc-400 focus:border-[#E8001D] focus:outline-none focus:ring-1 focus:ring-[#E8001D] transition-all"
                    placeholder="mario@azienda.it"
                  />
                  {errors.email && <p className="mt-1 text-xs text-[#E8001D] font-bold">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="demo-company" className="mb-2 block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700">Nome Azienda o Locale *</label>
                  <input
                    id="demo-company"
                    {...register("company")}
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm text-[#0A0A0A] placeholder:text-zinc-400 focus:border-[#E8001D] focus:outline-none focus:ring-1 focus:ring-[#E8001D] transition-all"
                    placeholder="Ristorante Da Mario / Hotel Excelsior"
                  />
                  {errors.company && <p className="mt-1 text-xs text-[#E8001D] font-bold">{errors.company.message}</p>}
                </div>

                <div>
                  <label htmlFor="demo-phone" className="mb-2 block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700">Telefono per contatto *</label>
                  <input
                    id="demo-phone"
                    type="tel"
                    {...register("phone")}
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm text-[#0A0A0A] placeholder:text-zinc-400 focus:border-[#E8001D] focus:outline-none focus:ring-1 focus:ring-[#E8001D] transition-all"
                    placeholder="+39 02 1234567"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="demo-sector" className="mb-2 block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700">Settore Applicativo *</label>
                  <select
                    id="demo-sector"
                    {...register("sector")}
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm text-[#0A0A0A] focus:border-[#E8001D] focus:outline-none focus:ring-1 focus:ring-[#E8001D] transition-all"
                  >
                    <option value="">Seleziona settore...</option>
                    <option value="ristorazione">Ristorazione & Sala (DINERBOT)</option>
                    <option value="hotel">Hotel & Hospitality (BUTLERBOT)</option>
                    <option value="cleaning">Pulizia Industriale (KLEENBOT)</option>
                    <option value="logistica">Logistica Magazzino (AMR)</option>
                    <option value="sanita">Ospedali & Cliniche</option>
                    <option value="altro">Altro</option>
                  </select>
                  {errors.sector && <p className="mt-1 text-xs text-[#E8001D] font-bold">{errors.sector.message}</p>}
                </div>

                <div>
                  <label htmlFor="demo-robots" className="mb-2 block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700">Modello di interesse</label>
                  <select
                    id="demo-robots"
                    {...register("robots")}
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm text-[#0A0A0A] focus:border-[#E8001D] focus:outline-none focus:ring-1 focus:ring-[#E8001D] transition-all"
                  >
                    <option value="">Consigliato dagli ingegneri</option>
                    <option value="T10">DINERBOT T10 (Ristorazione Top)</option>
                    <option value="T9">DINERBOT T9 (Versatile)</option>
                    <option value="W3">BUTLERBOT W3 (Room Service)</option>
                    <option value="C30">KLEENBOT C30 (Pulizia 4-in-1)</option>
                    <option value="S100">KEENON S100 (AMR Logistica)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="demo-message" className="mb-2 block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700">Note sulla struttura o esigenze particolari</label>
                <textarea
                  id="demo-message"
                  rows={3}
                  {...register("message")}
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm text-[#0A0A0A] placeholder:text-zinc-400 focus:border-[#E8001D] focus:outline-none focus:ring-1 focus:ring-[#E8001D] transition-all"
                  placeholder="Es. Sala su unico livello, circa 80 coperti, passaggi stretti di 80cm..."
                />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="demo-privacy"
                  {...register("privacy")}
                  className="mt-1 h-4 w-4 rounded border-black/20 bg-white text-[#E8001D] focus:ring-[#E8001D]"
                />
                <label htmlFor="demo-privacy" className="text-xs text-zinc-600 leading-snug">
                  Ho letto e accetto la <a href="/privacy/" className="underline hover:text-[#0A0A0A] font-bold">Privacy Policy</a> e autorizzo il trattamento dei dati per l'organizzazione del test robotico.
                </label>
              </div>
              {errors.privacy && <p className="text-xs text-[#E8001D] font-bold">{errors.privacy.message}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#E8001D] py-4 text-base font-bold text-white shadow-xl shadow-[#E8001D]/25 transition hover:bg-[#D0001A] disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
                <span>{isSubmitting ? "Invio in corso..." : "Invia Richiesta Demo Gratuita"}</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
