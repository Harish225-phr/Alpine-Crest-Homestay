import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MapPin } from "lucide-react";
import { pageMeta, WA } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { rooms } from "@/lib/content";

export const Route = createFileRoute("/rooms")({
  head: () =>
    pageMeta({
      title: "Rooms | Alpine Crest Homestay — Mountain Rooms Near Theog",
      description:
        "Two room types at Alpine Crest Homestay near Theog, Himachal Pradesh: a Standard Room and a Deluxe Room with private balcony. Enquire on WhatsApp for availability.",
      path: "/rooms",
    }),
  component: RoomsPage,
});

function RoomsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Rooms" }]} />

      <section className="container-page py-10">
        <p className="eyebrow">Accommodation</p>
        <h1 className="mt-3 max-w-2xl text-4xl sm:text-5xl">
          Mountain rooms with honest comfort
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Two room types, both kept clean and simple. Every room has an attached
          bathroom, hot water and access to the shared lounge and terrace. Enquire
          directly on WhatsApp for current availability and pricing.
        </p>
      </section>

      <section className="container-page grid gap-8 pb-20">
        {rooms.map((room) => (
          <article
            key={room.name}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft lg:grid lg:grid-cols-2"
          >
            <img
              src={room.image}
              alt={`${room.name} at Alpine Crest Homestay, Theog`}
              width={1360}
              height={1020}
              loading="lazy"
              className="h-72 w-full object-cover lg:h-full"
            />
            <div className="p-7 lg:p-9">
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="text-3xl">{room.name}</h2>
                <span className="text-sm text-muted-foreground">{room.guests}</span>
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">{room.copy}</p>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {room.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <WhatsAppLink
                  message={room.messageKey === "standard" ? WA.standard : WA.deluxe}
                  className="px-6 py-3"
                >
                  Enquire on WhatsApp
                </WhatsAppLink>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-secondary/60 py-16">
        <div className="container-page grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Good to know</p>
            <h2 className="mt-3 text-3xl">Practical details</h2>
            <ul className="mt-5 grid gap-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
                Check-in from 12:00 PM, check-out by 11:00 AM
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
                Home-cooked meals available on request from the family kitchen
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
                Free private parking on site
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
                Taxi booking assistance for local sightseeing
              </li>
            </ul>
            <WhatsAppLink message={WA.general} variant="primary" className="mt-7">
              Check Availability
            </WhatsAppLink>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-6 shadow-soft">
            <MapPin className="h-6 w-6 shrink-0 text-moss" aria-hidden="true" />
            <div>
              <p className="font-semibold">Alpine Crest Homestay</p>
              <p className="text-sm text-muted-foreground">
                Village Kathot, PO, Majhar Rd, Theog, Himachal Pradesh 171012
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
