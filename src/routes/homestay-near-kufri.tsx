import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MapPin, Mountain, Car, Wifi, UtensilsCrossed } from "lucide-react";
import { WA, breadcrumbSchema } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { CallLink } from "@/components/site/CallLink";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { deluxeRoom, deluxeBalcony, standardRoom } from "@/lib/images";

export const Route = createFileRoute("/homestay-near-kufri")({
  head: () => ({
    meta: [
      { title: "Best Homestay Near Kufri | Mountain Stay Near Kufri" },
      {
        name: "description",
        content:
          "Looking for a peaceful homestay near Kufri? Alpine Crest Homestay is a short drive from Kufri in Kathot near Theog, offering mountain-view rooms, private balconies and home-cooked food — a peaceful alternative to staying in Kufri.",
      },
      { property: "og:title", content: "Best Homestay Near Kufri | Mountain Stay Near Kufri" },
      {
        property: "og:description",
        content:
          "Peaceful homestay a short drive from Kufri. Mountain views, private balconies, home-cooked food.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://alpinecresthomestay.com/homestay-near-kufri" },
    ],
    links: [{ rel: "canonical", href: "https://alpinecresthomestay.com/homestay-near-kufri" }],
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Homestay Near Kufri", path: "/homestay-near-kufri" },
      ]),
    ],
  }),
  component: HomestayAtKufriPage,
});

function HomestayAtKufriPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Homestay Near Kufri" }]} />

      <section className="container-page grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Homestay Near Kufri</p>
          <h1 className="mt-3 text-4xl leading-[1.1] sm:text-5xl">
            Peaceful Homestay Near Kufri
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            If you are looking for a peaceful homestay near Kufri, Alpine Crest
            Homestay offers a peaceful mountain stay in Village Kathot near Theog,
            with convenient access toward Kufri. It is a quiet alternative to
            staying in Kufri itself, which gets crowded in peak season and on
            winter weekends — you get the mountain surroundings and easy access to
            Kufri's sights without the noise and the crowds.
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
            src={deluxeBalcony}
            alt="Mountain view from Alpine Crest Homestay — best homestay at near Kufri"
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
            <h2>Why Stay Near Kufri?</h2>
            <p>
              Kufri is a popular hill station about 16 km from Shimla, known for its
              winter snow and the Himalayan Nature Park. In peak season and on
              winter weekends, it gets very busy — accommodation fills up and the
              roads slow down. Staying a short drive away, near Theog, lets you
              enjoy Kufri's sights during the day and return to a quiet setting in
              the evening.
            </p>

            <h2>Alpine Crest Homestay Near Kufri</h2>
            <p>
              Our homestay is located in Village Kathot near Theog, on the same
              NH-5 corridor as Kufri. The drive between the two is straightforward,
              making it easy to visit the Nature Park, the viewpoints at Mahasu
              Peak and the snow activities in winter, then come back to a peaceful
              balcony for the evening.
            </p>
            <p>
              To be clear and honest: Alpine Crest Homestay is not in Kufri. It is
              in Village Kathot near Theog, Himachal Pradesh. We say "near Kufri"
              because the two are a short drive apart on the same road, and many
              travellers visiting Kufri prefer to stay in the quieter Theog area.
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

            <h2>Things to Do in Kufri</h2>
            <ul>
              <li>Himalayan Nature Park — see snow leopards and native wildlife</li>
              <li>Mahasu Peak — the highest point around, with panoramic views</li>
              <li>Winter snow activities — skiing, tobogganing and snow play</li>
              <li>Kufri Fun World — amusement park with go-karting and rides</li>
              <li>Fagu — a quiet viewpoint village a short drive beyond Kufri</li>
            </ul>

            <h2>How to Reach Kufri From Alpine Crest</h2>
            <p>
              The homestay is in Kathot near Theog, a short and scenic drive from
              Kufri on NH-5. We can help arrange a taxi for the Kufri run and for
              wider sightseeing. Free private parking is available right at the
              house if you are driving yourself.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5">
          <Reveal delay={0.1}>
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
          </Reveal>
          <Reveal delay={0.2}>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img
                src={standardRoom}
                alt="Standard room at Alpine Crest Homestay near Kufri"
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
            <SectionHeading eyebrow="Explore" title="Sights around Kufri and Theog" />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Kufri", to: "/places-to-visit/kufri" },
              { name: "Theog", to: "/homestay-in-theog" },
              { name: "Fagu", to: "/homestay-in-kathot" },
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
          <h2 className="text-3xl">Book Your Stay Near Kufri</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-sand/85">
            Send us a WhatsApp message with your travel dates and we will get back
            to you with availability, pricing and taxi help for visiting Kufri.
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
