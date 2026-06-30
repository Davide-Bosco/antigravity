export const nav = {
  it: [
    { label: "Home", href: "/" },
    { label: "Robot", href: "/robot/" },
    { label: "Soluzioni", href: "/soluzioni/", children: [
      { label: "Ristorazione", href: "/soluzioni/ristorazione/" },
      { label: "Hotel", href: "/soluzioni/hotel/" },
      { label: "Healthcare", href: "/soluzioni/healthcare/" },
      { label: "Retail", href: "/soluzioni/retail/" },
      { label: "Industria", href: "/soluzioni/industria/" },
    ]},
    { label: "Settori", href: "/settori/" },
    { label: "Azienda", href: "/chi-siamo/" },
    { label: "Contatti", href: "/contatti/" },
  ],
  en: [
    { label: "Home", href: "/en/" },
    { label: "Robots", href: "/en/robot/" },
    { label: "Solutions", href: "/en/soluzioni/", children: [
      { label: "Food Service", href: "/en/soluzioni/ristorazione/" },
      { label: "Hotels", href: "/en/soluzioni/hotel/" },
      { label: "Healthcare", href: "/en/soluzioni/healthcare/" },
      { label: "Retail", href: "/en/soluzioni/retail/" },
      { label: "Industry", href: "/en/soluzioni/industria/" },
    ]},
    { label: "Sectors", href: "/en/settori/" },
    { label: "About", href: "/en/chi-siamo/" },
    { label: "Contact", href: "/en/contatti/" },
  ],
};
