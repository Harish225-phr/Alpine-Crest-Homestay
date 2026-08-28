import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MapPin, Check, ArrowLeft } from "lucide-react";
import { pageMeta, WA, breadcrumbSchema } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { MapEmbed } from "@/components/site/MapEmbed";
import { getDestination, destinations } from "@/lib/content";

export const Route = createFileRoute("/places-to-visit/$slug")({
  head: ({ params }) => {
    const d = getDestination(params.slug);
    if (!d) return { meta: [{ title: "Destination not found | Alpine Crest" }] };
    return {
      meta: [
        { title: `${d.name} Travel Guide | Alpine Crest Homestay` },
        {
          name: "description",
          content: `${d.intro.slice(0, 150)} Things to do, best time to visit and how Alpine Crest Homestay makes a good base for ${d.name}.`,
        },
        { property: "og:title", content: `${d.name} Travel Guide | Alpine Crest Homestay` },
        { property: "og:description", content: d.intro.slice(0, 150) },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/places-to-visit/${d.slug}` },
      ],
      links: [{ rel: "canonical", href: `/places-to-visit/${d.slug}` }],
      scripts: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Places to Visit", path: "/places-to-visit" },
          { name: d.name, path: `/places-to-visit/${d.slug}` },
        ]),
      ],
    };
  },
  component: DestinationPage,
});

function DestinationPage() {
  const { slug } = Route.useParams();
  const dest = getDestination(slug);
  if (!dest) throw notFound();

  const others = destinations.filter((d) => d.slug !== slug).slice(0, 4);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Places to Visit", path: "/places-to-visit" },
          { name: dest.name },
        ]}
      />

      <section className="container-page py-10">
        <Link
          to="/places-to-visit"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-pine"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All places to visit
        </Link>
        <p className="eyebrow mt-4">Destination guide</p>
        <h1 className="mt-3 max-w-2xl text-4xl sm:text-5xl">{dest.name}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {dest.intro}
        </p>
      </section>

      <section className="container-page grid gap-10 py-8 lg:grid-cols-3">
        <div className="prose-stay lg:col-span-2">
          <h2>Things to do in {dest.name}</h2>
          <ul>
            {dest.thingsToDo.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <h2>Best time to visit</h2>
          <p>{dest.bestTime}</p>

          <h2>Nearby attractions</h2>
          <ul>
            {dest.nearby.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>

          <h2>Travel considerations</h2>
          <p>{dest.howToReach}</p>

          <h2>Alpine Crest as a base for {dest.name}</h2>
          <p>{dest.asABase}</p>
        </div>

        <aside className="grid gap-5">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h2 className="text-xl">Stay nearby</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Alpine Crest Homestay in Village Kathot near Theog makes a convenient
              and peaceful base for visiting {dest.name}.
            </p>
            <WhatsAppLink message={WA.location} className="mt-5 w-full">
              Check Availability
            </WhatsAppLink>
            <Link
              to="/rooms"
              className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary"
            >
              View Rooms
            </Link>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h2 className="text-xl">Other destinations</h2>
            <ul className="mt-4 grid gap-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    to={`/places-to-visit/${o.slug}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-pine"
                  >
                    <MapPin className="h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
                    {o.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <MapEmbed className="min-h-[280px]" />
        </aside>
      </section>

      <section className="bg-secondary/60 py-16">
        <div className="container-page flex flex-col items-center gap-5 text-center">
          <h2 className="text-3xl">Make {dest.name} part of your stay</h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            Send a WhatsApp message and we will help with availability, pricing and
            taxi arrangements for your trip to {dest.name}.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <WhatsAppLink message={WA.location}>Check Availability</WhatsAppLink>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
