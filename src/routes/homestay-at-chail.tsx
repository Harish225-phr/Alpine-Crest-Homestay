import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MapPin, Mountain, Car, Wifi, UtensilsCrossed, Trees } from "lucide-react";
import { WA, breadcrumbSchema } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { CallLink } from "@/components/site/CallLink";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { exterior, deluxeBalcony, standardRoom } from "@/lib/images";

export const Route = createFileRoute("/homestay-at-chail")({
  head: () => ({
    meta: [
      { title: "Best Homestay at Near Chail | Alpine Crest Homestay" },
      {
        name: "description",
        content:
          "Looking for the best homestay at near Chail? Alpine Crest Homestay in Kathot near Theog is a peaceful base with access to Chail's wildlife sanctuary, Sadhupul lake and the Chail Palace — mountain views, balconies and home-cooked food.",
      },
      { property: "og:title", content: "Best Homestay at Near Chail | Alpine Crest Homestay" },
      {
        property: "og:description",
        content:
          "Peaceful homestay near Chail. Mountain views, private balconies, home-cooked food, access to Chail wildlife sanctuary.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/homestay-at-chail" },
    ],
    links: [{ rel: "canonical", href: "/homestay-at-chail" }],
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Homestay at Chail", path: "/homestay-at-chail" },
      ]),
    ],
  }),
  component: HomestayAtChailPage,
});

function HomestayAtChailPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Homestay at Chail" }]} />

      <section className="container-page grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Homestay at Chail</p>
          <h1 className="mt-3 text-4xl leading-[1.1] sm:text-5xl">
            Best Homestay at Near Chail, Himachal Pradesh
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            If you are searching for the best homestay at near Chail, Alpine Crest
            Homestay is a peaceful mountain retreat in Village Kathot near Theog,
            with road access to Chail. Chail is known for its wildlife sanctuary,
            the heritage Chail Palace and the quiet surroundings at over 2,000
            metres — and our homestay is a comfortable base with mountain-view
            rooms, private balconies and home-cooked Himachali food.
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
            alt="Alpine Crest Homestay — best homestay at near Chail, Himachal Pradesh"
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
            <h2>Why Stay Near Chail?</h2>
            <p>
              Chail is a quiet hill station about 45 km from Shimla, built as a
              summer retreat by the Maharaja of Patiala in the late 19th century.
              It sits at over 2,000 metres, surrounded by thick pine and deodar
              forests, and is far less crowded than Shimla or Kufri. Chail is known
              for its wildlife sanctuary — home to leopards, deer and rare
              pheasants — for the heritage Chail Palace, and for having what was
              once the highest cricket ground in the world.
            </p>

            <h2>Alpine Crest Homestay — Your Base Near Chail</h2>
            <p>
              Alpine Crest Homestay is in Village Kathot near Theog, with road
              access to Chail via the Shimla-Kandaghat route. The drive is scenic,
              passing through pine forests and apple country. The homestay is a
              peaceful and comfortable base — you can spend a day exploring Chail
              and return to a quiet room with mountain views and a private balcony.
              To be clear: the homestay is near Theog, not in Chail itself — but it
              is a convenient base for travellers combining Chail with Kufri,
              Theog and the surrounding area.
            </p>

            <h2>What to See Around Chail</h2>
            <ul>
              <li>Chail Wildlife Sanctuary — walking trails through dense pine forest</li>
              <li>Chail Palace — a heritage building now run as a hotel by HP Tourism</li>
              <li>Cricket Ground — the historic ground at over 2,100 metres</li>
              <li>Sadhupul — a riverside spot between Kandaghat and Chail with food stalls</li>
              <li>Kali Ka Tibba — a hilltop temple with wide views of the surrounding ranges</li>
            </ul>

            <h2>Rooms &amp; Comfort</h2>
            <p>
              The Standard Room has a comfortable double bed and an attached
              bathroom with round-the-clock hot water. The Deluxe Room adds a
              private balcony that opens onto the deodar ridgeline, with a seating
              area for taking in the view. Both share access to the lounge, terrace
              and garden.
            </p>

            <h2>Getting to Chail From Alpine Crest</h2>
            <p>
              The homestay is near Theog on NH-5. Drive west toward Shimla, then
              take the road to Kandaghat and continue to Chail — roughly a 2-hour
              drive in total. We can arrange a taxi for the trip and for wider
              sightseeing.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5">
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img
                src={deluxeBalcony}
                alt="Deluxe room balcony at Alpine Crest Homestay, a base for visiting Chail"
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
                alt="Standard room at Alpine Crest Homestay near Chail"
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
            <SectionHeading eyebrow="Explore" title="Sights around Chail and Theog" />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Chail", to: "/places-to-visit/chail" },
              { name: "Theog", to: "/homestay-at-theog" },
              { name: "Kufri", to: "/homestay-at-kufri" },
              { name: "Shimla", to: "/homestay-at-shimla" },
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
          <h2 className="text-3xl">Book Your Stay Near Chail</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-sand/85">
            Send us a WhatsApp message with your travel dates and we will get back
            to you with availability, pricing and taxi help for visiting Chail.
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
