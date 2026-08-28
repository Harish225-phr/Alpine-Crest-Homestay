import type { ReactNode } from "react";
import { waLink } from "@/lib/site";

type Variant = "primary" | "whatsapp" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-pine px-6 py-3",
  whatsapp: "bg-whatsapp text-whatsapp-foreground hover:opacity-90 px-6 py-3",
  outline:
    "border border-border bg-card text-foreground hover:bg-secondary px-6 py-3",
  ghost: "text-moss hover:text-pine underline underline-offset-4 px-0 py-0",
};

export function WhatsAppLink({
  message,
  children,
  variant = "whatsapp",
  className = "",
  ariaLabel,
}: {
  message: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
