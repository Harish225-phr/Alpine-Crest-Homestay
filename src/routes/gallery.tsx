import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { pageMeta } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { galleryImages } from "@/lib/content";

export const Route = createFileRoute("/gallery")({
  head: () =>
    pageMeta({
      title: "Gallery | Alpine Crest Homestay, Theog",
      description:
        "Photos of Alpine Crest Homestay near Theog — rooms, balconies, mountain views, the lounge and home-cooked Himachali food.",
      path: "/gallery",
    }),
  component: GalleryPage,
});

const categories = ["All", "Property", "Rooms", "Balcony", "Views", "Nature", "Food"];

function GalleryPage() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? galleryImages : galleryImages.filter((i) => i.category === active);

  // Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight" && lightboxIndex !== null) {
        setLightboxIndex((prev) => (prev !== null && prev < filtered.length - 1 ? prev + 1 : prev));
      }
      if (e.key === "ArrowLeft" && lightboxIndex !== null) {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filtered.length]);

  return (
    <>
      <Breadcrumbs items={[{ name: "Gallery" }]} />

      <section className="container-page py-10">
        <p className="eyebrow">Gallery</p>
        <h1 className="mt-3 max-w-2xl text-4xl sm:text-5xl">Alpine Crest, in pictures</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          A look at the property, the rooms, the views and the food. All images are
          of the actual homestay and its surroundings near Theog, Himachal Pradesh.
        </p>
      </section>

      <section className="container-page pb-20">
        <div className="flex flex-wrap gap-2 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-foreground hover:bg-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((img, i) => (
            <div
              key={`${img.alt}-${i}`}
              onClick={() => setLightboxIndex(i)}
              className="cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-soft group"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  width={765}
                  height={1020}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>
              <p className="px-4 py-3 text-xs text-muted-foreground">{img.alt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm transition-opacity duration-300">
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button
            className={`absolute left-4 sm:left-10 text-white/70 hover:text-white transition-colors p-2 ${lightboxIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
            onClick={() => setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))}
            disabled={lightboxIndex === 0}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <div className="max-w-5xl max-h-[85vh] w-full px-16 flex flex-col items-center">
            <img 
              src={filtered[lightboxIndex].src} 
              alt={filtered[lightboxIndex].alt}
              className="max-h-[75vh] w-auto object-contain rounded shadow-2xl"
            />
            <p className="text-white/80 mt-6 text-center">{filtered[lightboxIndex].alt}</p>
          </div>

          <button
            className={`absolute right-4 sm:right-10 text-white/70 hover:text-white transition-colors p-2 ${lightboxIndex === filtered.length - 1 ? 'opacity-30 cursor-not-allowed' : ''}`}
            onClick={() => setLightboxIndex((prev) => (prev !== null && prev < filtered.length - 1 ? prev + 1 : prev))}
            disabled={lightboxIndex === filtered.length - 1}
            aria-label="Next image"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </>
  );
}
