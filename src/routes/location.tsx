import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Navigation } from "lucide-react";
import { pageMeta, SITE, WA } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { MapEmbed } from "@/components/site/MapEmbed";
import { destinations } from "@/lib/content";

export const Route = createFileRoute("/location")({
  head: () =>
    pageMeta({
      title: "Location & How to Reach | Alpine Crest Homestay, Theog",
      description:
        "Alpine Crest Homestay is in Village Kathot near Theog, Himachal Pradesh. Find the address, a Google Map and directions on how to reach the property.",
      path: "/location",
    }),
  component: LocationPage,
});

function LocationPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Location" }]} />

      <section className="container-page py-10">
        <p className="eyebrow">Location</p>
        <h1 className="mt-3 max-w-2xl text-4xl sm:text-5xl">Find Alpine Crest Homestay</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          We are in Village Kathot, a short distance off NH-5 at Theog, with
          private parking right at the house. Send us a message and we will share
          a pin and road conditions for your travel dates.
        </p>
      </section>

      <section className="container-page grid gap-10 pb-16 lg:grid-cols-2">
        <div className="grid gap-5">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h2 className="text-xl">Address</h2>
            <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
              {SITE.addressFull}
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
              <a href={`tel:${SITE.phoneRaw}`} className="hover:text-pine">
                {SITE.phoneDisplay}
              </a>
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h2 className="text-xl">How to Reach</h2>
            <ul className="mt-3 grid gap-3 text-sm leading-relaxed text-muted-foreground">
              <li>
                <strong className="text-foreground">By road:</strong> Theog is on
                NH-5, roughly an hour's drive east of Shimla. From Theog, follow
                Majhar Road toward Village Kathot. The homestay has private parking
                on site.
              </li>
              <li>
                <strong className="text-foreground">By bus:</strong> State buses
                run regularly between Shimla and Theog. From Theog, a short taxi
                ride reaches the homestay.
              </li>
              <li>
                <strong className="text-foreground">By train:</strong> The nearest
                railhead is Shimla (narrow-gauge toy train from Kalka). From
                Shimla, the homestay is about an hour by road.
              </li>
              <li>
                <strong className="text-foreground">By air:</strong> The nearest
                airport is Jubbarhatti near Shimla. From there, the homestay is
                roughly a 90-minute drive.
              </li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              We can help arrange a taxi from Shimla, Kufri or the airport. Message
              us on WhatsApp with your travel plans.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <WhatsAppLink message={WA.taxi}>Ask about taxi help</WhatsAppLink>
              <a
                href={SITE.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Get Directions
              </a>
            </div>
          </div>
        </div>

        <MapEmbed className="min-h-[400px]" />
      </section>

      <section className="bg-secondary/60 py-16">
        <div className="container-page">
          <p className="eyebrow">Explore</p>
          <h2 className="mt-3 text-3xl">Nearby destinations</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d) => (
              <Link
                key={d.slug}
                to={`/places-to-visit/${d.slug}`}
                className="rounded-xl border border-border bg-card p-5 shadow-soft transition-colors hover:bg-secondary"
              >
                <MapPin className="h-5 w-5 text-moss" aria-hidden="true" />
                <p className="mt-3 font-display text-xl">{d.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{d.nearby[0]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
