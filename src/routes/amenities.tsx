import { createFileRoute, Link } from "@tanstack/react-router";
import { pageMeta, WA } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { AmenityIcon } from "@/components/site/AmenityIcon";
import { amenitiesList } from "@/lib/content";

export const Route = createFileRoute("/amenities")({
  head: () =>
    pageMeta({
      title: "Amenities & Experience | Alpine Crest Homestay, Theog",
      description:
        "Free Wi-Fi, private parking, power backup, hot water, mountain views, home-cooked Himachali food and more at Alpine Crest Homestay near Theog, Himachal Pradesh.",
      path: "/amenities",
    }),
  component: AmenitiesPage,
});

function AmenitiesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Amenities" }]} />

      <section className="container-page py-10">
        <p className="eyebrow">Experience</p>
        <h1 className="mt-3 max-w-2xl text-4xl sm:text-5xl">
          Stay close to nature, with what you actually need
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          The experience at Alpine Crest is less about a long facilities list and
          more about a peaceful setting. These are the things we genuinely offer,
          kept simple and honest.
        </p>
      </section>

      <section className="container-page grid gap-4 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        {amenitiesList.map((a) => (
          <div
            key={a.label}
            className="rounded-2xl border border-border bg-card p-6 shadow-soft"
          >
            <AmenityIcon name={a.icon} className="h-7 w-7 text-moss" />
            <h2 className="mt-4 text-xl">{a.label}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {a.description}
            </p>
          </div>
        ))}
      </section>

      <section className="container-page grid gap-10 py-16 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">Stay Close to Nature</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">A quiet alternative to the tourist stops</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            The homestay sits above the apple orchards of Village Kathot, a short
            distance from Theog town. Days here are unhurried — tea on the balcony,
            a walk through the orchard, a home-cooked lunch, and evenings quiet
            enough to hear the wind in the deodars. It is a deliberate contrast to
            staying in the busier tourist areas like Kufri or central Shimla.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <WhatsAppLink message={WA.general}>Check Availability</WhatsAppLink>
            <Link
              to="/rooms"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary"
            >
              View Rooms
            </Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { t: "Mountain Views", s: "Panoramic views of the surrounding Himalayan landscape." },
            { t: "Pine Valley Surroundings", s: "Quiet natural surroundings with pine-covered hills." },
            { t: "Peaceful Atmosphere", s: "A calm alternative to the busier tourist areas." },
            { t: "Local Hospitality", s: "Warm and attentive hospitality from your local host." },
          ].map((item) => (
            <div key={item.t} className="rounded-xl border border-border bg-card p-5 shadow-soft">
              <h3 className="text-lg">{item.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.s}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
