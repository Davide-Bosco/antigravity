import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, ArrowRight } from "lucide-react";
import { company } from "@/data/company/company";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#1E1E22] text-white relative overflow-hidden">
      {/* Top red accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#E8001D]" />

      <div className="container-wide mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="space-y-5">
            <Link href="/" className="inline-block bg-white px-6 py-4 rounded-2xl shadow-xl transition-transform hover:scale-[1.02]">
              <Image
                src="/images/brand/microlys-logo.png"
                alt="Microlys Robotics Logo"
                width={230}
                height={58}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-zinc-300 leading-relaxed font-normal">
              Partner ufficiale ZCS Zucchetti Centro Sistemi e distributore per l'Italia di robotica di servizio commerciale KEENON. Automazione all'avanguardia per l'efficienza del tuo locale.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-mono font-bold uppercase tracking-widest text-[#E8001D]">Gamma Modelli</h4>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              <li><Link href="/robot/" className="hover:text-white transition-colors">Catalogo Completo</Link></li>
              <li><Link href="/robot/?category=catering" className="hover:text-white transition-colors">Catering & Delivery (DINERBOT)</Link></li>
              <li><Link href="/robot/?category=cleaning" className="hover:text-white transition-colors">Pulizia 4-in-1 (KLEENBOT)</Link></li>
              <li><Link href="/robot/?category=heavy-load" className="hover:text-white transition-colors">Logistica AMR Pesante</Link></li>
              <li><Link href="/robot/?category=humanoid" className="hover:text-white transition-colors">Robot Umanoide VLA</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-mono font-bold uppercase tracking-widest text-[#E8001D]">Esplora</h4>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              <li><Link href="/chi-siamo/" className="hover:text-white transition-colors">Azienda & Partnership ZCS</Link></li>
              <li><Link href="/soluzioni/" className="hover:text-white transition-colors">Soluzioni e Metodo</Link></li>
              <li><Link href="/settori/" className="hover:text-white transition-colors">Settori Applicativi</Link></li>
              <li><Link href="/demo/" className="hover:text-white transition-colors font-bold text-[#E8001D]">Richiedi Prova sul Posto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-mono font-bold uppercase tracking-widest text-[#E8001D]">Contatti Diretti</h4>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#E8001D] shrink-0" />
                <a href={`mailto:${company.email}`} className="hover:text-white font-bold transition-colors">{company.email}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#E8001D] shrink-0" />
                <a href={`tel:${company.phone}`} className="hover:text-white font-mono font-bold transition-colors">{company.phone}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#E8001D] shrink-0 mt-0.5" />
                <span className="text-zinc-300 leading-snug">
                  {company.address.street}<br />
                  {company.address.zip} {company.address.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            &copy; {new Date().getFullYear()} {company.legalName}. P.IVA {company.vat}. Partner ZCS Zucchetti.
          </div>
          <div className="flex gap-6 font-medium">
            <Link href="/privacy/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/cookie/" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link href="/terms/" className="hover:text-white transition-colors">Termini di Servizio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
