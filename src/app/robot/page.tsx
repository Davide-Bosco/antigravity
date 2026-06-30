import type { Metadata } from "next";

// Simplified robot page - imports client component for interactivity
import RobotCatalogClient from "@/components/sections/RobotCatalogClient";

export const metadata: Metadata = {
  title: "Catalogo Robot KEENON | Microlys Robotics",
  description:
    "Esplora tutti i modelli KEENON disponibili: robot per delivery, cleaning, hotel e logistica industriale. Distributore ufficiale Italia e Europa.",
};

export default function RobotCatalogPage() {
  return <RobotCatalogClient />;
}
