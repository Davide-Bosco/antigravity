"use client";

import { useState } from "react";
import { company } from "@/data/company/company";
import { Badge } from "@/components/ui/Badge";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Inserisci il tuo nome"),
  email: z.string().email("Email non valida"),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(1, "Seleziona un argomento"),
  message: z.string().min(10, "Il messaggio deve essere di almeno 10 caratteri"),
  privacy: z.boolean().refine((v) => v, "Accetta la privacy policy per procedere"),
});

type FormData = z.infer<typeof schema>;

export default function ContattiPage() {
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
    console.log("Form data:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white px-6 pb-20 pt-32 md:px-12 lg:px-20 border-b border-black/5">
        <div className="absolute inset-0 bg-[radial-gradient(#0A0A0A_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(232,0,29,0.06)_0%,_transparent_70%)] rounded-full blur-[80px] pointer-events-none" />

        <div className="container-wide relative z-10 mx-auto max-w-3xl text-center">
          <Badge variant="red" className="mb-6 font-mono">Siamo a tua disposizione</Badge>
          <h1 className="mb-4 text-4xl font-black tracking-tight text-[#0A0A0A] md:text-6xl leading-[1.06]">
            Parliamo del Tuo <span className="text-shine-red">Progetto</span>
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed font-normal">
            I consulenti di robotica Microlys / ZCS sono pronti ad analizzare le tue esigenze operative e a rispondere a ogni quesito tecnico o commerciale.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-[#F8F9FA] relative">
        <div className="container-wide mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Contact info (~5 cols) */}
            <div className="lg:col-span-5 rounded-3xl bg-white p-8 sm:p-10 text-[#0A0A0A] shadow-xl relative overflow-hidden border border-black/10">
              <h2 className="mb-6 text-2xl font-black tracking-tight text-[#0A0A0A]">Recapiti Diretti</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E8001D] text-white shadow-md">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold tracking-wider text-zinc-400 font-mono">Posta Elettronica</div>
                    <a href={`mailto:${company.email}`} className="text-base font-bold text-[#0A0A0A] hover:text-[#E8001D] transition-colors">
                      {company.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E8001D] text-white shadow-md">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold tracking-wider text-zinc-400 font-mono">Telefono Assistenza</div>
                    <a href={`tel:${company.phone}`} className="text-base font-bold font-mono text-[#0A0A0A] hover:text-[#E8001D] transition-colors">
                      {company.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E8001D] text-white shadow-md">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold tracking-wider text-zinc-400 font-mono">Sede Operativa</div>
                    <div className="text-sm font-semibold text-[#0A0A0A] leading-snug">
                      {company.address.street}<br />
                      {company.address.zip} {company.address.city}, {company.address.country}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-[#F4F4F5] p-6 border border-black/5">
                <div className="flex items-center gap-2 mb-3 text-sm font-bold text-[#0A0A0A]">
                  <Clock className="h-4 w-4 text-[#E8001D]" /> Orari Consulenza e Supporto
                </div>
                <div className="space-y-2 text-xs font-medium">
                  <div className="flex justify-between text-zinc-600">
                    <span>Lunedì – Venerdì</span>
                    <span className="font-bold text-[#0A0A0A]">09:00 – 18:30</span>
                  </div>
                  <div className="flex justify-between text-zinc-600">
                    <span>Sabato</span>
                    <span className="font-bold text-[#0A0A0A]">09:30 – 13:00</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>Domenica e Festivi</span>
                    <span className="text-[#E8001D] font-bold">Solo Emergenze H24</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form (~7 cols) */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="flex flex-col items-center justify-center rounded-3xl border border-black/10 bg-white p-12 text-center h-full shadow-xl">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8001D] text-white shadow-lg">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h2 className="mb-2 text-3xl font-black text-[#0A0A0A]">Messaggio Inviato!</h2>
                  <p className="text-zinc-600 max-w-md leading-relaxed font-normal">
                    Abbiamo preso in carico la tua richiesta. Ti risponderemo tempestivamente o entro il prossimo giorno lavorativo.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 rounded-full bg-[#0A0A0A] px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-zinc-800"
                  >
                    Invia un altro messaggio
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6 rounded-3xl border border-black/10 bg-white p-8 sm:p-10 shadow-xl relative overflow-hidden text-[#0A0A0A]"
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#E8001D]" />

                  <h2 className="text-2xl font-black text-[#0A0A0A]">Scrivici Direttamente</h2>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="mb-2 block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700">
                        Nome e cognome *
                      </label>
                      <input
                        id="contact-name"
                        {...register("name")}
                        className="w-full rounded-xl border border-black/10 bg-[#F8F9FA] px-4 py-3.5 text-sm text-[#0A0A0A] placeholder:text-zinc-400 focus:border-[#E8001D] focus:outline-none transition-all"
                        placeholder="Mario Rossi"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-[#E8001D] font-bold">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="mb-2 block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700">
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        {...register("email")}
                        className="w-full rounded-xl border border-black/10 bg-[#F8F9FA] px-4 py-3.5 text-sm text-[#0A0A0A] placeholder:text-zinc-400 focus:border-[#E8001D] focus:outline-none transition-all"
                        placeholder="mario@azienda.it"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-[#E8001D] font-bold">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-company" className="mb-2 block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700">
                        Azienda o Locale
                      </label>
                      <input
                        id="contact-company"
                        {...register("company")}
                        className="w-full rounded-xl border border-black/10 bg-[#F8F9FA] px-4 py-3.5 text-sm text-[#0A0A0A] placeholder:text-zinc-400 focus:border-[#E8001D] focus:outline-none transition-all"
                        placeholder="Nome azienda"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="mb-2 block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700">
                        Telefono
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        {...register("phone")}
                        className="w-full rounded-xl border border-black/10 bg-[#F8F9FA] px-4 py-3.5 text-sm text-[#0A0A0A] placeholder:text-zinc-400 focus:border-[#E8001D] focus:outline-none transition-all"
                        placeholder="+39 02 1234567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="mb-2 block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700">
                      Argomento principale *
                    </label>
                    <select
                      id="contact-subject"
                      {...register("subject")}
                      className="w-full rounded-xl border border-black/10 bg-[#F8F9FA] px-4 py-3.5 text-sm text-[#0A0A0A] focus:border-[#E8001D] focus:outline-none transition-all"
                    >
                      <option value="">Seleziona un argomento...</option>
                      <option value="preventivo">Richiesta preventivo o fattibilità</option>
                      <option value="demo">Informazioni sulla demo sul posto</option>
                      <option value="assistenza">Assistenza tecnica o ricambi</option>
                      <option value="partnership">Proposta di collaborazione</option>
                      <option value="altro">Altro</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-xs text-[#E8001D] font-bold">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="mb-2 block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700">
                      Il tuo messaggio *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      {...register("message")}
                      className="w-full rounded-xl border border-black/10 bg-[#F8F9FA] px-4 py-3.5 text-sm text-[#0A0A0A] placeholder:text-zinc-400 focus:border-[#E8001D] focus:outline-none transition-all"
                      placeholder="Descrivi di cosa hai bisogno..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-[#E8001D] font-bold">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="contact-privacy"
                      {...register("privacy")}
                      className="mt-1 h-4 w-4 rounded border-black/20 bg-white text-[#E8001D] focus:ring-[#E8001D]"
                    />
                    <label htmlFor="contact-privacy" className="text-xs text-zinc-600 leading-snug">
                      Ho letto e accetto la <a href="/privacy/" className="underline hover:text-[#0A0A0A] font-bold">Privacy Policy</a> di Microlys Robotics.
                    </label>
                  </div>
                  {errors.privacy && (
                    <p className="text-xs text-[#E8001D] font-bold">{errors.privacy.message}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#E8001D] py-4 text-base font-bold text-white shadow-xl shadow-[#E8001D]/25 transition hover:bg-[#D0001A] disabled:opacity-50"
                  >
                    <Send className="h-4 w-4" />
                    <span>{isSubmitting ? "Invio in corso..." : "Invia Messaggio"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
