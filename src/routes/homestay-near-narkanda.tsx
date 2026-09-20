import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MapPin, Mountain, Car, Wifi, UtensilsCrossed } from "lucide-react";
import { WA, breadcrumbSchema } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { CallLink } from "@/components/site/CallLink";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { deluxeRoom, deluxeBalcony, standardRoom } from "@/lib/images";

export const Route = createFileRoute("/homestay-near-narkanda")({
  head: () => ({
    meta: [
      { title: "Peaceful Homestay in Narkanda | Alpine Crest Homestay" },
      {
        name: "description",
        content:
          "Looking for a peaceful homestay near Narkanda? Alpine Crest Homestay offers mountain-view rooms, private balconies and home-cooked food — a perfect base for exploring Narkanda.",
      },
      { property: "og:title", content: "Peaceful Homestay in Narkanda | Alpine Crest Homestay" },
      {
        property: "og:description",
        content:
          "Peaceful homestay base for exploring Narkanda. Mountain views, private balconies, home-cooked food.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://alpinecresthomestay.com/homestay-near-narkanda" },
    ],
    links: [{ rel: "canonical", href: "https://alpinecresthomestay.com/homestay-near-narkanda" }],
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Homestay In Narkanda", path: "/homestay-near-narkanda" },
      ]),
    ],
  }),
  component: HomestayInNarkandaPage,
});

function HomestayInNarkandaPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Homestay In Narkanda" }]} />

      <section className="container-page grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Homestay in Narkanda</p>
          <h1 className="mt-3 text-4xl leading-[1.1] sm:text-5xl">
            Peaceful Homestay Base for Narkanda
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            If you are looking for a peaceful homestay near Narkanda, Alpine Crest
            Homestay offers a peaceful mountain stay in Village Kathot near Theog.
            It's a convenient lower-altitude base before heading up to Narkanda
            for skiing in winter, visiting Hatu Peak, or exploring the apple orchards
            of Kotgarh. Enjoy the mountain surroundings and easy access to
            Narkanda's sights without staying in the colder, crowded town.
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
            src={standardRoom}
            alt="Mountain view from Alpine Crest Homestay — best homestay near Narkanda"
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
            <h2>Why Stay Near Narkanda?</h2>
            <p>
              Narkanda is a beautiful hill town about 60 km from Shimla, known for
              its skiing slopes in winter and Hatu Peak. Due to its higher altitude,
              it gets quite cold and accommodation can fill up quickly. Staying near
              Theog lets you enjoy Narkanda's sights as a day trip while resting in
              a slightly warmer, quiet setting in the evening.
            </p>

            <h2>Alpine Crest Homestay Near Narkanda</h2>
            <p>
              Our homestay is located in Village Kathot near Theog, on NH-5, the same
              route that goes to Narkanda. The scenic drive makes it easy to visit
              Narkanda, the Hatu Peak, and the apple belt of Kotgarh during the day,
              then come back to a peaceful balcony for the evening.
            </p>
            <p>
              To be clear and honest: Alpine Crest Homestay is not in Narkanda town itself.
              It is in Village Kathot near Theog. We say "near Narkanda" because it
              serves as an excellent, comfortable base for travellers exploring the region.
            </p>

            <h2>Rooms With Mountain Views</h2>
            <p>
              The homestay offers two room types. The Standard Room has a
              comfortable double bed and an attached bathroom with round-the-clock
              hot water. The Deluxe Room adds a private balcony that opens onto the
              deodar ridgeline, with a seating area for taking in the view. Both are
              clean, simple and wood-warmed, with access to the shared lounge,
              terrace and garden.
            </p>

            <h2>Things to Do in Narkanda</h2>
            <ul>
              <li>Hatu Peak — trek or drive up for panoramic Himalayan views</li>
              <li>Winter skiing — hit the slopes in January and February</li>
              <li>Apple Orchards — visit Kotgarh and Thanedhar, the apple bowl of India</li>
              <li>Tani Jubbar Lake — a peaceful spot surrounded by pine trees</li>
            </ul>

            <h2>How to Reach Narkanda From Alpine Crest</h2>
            <p>
              The homestay is a scenic drive from Narkanda on NH-5. We can help arrange
              a taxi for the trip to Narkanda and for wider sightseeing. Free private
              parking is available right at the house if you are driving yourself.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5">
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img
                src={deluxeRoom}
                alt="Deluxe room at Alpine Crest Homestay, a short drive from Narkanda"
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
          <Reveal delay={0.2}>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img
                src={standardRoom}
                alt="Standard room at Alpine Crest Homestay near Narkanda"
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
        </div>
      </section>

      <section className="bg-secondary/60 py-16">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Explore" title="Sights around Narkanda and Theog" />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Kufri", to: "/homestay-near-kufri" },
              { name: "Theog", to: "/homestay-near-theog" },
              { name: "Narkanda", to: "/homestay-near-narkanda" },
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

      <section className="container-page py-16">
        <div className="rounded-2xl bg-primary px-8 py-12 text-center text-primary-foreground">
          <h2 className="text-3xl">Book Your Stay For Narkanda</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-sand/85">
            Send us a WhatsApp message with your travel dates and we will get back
            to you with availability, pricing and taxi help for visiting Narkanda.
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
