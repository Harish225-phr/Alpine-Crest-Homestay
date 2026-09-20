import { Link } from "@tanstack/react-router";
import { Menu, X, Mountain, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { WA, SITE, waLink } from "@/lib/site";
import { WhatsAppLink } from "./WhatsAppLink";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/rooms", label: "Rooms" },
  { to: "/amenities", label: "Experience" },
  { to: "/gallery", label: "Gallery" },
  { to: "/location", label: "Location" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex flex-col w-full shadow-soft bg-background/95 backdrop-blur-md">
      {/* Top Contact & Booking Bar (Desktop Only) */}
      <div className="hidden border-b border-border/60 bg-pine text-primary-foreground lg:block">
        <div className="container-page flex h-9 items-center justify-between text-[0.75rem] font-medium tracking-wide">
          <div className="flex items-center gap-6">
            <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Call Now</span>
            </a>
            <a href={waLink("Hello, I would like to chat about Alpine Crest.")} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <span className="flex items-center justify-center h-3.5 w-3.5">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-full h-full">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </span>
              <span>WhatsApp</span>
            </a>
            <a href={SITE.mapsDirections} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Get Directions</span>
            </a>
          </div>
          <div>
            <a href={waLink(WA.general)} target="_blank" rel="noreferrer" className="font-semibold text-white hover:underline underline-offset-4 decoration-white/50">
              Check Availability →
            </a>
          </div>
        </div>
      </div>

      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full">
            <img src="/favicon.png" alt="Alpine Crest Homestay" className="h-full w-full object-cover" />
          </span>
          <span className="min-w-0 hidden sm:block">
            <span className="block truncate font-display text-xl leading-tight font-semibold text-primary">
              Alpine Crest Homestay
            </span>
            <span className="hidden text-[0.65rem] tracking-[0.2em] uppercase text-moss sm:block">
              Kathot · Theog · Himachal
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-7 text-[0.9rem]">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    activeOptions={{ exact: n.to === "/" }}
                    activeProps={{ className: "text-pine font-semibold border-b-2 border-pine" }}
                    inactiveProps={{ className: "text-muted-foreground border-b-2 border-transparent" }}
                    className="pb-1 transition-colors hover:text-pine"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <WhatsAppLink
            message={WA.general}
            variant="primary"
            className="hidden px-5 py-2.5 sm:inline-flex lg:hidden shadow-sm hover:shadow"
          >
            Book Your Stay
          </WhatsAppLink>
          
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5 text-pine" /> : <Menu className="h-5 w-5 text-pine" />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-border bg-card lg:hidden shadow-lg absolute w-full top-[100%] left-0">
          <ul className="container-page grid gap-1 py-4">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-secondary/70 hover:text-pine transition-colors"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 grid grid-cols-2 gap-3 mt-2 border-t border-border">
              <WhatsAppLink message={WA.general} className="w-full shadow-sm">
                WhatsApp
              </WhatsAppLink>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-pine px-6 py-3 text-sm font-semibold text-pine transition-colors hover:bg-secondary"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
