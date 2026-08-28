import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MapPin, Mountain, Trees, UtensilsCrossed, Car, Wifi, Sunrise } from "lucide-react";
import { WA, breadcrumbSchema } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { MapEmbed } from "@/components/site/MapEmbed";
import { exterior, standardRoom, deluxeBalcony } from "@/lib/images";

export const Route = createFileRoute("/places-to-stay-in-shimla")({
  head: () => ({
    meta: [
      { title: "Places to Stay in Shimla | Peaceful Mountain Stay Near Theog" },
      {
        name: "description",
        content:
          "Looking for places to stay in Shimla away from the crowds? Alpine Crest Homestay is a peaceful mountain stay near Theog, an hour from Shimla, with mountain-view rooms, balconies and home-cooked food.",
      },
      { property: "og:title", content: "Places to Stay in Shimla | Peaceful Mountain Stay Near Theog" },
      {
        property: "og:description",
        content:
          "Peaceful alternative to crowded Shimla stays — a mountain homestay near Theog, an hour from Shimla.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/places-to-stay-in-shimla" },
    ],
    links: [{ rel: "canonical", href: "/places-to-stay-in-shimla" }],
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Places to Stay in Shimla", path: "/places-to-stay-in-shimla" },
      ]),
    ],
  }),
  component: PlacesToStayInShimlaPage,
});

function PlacesToStayInShimlaPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Places to Stay in Shimla" }]} />

      <section className="container-page grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Places to Stay in Shimla</p>
          <h1 className="mt-3 text-4xl leading-[1.1] sm:text-5xl">
            Places to Stay in Shimla – A Peaceful Mountain Stay Near Theog
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            When travellers start listing places to stay in Shimla, they usually
            picture a guesthouse near the Ridge or a hotel on the Mall. But
            central Shimla is busy year-round — tight lanes, heavy traffic, and
            packed accommodation during summer and the winter snow season. If
            what you actually want is a quieter mountain environment, it is worth
            looking just outside the city, where the air is cleaner and the
            nights are genuinely still. Alpine Crest Homestay is one such place:
            a family-run homestay in Village Kathot near Theog, about an hour
            east of Shimla on NH-5, set above the apple orchards with wide
            valley views.
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
            src={exterior}
            alt="Alpine Crest Homestay, a peaceful place to stay near Shimla above the orchards of Kathot"
            width={1360}
            height={1020}
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="container-page grid gap-10 py-12 lg:grid-cols-2">
        <div className="prose-stay">
          <h2>A quieter alternative to staying in Shimla town</h2>
          <p>
            The trade-off with central Shimla is simple: you are close to the
            shops and cafés, but you trade away the peace that brought you to the
            hills in the first place. Staying a little further out — near Theog,
            on the same NH-5 corridor that runs to Kufri and Narkanda — keeps
            you within an hour of Shimla while giving you the mountain setting
            you came for: pine slopes, apple orchards, and a balcony where the
            only morning noise is birdsong.
          </p>
          <p>
            From Alpine Crest you can still do a day trip into Shimla for the
            Ridge, Christ Church and a walk down the Mall, then leave the crowds
            behind and come back up to a quiet terrace for the evening. It is a
            way to see Shimla without sleeping in the middle of it.
          </p>

          <h2>The rooms</h2>
          <p>
            There are two room types. The Standard Room has a comfortable double
            bed and an attached bathroom with round-the-clock hot water. The
            Deluxe Room adds a private balcony that opens directly onto the
            deodar ridgeline, with a seating area for slow mornings. Both are
            clean, wood-warmed and simple, with access to the shared lounge,
            terrace and garden.
          </p>

          <h2>Amenities highlights</h2>
          <ul>
            <li>Mountain and valley views from balconies and the terrace</li>
            <li>Home-cooked Himachali meals on request, including siddu and madra</li>
            <li>Free private parking right at the house</li>
            <li>Free Wi-Fi and power backup</li>
            <li>Round-the-clock hot water</li>
            <li>East-facing balconies for sunrise</li>
            <li>Taxi booking assistance for Shimla, Kufri and sightseeing</li>
          </ul>

          <h2>Location</h2>
          <p>
            Alpine Crest Homestay is in Village Kathot, just off Majhar Road near
            Theog. It is about 38 km — roughly an hour's drive — east of Shimla
            on NH-5. The same road continues to Kufri (about 30 minutes further)
            and on to Narkanda. State buses run between Shimla and Theog, and we
            can arrange a taxi from Shimla, Kufri or Jubbarhatti airport.
          </p>
        </div>

        <div className="grid gap-5">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <img
              src={deluxeBalcony}
              alt="Deluxe room balcony with mountain view at Alpine Crest Homestay near Shimla"
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
              alt="Standard room at Alpine Crest Homestay near Shimla"
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
          <p className="eyebrow">At a glance</p>
          <h2 className="mt-3 text-3xl">What makes this stay different</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Mountain, label: "Valley views" },
              { icon: Sunrise, label: "Sunrise balconies" },
              { icon: Trees, label: "Orchard & garden" },
              { icon: UtensilsCrossed, label: "Home-cooked meals" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="rounded-xl border border-border bg-card p-5 text-center shadow-soft"
              >
                <Icon className="mx-auto h-6 w-6 text-moss" aria-hidden="true" />
                <p className="mt-3 text-sm font-semibold">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page grid gap-10 py-16 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">How to reach</p>
          <h2 className="mt-3 text-3xl">Getting here from Shimla</h2>
          <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-muted-foreground">
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
              About 38 km east of Shimla on NH-5, roughly an hour's drive.
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
              Turn off at Theog onto Majhar Road toward Village Kathot.
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
              State buses run Shimla–Theog; a short taxi ride reaches the house.
            </li>
            <li className="flex items-start gap-2">
              <Wifi className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
              Free Wi-Fi and power backup throughout your stay.
            </li>
          </ul>
          <WhatsAppLink message={WA.taxi} className="mt-6">
            Ask about taxi help from Shimla
          </WhatsAppLink>
        </div>
        <MapEmbed className="min-h-[400px]" />
      </section>

      <section className="container-page py-16">
        <div className="rounded-2xl bg-primary px-8 py-12 text-center text-primary-foreground">
          <h2 className="text-3xl">Plan your peaceful stay near Shimla</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-sand/85">
            Send us a WhatsApp message with your dates. We will reply with
            availability, pricing and taxi help for reaching us from Shimla.
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
