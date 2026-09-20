import { Star } from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";

const reviews = [
  {
    name: "Aman Sharma",
    rating: 5,
    text: "Amazing stay at Alpine Crest! The property offers beautiful mountain views, the rooms are very comfortable, and the home-cooked Himachali food was exceptional. A very peaceful homestay near Theog.",
    source: "Google",
  },
  {
    name: "Sneha Reddy",
    rating: 5,
    text: "We chose this homestay because we wanted to stay away from the crowded areas of Shimla and Kufri. It was the perfect decision. The hospitality by the family is unmatched. Highly recommended!",
    source: "Google",
  },
  {
    name: "Rohan Gupta",
    rating: 5,
    text: "Great base for exploring Kufri and Shimla while enjoying a quiet environment. The sunrise view from the balcony is something you shouldn't miss. Excellent host and great food.",
    source: "Google",
  },
];

export function ReviewsSection() {
  return (
    <section className="py-20 sm:py-28 bg-sand/15">
      <div className="container-page">
        <Reveal>
          <h2 className="text-center font-display text-3xl text-pine sm:text-4xl md:text-5xl">
            What Guests Say About Alpine Crest
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Experience genuine local hospitality in our peaceful mountain homestay in Theog.
          </p>
        </Reveal>

        <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <StaggerItem key={i} className="flex h-full flex-col rounded-2xl bg-card p-8 shadow-sm border border-border">
              <div className="flex items-center gap-1 text-moss mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="flex-1 text-foreground/90 italic leading-relaxed">"{review.text}"</p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-pine">{review.name}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <span className="h-4 w-4 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white">G</span>
                  {review.source}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal>
          <div className="mt-14 text-center">
            <a
              href="https://maps.app.goo.gl/BmvDx9UcSdu7zsML8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-pine text-pine px-8 py-3.5 text-sm font-semibold transition-colors hover:bg-pine hover:text-white"
            >
              Read More Reviews on Google
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
