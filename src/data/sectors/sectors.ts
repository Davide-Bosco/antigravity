import { SectorData } from "@/types/sector";

export const sectors: SectorData[] = [
  {
    slug: "ristorazione",
    name: "Ristorazione",
    name_en: "Food Service",
    description:
      "Soluzioni robotiche per ristoranti, fast food, bar e catering. Automatizza la consegna ai tavoli, riduce i tempi di attesa e ottimizza il servizio in sala.",
    description_en:
      "Robotic solutions for restaurants, fast food, bars and catering. Automate table delivery, reduce wait times and optimize floor service.",
    painPoints: [
      "Costi crescenti del personale di sala",
      "Difficolta a trovare personale qualificato",
      "Clienti impazienti e recensioni negative",
    ],
    painPoints_en: [
      "Rising floor staff costs",
      "Difficulty hiring qualified staff",
      "Impatient customers and negative reviews",
    ],
    solutionText:
      "I robot DINERBOT della serie T gestiscono autonomamente la consegna dei piatti ai tavoli, liberando il personale per attivita a maggior valore aggiunto. Riduzione dei tempi di attesa fino al 40% e servizio coerente anche nei giorni di picco.",
    solutionText_en:
      "DINERBOT T-series robots autonomously handle table delivery, freeing staff for higher-value tasks. Wait time reduction up to 40% and consistent service even on peak days.",
    recommendedRobots: ["dinerbot-t10", "dinerbot-t9", "dinerbot-t8", "dinerbot-t3"],
    icon: "UtensilsCrossed",
  },
  {
    slug: "hotel",
    name: "Hotel & Hospitality",
    name_en: "Hotels & Hospitality",
    description:
      "Robot per room service, consegne in camera e assistenza ospiti 24/7. Integrazione con ascensori e sistemi IoT per un esperienza seamless.",
    description_en:
      "Robots for room service, in-room delivery and 24/7 guest assistance. Elevator and IoT integration for a seamless experience.",
    painPoints: [
      "Room service notturno costoso e difficile da gestire",
      "Richieste ripetitive che saturano il personale",
      "Necessita di differenziazione dell esperienza ospite",
    ],
    painPoints_en: [
      "Expensive and hard-to-manage night room service",
      "Repetitive requests overwhelming staff",
      "Need to differentiate the guest experience",
    ],
    solutionText:
      "BUTLERBOT W3 offre consegne in camera, forniture e servizi ospiti 24 ore su 24 con integrazione ascensori e IoT. I robot umanoidi XMAN-R1 arricchiscono l accoglienza in reception con interazioni realistiche.",
    solutionText_en:
      "BUTLERBOT W3 provides in-room delivery, amenities and guest services 24/7 with elevator and IoT integration. XMAN-R1 humanoid robots enhance front-desk greetings with lifelike interactions.",
    recommendedRobots: ["butlerbot-w3", "dinerbot-t10", "xman-r1"],
    icon: "Building2",
  },
  {
    slug: "healthcare",
    name: "Healthcare & Sanita",
    name_en: "Healthcare",
    description:
      "Logistica autonoma in ambienti sanitari. Trasporto farmaci, campioni, materiali sterili e forniture con tracciabilita e sicurezza.",
    description_en:
      "Autonomous logistics in healthcare environments. Transport medicines, samples, sterile materials and supplies with traceability and safety.",
    painPoints: [
      "Personale infermieristico impegnato in compiti non clinici",
      "Errori di consegna e tracciabilita incompleta",
      "Esposizione a rischi biologici durante il trasporto",
    ],
    painPoints_en: [
      "Nursing staff tied up in non-clinical tasks",
      "Delivery errors and incomplete traceability",
      "Exposure to biological risks during transport",
    ],
    solutionText:
      "KEENON S100 e S300 trasportano in modo affidabile carichi fino a 300 kg tra reparti, laboratori e magazzini. Navigazione autonoma e sicurezza 360° riducono il carico non clinico e migliorano la tracciabilita.",
    solutionText_en:
      "KEENON S100 and S300 reliably transport loads up to 300 kg between departments, labs and warehouses. Autonomous navigation and 360° safety reduce non-clinical workload and improve traceability.",
    recommendedRobots: ["keenon-s100", "keenon-s300"],
    icon: "Stethoscope",
  },
  {
    slug: "retail",
    name: "Retail & Supermercati",
    name_en: "Retail",
    description:
      "Automazione del servizio in negozi, centri commerciali e supermercati. Delivery interno, pulizia pavimenti e supporto operativo.",
    description_en:
      "Service automation in stores, malls and supermarkets. Internal delivery, floor cleaning and operational support.",
    painPoints: [
      "Personale impegnato in compiti ripetitivi anziche vendita",
      "Pulizia pavimenti fuori orario costosa",
      "Esperienza cliente non differenziata",
    ],
    painPoints_en: [
      "Staff tied up in repetitive tasks instead of selling",
      "After-hours floor cleaning is expensive",
      "Undifferentiated customer experience",
    ],
    solutionText:
      "I robot DINERBOT T8 e T9 supportano il servizio interno in spazi stretti, mentre KLEENBOT C20 e C40 mantengono i pavimenti puliti durante e dopo l orario di apertura. Efficienza operativa e risparmio sui costi del personale.",
    solutionText_en:
      "DINERBOT T8 and T9 support internal service in narrow spaces, while KLEENBOT C20 and C40 keep floors clean during and after opening hours. Operational efficiency and staff cost savings.",
    recommendedRobots: ["dinerbot-t8", "kleenbot-c20", "kleenbot-c40"],
    icon: "ShoppingCart",
  },
  {
    slug: "industria",
    name: "Industria & Logistica",
    name_en: "Industry & Logistics",
    description:
      "Trasporto interno automatizzato in magazzini, stabilimenti e centri di distribuzione. Carichi pesanti, operativita 24/7 e zero errori di consegna.",
    description_en:
      "Automated internal transport in warehouses, plants and distribution centers. Heavy loads, 24/7 operation and zero delivery errors.",
    painPoints: [
      "Movimentazione manuale di carichi pesanti e rischi ergonomici",
      "Errori di picking e consegna interna",
      "Costi operativi legati a turni notturni",
    ],
    painPoints_en: [
      "Manual handling of heavy loads and ergonomic risks",
      "Picking and internal delivery errors",
      "Operational costs tied to night shifts",
    ],
    solutionText:
      "KEENON S300 solleva fino a 300 kg con piattaforma integrata e si deploya in 1 giorno. KEENON S100 gestisce carichi medi con ricarica rapida. Entrambi operano offline senza dipendere da Wi-Fi o centrali.",
    solutionText_en:
      "KEENON S300 lifts up to 300 kg with an integrated platform and deploys in 1 day. KEENON S100 handles medium loads with fast charging. Both operate offline without relying on Wi-Fi or central systems.",
    recommendedRobots: ["keenon-s300", "keenon-s100"],
    icon: "Factory",
  },
];
