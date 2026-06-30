"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight, PhoneCall } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Blocca lo scroll del body quando il menu mobile è aperto a tutto schermo
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  const links = [
    { label: "Robot", href: "/robot/" },
    {
      label: "Soluzioni",
      href: "/soluzioni/",
      children: [
        { label: "Ristorazione & Delivery", href: "/soluzioni/ristorazione/" },
        { label: "Hotel & Hospitality", href: "/soluzioni/hotel/" },
        { label: "Healthcare & Cliniche", href: "/soluzioni/healthcare/" },
        { label: "Retail & Supermercati", href: "/soluzioni/retail/" },
        { label: "Industria & Logistica", href: "/soluzioni/industria/" },
      ],
    },
    { label: "Settori", href: "/settori/" },
    { label: "Chi siamo", href: "/chi-siamo/" },
  ];

  return (
    <>
      {/* Header Principale */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[76px] md:h-[84px] flex items-center transition-all duration-300 ${
          scrolled
            ? "border-b border-black/[0.06] bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="container-wide mx-auto flex w-full items-center justify-between px-6">
          {/* Logo Immagine Ufficiale */}
          <Link href="/" className="flex items-center group transition-opacity hover:opacity-90">
            <Image
              src="/images/brand/microlys-logo.png"
              alt="Microlys Robotics Logo"
              width={240}
              height={60}
              priority
              className="h-11 md:h-13 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1.5 md:flex">
            {links.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setDropdownOpen(link.href)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                    isActive(link.href)
                      ? "text-[#E8001D] bg-[#E8001D]/[0.06]"
                      : "text-zinc-700 hover:text-[#E8001D] hover:bg-zinc-100/70"
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        dropdownOpen === link.href ? "rotate-180 text-[#E8001D]" : ""
                      }`}
                    />
                  )}
                </Link>

                {link.children && dropdownOpen === link.href && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="min-w-[230px] rounded-2xl border border-black/[0.08] bg-white p-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-3.5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-[#E8001D]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-5 md:flex">
            <Link href="/contatti/" className="text-sm font-semibold text-zinc-600 hover:text-[#E8001D] transition">
              Contatti
            </Link>
            <Link
              href="/demo/"
              className="inline-flex items-center justify-center rounded-full bg-[#E8001D] px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-[#E8001D]/25 transition hover:bg-[#D0001A] hover:shadow-lg active:scale-95"
            >
              Richiedi demo
            </Link>
          </div>

          {/* Mobile toggle button */}
          <button
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-zinc-50 text-zinc-800 md:hidden transition active:scale-95 shadow-sm"
            onClick={() => setMobileOpen(true)}
            aria-label="Apri menu"
          >
            <Menu className="h-6 w-6 text-[#0A0A0A]" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay a Tutto Schermo (Indipendente dall'Header flex) */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-white md:hidden overflow-y-auto animate-in fade-in duration-200">
          {/* Top Bar dell'Overlay Mobile */}
          <div className="flex items-center justify-between h-[76px] px-6 border-b border-black/[0.06] bg-white sticky top-0 z-10 shrink-0">
            <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center">
              <Image
                src="/images/brand/microlys-logo.png"
                alt="Microlys Robotics Logo"
                width={200}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8001D]/10 text-[#E8001D] font-bold active:scale-95 transition"
              aria-label="Chiudi menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Corpo del Menu Mobile */}
          <div className="flex-1 px-6 py-8 flex flex-col justify-between gap-8">
            <nav className="flex flex-col gap-3">
              <Link
                href="/robot/"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between rounded-2xl px-5 py-4 text-xl font-black tracking-tight transition ${
                  isActive("/robot/") ? "bg-[#E8001D]/10 text-[#E8001D]" : "bg-zinc-50 text-zinc-900 active:bg-zinc-100"
                }`}
              >
                <span>Gamma Robot</span>
                <ArrowRight className="h-5 w-5 opacity-60" />
              </Link>

              {/* Box Soluzioni Espandibile */}
              <div className="rounded-2xl border border-black/10 bg-zinc-50/80 p-4">
                <button
                  type="button"
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className="w-full flex items-center justify-between text-left font-black text-xl text-zinc-900 pb-2"
                >
                  <span>Soluzioni per Settore</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      mobileSolutionsOpen ? "rotate-180 text-[#E8001D]" : "text-zinc-400"
                    }`}
                  />
                </button>

                {mobileSolutionsOpen && (
                  <div className="mt-3 grid grid-cols-1 gap-2 pt-2 border-t border-black/5">
                    <Link
                      href="/soluzioni/"
                      onClick={() => setMobileOpen(false)}
                      className="rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-[#E8001D] shadow-sm flex items-center justify-between"
                    >
                      <span>Tutte le Soluzioni</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    {links[1].children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-xl px-4 py-2.5 text-base font-semibold text-zinc-700 hover:text-[#E8001D] active:bg-white/60 transition"
                      >
                        • {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/settori/"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between rounded-2xl px-5 py-4 text-xl font-black tracking-tight transition ${
                  isActive("/settori/") ? "bg-[#E8001D]/10 text-[#E8001D]" : "bg-zinc-50 text-zinc-900 active:bg-zinc-100"
                }`}
              >
                <span>Settori di Applicazione</span>
                <ArrowRight className="h-5 w-5 opacity-60" />
              </Link>

              <Link
                href="/chi-siamo/"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between rounded-2xl px-5 py-4 text-xl font-black tracking-tight transition ${
                  isActive("/chi-siamo/") ? "bg-[#E8001D]/10 text-[#E8001D]" : "bg-zinc-50 text-zinc-900 active:bg-zinc-100"
                }`}
              >
                <span>Chi Siamo</span>
                <ArrowRight className="h-5 w-5 opacity-60" />
              </Link>

              <Link
                href="/contatti/"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between rounded-2xl px-5 py-4 text-xl font-black tracking-tight transition ${
                  isActive("/contatti/") ? "bg-[#E8001D]/10 text-[#E8001D]" : "bg-zinc-50 text-zinc-900 active:bg-zinc-100"
                }`}
              >
                <span>Contatti & Assistenza</span>
                <PhoneCall className="h-5 w-5 opacity-60" />
              </Link>
            </nav>

            {/* CTAs Inferiori nell'Overlay Mobile */}
            <div className="flex flex-col gap-3 pt-6 border-t border-black/10 mt-auto">
              <Link
                href="/demo/"
                onClick={() => setMobileOpen(false)}
                className="w-full rounded-full bg-[#E8001D] py-4 text-center text-lg font-black text-white shadow-xl shadow-[#E8001D]/30 active:scale-95 transition"
              >
                Richiedi Prova sul Posto
              </Link>
              <Link
                href="/robot/"
                onClick={() => setMobileOpen(false)}
                className="w-full rounded-full border border-black/15 bg-white py-3.5 text-center text-base font-bold text-[#0A0A0A] shadow-sm active:bg-zinc-100 transition"
              >
                Esplora i Modelli
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
