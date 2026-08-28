import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MapPin, Mountain, Wifi, Car, UtensilsCrossed, Trees, Sunrise } from "lucide-react";
import { WA, breadcrumbSchema } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { MapEmbed } from "@/components/site/MapEmbed";
import { exterior, standardRoom, deluxeBalcony } from "@/lib/images";

export const Route = createFileRoute("/places-to-stay-in-theog")({
  head: () => ({
    meta: [
      { title: "Places to Stay in Theog | Alpine Crest Homestay" },
      {
        name: "description",
        content:
          "Places to stay in Theog, Himachal Pradesh. Alpine Crest Homestay in Kathot near Theog offers mountain-view rooms, private balconies, home-cooked food, parking, Wi-Fi and easy access to Kufri and Shimla.",
      },
      { property: "og:title", content: "Places to Stay in Theog | Alpine Crest Homestay" },
      {
        property: "og:description",
        content:
          "A peaceful place to stay in Theog — mountain-view rooms, balconies, home-cooked food, parking and Wi-Fi.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/places-to-stay-in-theog" },
    ],
    links: [{ rel: "canonical", href: "/places-to-stay-in-theog" }],
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Places to Stay in Theog", path: "/places-to-stay-in-theog" },
      ]),
    ],
  }),
  component: PlacesToStayInTheogPage,
});

function PlacesToStayInTheogPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Places to Stay in Theog" }]} />

      <section className="container-page grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Places to Stay in Theog</p>
          <h1 className="mt-3 text-4xl leading-[1.1] sm:text-5xl">
            Places to Stay in Theog – Alpine Crest Homestay
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Theog is a small hill town on NH-5, about an hour east of Shimla, and
            most people only pass through it on the way to Kufri or Narkanda. But
            the ridge around Theog — and villages like Kathot just off the
            highway — is one of the quieter corners of the upper Shimla hills,
            with pine slopes, apple orchards and wide valley views. If you are
            looking at places to stay in Theog, Alpine Crest Homestay is a
            family-run homestay in Kathot offering comfortable rooms, private
            balconies and warm local hospitality.
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
            alt="Alpine Crest Homestay, a place to stay in Theog, Himachal Pradesh"
            width={1360}
            height={1020}
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="container-page grid gap-10 py-12 lg:grid-cols-2">
        <div className="prose-stay">
          <h2>Location</h2>
          <p>
            Alpine Crest Homestay sits in Village Kathot, just off Majhar Road
            near Theog, on the NH-5 corridor. Theog town is about 6 km away,
            Kufri roughly 30 minutes further along the highway, and Shimla about
            an hour to the west. Because the house is set just above the orchards
            rather than right on the highway, you get the convenience of the
            main road without its noise.
          </p>

          <h2>Accommodation</h2>
          <p>
            The homestay has two room types. The Standard Room has a comfortable
            double bed and an attached bathroom with round-the-clock hot water —
            practical and warm. The Deluxe Room adds a private balcony that opens
            straight onto the deodar ridgeline, with a seating area for taking in
            the view. Both rooms share access to the lounge, terrace and garden.
          </p>

          <h2>Views</h2>
          <p>
            The property faces east over a wide valley of pine and deodar, with
            the Shali Tibba range rising beyond. The balconies catch sunrise
            light over the ridgeline, and the terrace stays bright through the
            afternoon as the valley slowly fills with shadow. A short walk down
            through the orchards reaches the edge of the pine forest, where the
            air is cooler and the silence is total.
          </p>

          <h2>Food</h2>
          <p>
            Meals are cooked in the family kitchen and served in the lounge or on
            the terrace. Breakfast is parathas, eggs and chai. Lunch and dinner
            are simple home food — rajma, dal, seasonal sabzi, rice and rotis —
            with Himachali specialties like siddu and madra on request. Food is
            vegetarian by default, and we cook around allergies and preferences
            if you tell us in advance.
          </p>

          <h2>Parking, Wi-Fi and essentials</h2>
          <ul>
            <li>Free private parking right at the house</li>
            <li>Free Wi-Fi throughout the stay</li>
            <li>Power backup</li>
            <li>Round-the-clock hot water</li>
            <li>Taxi booking assistance for local sightseeing</li>
          </ul>

          <h2>Nearby destinations</h2>
          <p>
            From Theog you can reach Kufri (about 30 minutes) for the Himalayan
            Nature Park and winter snow, Fagu for quiet viewpoints, and Narkanda
            further along NH-5 for Hatu Peak and the apple belt of Kotgarh. Shimla
            town is an hour west if you want a day trip to the Ridge and Mall
            Road.
          </p>
        </div>

        <div className="grid gap-5">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <img
              src={standardRoom}
              alt="Standard room at Alpine Crest Homestay in Theog"
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
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <img
              src={deluxeBalcony}
              alt="Deluxe room balcony at Alpine Crest Homestay in Theog"
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
        </div>
      </section>

      <section className="bg-secondary/60 py-16">
        <div className="container-page">
          <p className="eyebrow">At a glance</p>
          <h2 className="mt-3 text-3xl">What is included</h2>
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
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Car, label: "Free parking" },
              { icon: Wifi, label: "Free Wi-Fi" },
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
          <h2 className="mt-3 text-3xl">Getting to Theog</h2>
          <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-muted-foreground">
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
              Theog is on NH-5, roughly an hour's drive east of Shimla.
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
              From Theog, follow Majhar Road toward Village Kathot.
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
              State buses run between Shimla and Theog; a short taxi ride reaches the house.
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
              We can arrange a taxi from Shimla, Kufri or Jubbarhatti airport.
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
          <h2 className="text-3xl">Book your stay in Theog</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-sand/85">
            Send us a WhatsApp message with your travel dates and we will get back
            to you with availability, pricing and taxi help for reaching Theog.
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
