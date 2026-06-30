"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  const links = [
    { label: "Robot", href: "/robot/" },
    {
      label: "Soluzioni",
      href: "/soluzioni/",
      children: [
        { label: "Ristorazione", href: "/soluzioni/ristorazione/" },
        { label: "Hotel", href: "/soluzioni/hotel/" },
        { label: "Healthcare", href: "/soluzioni/healthcare/" },
        { label: "Retail", href: "/soluzioni/retail/" },
        { label: "Industria", href: "/soluzioni/industria/" },
      ],
    },
    { label: "Settori", href: "/settori/" },
    { label: "Chi siamo", href: "/chi-siamo/" },
  ];

  return (
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
                  <div className="min-w-[210px] rounded-2xl border border-black/[0.08] bg-white p-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
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

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 text-zinc-700 md:hidden transition hover:bg-zinc-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5 text-[#E8001D]" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-black/[0.08] bg-white px-6 py-6 shadow-2xl md:hidden">
          <nav className="flex flex-col gap-1.5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-4 py-3 text-base font-semibold transition ${
                  isActive(link.href)
                    ? "bg-[#E8001D]/10 text-[#E8001D]"
                    : "text-zinc-700 hover:bg-zinc-100"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contatti/"
              className="rounded-xl px-4 py-3 text-base font-semibold text-zinc-700 hover:bg-zinc-100 transition"
              onClick={() => setMobileOpen(false)}
            >
              Contatti
            </Link>
          </nav>
          <div className="mt-6 border-t border-black/[0.08] pt-6">
            <Link
              href="/demo/"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#E8001D] py-3.5 text-base font-bold text-white shadow-md"
              onClick={() => setMobileOpen(false)}
            >
              Richiedi demo gratuita
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
