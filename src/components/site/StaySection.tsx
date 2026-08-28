import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { exterior, deluxeBalcony, standardRoom, deluxeRoom } from "@/lib/images";

const stayCards = [
  {
    to: "/homestay-in-theog",
    image: exterior,
    heading: "Homestay in Theog",
    description:
      "A family-run homestay in Kathot near Theog — comfortable rooms, private balconies and warm local hospitality in the upper Shimla hills.",
    location: "Kathot · Theog · 6 km",
  },
  {
    to: "/homestay-near-kufri",
    image: deluxeBalcony,
    heading: "Homestay Near Kufri",
    description:
      "A peaceful alternative to staying in crowded Kufri. Mountain views, private balconies and easy access to Kufri's sights — a short drive away.",
    location: "Near Theog · 22 km to Kufri",
  },
  {
    to: "/homestay-near-shimla",
    image: deluxeRoom,
    heading: "Homestay Near Shimla",
    description:
      "A quiet mountain base about an hour from Shimla. Panoramic valley views, home-cooked food and easy day trips to Shimla and Kufri.",
    location: "Kathot · 38 km to Shimla",
  },
  {
    to: "/places-to-stay-in-theog",
    image: standardRoom,
    heading: "Places to Stay in Theog",
    description:
      "Looking at where to stay in Theog? Alpine Crest offers mountain-view rooms, hot water, parking and Wi-Fi in a peaceful village setting.",
    location: "Kathot · Theog",
  },
  {
    to: "/stay-near-kufri",
    image: deluxeBalcony,
    heading: "Stay Near Kufri",
    description:
      "Peaceful mountain accommodation a short drive from Kufri. Enjoy the Nature Park and Mahasu Peak by day, return to a quiet balcony by evening.",
    location: "Near Theog · 22 km to Kufri",
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
            intro="Whether you're searching for a homestay in Theog, near Kufri or near Shimla, Alpine Crest offers the same peaceful mountain experience. Explore each option below."
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
