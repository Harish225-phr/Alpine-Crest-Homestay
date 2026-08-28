import { MessageCircle, CalendarCheck, Navigation } from "lucide-react";
import { SITE, WA, waLink } from "@/lib/site";

export function MobileCTA() {
  const items = [
    {
      href: waLink(WA.general),
      label: "WhatsApp",
      icon: MessageCircle,
      external: true,
    },
    {
      href: waLink(WA.location),
      label: "Check Availability",
      icon: CalendarCheck,
      external: true,
    },
    {
      href: SITE.mapsDirections,
      label: "Directions",
      icon: Navigation,
      external: true,
    },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 backdrop-blur lg:hidden">
      <ul className="grid grid-cols-3">
        {items.map(({ href, label, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 px-2 py-2.5 text-[0.68rem] font-semibold text-foreground"
            >
              <Icon className="h-4.5 w-4.5 text-moss" aria-hidden="true" />
              <span className="truncate">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
