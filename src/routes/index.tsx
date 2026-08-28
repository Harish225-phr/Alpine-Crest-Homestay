import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Wifi,
  Car,
  Zap,
  UtensilsCrossed,
  Mountain,
  Trees,
  Dumbbell,
  ShowerHead,
  MapPin,
  Star,
  Sunrise,
  Leaf,
} from "lucide-react";
import { pageMeta, SITE, WA } from "@/lib/site";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import {
  exterior,
  deluxeRoom,
  standardRoom,
  lounge,
  food,
  deluxeBalcony,
} from "@/lib/images";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta({
      title: "Alpine Crest Homestay | Homestay Near Shimla, Theog & Kufri",
      description:
        "Alpine Crest Homestay is a peaceful mountain retreat in Kathot near Theog, Himachal Pradesh. Panoramic mountain views, private balconies, home-cooked food and easy access to Theog, Kufri and Shimla.",
      path: "/",
    }),
  component: HomePage,
});

const amenities = [
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Car, label: "Private Parking" },
  { icon: Zap, label: "Power Backup" },
  { icon: UtensilsCrossed, label: "Home-Cooked Meals" },
  { icon: Mountain, label: "Valley Views" },
  { icon: Trees, label: "Orchard & Garden" },
  { icon: Dumbbell, label: "Fitness Corner" },
  { icon: ShowerHead, label: "Hot Water 24×7" },
];

const rooms = [
  {
    name: "Standard Room",
    image: standardRoom,
    guests: "2 guests",
    copy: "A calm, wood-warmed room with a comfortable double bed, soft lighting and a private attached bathroom — ideal for couples and solo travellers.",
    features: ["Double bed", "Attached bathroom", "Hot water", "Mountain air"],
    message: WA.standard,
  },
  {
    name: "Deluxe Room",
    image: deluxeRoom,
    guests: "2–3 guests",
    copy: "Our largest room with full pine panelling, a sit-out by the window and a private balcony that opens straight onto the deodar ridgeline.",
    features: ["Private balcony", "Seating area", "Smart TV", "Valley view"],
    message: WA.deluxe,
  },
];

const destinations = [
  { name: "Theog Town", distance: "6 km", slug: "/places-to-visit" },
  { name: "Kufri", distance: "22 km", slug: "/homestay-near-kufri" },
  { name: "Shimla Mall Road", distance: "38 km", slug: "/homestay-near-shimla" },
  { name: "Chail", distance: "45 km", slug: "/places-to-visit" },
];

const seoLinks = [
  { to: "/homestay-in-shimla", label: "Homestay in Shimla", desc: "A peaceful mountain stay near Shimla" },
  { to: "/homestay-in-theog", label: "Homestay in Theog", desc: "Comfortable rooms in Kathot near Theog" },
  { to: "/homestay-near-kufri", label: "Homestay Near Kufri", desc: "A quiet alternative to staying in Kufri" },
  { to: "/places-to-stay-in-shimla", label: "Places to Stay in Shimla", desc: "Quieter stays away from the crowds" },
  { to: "/places-to-stay-in-theog", label: "Places to Stay in Theog", desc: "Homestay accommodation in the Theog area" },
  { to: "/mountain-view-homestay-shimla", label: "Mountain View Homestay", desc: "Panoramic Himalayan views near Shimla" },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
          <img
            src={exterior}
            alt="Alpine Crest Homestay exterior on a Himalayan slope near Theog, Himachal Pradesh"
            width={1360}
            height={1020}
            className="h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-pine/85 via-pine/45 to-pine/25"
          />
          <div className="absolute inset-0 flex items-end">
            <div className="container-page pb-14 sm:pb-20">
              <p className="text-[0.7rem] font-bold tracking-[0.24em] uppercase text-sand">
                Kathot · Theog · Himachal Pradesh
              </p>
              <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.08] text-sand sm:text-6xl">
                Alpine Crest Homestay – Peaceful Homestay Near Shimla, Theog &amp; Kufri
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-sand/85">
                Escape to a peaceful mountain retreat in Kathot near Theog,
                Himachal Pradesh. Enjoy panoramic mountain views, private
                balconies, home-cooked Himachali food and convenient access to
                Theog, Kufri and Shimla.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <WhatsAppLink message={WA.general}>Book on WhatsApp</WhatsAppLink>
                <Link
                  to="/rooms"
                  className="inline-flex items-center justify-center rounded-full border border-sand/50 px-6 py-3 text-sm font-semibold text-sand transition-colors hover:bg-sand/15"
                >
                  View Rooms
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Quick booking bar */}
        <div className="container-page -mt-9 relative z-10">
          <div className="grid gap-4 rounded-2xl border border-border bg-card p-5 shadow-lift sm:grid-cols-[repeat(3,minmax(0,1fr))_auto] sm:items-center">
            <div>
              <p className="eyebrow">Check-in</p>
              <p className="mt-1 text-sm text-foreground">From 12:00 PM</p>
            </div>
            <div>
              <p className="eyebrow">Check-out</p>
              <p className="mt-1 text-sm text-foreground">Until 11:00 AM</p>
            </div>
            <div>
              <p className="eyebrow">Direct Booking</p>
              <p className="mt-1 text-sm text-foreground">No agent commission</p>
            </div>
            <WhatsAppLink message={WA.general} className="w-full sm:w-auto">
              Check Availability
            </WhatsAppLink>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="container-page grid gap-10 py-20 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-2xl shadow-soft">
          <img
            src={lounge}
            alt="Wood-panelled common lounge and dining area at Alpine Crest Homestay"
            width={765}
            height={1020}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">The Homestay</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            Built by a family, kept the way a mountain home should be
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Alpine Crest Homestay sits above the apple orchards of Village Kathot,
            just off Majhar Road in Theog. It is a small house — a handful of rooms,
            a shared lounge, a terrace that catches the first light on the Shali
            Tibba range — and it is run by the family that lives here.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Days here are unhurried: tea on the balcony, a walk through the orchard,
            a rajma-chawal lunch, and evenings quiet enough to hear the wind moving
            through the deodars.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {[
              { icon: Sunrise, t: "Sunrise views", s: "East-facing balconies" },
              { icon: Leaf, t: "Orchard walks", s: "Apple & plum trees" },
              { icon: Star, t: "Family hosted", s: "Local guidance" },
            ].map(({ icon: Icon, t, s }) => (
              <div key={t} className="rounded-xl border border-border bg-card p-4">
                <Icon className="h-5 w-5 text-moss" aria-hidden="true" />
                <p className="mt-2.5 text-sm font-semibold">{t}</p>
                <p className="text-xs text-muted-foreground">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="bg-secondary/60 py-20">
        <div className="container-page">
          <p className="eyebrow">Rooms</p>
          <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl">
            Two room types, both with mountain air and honest comfort
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {rooms.map((r) => (
              <article
                key={r.name}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
              >
                <img
                  src={r.image}
                  alt={`${r.name} at Alpine Crest Homestay, Theog`}
                  width={1360}
                  height={1020}
                  loading="lazy"
                  className="h-64 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-2xl">{r.name}</h3>
                    <span className="text-xs text-muted-foreground">{r.guests}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {r.copy}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {r.features.map((f) => (
                      <li
                        key={f}
                        className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <WhatsAppLink message={r.message} className="px-5 py-2.5">
                      Enquire
                    </WhatsAppLink>
                    <Link
                      to="/rooms"
                      className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-secondary"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="container-page py-20">
        <p className="eyebrow">Amenities</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Everything you actually need</h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {amenities.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="rounded-xl border border-border bg-card p-5 text-center shadow-soft"
            >
              <Icon className="mx-auto h-6 w-6 text-moss" aria-hidden="true" />
              <p className="mt-3 text-sm font-semibold">{label}</p>
            </div>
          ))}
        </div>
        <Link
          to="/amenities"
          className="mt-8 inline-flex text-sm font-semibold text-moss underline underline-offset-4"
        >
          See the full experience
        </Link>
      </section>

      {/* Food */}
      <section className="container-page grid gap-10 pb-20 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">Food</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            Himachali meals cooked in the family kitchen
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Breakfast is parathas, eggs and chai on the terrace. Lunch and dinner are
            simple home food — rajma, dal, seasonal sabzi, rice and rotis — with
            Himachali dishes like siddu and madra on request. Vegetarian by default,
            and we cook around allergies and preferences if you tell us in advance.
          </p>
          <WhatsAppLink message={WA.meals} variant="primary" className="mt-7">
            Ask about meals
          </WhatsAppLink>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-soft">
          <img
            src={food}
            alt="Home-cooked Himachali thali served at Alpine Crest Homestay"
            width={574}
            height={1020}
            loading="lazy"
            className="h-full max-h-[520px] w-full object-cover"
          />
        </div>
      </section>

      {/* Destinations */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container-page">
          <p className="text-[0.72rem] font-bold tracking-[0.22em] uppercase text-sand/80">
            Explore
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl">What's around Alpine Crest</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((d) => (
              <Link
                key={d.name}
                to={d.slug}
                className="rounded-xl border border-sand/20 bg-sand/10 p-5 transition-colors hover:bg-sand/20"
              >
                <MapPin className="h-5 w-5 text-sand" aria-hidden="true" />
                <p className="mt-3 font-display text-xl">{d.name}</p>
                <p className="text-sm text-sand/75">{d.distance} away</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Location + CTA */}
      <section className="container-page grid gap-10 py-20 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Find us</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">{SITE.addressFull}</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            We're a short drive off NH-5 at Theog, with parking right at the house.
            Send us a message and we'll share a pin, road conditions and taxi help
            for the last stretch.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <WhatsAppLink message={WA.location}>Message us</WhatsAppLink>
            <a
              href={SITE.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary"
            >
              Get Directions
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-soft">
          <img
            src={deluxeBalcony}
            alt="Deluxe room with balcony door and mountain view at Alpine Crest Homestay"
            width={1360}
            height={1020}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* SEO internal links */}
      <section className="bg-secondary/60 py-16">
        <div className="container-page">
          <p className="eyebrow">Find your stay</p>
          <h2 className="mt-3 text-2xl sm:text-3xl">
            Looking for a homestay near Shimla, Theog or Kufri?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Alpine Crest Homestay is a peaceful mountain base near Theog, with
            easy access to all the destinations in the upper Shimla hills.
            Explore our dedicated pages for each location.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {seoLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-xl border border-border bg-card p-5 shadow-soft transition-colors hover:bg-secondary"
              >
                <p className="font-display text-lg">{l.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
