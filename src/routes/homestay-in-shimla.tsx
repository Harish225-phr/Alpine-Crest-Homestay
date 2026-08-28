import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MapPin, Mountain, Sunrise, Car, Wifi, UtensilsCrossed } from "lucide-react";
import { WA, breadcrumbSchema } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { MapEmbed } from "@/components/site/MapEmbed";
import { exterior, deluxeBalcony, standardRoom } from "@/lib/images";

export const Route = createFileRoute("/homestay-in-shimla")({
  head: () => ({
    meta: [
      { title: "Homestay in Shimla | Peaceful Mountain Stay Near Shimla" },
      {
        name: "description",
        content:
          "A peaceful homestay near Shimla for travellers who want mountain views without the crowds. Alpine Crest Homestay is in Kathot near Theog — an hour from Shimla, with private balconies and home-cooked food.",
      },
      { property: "og:title", content: "Homestay in Shimla | Peaceful Mountain Stay Near Shimla" },
      {
        property: "og:description",
        content:
          "Peaceful homestay near Shimla, in Kathot near Theog. Mountain views, private balconies, home-cooked food.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/homestay-in-shimla" },
    ],
    links: [{ rel: "canonical", href: "/homestay-in-shimla" }],
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Homestay in Shimla", path: "/homestay-in-shimla" },
      ]),
    ],
  }),
  component: HomestayInShimlaPage,
});

function HomestayInShimlaPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Homestay in Shimla" }]} />

      <section className="container-page grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Homestay in Shimla</p>
          <h1 className="mt-3 text-4xl leading-[1.1] sm:text-5xl">
            Peaceful Homestay in Shimla – Stay Near Theog & Kufri
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            If you are searching for a homestay in Shimla, here is the honest
            picture: Alpine Crest Homestay is not in the centre of Shimla. It is
            located in Village Kathot near Theog, about an hour's drive east of
            Shimla town on the NH-5 corridor. For travellers who want the mountain
            experience without the traffic and crowds of Shimla itself, it is a
            peaceful option — high up above the apple orchards, with deodar
            ridgeline views and easy access to Kufri and the upper Shimla hills.
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
            alt="Alpine Crest Homestay exterior near Shimla, set above the apple orchards of Kathot"
            width={1360}
            height={1020}
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="container-page grid gap-10 py-12 lg:grid-cols-2">
        <div className="prose-stay">
          <h2>A Peaceful Homestay Near Shimla</h2>
          <p>
            Shimla is beautiful, but the central town — the Ridge, Mall Road and
            the bus stand area — is busy year-round and packed during summer
            holidays and the winter snow season. Many travellers who look up
            "homestay in Shimla" are really after a quieter mountain stay within
            easy reach of the city, not a guesthouse on a crowded lane.
          </p>
          <p>
            Alpine Crest Homestay sits in Village Kathot near Theog, roughly an
            hour east of Shimla on NH-5. You leave the congestion of town behind
            and climb into pine and apple country, where the nights are genuinely
            quiet and the mornings open onto a wide valley view. From here,
            Kufri, Fagu and Narkanda are all on the same road, so you can use the
            homestay as a relaxed base for the upper Shimla hills and still pop
            into Shimla for a day if you wish.
          </p>

          <h2>Why Choose Our Homestay Near Shimla?</h2>
          <ul>
            <li>Family-run homestay, not a hotel — personal, local hospitality</li>
            <li>Mountain and valley views from private balconies and the terrace</li>
            <li>An hour from Shimla, 30 minutes from Kufri, on the NH-5 corridor</li>
            <li>Home-cooked Himachali meals (siddu, madra, rajma-chawal) on request</li>
            <li>Free private parking at the house and free Wi-Fi</li>
            <li>Power backup and round-the-clock hot water</li>
            <li>Taxi booking assistance for Shimla, Kufri and sightseeing</li>
          </ul>

          <h2>Mountain Views Near Shimla</h2>
          <p>
            The homestay faces east, so the balconies catch the first light over
            the Shali Tibba range. The deodar and pine ridgeline runs the full
            width of the view, and on a clear day you can see the snow line of the
            higher Himalaya beyond. Evenings bring the valley into shadow and the
            ridgeline into silhouette — a good time for tea on the terrace.
          </p>
          <p>
            For photographers, the hour after sunrise and the hour before sunset
            are the most rewarding. The light moves quickly across the valley, and
            the balcony gives you a steady, elevated vantage point without having
            to trek for it.
          </p>

          <h2>Places to Visit Near Shimla</h2>
          <p>
            From the homestay you can reach Kufri (about 30 minutes) for the
            Himalayan Nature Park and winter snow activities, Fagu for its
            potato fields and viewpoints, and Theog ridge for quiet walks. Shimla
            town itself is about an hour away if you want the Ridge, Christ Church
            and the Mall. Narkanda, further along NH-5, opens up to longer drives
            toward Hatu Peak and the apple belt of Kotgarh.
          </p>

          <h2>How to Reach Alpine Crest Homestay From Shimla</h2>
          <ul>
            <li>By road: take NH-5 east from Shimla toward Theog — about 38 km, roughly an hour's drive.</li>
            <li>At Theog, turn onto Majhar Road toward Village Kathot.</li>
            <li>By bus: state buses run frequently between Shimla and Theog; a short taxi ride from Theog reaches the house.</li>
            <li>From Jubbarhatti airport (Shimla): roughly 50 km by road; we can arrange a pickup.</li>
          </ul>
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
          <p className="eyebrow">Rooms at Alpine Crest Homestay</p>
          <h2 className="mt-3 text-3xl">Two room types, both with mountain air</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Mountain, label: "Valley views" },
              { icon: Sunrise, label: "Sunrise balconies" },
              { icon: UtensilsCrossed, label: "Home-cooked meals" },
              { icon: Car, label: "Free parking" },
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
          <p className="mt-6 text-sm text-muted-foreground">
            The Deluxe Room has a private balcony that opens onto the deodar
            ridgeline; the Standard Room has a comfortable double bed and an
            attached bathroom with hot water. Both share access to the lounge,
            terrace and garden.
          </p>
        </div>
      </section>

      <section className="container-page grid gap-10 py-16 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">Find us</p>
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
              Free private parking is available right at the house.
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
          <h2 className="text-3xl">Book Your Stay Near Shimla</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-sand/85">
            Send us a WhatsApp message with your travel dates. We will reply with
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
