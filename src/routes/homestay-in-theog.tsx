import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Mountain, Trees, UtensilsCrossed, Car, Wifi, Sunrise } from "lucide-react";
import { WA, breadcrumbSchema } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { CallLink } from "@/components/site/CallLink";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { MapEmbed } from "@/components/site/MapEmbed";
import { exterior, standardRoom, deluxeBalcony } from "@/lib/images";

export const Route = createFileRoute("/homestay-in-theog")({
  head: () => ({
    meta: [
      { title: "Homestay in Theog, Himachal Pradesh | Alpine Crest Homestay" },
      {
        name: "description",
        content:
          "Looking for a homestay in Theog? Alpine Crest Homestay in Kathot near Theog offers mountain-view rooms, private balconies, home-cooked Himachali food and warm family hospitality.",
      },
      { property: "og:title", content: "Homestay in Theog, Himachal Pradesh | Alpine Crest Homestay" },
      {
        property: "og:description",
        content:
          "Peaceful homestay in Kathot near Theog, Himachal Pradesh. Mountain views, private balconies, home-cooked food.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/homestay-in-theog" },
    ],
    links: [{ rel: "canonical", href: "/homestay-in-theog" }],
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Homestay in Theog", path: "/homestay-in-theog" },
      ]),
    ],
  }),
  component: HomestayAtTheogPage,
});

function HomestayAtTheogPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Homestay in Theog" }]} />

      <section className="container-page grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Homestay in Theog</p>
          <h1 className="mt-3 text-4xl leading-[1.1] sm:text-5xl">
            Homestay in Theog with Mountain Views
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            If you are searching for a peaceful homestay in Theog, Alpine Crest
            Homestay is a family-run mountain retreat in Village Kathot, just off
            Majhar Road near Theog. With panoramic valley views, private balconies,
            home-cooked Himachali meals and warm local hospitality, it is a
            peaceful base for exploring Theog, Kufri and the surrounding hills.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <WhatsAppLink message={WA.location}>Check Availability on WhatsApp</WhatsAppLink>
            <CallLink variant="outline">Call Now</CallLink>
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
            alt="Alpine Crest Homestay — best homestay at near Theog, Himachal Pradesh"
            width={1360}
            height={1020}
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="container-page grid gap-10 py-12 lg:grid-cols-2">
        <Reveal>
          <div className="prose-stay">
            <h2>A Peaceful Homestay in Kathot Near Theog</h2>
            <p>
              Theog is a small hill town on NH-5, about an hour east of Shimla. Most
              travellers pass through it on the way to Kufri or Narkanda, but the
              ridge around Theog — and villages like Kathot just off the highway —
              holds some of the quietest mountain views in the upper Shimla hills.
              Alpine Crest Homestay sits above the apple orchards of Kathot, where
              the road leaves the highway traffic behind and the only sounds are
              wind through the deodars and distant temple bells.
            </p>
            <p>
              As a homestay at near Theog, we keep things simple and personal. The
              house is run by the family that lives here, so you get genuine local
              hospitality — directions to the best sunrise spot, a cup of chai when
              you arrive, and a kitchen that cooks what is in season.
            </p>

            <h2>Why Choose Alpine Crest Homestay Near Theog?</h2>
            <ul>
              <li>Family-hosted homestay with warm, local hospitality</li>
              <li>Private balconies and a terrace with wide valley views</li>
              <li>On the NH-5 corridor — easy access to Kufri, Fagu and Narkanda</li>
              <li>Home-cooked Himachali meals, including siddu and madra on request</li>
              <li>Free private parking at the house and free Wi-Fi</li>
              <li>Power backup and 24×7 hot water</li>
              <li>Taxi booking assistance for local sightseeing</li>
            </ul>

            <h2>Rooms &amp; Accommodation</h2>
            <p>
              The homestay has two room types. The Standard Room has a comfortable
              double bed and an attached bathroom with round-the-clock hot water —
              practical and warm for couples and solo travellers. The Deluxe Room
              adds a private balcony that opens straight onto the deodar ridgeline,
              with a seating area to take in the view. Both rooms are clean, simple
              and wood-warmed, and share access to the lounge, terrace and garden.
            </p>

            <h2>Mountain Views and Pine Valley Surroundings</h2>
            <p>
              The property looks east over a wide valley of pine and deodar, with
              the Shali Tibba range rising beyond. Because the balconies face east,
              mornings begin with sunrise light spilling over the ridgeline, and
              the afternoons stay bright while the valley slowly fills with shadow.
              A short walk down through the orchards takes you to the edge of the
              pine forest, where the air is noticeably cooler and the silence is
              total.
            </p>

            <h2>Home-Cooked Himachali Food</h2>
            <p>
              Meals are cooked in the family kitchen and served in the lounge or on
              the terrace. Breakfast is parathas, eggs and chai. Lunch and dinner
              are simple home food — rajma, dal, seasonal sabzi, rice and rotis —
              with Himachali specialties like siddu (steamed bread) and madra
              (chickpeas in yoghurt gravy) available on request. Food is vegetarian
              by default, and we happily cook around allergies and preferences when
              you tell us in advance.
            </p>

            <h2>Places to Visit Near Theog</h2>
            <p>
              Theog is well placed as a base for the upper Shimla hills.{" "}
              <Link to="/homestay-near-kufri" className="text-moss underline underline-offset-4">Kufri</Link>{" "}
              is about 30 minutes away for the Himalayan Nature Park and winter snow;
              Fagu is a short drive for quiet viewpoints;{" "}
              <Link to="/mountain-view-homestay-theog" className="text-moss underline underline-offset-4">Narkanda</Link>,
              further along NH-5, offers Hatu Peak and the apple belt of Kotgarh;
              and{" "}
              <Link to="/homestay-near-shimla" className="text-moss underline underline-offset-4">Shimla</Link>{" "}
              town is an hour west if you want a day trip to the Ridge and Mall Road.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5">
          <Reveal delay={0.1}>
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
          </Reveal>
          <Reveal delay={0.2}>
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
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/60 py-16">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="What is included" title="Everything you actually need" />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Mountain, label: "Valley views" },
              { icon: Trees, label: "Orchard & garden" },
              { icon: UtensilsCrossed, label: "Home-cooked meals" },
              { icon: Car, label: "Free parking" },
              { icon: Wifi, label: "Free Wi-Fi" },
              { icon: Sunrise, label: "Sunrise balconies" },
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
          <Reveal>
            <SectionHeading eyebrow="How to reach" title="Getting to Alpine Crest in Theog" />
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
            <div className="mt-6 flex flex-wrap gap-3">
              <WhatsAppLink message={WA.taxi}>Ask about taxi help</WhatsAppLink>
              <CallLink variant="outline">Call Now</CallLink>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <MapEmbed className="min-h-[400px]" />
        </Reveal>
      </section>

      <section className="container-page py-16">
        <div className="rounded-2xl bg-primary px-8 py-12 text-center text-primary-foreground">
          <h2 className="text-3xl">Book Your Homestay Near Theog</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-sand/85">
            Send us a WhatsApp message with your travel dates and we will get back
            to you with availability, pricing and taxi help for reaching Theog.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <WhatsAppLink message={WA.location} variant="primary">
              Check Availability
            </WhatsAppLink>
            <CallLink variant="outline" className="border-sand/50 text-sand hover:bg-sand/15">
              Call Now
            </CallLink>
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
