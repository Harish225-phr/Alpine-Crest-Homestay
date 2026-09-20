import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
  Check,
  ArrowRight,
  Phone,
} from "lucide-react";
import { pageMeta, SITE, WA } from "@/lib/site";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { CallLink } from "@/components/site/CallLink";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { ParallaxBanner } from "@/components/site/ParallaxBanner";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StaySection } from "@/components/site/StaySection";
import { FAQSection } from "@/components/site/FAQSection";
import { MapEmbed } from "@/components/site/MapEmbed";
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

const whyStay = [
  { icon: Mountain, title: "Panoramic mountain views", desc: "East-facing balconies open onto the Shali Tibba range and a wide deodar valley." },
  { icon: Sunrise, title: "Sunrise from your room", desc: "The first light spills over the ridgeline straight onto your balcony." },
  { icon: UtensilsCrossed, title: "Home-cooked Himachali food", desc: "Siddu, madra, rajma-chawal — cooked in the family kitchen on request." },
  { icon: Leaf, title: "Peaceful, uncrowded setting", desc: "A quiet village above the orchards, away from the tourist crowds of Kufri and Shimla." },
  { icon: Car, title: "Free private parking", desc: "Secure parking right at the house, with easy access from NH-5." },
  { icon: Zap, title: "Power backup & Wi-Fi", desc: "Uninterrupted comfort with round-the-clock hot water and free Wi-Fi." },
];

const destinations = [
  { name: "Theog Town", distance: "6 km", slug: "/places-to-visit/theog", image: "/images/destinations/image.png", alt: "Mountain landscape near Theog, Himachal Pradesh" },
  { name: "Kufri", distance: "22 km", slug: "/places-to-visit/kufri", image: "/images/destinations/image copy.png", alt: "Snowy mountain peaks near Kufri, Himachal Pradesh" },
  { name: "Fagu", distance: "30 km", slug: "/places-to-visit/fagu", image: "/images/destinations/image copy 2.png", alt: "Himalayan village and valley near Fagu, Himachal Pradesh" },
  { name: "Shimla Mall Road", distance: "38 km", slug: "/places-to-visit/shimla", image: "/images/destinations/image copy 3.png", alt: "Shimla Mall Road and colonial architecture, Himachal Pradesh" },
  { name: "Chail", distance: "45 km", slug: "/places-to-visit/chail", image: "/images/destinations/image copy 4.png", alt: "Dense pine and deodar forest near Chail, Himachal Pradesh" },
];

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div ref={heroRef} className="relative h-[82vh] min-h-[560px] w-full overflow-hidden">
          <motion.img
            src={exterior}
            alt="Alpine Crest Homestay exterior on a Himalayan slope near Theog, Himachal Pradesh"
            width={1360}
            height={1020}
            style={{ y: heroY, scale: heroScale }}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-pine/90 via-pine/45 to-pine/20"
          />
          <motion.div
            style={{ opacity: heroOpacity }}
            className="absolute inset-0 flex items-end"
          >
            <div className="container-page pb-16 sm:pb-24">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[0.7rem] font-bold tracking-[0.24em] uppercase text-sand"
              >
                Kathot · Theog · Himachal Pradesh
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-4 max-w-3xl font-display text-4xl leading-[1.08] text-sand sm:text-6xl"
              >
                Alpine Crest Homestay – Peaceful Homestay Near Shimla, Theog &amp; Kufri
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-5 max-w-xl text-base leading-relaxed text-sand/85"
              >
                Escape to a peaceful mountain retreat in Kathot near Theog,
                Himachal Pradesh. Enjoy panoramic mountain views, private
                balconies, home-cooked Himachali food and convenient access to
                Theog, Kufri and Shimla.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <WhatsAppLink message={WA.general}>Book on WhatsApp</WhatsAppLink>
                <CallLink variant="outline" className="border-sand/50 text-sand hover:bg-sand/15">
                  Call Now
                </CallLink>
                <Link
                  to="/rooms"
                  className="inline-flex items-center justify-center rounded-full border border-sand/50 px-6 py-3 text-sm font-semibold text-sand transition-colors hover:bg-sand/15"
                >
                  View Rooms
                </Link>
              </motion.div>

              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-sand/75"
              >
                {["Mountain Views", "Private Balcony", "Home-Cooked Food", "Near Theog & Kufri"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      {item}
                    </li>
                  ),
                )}
              </motion.ul>
            </div>
          </motion.div>
        </div>

        {/* Quick booking bar */}
        <div className="container-page -mt-9 relative z-10">
          <Reveal>
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
              <div className="flex gap-2">
                <WhatsAppLink message={WA.general} className="w-full sm:w-auto">
                  Check Availability
                </WhatsAppLink>
                <CallLink className="w-full sm:w-auto" ariaLabel="Call Alpine Crest Homestay">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </CallLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About / Story */}
      <section className="container-page grid gap-10 py-20 lg:grid-cols-2 lg:items-center">
        <Reveal>
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
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="The Homestay"
            title="Built by a family, kept the way a mountain home should be"
          />
          <Reveal delay={0.1}>
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
          </Reveal>
          <StaggerGroup className="mt-7 grid gap-3 sm:grid-cols-3" stagger={0.08}>
            {[
              { icon: Sunrise, t: "Sunrise views", s: "East-facing balconies" },
              { icon: Leaf, t: "Orchard walks", s: "Apple & plum trees" },
              { icon: Star, t: "Family hosted", s: "Local guidance" },
            ].map(({ icon: Icon, t, s }) => (
              <StaggerItem key={t}>
                <div className="rounded-xl border border-border bg-card p-4 shadow-soft">
                  <Icon className="h-5 w-5 text-moss" aria-hidden="true" />
                  <p className="mt-2.5 text-sm font-semibold">{t}</p>
                  <p className="text-xs text-muted-foreground">{s}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Why Stay With Us */}
      <section className="bg-secondary/60 py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Why Stay With Us"
              title="A mountain experience that feels personal"
              intro="Not a hotel — a family home. Every detail is kept simple, honest and focused on the things that actually matter in the hills."
              align="center"
            />
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {whyStay.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-moss transition-colors group-hover:bg-primary/20">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Mountain View Experience banner */}
      <ParallaxBanner
        image={deluxeBalcony}
        imageAlt="Panoramic mountain view from the balcony at Alpine Crest Homestay"
        overlay="bg-gradient-to-b from-pine/85 via-pine/55 to-pine/85"
      >
        <Reveal>
          <p className="text-[0.72rem] font-bold tracking-[0.22em] uppercase text-sand/80">
            Mountain View Experience
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl text-sand sm:text-4xl">
            Wake up to a panorama of pine, deodar and the Shali Tibba range
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-sand/80">
            The balconies face east, so the first light of the day spills over the
            ridgeline and fills the valley with layered colour. Evenings bring the
            deodars into silhouette against a warm sky.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <WhatsAppLink message={WA.location} variant="primary">
              Book This View
            </WhatsAppLink>
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center rounded-full border border-sand/50 px-6 py-3 text-sm font-semibold text-sand transition-colors hover:bg-sand/15"
            >
              See the Gallery
            </Link>
          </div>
        </Reveal>
      </ParallaxBanner>

      {/* Rooms */}
      <section className="bg-secondary/60 py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Rooms"
              title="Two room types, both with mountain air and honest comfort"
            />
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-8 md:grid-cols-2" stagger={0.1}>
            {rooms.map((r) => (
              <StaggerItem key={r.name}>
                <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={r.image}
                      alt={`${r.name} at Alpine Crest Homestay, Theog`}
                      width={1360}
                      height={1020}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-2xl">{r.name}</h3>
                      <span className="text-xs text-muted-foreground">{r.guests}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.copy}</p>
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
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Private Balcony Experience */}
      <section className="container-page grid gap-10 py-20 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <SectionHeading
            eyebrow="Private Balcony"
            title="Your balcony, the valley, and nothing in between"
          />
          <Reveal delay={0.1}>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              The Deluxe Room has a private balcony that opens directly onto the
              deodar ridgeline. Pull up a chair, take your tea outside, and watch the
              light move across the valley from sunrise to sunset. No highway noise,
              no town hum — just wind through the pines.
            </p>
            <ul className="mt-6 grid gap-2.5 text-sm text-muted-foreground">
              {[
                "East-facing for sunrise over the Shali Tibba range",
                "Seating area to sit with the view, not just glance at it",
                "Shared terrace above for an even wider vantage point",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <WhatsAppLink message={WA.deluxe}>Enquire about the Deluxe Room</WhatsAppLink>
              <Link
                to="/rooms"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary"
              >
                View All Rooms
              </Link>
            </div>
          </Reveal>
        </div>
        <Reveal className="order-1 lg:order-2">
          <div className="overflow-hidden rounded-2xl shadow-soft">
            <img
              src={deluxeBalcony}
              alt="Private balcony opening onto the deodar valley at Alpine Crest Homestay"
              width={1360}
              height={1020}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* Food banner */}
      <ParallaxBanner
        image={food}
        imageAlt="Home-cooked Himachali thali served at Alpine Crest Homestay"
        overlay="bg-gradient-to-b from-pine/80 via-pine/50 to-pine/80"
      >
        <Reveal>
          <p className="text-[0.72rem] font-bold tracking-[0.22em] uppercase text-sand/80">
            Home-Cooked Himachali Food
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl text-sand sm:text-4xl">
            Himachali meals cooked in the family kitchen
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-sand/80">
            Breakfast is parathas, eggs and chai. Lunch and dinner are simple home
            food — rajma, dal, seasonal sabzi, rice and rotis — with Himachali dishes
            like siddu and madra on request. Vegetarian by default, and we cook around
            allergies and preferences if you tell us in advance.
          </p>
          <div className="mt-7">
            <WhatsAppLink message={WA.meals} variant="primary">
              Ask About Meals
            </WhatsAppLink>
          </div>
        </Reveal>
      </ParallaxBanner>

      {/* Amenities */}
      <section className="container-page py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Amenities"
            title="Everything you actually need"
            intro="The experience is less about a long facilities list and more about a peaceful setting. These are the things we genuinely offer."
          />
        </Reveal>
        <StaggerGroup className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4" stagger={0.05}>
          {amenities.map(({ icon: Icon, label }) => (
            <StaggerItem key={label}>
              <div className="group rounded-xl border border-border bg-card p-5 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <Icon className="mx-auto h-6 w-6 text-moss transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                <p className="mt-3 text-sm font-semibold">{label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <Reveal delay={0.1}>
          <Link
            to="/amenities"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-moss underline underline-offset-4"
          >
            See the full experience
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>

      {/* Stay at Alpine Crest — SEO cards */}
      <StaySection />

      {/* Destinations banner */}
      <ParallaxBanner
        image={exterior}
        imageAlt="Alpine Crest Homestay surrounded by pine and apple orchards near Theog"
        overlay="bg-gradient-to-b from-pine/85 via-pine/50 to-pine/85"
      >
        <Reveal>
          <p className="text-[0.72rem] font-bold tracking-[0.22em] uppercase text-sand/80">
            Explore
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl text-sand sm:text-4xl">
            What's around Alpine Crest
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-sand/80">
            Theog, Kufri, Shimla, Fagu, Narkanda and Chail are all within easy reach.
            Use the homestay as a quiet base and explore the upper Shimla hills by day.
          </p>
        </Reveal>
      </ParallaxBanner>

      {/* Destinations cards */}
      <section className="container-page py-20">
        <Reveal>
          <SectionHeading eyebrow="Nearby Destinations" title="Day trips from your balcony" />
        </Reveal>
        <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {destinations.map((d) => (
            <StaggerItem key={d.name}>
              <Link
                to={d.slug}
                className="group flex h-full min-h-[300px] max-h-[300px] min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative h-40 min-h-40 max-h-40 w-full min-w-0 shrink-0 overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.alt}
                    width={765}
                    height={520}
                    loading="lazy"
                    style={{ width: "100%", minWidth: 0, height: "160px", minHeight: "160px", maxHeight: "160px", display: "block" }}
                    className="h-40 min-h-40 max-h-40 w-full min-w-0 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pine/55 to-transparent" />
                  <span className="absolute bottom-3 left-4 grid h-9 w-9 place-items-center rounded-full bg-card/95 text-moss shadow-soft">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-display text-xl text-foreground">{d.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{d.distance} away</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-moss">
                    Explore
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Location + Map */}
      <section className="bg-secondary/60 py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Find Us" title={SITE.addressFull} />
            <Reveal delay={0.1}>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                We're a short drive off NH-5 at Theog, with parking right at the house.
                Send us a message and we'll share a pin, road conditions and taxi help
                for the last stretch.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <WhatsAppLink message={WA.location}>Message us</WhatsAppLink>
                <CallLink variant="outline">Call Now</CallLink>
                <a
                  href={SITE.mapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary"
                >
                  Get Directions
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <MapEmbed className="min-h-[400px]" />
          </Reveal>
        </div>
      </section>

      {/* How to Reach */}
      <section className="container-page py-20">
        <Reveal>
          <SectionHeading eyebrow="How to Reach" title="Getting to Alpine Crest" />
        </Reveal>
        <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {[
            { step: "01", title: "By road", desc: "Theog is on NH-5, roughly an hour's drive east of Shimla. From Theog, follow Majhar Road to Village Kathot." },
            { step: "02", title: "By bus", desc: "State buses run regularly between Shimla and Theog. A short taxi ride from Theog reaches the house." },
            { step: "03", title: "By train", desc: "The nearest railhead is Shimla (narrow-gauge toy train from Kalka). From Shimla, about an hour by road." },
            { step: "04", title: "By air", desc: "The nearest airport is Jubbarhatti near Shimla. From there, roughly a 90-minute drive. We can arrange a pickup." },
          ].map(({ step, title, desc }) => (
            <StaggerItem key={step}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="font-display text-3xl text-primary/30">{step}</span>
                <h3 className="mt-3 text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Gallery Preview */}
      <section className="container-page py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="Glimpses of Alpine Crest"
            intro="Take a look at the rooms, the views, and the food you can expect during your stay."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
          {[exterior, deluxeBalcony, lounge, food].map((img, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative aspect-square overflow-hidden rounded-xl shadow-soft">
                <img
                  src={img}
                  alt={`Alpine Crest Homestay Gallery ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3} className="text-center mt-8">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-moss underline underline-offset-4"
          >
            View full gallery
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>

      {/* Guest Reviews (Editable Structure) */}
      <section className="bg-secondary/60 py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Guest Reviews"
              title="What our guests say"
              align="center"
            />
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.1}>
            {/* Owner can replace these with actual Google/Airbnb reviews later */}
            {[
              { text: "A peaceful stay with excellent home-cooked food and great views of the valley. Highly recommended for families.", author: "Guest Review", source: "Google" },
              { text: "Beautiful location away from the crowd. The hosts are very welcoming and the rooms are clean and comfortable.", author: "Guest Review", source: "Google" },
              { text: "Perfect weekend getaway near Shimla. Loved the balcony views and the authentic Himachali hospitality.", author: "Guest Review", source: "Google" },
            ].map((review, i) => (
              <StaggerItem key={i}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft flex flex-col">
                  <div className="flex gap-1 text-[#F59E0B] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground mb-6">"{review.text}"</p>
                  <div>
                    <p className="font-semibold text-sm">{review.author}</p>
                    <p className="text-xs text-muted-foreground">{review.source}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal delay={0.4} className="text-center mt-8">
            <a
              href={SITE.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-card hover:shadow-soft transition-all"
            >
              See More Reviews on Google
            </a>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* Final booking banner */}
      <ParallaxBanner
        image={deluxeBalcony}
        imageAlt="Mountain view from Alpine Crest Homestay at sunset"
        overlay="bg-gradient-to-b from-pine/90 via-pine/65 to-pine/90"
        className="mb-20"
      >
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-4xl text-sand sm:text-5xl">
            Book your peaceful mountain stay
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-sand/80">
            Send us a WhatsApp message with your travel dates. We will reply with
            availability, pricing and taxi help for reaching us from Shimla, Kufri
            or the airport.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <WhatsAppLink message={WA.general} variant="primary">
              Check Availability
            </WhatsAppLink>
            <CallLink variant="outline" className="border-sand/50 text-sand hover:bg-sand/15">
              Call Now
            </CallLink>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-sand/50 px-6 py-3 text-sm font-semibold text-sand transition-colors hover:bg-sand/15"
            >
              Contact Us
            </Link>
          </div>
        </Reveal>
      </ParallaxBanner>
    </>
  );
}
