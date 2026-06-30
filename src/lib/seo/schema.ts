import { Graph, Organization, Product, LocalBusiness, WithContext } from "schema-dts";

export const organizationJsonLd: Graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Microlys Robotics",
      url: "https://microlys.robotics",
      logo: "https://microlys.robotics/images/brand/logo.png",
      sameAs: [
        "https://linkedin.com/company/microlys-robotics",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+39-02-1234-5678",
        contactType: "sales",
        areaServed: ["IT", "EU"],
        availableLanguage: ["Italian", "English"],
      },
    } as Organization,
    {
      "@type": "LocalBusiness",
      name: "Microlys Robotics",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Via dell Innovazione, 42",
        addressLocality: "Milano",
        postalCode: "20134",
        addressCountry: "IT",
      },
      url: "https://microlys.robotics",
      telephone: "+39 02 1234 5678",
      email: "info@microlys.robotics",
      priceRange: "$$",
    } as LocalBusiness,
  ],
};

export function productJsonLd(robot: {
  name: string;
  description: string;
  category: string;
  slug: string;
}): WithContext<Product> {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: robot.name,
    description: robot.description,
    brand: {
      "@type": "Brand",
      name: "KEENON",
    },
    manufacturer: {
      "@type": "Organization",
      name: "KEENON Robotics Co., Ltd.",
    },
    category: robot.category,
    url: `https://microlys.robotics/robot/${robot.slug}/`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
      seller: {
        "@type": "Organization",
        name: "Microlys Robotics",
      },
    },
  };
}
