import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MapPin, Mountain, Car, Wifi, UtensilsCrossed, Trees } from "lucide-react";
import { WA, breadcrumbSchema } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { CallLink } from "@/components/site/CallLink";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { exterior, deluxeBalcony, standardRoom } from "@/lib/images";

export const Route = createFileRoute("/mountain-view-homestay-theog")({
  head: () => ({
    meta: [
      { title: "Mountain View Homestay in Theog | Alpine Crest" },
      {
        name: "description",
        content:
          "Looking for a mountain view homestay in Theog? Alpine Crest Homestay in Kathot near Theog is a peaceful base with beautiful surroundings, sunrise views, private balconies and home-cooked food.",
      },
      { property: "og:title", content: "Mountain View Homestay in Theog | Alpine Crest" },
      {
        property: "og:description",
        content:
          "Peaceful homestay with mountain views. Private balconies, home-cooked food, sunrise over the Himalayas.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://alpinecresthomestay.com/mountain-view-homestay-theog" },
    ],
    links: [{ rel: "canonical", href: "https://alpinecresthomestay.com/mountain-view-homestay-theog" }],
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Mountain View Homestay in Theog", path: "/mountain-view-homestay-theog" },
      ]),
    ],
  }),
  component: HomestayAtNarkandaPage,
});

function HomestayAtNarkandaPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Mountain View Homestay in Theog" }]} />

      <section className="container-page grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Mountain View Homestay</p>
          <h1 className="mt-3 text-4xl leading-[1.1] sm:text-5xl">
            Mountain View Homestay in Theog
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            If you are searching for a mountain view homestay in Theog, Alpine
            Crest Homestay is a peaceful mountain retreat in Village Kathot near
            Theog. We offer uninterrupted views of the Shali Tibba range, breathtaking 
            sunrises directly from your room, and a peaceful atmosphere surrounded by 
            apple orchards and pine forests. Enjoy your morning tea on a private 
            balcony and experience true mountain tranquility.
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
            alt="Alpine Crest Homestay — best homestay at near Narkanda, Himachal Pradesh"
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
              Narkanda is a hill town about 60 km from Shimla on NH-5, sitting at
              nearly 2,700 metres. It is known for Hatu Peak — the highest point in
              the area with a temple and panoramic views — for skiing in winter, and
              for the apple belt of Kotgarh and Thanedar. The area is quieter than
              Shimla and Kufri, with dense pine and deodar forests and some of the
              best sunrise and sunset views in the region.
            </p>

            <h2>Alpine Crest Homestay — A Peaceful Base Near Narkanda</h2>
            <p>
              Alpine Crest Homestay is in Village Kathot near Theog, on the same
              NH-5 corridor that continues to Narkanda. The drive from the homestay
              to Narkanda is scenic and straightforward, making it easy to head up
              for a day of sightseeing and return to a quiet room in the evening.
              To be clear: the homestay is near Theog, not in Narkanda itself — but
              it is a convenient and peaceful base for travellers exploring the
              Narkanda area.
            </p>

            <h2>What to See in Narkanda</h2>
            <ul>
              <li>Hatu Peak — drive or trek to the summit for 360-degree Himalayan views</li>
              <li>Hatu Mata Temple — a small temple at the top of Hatu Peak</li>
              <li>Skiing — Narkanda has a ski slope operated by HP Tourism in winter</li>
              <li>Kotgarh and Thanedar — the heart of Himachal's apple country</li>
              <li>Stokes Farm — heritage apple orchards with a story going back to 1916</li>
            </ul>

            <h2>Rooms &amp; Comfort</h2>
            <p>
              After a day exploring Narkanda, come back to a comfortable room. The
              Standard Room has a double bed and attached bathroom with hot water.
              The Deluxe Room adds a private balcony with valley views and a seating
              area. Both share access to the lounge, terrace and garden.
            </p>

            <h2>Getting to Narkanda From Alpine Crest</h2>
            <p>
              The homestay is on NH-5 near Theog. Continue on the same highway east
              through Fagu and Matiana to reach Narkanda — roughly a 90-minute
              drive. We can arrange a taxi for the trip and for wider sightseeing.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5">
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img
                src={deluxeBalcony}
                alt="Deluxe room balcony at Alpine Crest Homestay, a base for visiting Narkanda"
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
              { name: "Narkanda", to: "/places-to-visit/narkanda" },
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
          <h2 className="text-3xl">Book Your Stay Near Narkanda</h2>
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
