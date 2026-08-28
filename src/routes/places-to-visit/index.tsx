import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { pageMeta, breadcrumbSchema } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { destinations } from "@/lib/content";

export const Route = createFileRoute("/places-to-visit")({
  head: () => ({
    meta: [
      { title: "Places to Visit Near Theog & Kufri | Alpine Crest Homestay" },
      {
        name: "description",
        content:
          "Explore Theog, Kufri, Shimla, Fagu, Narkanda, Chail and more from Alpine Crest Homestay. Guides to the best destinations in the upper Shimla hills.",
      },
      { property: "og:title", content: "Places to Visit Near Theog & Kufri | Alpine Crest Homestay" },
      {
        property: "og:description",
        content:
          "Guides to Theog, Kufri, Shimla, Fagu, Narkanda, Chail and the upper Shimla hills.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/places-to-visit" },
    ],
    links: [{ rel: "canonical", href: "/places-to-visit" }],
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Places to Visit", path: "/places-to-visit" },
      ]),
    ],
  }),
  component: PlacesIndexPage,
});

function PlacesIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Places to Visit" }]} />

      <section className="container-page py-10">
        <p className="eyebrow">Places to Visit</p>
        <h1 className="mt-3 max-w-2xl text-4xl sm:text-5xl">
          Explore Theog, Kufri & Shimla
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          The upper Shimla hills have more to offer than just the Mall Road. Here
          are guides to the destinations within easy reach of Alpine Crest
          Homestay, from the quiet ridge at Theog to the ski slopes of Narkanda.
        </p>
      </section>

      <section className="container-page grid gap-6 pb-20 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((d) => (
          <Link
            key={d.slug}
            to={`/places-to-visit/${d.slug}`}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-colors hover:bg-secondary"
          >
            <div className="p-6">
              <MapPin className="h-6 w-6 text-moss" aria-hidden="true" />
              <h2 className="mt-4 text-2xl">{d.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {d.intro.slice(0, 120)}…
              </p>
              <p className="mt-4 text-sm font-semibold text-moss">
                Read the {d.name} guide
              </p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
