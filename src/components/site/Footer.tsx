import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { SITE, WA } from "@/lib/site";
import { WhatsAppLink } from "./WhatsAppLink";

const columns: { title: string; links: { to: string; label: string }[] }[] = [
  {
    title: "Stay",
    links: [
      { to: "/", label: "Home" },
      { to: "/rooms", label: "Rooms" },
      { to: "/amenities", label: "Experience" },
      { to: "/gallery", label: "Gallery" },
    ],
  },
  {
    title: "Homestay In",
    links: [
      { to: "/homestay-near-theog", label: "Homestay in Theog" },
      { to: "/homestay-near-kufri", label: "Homestay near Kufri" },
      { to: "/homestay-near-shimla", label: "Homestay near Shimla" },
      { to: "/homestay-in-kathot", label: "Homestay in Kathot" },
      { to: "/mountain-view-homestay-theog", label: "Mountain View Stay" },
    ],
  },
  {
    title: "Explore",
    links: [
      { to: "/places-to-visit", label: "Places to Visit" },
      { to: "/blog", label: "Blog" },
      { to: "/location", label: "Location" },
    ],
  },
  {
    title: "More",
    links: [
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact" },
      { to: "/privacy-policy", label: "Privacy Policy" },
      { to: "/terms-and-conditions", label: "Terms & Conditions" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/60">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.3fr_repeat(3,minmax(0,1fr))]">
        <div>
          <h2 className="font-display text-2xl">Alpine Crest Homestay</h2>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Peaceful mountain stay near Theog, Himachal Pradesh — mountain views,
            private balconies and home-cooked Himachali food.
          </p>
          <WhatsAppLink message={WA.general} className="mt-5">
            Enquire on WhatsApp
          </WhatsAppLink>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="eyebrow">{col.title}</h3>
            <ul className="mt-4 grid gap-2 text-sm">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-muted-foreground transition-colors hover:text-pine"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-3 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {SITE.addressFull}
          </p>
          <p className="flex items-center gap-2">
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            <a href={`tel:${SITE.phoneRaw}`} className="hover:text-pine">
              {SITE.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
