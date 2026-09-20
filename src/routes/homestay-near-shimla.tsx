import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MapPin, Mountain, Car, Wifi, UtensilsCrossed, Sunrise } from "lucide-react";
import { WA, breadcrumbSchema } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { CallLink } from "@/components/site/CallLink";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { exterior, deluxeBalcony, standardRoom } from "@/lib/images";

export const Route = createFileRoute("/homestay-near-shimla")({
  head: () => ({
    meta: [
      { title: "Mountain Homestay Near Shimla | Alpine Crest" },
      {
        name: "description",
        content:
          "Looking for a mountain homestay near Shimla? Alpine Crest Homestay is a peaceful mountain retreat in Kathot near Theog, about an hour from Shimla. Mountain views, private balconies, home-cooked food and easy access to Shimla.",
      },
      { property: "og:title", content: "Mountain Homestay Near Shimla | Alpine Crest" },
      {
        property: "og:description",
        content:
          "Peaceful mountain homestay near Shimla. Mountain views, private balconies, easy access to Shimla and Kufri.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/homestay-near-shimla" },
    ],
    links: [{ rel: "canonical", href: "/homestay-near-shimla" }],
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Homestay Near Shimla", path: "/homestay-near-shimla" },
      ]),
    ],
  }),
  component: HomestayAtShimlaPage,
});

function HomestayAtShimlaPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Homestay Near Shimla" }]} />

      <section className="container-page grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Homestay Near Shimla</p>
          <h1 className="mt-3 text-4xl leading-[1.1] sm:text-5xl">
            Peaceful Mountain Homestay Near Shimla
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            If you are searching for a peaceful mountain homestay near Shimla, Alpine Crest
            Homestay is a peaceful mountain retreat in Village Kathot near Theog,
            roughly an hour's drive from Shimla. It is a quiet base for travellers
            exploring Shimla and the surrounding hills — you get the peace of the
            pine valleys with easy road access to Shimla, Kufri and other nearby
            destinations.
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
            alt="Alpine Crest Homestay — best homestay at near Shimla, Himachal Pradesh"
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
            <h2>A Peaceful Homestay Near Shimla</h2>
            <p>
              Shimla is the capital of Himachal Pradesh and one of India's most
              popular hill stations, known for the Mall Road, the Ridge and the
              heritage toy train. It is the natural gateway to the surrounding hill
              destinations. But Shimla itself gets very busy, especially in the peak
              summer months, and staying in the town centre can feel crowded.
            </p>
            <p>
              Alpine Crest Homestay offers a different experience. It sits in Village
              Kathot near Theog, about an hour's drive from Shimla on NH-5. From
              here, you can spend a day exploring Shimla — the Mall Road, the
              Viceregal Lodge, Christ Church and Jakhu Temple — and then drive back
              to a quiet room with mountain air and a slow evening on the balcony.
            </p>

            <h2>Why Choose Our Homestay Near Shimla?</h2>
            <ul>
              <li>Peaceful, uncrowded setting away from Shimla's busy town centre</li>
              <li>Mountain and valley views from the balcony and terrace</li>
              <li>Home-cooked Himachali meals on request</li>
              <li>Free private parking at the house</li>
              <li>Free Wi-Fi and power backup</li>
              <li>Round-the-clock hot water</li>
              <li>Taxi booking assistance for Shimla, Kufri and local sightseeing</li>
            </ul>

            <h2>Mountain Views Near Shimla</h2>
            <p>
              The property faces east over a wide valley of pine and deodar, with
              the Shali Tibba range rising beyond. The balconies catch sunrise light
              over the ridgeline, and the terrace stays bright through the afternoon
              as the valley slowly fills with shadow. A short walk down through the
              orchards reaches the edge of the pine forest, where the air is cooler
              and the silence is total.
            </p>

            <h2>How to Reach Alpine Crest From Shimla</h2>
            <p>
              The homestay is about an hour's drive from Shimla on NH-5 heading east
              toward Theog. State buses run regularly between Shimla and Theog, and
              a short taxi ride from Theog reaches the house. We can also arrange a
              taxi pickup from Shimla, Kufri or Jubbarhatti airport.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5">
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img
                src={deluxeBalcony}
                alt="Balcony view from Alpine Crest Homestay, a peaceful stay near Shimla"
                width={1360}
                height={1020}
                loading="lazy"
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl">Deluxe Room with balcony</h3>
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
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/60 py-16">
        <div className="container-page">
          <Reveal>
            <SectionHeading eyebrow="Explore from here" title="Day trips from Alpine Crest" />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Shimla", to: "/places-to-visit/shimla" },
              { name: "Kufri", to: "/homestay-near-kufri" },
              { name: "Theog", to: "/homestay-near-theog" },
              { name: "Fagu", to: "/homestay-in-kathot" },
              { name: "Narkanda", to: "/mountain-view-homestay-theog" },
              { name: "Chail", to: "/homestay-at-chail" },
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
          <h2 className="text-3xl">Book Your Stay Near Shimla</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-sand/85">
            Send us a WhatsApp message with your travel dates and we will help with
            availability, pricing and taxi arrangements from Shimla.
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
