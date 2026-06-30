import { Metadata } from "next";

export function buildMetadata({
  title,
  description,
  keywords,
  path,
  locale = "it",
}: {
  title: string;
  description: string;
  keywords: string;
  path: string;
  locale?: "it" | "en";
}): Metadata {
  const baseUrl = "https://microlys.robotics";
  const url = `${baseUrl}/${locale}${path}`;
  const fullTitle = `${title} | Microlys Robotics`;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: {
        it: `${baseUrl}/it${path}`,
        en: `${baseUrl}/en${path}`,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "Microlys Robotics",
      locale: locale === "it" ? "it_IT" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
