import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MapPin, Mountain, Sunrise, Camera, Trees } from "lucide-react";
import { WA, breadcrumbSchema } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { MapEmbed } from "@/components/site/MapEmbed";
import { deluxeBalcony, exterior, standardRoom } from "@/lib/images";

export const Route = createFileRoute("/mountain-view-homestay-shimla")({
  head: () => ({
    meta: [
      { title: "Mountain View Homestay Near Shimla | Alpine Crest Homestay" },
      {
        name: "description",
        content:
          "A mountain-view homestay near Shimla with panoramic valley views, private balconies and pine ridgelines. Alpine Crest Homestay near Theog is an hour from Shimla — ideal for sunrise, sunset and photography.",
      },
      { property: "og:title", content: "Mountain View Homestay Near Shimla | Alpine Crest Homestay" },
      {
        property: "og:description",
        content:
          "Panoramic mountain views near Shimla — private balconies, pine valleys, sunrise and sunset. A peaceful homestay near Theog.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/mountain-view-homestay-shimla" },
    ],
    links: [{ rel: "canonical", href: "/mountain-view-homestay-shimla" }],
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Mountain View Homestay Near Shimla", path: "/mountain-view-homestay-shimla" },
      ]),
    ],
  }),
  component: MountainViewHomestayShimlaPage,
});

function MountainViewHomestayShimlaPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Mountain View Homestay Near Shimla" }]} />

      <section className="container-page grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Mountain View Homestay Near Shimla</p>
          <h1 className="mt-3 text-4xl leading-[1.1] sm:text-5xl">
            Mountain View Homestay Near Shimla
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            If the reason you are heading to the hills is the view, Alpine Crest
            Homestay is built around it. The house sits above the apple orchards
            of Village Kathot near Theog, about an hour east of Shimla, and faces
            east over a wide pine and deodar valley with the Shali Tibba range
            rising beyond. The private balconies and the terrace are positioned
            so the panorama — not a sliver of it — is what you wake up to.
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
            alt="Panoramic mountain view from the balcony of Alpine Crest Homestay near Shimla"
            width={1360}
            height={1020}
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="container-page grid gap-10 py-12 lg:grid-cols-2">
        <div className="prose-stay">
          <h2>Panoramic views from every balcony</h2>
          <p>
            The homestay is oriented east, so the balconies catch the first light
            of the day over the Shali Tibba range. From the moment the sun clears
            the ridgeline, the valley fills with layered light — pine slopes
            shifting from blue-grey to green, and on a clear morning the snow
            line of the higher Himalaya visible beyond. The view runs the full
            width of the property, so whether you are in the Deluxe Room's
            balcony or up on the shared terrace, you are looking at the same
            wide panorama.
          </p>
          <p>
            Afternoons are bright and long, with the valley slowly filling with
            shadow while the ridgeline stays lit. Evenings bring the deodars into
            silhouette and the sky into warm colour — a quiet hour that is best
            spent with a cup of tea on the terrace.
          </p>

          <h2>Private balconies and the terrace</h2>
          <p>
            The Deluxe Room has a private balcony that opens directly onto the
            deodar ridgeline, with a seating area so you can sit with the view
            rather than just glance at it. The shared terrace above gives an even
            wider vantage point and is where most guests gather for sunrise and
            sunset. The Standard Room, while it does not have its own balcony,
            has a window onto the same valley and full access to the terrace.
          </p>

          <h2>Pine valleys and peaceful surroundings</h2>
          <p>
            Below the house, the orchards give way to a valley of pine and deodar
            that runs unbroken to the ridgeline. A short walk down through the
            apple trees reaches the edge of the forest, where the air is
            noticeably cooler and the silence is total — no highway noise, no
            town hum, just wind through the pines. It is the kind of quiet that
            is increasingly hard to find within easy reach of Shimla.
          </p>

          <h2>A note for photographers</h2>
          <p>
            The hour after sunrise and the hour before sunset are the most
            rewarding times here. The light moves quickly across the valley, and
            the balcony gives you a steady, elevated vantage point without having
            to trek for it. On clear mornings the snow line is visible beyond the
            Shali Tibba range; after monsoon showers the ridgeline often sits
            above a sea of cloud. Bring a wide lens for the panorama and a longer
            lens for the way the light rakes across the pine slopes.
          </p>

          <h2>Sunrise and sunset</h2>
          <p>
            Because the property faces east, sunrise is the headline event — set
            an alarm, or just leave the balcony door open and let the light wake
            you. Sunset happens behind the house, but the terrace still catches
            the warm colour reflected onto the ridgeline and the valley. Both
            hours are quiet, unhurried, and worth being outside for.
          </p>
        </div>

        <div className="grid gap-5">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <img
              src={exterior}
              alt="Alpine Crest Homestay exterior set above the pine valley near Shimla"
              width={1360}
              height={1020}
              loading="lazy"
              className="h-56 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl">The house and the valley</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Set just above the apple orchards, facing the deodar ridgeline.
              </p>
              <WhatsAppLink message={WA.general} variant="primary" className="mt-4 px-5 py-2.5">
                Enquire
              </WhatsAppLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <img
              src={deluxeBalcony}
              alt="Deluxe room balcony with panoramic mountain view near Shimla"
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
              alt="Standard room with valley-facing window at Alpine Crest Homestay near Shimla"
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
          <h2 className="mt-3 text-3xl">Getting to the view</h2>
          <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-muted-foreground">
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
              About 38 km east of Shimla on NH-5, roughly an hour's drive.
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
              Turn off at Theog onto Majhar Road toward Village Kathot.
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
              Free private parking right at the house.
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
          <h2 className="text-3xl">Wake up to the valley</h2>
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
