import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MapPin, Mountain, Car, Wifi, UtensilsCrossed, Trees } from "lucide-react";
import { WA, breadcrumbSchema } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { CallLink } from "@/components/site/CallLink";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { exterior, deluxeBalcony, standardRoom } from "@/lib/images";

export const Route = createFileRoute("/homestay-in-kathot")({
  head: () => ({
    meta: [
      { title: "Homestay in Kathot Near Theog | Alpine Crest" },
      {
        name: "description",
        content:
          "Looking for a homestay in Kathot near Theog? Alpine Crest Homestay in Kathot near Theog is a short drive from Fagu, offering mountain-view rooms, private balconies, home-cooked food and peaceful surroundings.",
      },
      { property: "og:title", content: "Homestay in Kathot Near Theog | Alpine Crest" },
      {
        property: "og:description",
        content:
          "Peaceful homestay near Fagu. Mountain views, private balconies, home-cooked food, quiet surroundings.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/homestay-in-kathot" },
    ],
    links: [{ rel: "canonical", href: "/homestay-in-kathot" }],
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Homestay in Kathot", path: "/homestay-in-kathot" },
      ]),
    ],
  }),
  component: HomestayAtFaguPage,
});

function HomestayAtFaguPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Homestay in Kathot" }]} />

      <section className="container-page grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Homestay in Kathot</p>
          <h1 className="mt-3 text-4xl leading-[1.1] sm:text-5xl">
            Homestay in Kathot, Near Theog
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            If you are searching for a homestay in Kathot near Theog, Alpine Crest
            Homestay is a peaceful mountain retreat in Village Kathot near Theog,
            a short drive from Fagu on NH-5. Fagu is known for its quiet
            viewpoints, apple orchards and pine-covered ridges — and our homestay
            is a comfortable base with mountain-view rooms, private balconies and
            home-cooked Himachali food.
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
            alt="Alpine Crest Homestay — best homestay at near Fagu, Himachal Pradesh"
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
            <h2>Why Stay Near Fagu?</h2>
            <p>
              Fagu is a small Himalayan village on NH-5, about 20 km beyond Kufri
              on the way to Narkanda. It sits at around 2,500 metres, surrounded by
              apple orchards, pine forests and open meadows with wide views of the
              surrounding ranges. Unlike Kufri and Shimla, Fagu sees far fewer
              tourists — it is the kind of place where the road goes quiet and the
              mountains feel close.
            </p>
            <p>
              Travellers come to Fagu for the viewpoints, for the peace, and for the
              drive itself — the stretch between Kufri and Fagu is one of the most
              scenic in the upper Shimla hills. Staying at Alpine Crest Homestay
              near Theog gives you easy access to Fagu while keeping you close to
              Kufri, Theog and Shimla as well.
            </p>

            <h2>Alpine Crest Homestay — Your Base Near Fagu</h2>
            <p>
              The homestay is in Village Kathot near Theog, on the same NH-5
              corridor that continues to Fagu. The drive is short and scenic, making
              it easy to visit Fagu's viewpoints for the day and return to a
              comfortable room with a private balcony in the evening. To be clear:
              the homestay is near Theog, not in Fagu itself — but it is a
              convenient and peaceful base for exploring the Fagu area.
            </p>

            <h2>What to See Around Fagu</h2>
            <ul>
              <li>Viewpoints — wide panoramas of the Himalayan ranges from open meadows</li>
              <li>Apple orchards — walk through the orchards, especially beautiful in bloom season</li>
              <li>Pine forest trails — quiet walks through deodar and pine</li>
              <li>Photography — sunrise and sunset light over the ridgeline</li>
              <li>The drive from Kufri to Fagu — one of the most scenic stretches around Shimla</li>
            </ul>

            <h2>Rooms &amp; Comfort</h2>
            <p>
              The Standard Room has a comfortable double bed and an attached
              bathroom with round-the-clock hot water. The Deluxe Room adds a
              private balcony that opens onto the deodar ridgeline, with a seating
              area for taking in the view. Both share access to the lounge, terrace
              and garden.
            </p>

            <h2>Getting to Fagu From Alpine Crest</h2>
            <p>
              The homestay is on NH-5 near Theog. Continue on the same highway
              through Kufri to reach Fagu — roughly a 45-minute drive. We can
              arrange a taxi for the trip and for wider sightseeing.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5">
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img
                src={deluxeBalcony}
                alt="Deluxe room balcony at Alpine Crest Homestay, a base for visiting Fagu"
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
                alt="Standard room at Alpine Crest Homestay near Fagu"
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
            <SectionHeading eyebrow="Explore" title="Sights around Fagu and Theog" />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Fagu", to: "/places-to-visit/fagu" },
              { name: "Theog", to: "/homestay-near-theog" },
              { name: "Kufri", to: "/homestay-near-kufri" },
              { name: "Narkanda", to: "/mountain-view-homestay-theog" },
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
          <h2 className="text-3xl">Book Your Stay Near Fagu</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-sand/85">
            Send us a WhatsApp message with your travel dates and we will get back
            to you with availability, pricing and taxi help for visiting Fagu.
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
