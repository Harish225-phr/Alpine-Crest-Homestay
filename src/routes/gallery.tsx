import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
            >
              <img
                src={img.src}
                alt={img.alt}
                width={765}
                height={1020}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <p className="px-4 py-3 text-xs text-muted-foreground">{img.alt}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
