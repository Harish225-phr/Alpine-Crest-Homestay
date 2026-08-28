import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MapPin } from "lucide-react";
import { pageMeta, WA, breadcrumbSchema } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { exterior, deluxeBalcony } from "@/lib/images";

export const Route = createFileRoute("/homestay-near-shimla")({
  head: () => ({
    meta: [
      { title: "Peaceful Mountain Homestay Near Shimla | Alpine Crest" },
      {
        name: "description",
        content:
          "Alpine Crest Homestay is a peaceful mountain homestay near Shimla, in Village Kathot by Theog. A quiet base for exploring Shimla, Kufri and the surrounding Himachal hills.",
      },
      { property: "og:title", content: "Peaceful Mountain Homestay Near Shimla | Alpine Crest" },
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
  component: ShimlaPage,
});

function ShimlaPage() {
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
            Alpine Crest Homestay is located in Village Kathot near Theog, roughly
            an hour's drive from Shimla. It is a peaceful mountain base for
            travellers exploring Shimla and the surrounding hills — you get the
            quiet of the pine valleys with easy road access to Shimla, Kufri and
            the other nearby destinations.
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
            alt="Alpine Crest Homestay, a peaceful mountain stay near Shimla"
            width={1360}
            height={1020}
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="container-page grid gap-10 py-12 lg:grid-cols-2">
        <div className="prose-stay">
          <h2>A quiet base near Shimla</h2>
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

          <h2>Important: where the homestay actually is</h2>
          <p>
            To be clear and honest: Alpine Crest Homestay is not in Shimla city. It
            is in Village Kathot near Theog, Himachal Pradesh. We say "near
            Shimla" because the two are about an hour apart by road, and the
            homestay is a convenient base for travellers who want to explore
            Shimla without staying in the busy town centre. We do not claim to be
            located inside Shimla.
          </p>

          <h2>What is included</h2>
          <ul>
            <li>Mountain and valley views from the balcony and terrace</li>
            <li>Home-cooked Himachali meals on request</li>
            <li>Free private parking at the house</li>
            <li>Free Wi-Fi and power backup</li>
            <li>Round-the-clock hot water</li>
            <li>Taxi booking assistance for Shimla, Kufri and local sightseeing</li>
          </ul>
        </div>

        <div className="grid gap-5">
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
          <p className="eyebrow">Explore from here</p>
          <h2 className="mt-3 text-3xl">Day trips from Alpine Crest</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Shimla", to: "/places-to-visit/shimla" },
              { name: "Kufri", to: "/homestay-near-kufri" },
              { name: "Theog", to: "/stay-near-theog" },
              { name: "Fagu", to: "/places-to-visit/fagu" },
              { name: "Narkanda", to: "/places-to-visit/narkanda" },
              { name: "Chail", to: "/places-to-visit/chail" },
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
          <h2 className="text-3xl">Plan your stay near Shimla</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-sand/85">
            Send us a WhatsApp message with your travel dates and we will help with
            availability, pricing and taxi arrangements from Shimla.
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
