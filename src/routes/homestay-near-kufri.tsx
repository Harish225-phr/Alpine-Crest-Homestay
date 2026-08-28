import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MapPin } from "lucide-react";
import { pageMeta, WA, breadcrumbSchema } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { deluxeRoom, deluxeBalcony } from "@/lib/images";

export const Route = createFileRoute("/homestay-near-kufri")({
  head: () => ({
    meta: [
      { title: "Homestay Near Kufri, Himachal Pradesh | Alpine Crest" },
      {
        name: "description",
        content:
          "A peaceful homestay a short drive from Kufri, Himachal Pradesh. Alpine Crest Homestay near Theog offers mountain views, private balconies and home-cooked food — a quiet alternative to staying in Kufri.",
      },
      { property: "og:title", content: "Homestay Near Kufri, Himachal Pradesh | Alpine Crest" },
      {
        property: "og:description",
        content:
          "Peaceful homestay a short drive from Kufri. Mountain views, private balconies, home-cooked food.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/homestay-near-kufri" },
    ],
    links: [{ rel: "canonical", href: "/homestay-near-kufri" }],
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Homestay Near Kufri", path: "/homestay-near-kufri" },
      ]),
    ],
  }),
  component: KufriPage,
});

function KufriPage() {
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
            Alpine Crest Homestay is located in Village Kathot near Theog, a short
            drive from Kufri. It is a peaceful alternative to staying in Kufri
            itself, which gets crowded in peak season and on winter weekends. You
            get the mountain surroundings and easy access to Kufri's sights,
            without the noise and the crowds.
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
            src={deluxeBalcony}
            alt="Mountain view from the balcony at Alpine Crest Homestay, near Kufri"
            width={1360}
            height={1020}
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="container-page grid gap-10 py-12 lg:grid-cols-2">
        <div className="prose-stay">
          <h2>A quiet base near Kufri</h2>
          <p>
            Kufri is a popular hill station about 16 km from Shimla, known for its
            winter snow and the Himalayan Nature Park. In peak season and on
            winter weekends, it gets very busy — accommodation fills up and the
            roads slow down. Staying a short drive away, near Theog, lets you enjoy
            Kufri's sights during the day and return to a quiet setting in the
            evening.
          </p>
          <p>
            Alpine Crest Homestay is in Village Kathot near Theog, on the same
            NH-5 corridor as Kufri. The drive between the two is straightforward,
            making it easy to visit the Nature Park, the viewpoints at Mahasu Peak
            and the snow activities in winter, then come back to a peaceful
            balcony for the evening.
          </p>

          <h2>Important: where the homestay actually is</h2>
          <p>
            To be clear and honest: Alpine Crest Homestay is not in Kufri. It is in
            Village Kathot near Theog, Himachal Pradesh. We say "near Kufri"
            because the two are a short drive apart on the same road, and many
            travellers visiting Kufri prefer to stay in the quieter Theog area. We
            do not claim to be located in Kufri itself.
          </p>

          <h2>What is included</h2>
          <ul>
            <li>Mountain and valley views from the balcony and terrace</li>
            <li>Home-cooked Himachali meals on request</li>
            <li>Free private parking at the house</li>
            <li>Free Wi-Fi</li>
            <li>Power backup and round-the-clock hot water</li>
            <li>Taxi booking assistance for Kufri and local sightseeing</li>
          </ul>
        </div>

        <div className="grid gap-5">
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
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h3 className="text-xl">Standard Room</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Comfortable double bed, attached bathroom, hot water.
            </p>
            <WhatsAppLink message={WA.standard} variant="primary" className="mt-4 px-5 py-2.5">
              Enquire
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-16">
        <div className="container-page">
          <p className="eyebrow">Explore</p>
          <h2 className="mt-3 text-3xl">Sights around Kufri and Theog</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Kufri", to: "/places-to-visit/kufri" },
              { name: "Theog", to: "/stay-near-theog" },
              { name: "Fagu", to: "/places-to-visit/fagu" },
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
          <h2 className="text-3xl">Plan your stay near Kufri</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-sand/85">
            Send us a WhatsApp message with your travel dates and we will get back
            to you with availability, pricing and taxi help for visiting Kufri.
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
