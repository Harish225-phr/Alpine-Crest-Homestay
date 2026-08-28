import { Link } from "@tanstack/react-router";
import { Menu, X, Mountain } from "lucide-react";
import { useState } from "react";
import { WA } from "@/lib/site";
import { WhatsAppLink } from "./WhatsAppLink";

const nav = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms" },
  { to: "/amenities", label: "Experience" },
  { to: "/gallery", label: "Gallery" },
  { to: "/location", label: "Location" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
            <Mountain className="h-4.5 w-4.5" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-tight font-semibold">
              Alpine Crest Homestay
            </span>
            <span className="hidden text-[0.68rem] tracking-[0.16em] uppercase text-muted-foreground sm:block">
              Kathot · Theog · Himachal
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-6 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    activeOptions={{ exact: n.to === "/" }}
                    activeProps={{ className: "text-pine font-semibold" }}
                    inactiveProps={{ className: "text-muted-foreground" }}
                    className="transition-colors hover:text-pine"
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
            className="hidden px-5 py-2.5 sm:inline-flex"
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
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-border bg-card lg:hidden">
          <ul className="container-page grid gap-1 py-3">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2.5 text-sm text-foreground hover:bg-secondary"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <WhatsAppLink message={WA.general} className="w-full">
                WhatsApp Us
              </WhatsAppLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
