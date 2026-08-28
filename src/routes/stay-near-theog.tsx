import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MapPin } from "lucide-react";
import { pageMeta, WA, breadcrumbSchema } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { MapEmbed } from "@/components/site/MapEmbed";
import { exterior, standardRoom, deluxeBalcony } from "@/lib/images";

export const Route = createFileRoute("/stay-near-theog")({
  head: () => ({
    meta: [
      { title: "Homestay Near Theog, Himachal Pradesh | Alpine Crest Homestay" },
      {
        name: "description",
        content:
          "Alpine Crest Homestay is a peaceful homestay in Village Kathot near Theog, Himachal Pradesh. Mountain-view rooms, private balconies, home-cooked food and easy access to Kufri.",
      },
      { property: "og:title", content: "Homestay Near Theog, Himachal Pradesh | Alpine Crest Homestay" },
      {
        property: "og:description",
        content:
          "Peaceful mountain homestay in Kathot near Theog, Himachal Pradesh. Mountain views, private balconies, home-cooked food.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/stay-near-theog" },
    ],
    links: [{ rel: "canonical", href: "/stay-near-theog" }],
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Stay Near Theog", path: "/stay-near-theog" },
      ]),
    ],
  }),
  component: TheogPage,
});

function TheogPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Stay Near Theog" }]} />

      <section className="container-page grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Stay Near Theog</p>
          <h1 className="mt-3 text-4xl leading-[1.1] sm:text-5xl">
            Peaceful Homestay Near Theog, Himachal Pradesh
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Alpine Crest Homestay is located in Village Kathot, a short distance
            from Theog town on the NH-5 corridor. It offers a peaceful mountain
            setting away from the crowded tourist areas, with mountain views,
            private balconies, home-cooked Himachali food and easy access to both
            Theog and Kufri.
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
            alt="Alpine Crest Homestay near Theog, Himachal Pradesh"
            width={1360}
            height={1020}
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="container-page grid gap-10 py-12 lg:grid-cols-2">
        <div className="prose-stay">
          <h2>Why stay near Theog?</h2>
          <p>
            Theog is a small hill town on NH-5, about an hour east of Shimla. Most
            travellers pass through it on the way to Kufri or Narkanda, but the
            ridge around Theog — and villages like Kathot just off the highway —
            offer some of the quietest mountain views in the upper Shimla hills.
          </p>
          <p>
            Staying near Theog gives you the peace of the pine valleys and the
            convenience of being on the main road to Kufri, Fagu and Narkanda. You
            avoid the crowds that gather in Kufri during peak season, while keeping
            easy access to all the main sights.
          </p>

          <h2>Room options at Alpine Crest</h2>
          <p>
            The homestay offers two room types: a Standard Room with a comfortable
            double bed and attached bathroom, and a Deluxe Room with a private
            balcony that opens onto the deodar ridgeline. Both are simple, clean
            and warm, with hot water and access to the shared lounge and terrace.
          </p>

          <h2>What is included</h2>
          <ul>
            <li>Mountain and valley views from the balcony and terrace</li>
            <li>Home-cooked Himachali meals on request</li>
            <li>Free private parking at the house</li>
            <li>Free Wi-Fi</li>
            <li>Power backup</li>
            <li>Round-the-clock hot water</li>
            <li>Taxi booking assistance for local sightseeing</li>
          </ul>
        </div>

        <div className="grid gap-5">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <img
              src={standardRoom}
              alt="Standard room at Alpine Crest Homestay near Theog"
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
              alt="Deluxe room balcony at Alpine Crest Homestay near Theog"
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
          <p className="eyebrow">Nearby attractions</p>
          <h2 className="mt-3 text-3xl">What is around Theog</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Fagu", to: "/places-to-visit/fagu" },
              { name: "Kufri", to: "/homestay-near-kufri" },
              { name: "Shimla", to: "/homestay-near-shimla" },
              { name: "Narkanda", to: "/places-to-visit/narkanda" },
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
          <h2 className="mt-3 text-3xl">Getting to Alpine Crest</h2>
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
    </>
  );
}
