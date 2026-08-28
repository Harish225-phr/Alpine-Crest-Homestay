import { SITE } from "@/lib/site";

export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl shadow-soft ${className}`}>
      <iframe
        src={SITE.mapsEmbed}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "320px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="Map showing Alpine Crest Homestay in Kathot near Theog, Himachal Pradesh"
      />
    </div>
  );
}
