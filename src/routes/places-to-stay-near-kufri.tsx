import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MapPin, Mountain, Car, Wifi, UtensilsCrossed } from "lucide-react";
import { WA, breadcrumbSchema } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { MapEmbed } from "@/components/site/MapEmbed";
import { exterior, deluxeBalcony, standardRoom } from "@/lib/images";

export const Route = createFileRoute("/places-to-stay-near-kufri")({
  head: () => ({
    meta: [
      { title: "Places to Stay Near Kufri | Peaceful Mountain Accommodation" },
      {
        name: "description",
        content:
          "Places to stay near Kufri, Himachal Pradesh. Alpine Crest Homestay near Theog is a peaceful alternative to staying in Kufri — mountain-view rooms, balconies, home-cooked food and easy access to Kufri's sights.",
      },
      { property: "og:title", content: "Places to Stay Near Kufri | Peaceful Mountain Accommodation" },
      {
        property: "og:description",
        content:
          "Peaceful mountain accommodation near Kufri — mountain views, balconies, home-cooked food, a short drive from Kufri.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/places-to-stay-near-kufri" },
    ],
    links: [{ rel: "canonical", href: "/places-to-stay-near-kufri" }],
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Places to Stay Near Kufri", path: "/places-to-stay-near-kufri" },
      ]),
    ],
  }),
  component: PlacesToStayNearKufriPage,
});

function PlacesToStayNearKufriPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Places to Stay Near Kufri" }]} />

      <section className="container-page grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Places to Stay Near Kufri</p>
          <h1 className="mt-3 text-4xl leading-[1.1] sm:text-5xl">
            Places to Stay Near Kufri – Peaceful Mountain Accommodation
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Kufri is a popular hill station about 16 km from Shimla, known for its
            winter snow and the Himalayan Nature Park. In peak season and on
            winter weekends, it gets very busy — accommodation fills up and the
            roads slow down. Alpine Crest Homestay is a peaceful alternative: a
            family-run homestay in Village Kathot near Theog, a short drive from
            Kufri on the same NH-5 corridor, with mountain-view rooms, private
            balconies and home-cooked food. To be clear and honest, the property
            is near Theog rather than in Kufri itself — we say "near Kufri"
            because the two are a short drive apart, and many travellers visiting
            Kufri prefer to stay in the quieter Theog area.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <WhatsAppLink message={WA.location}>Check Availability on WhatsApp</WhatsAppLink>
            <Link
              to="/rooms"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary"
            >
              View Rooms
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-soft">
          <img
            src={deluxeBalcony}
            alt="Mountain-view balcony at Alpine Crest Homestay, a peaceful place to stay near Kufri"
            width={1360}
            height={1020}
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="container-page grid gap-10 py-12 lg:grid-cols-2">
        <div className="prose-stay">
          <h2>A quiet base near Kufri</h2>
          <p>
            Staying a short drive from Kufri, near Theog, lets you enjoy Kufri's
            sights during the day and return to a quiet setting in the evening.
            The drive between the two is straightforward on NH-5, so you can visit
            the Himalayan Nature Park, the viewpoints at Mahasu Peak and the snow
            activities in winter, then come back to a peaceful balcony for the
            evening rather than a crowded guesthouse in town.
          </p>

          <h2>The rooms</h2>
          <p>
            The homestay offers two room types. The Standard Room has a
            comfortable double bed and an attached bathroom with round-the-clock
            hot water. The Deluxe Room adds a private balcony that opens onto the
            deodar ridgeline, with a seating area for taking in the view. Both
            are clean, simple and wood-warmed, with access to the shared lounge,
            terrace and garden.
          </p>

          <h2>Things to do in Kufri</h2>
          <p>
            Kufri is best known for its winter snow (typically late December
            through February), the Himalayan Nature Park with its rescued
            wildlife, and the viewpoints at Mahasu Peak — reachable by a short
            hike or a horse ride. In summer it is a base for walking and for
            drives further along the ridge toward Fagu and Narkanda. Staying near
            Theog keeps you close enough to do all of this as day trips while
            avoiding the peak-season crowding in Kufri itself.
          </p>

          <h2>What is included</h2>
          <ul>
            <li>Mountain and valley views from the balcony and terrace</li>
            <li>Home-cooked Himachali meals on request</li>
            <li>Free private parking at the house</li>
            <li>Free Wi-Fi</li>
            <li>Power backup and round-the-clock hot water</li>
            <li>Taxi booking assistance for Kufri and local sightseeing</li>
          </ul>
        </div>

        <div className="grid gap-5">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <img
              src={deluxeBalcony}
              alt="Deluxe room balcony at Alpine Crest Homestay, a short drive from Kufri"
              width={1360}
              height={1020}
              loading="lazy"
              className="h-56 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl">Deluxe Room</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Private balcony, seating area, valley view.
              </p>
              <WhatsAppLink message={WA.deluxe} variant="primary" className="mt-4 px-5 py-2.5">
                Enquire
              </WhatsAppLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <img
              src={standardRoom}
              alt="Standard room at Alpine Crest Homestay, a short drive from Kufri"
              width={1360}
              height={1020}
              loading="lazy"
              className="h-56 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl">Standard Room</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Comfortable double bed, attached bathroom, hot water.
              </p>
              <WhatsAppLink message={WA.standard} variant="primary" className="mt-4 px-5 py-2.5">
                Enquire
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-16">
        <div className="container-page">
          <p className="eyebrow">Explore</p>
          <h2 className="mt-3 text-3xl">Sights around Kufri and Theog</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Kufri", to: "/places-to-visit/kufri" },
              { name: "Theog", to: "/stay-near-theog" },
              { name: "Fagu", to: "/places-to-visit/fagu" },
              { name: "Shimla", to: "/homestay-near-shimla" },
            ].map((d) => (
              <Link
                key={d.name}
                to={d.to}
                className="rounded-xl border border-border bg-card p-5 shadow-soft transition-colors hover:bg-secondary"
              >
                <MapPin className="h-5 w-5 text-moss" aria-hidden="true" />
                <p className="mt-3 font-display text-xl">{d.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page grid gap-10 py-16 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">How to reach</p>
          <h2 className="mt-3 text-3xl">Getting to Alpine Crest from Kufri</h2>
          <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-muted-foreground">
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
              The homestay is in Village Kathot near Theog, a short drive from Kufri on NH-5.
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
              From Theog, follow Majhar Road toward Village Kathot.
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
              Free private parking is available right at the house.
            </li>
            <li className="flex items-start gap-2">
              <Wifi className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
              Free Wi-Fi and power backup throughout your stay.
            </li>
          </ul>
          <WhatsAppLink message={WA.taxi} className="mt-6">
            Ask about taxi help
          </WhatsAppLink>
        </div>
        <MapEmbed className="min-h-[400px]" />
      </section>

      <section className="container-page py-16">
        <div className="rounded-2xl bg-primary px-8 py-12 text-center text-primary-foreground">
          <h2 className="text-3xl">Plan your stay near Kufri</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-sand/85">
            Send us a WhatsApp message with your travel dates and we will get back
            to you with availability, pricing and taxi help for visiting Kufri.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <WhatsAppLink message={WA.location} variant="primary">
              Check Availability
            </WhatsAppLink>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-sand/50 px-6 py-3 text-sm font-semibold text-sand hover:bg-sand/15"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
