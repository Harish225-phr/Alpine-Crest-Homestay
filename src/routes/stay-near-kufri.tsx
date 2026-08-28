import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MapPin, Mountain, Sunrise, Car, UtensilsCrossed } from "lucide-react";
import { WA, breadcrumbSchema } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { MapEmbed } from "@/components/site/MapEmbed";
import { deluxeBalcony, deluxeRoom, standardRoom } from "@/lib/images";

export const Route = createFileRoute("/stay-near-kufri")({
  head: () => ({
    meta: [
      { title: "Stay Near Kufri | Peaceful Mountain Stay Near Kufri" },
      {
        name: "description",
        content:
          "Stay near Kufri at Alpine Crest Homestay — a peaceful mountain homestay a short drive from Kufri, with mountain-view rooms, private balconies, home-cooked food and easy access to Kufri's sights.",
      },
      { property: "og:title", content: "Stay Near Kufri | Peaceful Mountain Stay Near Kufri" },
      {
        property: "og:description",
        content:
          "Peaceful mountain homestay a short drive from Kufri — mountain views, private balconies, home-cooked food.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/stay-near-kufri" },
    ],
    links: [{ rel: "canonical", href: "/stay-near-kufri" }],
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Stay Near Kufri", path: "/stay-near-kufri" },
      ]),
    ],
  }),
  component: StayNearKufriPage,
});

function StayNearKufriPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Stay Near Kufri" }]} />

      <section className="container-page grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Stay Near Kufri</p>
          <h1 className="mt-3 text-4xl leading-[1.1] sm:text-5xl">
            Stay Near Kufri – Peaceful Mountain Homestay
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Kufri is a popular hill station about 16 km from Shimla, known for its
            winter snow and the Himalayan Nature Park. In peak season and on
            winter weekends it gets very busy — accommodation fills up and the
            roads slow down. Alpine Crest Homestay is a peaceful alternative to
            staying in Kufri itself: a family-run homestay in Village Kathot near
            Theog, a short drive from Kufri on the same NH-5 corridor, with
            mountain views, private balconies and home-cooked food. To be clear
            and honest, the property is near Theog rather than in Kufri — we say
            "near Kufri" because the two are a short drive apart, and many
            travellers visiting Kufri prefer to stay in the quieter Theog area.
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
            alt="Mountain-view balcony at Alpine Crest Homestay, a peaceful stay near Kufri"
            width={1360}
            height={1020}
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="container-page grid gap-10 py-12 lg:grid-cols-2">
        <div className="prose-stay">
          <h2>A peaceful alternative to staying in Kufri</h2>
          <p>
            Staying in Kufri itself means staying in a small, busy hill station
            that fills up quickly in peak season and on winter weekends, when the
            snow draws big crowds. Staying a short drive away, near Theog, lets
            you enjoy Kufri's sights during the day and return to a quiet
            mountain setting in the evening. The drive between the two is
            straightforward on NH-5, so you can visit the Himalayan Nature Park,
            the viewpoints at Mahasu Peak and the winter snow activities, then
            come back to a peaceful balcony rather than a crowded guesthouse.
          </p>
          <p>
            The other advantage is availability: when Kufri's accommodation is
            full or overpriced on a holiday weekend, the Theog area still has
            calm, comfortable options — and a setting that is, frankly, closer to
            the mountain experience most travellers came for.
          </p>

          <h2>Easy access to Kufri</h2>
          <p>
            Alpine Crest Homestay is in Village Kathot near Theog, on the same
            NH-5 corridor as Kufri. The drive is a short and scenic one, making it
            easy to head up to Kufri for the day and back. We can also help
            arrange a taxi for the Kufri run and for wider sightseeing, so you do
            not have to worry about the last stretch of mountain road yourself.
          </p>

          <h2>The rooms</h2>
          <p>
            The homestay offers two room types. The Standard Room has a
            comfortable double bed and an attached bathroom with round-the-clock
            hot water — practical and warm. The Deluxe Room adds a private
            balcony that opens onto the deodar ridgeline, with a seating area for
            taking in the view. Both are clean, simple and wood-warmed, with
            access to the shared lounge, terrace and garden.
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
              src={deluxeRoom}
              alt="Deluxe room at Alpine Crest Homestay, a short drive from Kufri"
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
              <Car className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
              Free private parking is available right at the house.
            </li>
            <li className="flex items-start gap-2">
              <UtensilsCrossed className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
              Home-cooked Himachali meals available on request.
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
