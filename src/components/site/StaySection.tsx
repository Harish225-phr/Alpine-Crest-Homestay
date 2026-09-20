import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { exterior, deluxeBalcony, standardRoom, deluxeRoom, lounge, rooms1, rooms2, rooms3, rooms3_2 } from "@/lib/images";

const stayCards = [
  {
    to: "/homestay-near-theog",
    image: rooms1,
    heading: "Homestay at Theog",
    description:
      "A family-run homestay in Kathot near Theog — comfortable rooms, private balconies and warm local hospitality in the upper Shimla hills.",
    location: "Kathot · Theog · 6 km",
  },
  {
    to: "/homestay-near-kufri",
    image: deluxeBalcony,
    heading: "Homestay at Kufri",
    description:
      "A peaceful alternative to staying in crowded Kufri. Mountain views, private balconies and easy access to Kufri's sights — a short drive away.",
    location: "Near Theog · 22 km to Kufri",
  },
  {
    to: "/homestay-near-shimla",
    image: deluxeRoom,
    heading: "Homestay at Shimla",
    description:
      "A quiet mountain base about an hour from Shimla. Panoramic valley views, home-cooked food and easy day trips to Shimla and Kufri.",
    location: "Kathot · 38 km to Shimla",
  },
  {
    to: "/homestay-near-narkanda",
    image: standardRoom,
    heading: "Homestay at Narkanda",
    description:
      "A peaceful base with easy access to Narkanda, Hatu Peak and the apple belt of Kotgarh — mountain views and home-cooked food.",
    location: "Near Theog · 60 km to Narkanda",
  },
  {
    to: "/homestay-near-fagu",
    image: rooms3,
    heading: "Homestay at Fagu",
    description:
      "A short drive from Fagu's quiet viewpoints and apple orchards — mountain-view rooms and private balconies in a peaceful setting.",
    location: "Near Theog · 30 km to Fagu",
  },
  {
    to: "/homestay-near-chail",
    image: rooms3_2,
    heading: "Homestay at Chail",
    description:
      "A comfortable base with road access to Chail's wildlife sanctuary, the heritage Chail Palace and Sadhupul — mountain views and balconies.",
    location: "Near Theog · 45 km to Chail",
  },
];

export function StaySection() {
  return (
    <section className="bg-secondary/60 py-20">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Stay at Alpine Crest"
            title="Find your perfect mountain stay"
            intro="Whether you're searching for a homestay at Theog, Kufri, Shimla or beyond, Alpine Crest offers the same peaceful mountain experience. Explore each option below."
          />
        </Reveal>

        <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {stayCards.map((card) => (
            <StaggerItem key={card.to}>
              <Link
                to={card.to}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={`${card.heading} at Alpine Crest Homestay`}
                    width={765}
                    height={1020}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl text-foreground">{card.heading}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                  <p className="mt-3 text-xs font-semibold text-moss">{card.location}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-moss">
                    Explore
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
