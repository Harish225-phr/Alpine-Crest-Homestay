export const SITE = {
  name: "Alpine Crest Homestay",
  tagline: "A peaceful mountain stay near Theog & Kufri",
  phoneDisplay: "+91 78766 11675",
  phoneRaw: "+917876611675",
  whatsapp: "917876611675",
  street: "Village Kathot, PO, Majhar Rd",
  locality: "Theog",
  region: "Himachal Pradesh",
  postalCode: "171012",
  country: "IN",
  addressFull:
    "Village Kathot, PO, Majhar Rd, Theog, Himachal Pradesh 171012, India",
  latitude: 31.1213478,
  longitude: 77.3168714,
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3415.5820042744654!2d77.31429649678957!3d31.12134779999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39058540c1d964f9%3A0x565a24c951f49240!2sAlpine%20Crest%20Homestay!5e0!3m2!1sen!2sin!4v1787885776115!5m2!1sen!2sin",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Alpine+Crest+Homestay+Kathot+Theog+Himachal+Pradesh",
} as const;

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WA = {
  general: "Hello Alpine Crest Homestay, I would like to check room availability.",
  standard:
    "Hello Alpine Crest Homestay, I am interested in the Standard Room. Please share availability and price.",
  deluxe:
    "Hello Alpine Crest Homestay, I am interested in the Deluxe Room. Please share availability and price.",
  location:
    "Hello, I am planning a stay near Theog/Kufri and would like to know room availability at Alpine Crest Homestay.",
  meals:
    "Hello Alpine Crest Homestay, I would like to know about home-cooked Himachali meals during my stay.",
  taxi: "Hello Alpine Crest Homestay, I would like help with taxi booking and local sightseeing.",
};

export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  type?: string;
}) {
  const { title, description, path, type = "website" } = opts;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: path },
      { property: "og:site_name", content: SITE.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        item: it.path,
      })),
    }),
  };
}

export const lodgingSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: SITE.name,
  description:
    "Alpine Crest Homestay is a peaceful mountain-view homestay in Village Kathot near Theog, Himachal Pradesh, with private balconies, home-cooked Himachali food and easy access to Kufri and Shimla.",
  telephone: SITE.phoneRaw,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.street,
    addressLocality: SITE.locality,
    addressRegion: SITE.region,
    postalCode: SITE.postalCode,
    addressCountry: SITE.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.latitude,
    longitude: SITE.longitude,
  },
  amenityFeature: [
    "Free Wi-Fi",
    "Private Parking",
    "Power Backup",
    "Private Balcony",
    "Terrace",
    "Garden",
    "Home-Cooked Himachali Food",
    "Mountain Views",
  ].map((n) => ({ "@type": "LocationFeatureSpecification", name: n, value: true })),
};
