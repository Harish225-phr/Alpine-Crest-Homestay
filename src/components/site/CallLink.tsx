import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

type Variant = "primary" | "outline" | "whatsapp";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-clay text-accent-foreground hover:opacity-90 px-6 py-3",
  whatsapp: "bg-whatsapp text-whatsapp-foreground hover:opacity-90 px-6 py-3",
  outline:
    "border border-border bg-card text-foreground hover:bg-secondary px-6 py-3",
};

export function CallLink({
  children,
  variant = "primary",
  className = "",
  ariaLabel,
}: {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <a
      href={`tel:${SITE.phoneRaw}`}
      aria-label={ariaLabel}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <Phone className="h-4 w-4" aria-hidden="true" />
      {children}
    </a>
  );
}
