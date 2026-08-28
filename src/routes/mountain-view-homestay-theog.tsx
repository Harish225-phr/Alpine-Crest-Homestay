import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MapPin, Mountain, Sunrise, Trees, Camera } from "lucide-react";
import { WA, breadcrumbSchema } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { MapEmbed } from "@/components/site/MapEmbed";
import { exterior, deluxeBalcony, standardRoom } from "@/lib/images";

export const Route = createFileRoute("/mountain-view-homestay-theog")({
  head: () => ({
    meta: [
      { title: "Mountain View Homestay in Theog, Himachal Pradesh | Alpine Crest" },
      {
        name: "description",
        content:
          "A mountain-view homestay in Theog, Himachal Pradesh. Alpine Crest Homestay in Kathot near Theog offers panoramic valley views, private balconies, pine surroundings and sunrise over the Shali Tibba range.",
      },
      { property: "og:title", content: "Mountain View Homestay in Theog, Himachal Pradesh | Alpine Crest" },
      {
        property: "og:description",
        content:
          "Mountain-view homestay in Theog — panoramic valley views, private balconies, pine valleys and sunrise light.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/mountain-view-homestay-theog" },
    ],
    links: [{ rel: "canonical", href: "/mountain-view-homestay-theog" }],
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Mountain View Homestay in Theog", path: "/mountain-view-homestay-theog" },
      ]),
    ],
  }),
  component: MountainViewHomestayTheogPage,
});

function MountainViewHomestayTheogPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Mountain View Homestay in Theog" }]} />

      <section className="container-page grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Mountain View Homestay in Theog</p>
          <h1 className="mt-3 text-4xl leading-[1.1] sm:text-5xl">
            Mountain View Homestay in Theog, Himachal Pradesh
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            The ridge around Theog holds some of the quietest mountain views in
            the upper Shimla hills, and Alpine Crest Homestay is set right in
            them. Located in Village Kathot just off Majhar Road, the house faces
            east over a wide valley of pine and deodar, with the Shali Tibba
            range rising beyond. If you are looking for a mountain-view homestay
            in Theog, the views here are the whole point — wide, unobstructed,
            and quiet enough to hear the wind through the trees.
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
            alt="Panoramic mountain view from the balcony of Alpine Crest Homestay in Theog"
            width={1360}
            height={1020}
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="container-page grid gap-10 py-12 lg:grid-cols-2">
        <div className="prose-stay">
          <h2>The mountain environment around Theog</h2>
          <p>
            Theog sits on NH-5 about an hour east of Shimla, and most travellers
            only pass through on the way to Kufri or Narkanda. But the villages
            just off the highway — Kathot among them — sit on a ridge that looks
            out over an unbroken valley of pine and deodar. Alpine Crest Homestay
            is built on that ridge, above the apple orchards, so the view from
            the balconies and terrace runs the full width of the valley to the
            Shali Tibba range and, on a clear day, the snow line beyond.
          </p>
          <p>
            Because the house faces east, sunrise is the headline: the first
            light spills over the ridgeline and the valley fills with layered
            colour, from blue-grey pine slopes to lit deodar. Afternoons stay
            bright while the valley slowly fills with shadow, and evenings bring
            the ridgeline into silhouette against a warm sky.
          </p>

          <h2>Accommodation with the view built in</h2>
          <p>
            The homestay has two room types. The Deluxe Room has a private
            balcony that opens directly onto the deodar ridgeline, with a seating
            area so you can sit with the panorama rather than just glance at it.
            The Standard Room has a comfortable double bed, an attached bathroom
            with round-the-clock hot water, and a valley-facing window with full
            access to the shared terrace — where the view is widest of all. Both
            rooms share the lounge, terrace and garden.
          </p>

          <h2>Pine valleys and quiet</h2>
          <p>
            A short walk down through the orchards takes you to the edge of the
            pine forest, where the air is cooler and the silence is total — no
            highway noise, no town hum. It is the kind of quiet that is hard to
            find on the more touristy stretches near Shimla and Kufri, and it is
            what makes staying in Theog different from staying in town.
          </p>

          <h2>For photographers and slow mornings</h2>
          <p>
            The hour after sunrise and the hour before sunset are the most
            rewarding here. The balcony gives a steady, elevated vantage point
            without a trek, and the way the light rakes across the pine slopes
            changes minute to minute. After a monsoon shower the ridgeline often
            sits above a sea of cloud. For those who simply want a slow morning,
            the same view makes a good companion to a cup of chai.
          </p>
        </div>

        <div className="grid gap-5">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <img
              src={exterior}
              alt="Alpine Crest Homestay exterior above the pine valley in Theog"
              width={1360}
              height={1020}
              loading="lazy"
              className="h-56 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl">The house and the valley</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Set above the apple orchards of Kathot, facing the deodar ridgeline.
              </p>
              <WhatsAppLink message={WA.general} variant="primary" className="mt-4 px-5 py-2.5">
                Enquire
              </WhatsAppLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <img
              src={deluxeBalcony}
              alt="Deluxe room balcony with panoramic mountain view in Theog"
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
              alt="Standard room with valley-facing window at Alpine Crest Homestay in Theog"
              width={1360}
              height={1020}
              loading="lazy"
              className="h-56 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl">Standard Room</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Double bed, attached bathroom, terrace access for the view.
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
          <p className="eyebrow">The view, at a glance</p>
          <h2 className="mt-3 text-3xl">Why the views here stand out</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Mountain, label: "Panoramic valley views" },
              { icon: Sunrise, label: "East-facing sunrise" },
              { icon: Trees, label: "Pine & deodar valley" },
              { icon: Camera, label: "Photographer-friendly" },
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
          <p className="eyebrow">How to reach</p>
          <h2 className="mt-3 text-3xl">Getting to the view in Theog</h2>
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
          <WhatsAppLink message={WA.taxi} className="mt-6">
            Ask about taxi help
          </WhatsAppLink>
        </div>
        <MapEmbed className="min-h-[400px]" />
      </section>

      <section className="container-page py-16">
        <div className="rounded-2xl bg-primary px-8 py-12 text-center text-primary-foreground">
          <h2 className="text-3xl">Wake up to the ridgeline</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-sand/85">
            Send us a WhatsApp message with your dates. We will reply with
            availability, pricing and the best room for the view you are after.
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
