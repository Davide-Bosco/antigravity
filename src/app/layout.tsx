import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { StickyDemoWidget } from "@/components/ui/StickyDemoWidget";
import { organizationJsonLd } from "@/lib/seo/schema";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Microlys Robotics — Distributore ufficiale KEENON in Italia e Europa",
  description:
    "Robot per delivery, pulizia, hospitality e logistica. Microlys Robotics progetta, installa e supporta soluzioni robotiche KEENON per il tuo business.",
  keywords:
    "robot KEENON, distributore robot Italia, robot ristorazione, robot hotel, robot pulizia, robot logistica, automazione servizi, Microlys Robotics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <CustomCursor />
        <StickyDemoWidget />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
