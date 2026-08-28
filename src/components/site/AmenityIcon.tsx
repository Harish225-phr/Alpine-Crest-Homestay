import {
  Wifi,
  Car,
  Zap,
  Sun,
  Trees,
  UtensilsCrossed,
  Mountain,
  Leaf,
  Dumbbell,
  ShowerHead,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Wifi,
  Car,
  Zap,
  Sun,
  Trees,
  UtensilsCrossed,
  Mountain,
  Leaf,
  Dumbbell,
  ShowerHead,
};

export function AmenityIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? Wifi;
  return <Icon className={className} aria-hidden="true" />;
}
