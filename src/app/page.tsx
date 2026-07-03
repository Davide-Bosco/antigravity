import Link from "next/link";
import Hero from "@/components/sections/Hero";
import TrustBadges from "@/components/sections/TrustBadges";
import SectorsShowcase from "@/components/sections/SectorsShowcase";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import CTASection from "@/components/sections/CTASection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RobotCard } from "@/components/cards/RobotCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import GsapHorizontalShowcase from "@/components/sections/GsapHorizontalShowcase";
import { GsapTextMarquee } from "@/components/ui/GsapTextMarquee";
import { GsapStaggerReveal } from "@/components/ui/GsapStaggerReveal";
import { getFeaturedRobots } from "@/data/robots/robots";
import { company } from "@/data/company/company";
import { ArrowRight, UtensilsCrossed, Building2, Sparkles, Truck, User, ShieldCheck, Award } from "lucide-react";

const categories = [
  { slug: "catering", label: "Catering & Delivery", icon: UtensilsCrossed, desc: "Consegna al tavolo, self-pickup, interazione e marketing promozionale in sala." },
  { slug: "hotel", label: "Hotel & Hospitality", icon: Building2, desc: "Room service multi-piano autonomo, accoglienza VIP e chiamate in camera." },
  { slug: "cleaning", label: "Cleaning & Facility", icon: Sparkles, desc: "Pulizia robotica professionale 4-in-1: spazza, lava, aspira e asciuga in un passaggio." },
  { slug: "heavy-load", label: "Heavy Load AMR", icon: Truck, desc: "Logistica di magazzino e trasporti industriali pesanti con capacità fino a 300 kg." },
  { slug: "humanoid", label: "Robot Umanoide VLA", icon: User, desc: "Accoglienza empatica e interazione avanzata alimentate da intelligenza VLA." },
];

export default function HomePage() {
  const featured = getFeaturedRobots();

  return (
    <div className="bg-white text-[#0A0A0A]">
      <Hero />
      
      <ScrollReveal>
        <TrustBadges />
      </ScrollReveal>

      {/* Marquee Ticker GSAP */}
      <GsapTextMarquee />

      {/* Corporate Partnership Showcase Section */}
      <section className="py-24 bg-white relative overflow-hidden border-b border-black/5">
        <ScrollReveal className="container-wide mx-auto px-6 relative z-10">
          <SectionTitle
            title={<span>Microlys Robotics: Partner Ufficiale <span className="text-shine-red">ZCS Zucchetti</span></span>}
            subtitle="Siamo distributori per l'Italia delle soluzioni ZCS Amico Robot, distributore esclusivo per l'Italia del gigante mondiale della robotica KEENON. Portiamo sul territorio innovazione all'avanguardia."
            centered
            dark={false}
          />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="group relative rounded-3xl border border-black/10 bg-[#F8F9FA] p-10 transition-all duration-300 hover:border-[#E8001D] hover:bg-white hover:shadow-xl">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8001D] text-white shadow-md shadow-[#E8001D]/25">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-2xl font-black text-[#0A0A0A] group-hover:text-[#E8001D] transition-colors">
                L'Eccellenza Globale KEENON & ZCS
              </h3>
              <p className="text-zinc-600 leading-relaxed font-normal text-base">
                KEENON è il leader globale nei robot di servizio commerciali con oltre 100.000 unità operative in 70+ paesi. Tramite la partnership strategica con <strong className="text-[#0A0A0A]">ZCS Zucchetti Centro Sistemi</strong>, garantiamo al mercato italiano standard tecnologici di livello industriale e affidabilità certificata.
              </p>
            </div>
            
            <div className="group relative rounded-3xl border border-black/10 bg-[#F8F9FA] p-10 transition-all duration-300 hover:border-[#E8001D] hover:bg-white hover:shadow-xl">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8001D] text-white shadow-md shadow-[#E8001D]/25">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-2xl font-black text-[#0A0A0A] group-hover:text-[#E8001D] transition-colors">
                Il Valore Sul Territorio di Microlys
              </h3>
              <p className="text-zinc-600 leading-relaxed font-normal text-base">
                Non forniamo solo robotica: assicuriamo studio di fattibilità nel tuo locale, mappatura percorsi 3D, installazione rapida chiavi in mano, formazione operativa del personale e assistenza tecnica capillare e tempestiva.
              </p>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-zinc-400 font-mono">
            {company.keenonDisclaimer.it}
          </p>
        </ScrollReveal>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-[#F8F9FA] relative overflow-hidden border-b border-black/5">
        <ScrollReveal className="container-wide mx-auto px-6 relative z-10">
          <SectionTitle 
            title={<span>Scegli per <span className="text-shine-red">Famiglia di Robot</span></span>} 
            subtitle="Esplora le soluzioni di robotica di servizio progettate per ogni specifica necessità professionale." 
            centered 
            dark={false}
          />
          <GsapStaggerReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, idx) => (
              <ScrollReveal key={cat.slug} delay={idx * 100}>
                <SpotlightCard className="h-full rounded-3xl">
                  <Link
                    href={`/robot/`}
                    className="group relative flex flex-col h-full rounded-3xl border border-black/5 bg-white p-8 transition-all duration-300 hover:border-[#E8001D] hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#E8001D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8001D]/10 text-[#E8001D] group-hover:bg-[#E8001D] group-hover:text-white transition-all duration-300 shadow-sm">
                      <cat.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2.5 text-xl font-bold text-[#0A0A0A] group-hover:text-[#E8001D] transition-colors">
                      {cat.label}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed flex-1 font-normal">{cat.desc}</p>
                    <div className="mt-6 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E8001D] group-hover:translate-x-1 transition-transform">
                      <span>Vedi i modelli</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                </SpotlightCard>
              </ScrollReveal>
            ))}
          </GsapStaggerReveal>
        </ScrollReveal>
      </section>

      {/* Featured Robots */}
      <section className="py-24 bg-white relative border-b border-black/5">
        <ScrollReveal className="container-wide mx-auto px-6">
          <SectionTitle
            title={<span>I Modelli <span className="text-shine-red">Più Richiesti</span></span>}
            subtitle="Scopri le ammiraglie KEENON / ZCS Amico per delivery in sala, pulizia industriale e room service."
            centered
            dark={false}
          />
          <div className="grid gap-8 md:grid-cols-3">
            {featured.map((robot, idx) => (
              <ScrollReveal key={robot.slug} delay={idx * 150}>
                <RobotCard robot={robot} />
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <GsapHorizontalShowcase />

      <ScrollReveal>
        <SectorsShowcase />
      </ScrollReveal>

      <ScrollReveal>
        <FeaturesGrid />
      </ScrollReveal>

      <ScrollReveal>
        <CTASection />
      </ScrollReveal>
    </div>
  );
}
