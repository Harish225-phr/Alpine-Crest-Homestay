import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, MapPin, Car, UtensilsCrossed } from "lucide-react";
import { pageMeta, WA } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { exterior, lounge, food } from "@/lib/images";

export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta({
      title: "About | Alpine Crest Homestay, Theog",
      description:
        "Alpine Crest Homestay is a family-run mountain homestay in Village Kathot near Theog, Himachal Pradesh. Learn about the host, the house and the hospitality.",
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About" }]} />

      <section className="container-page py-10">
        <p className="eyebrow">About</p>
        <h1 className="mt-3 max-w-2xl text-4xl sm:text-5xl">
          A family-run mountain home near Theog
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Alpine Crest Homestay sits above the apple orchards of Village Kathot,
          just off Majhar Road in Theog. It is a small house — a handful of rooms,
          a shared lounge, a terrace that catches the first light on the Shali
          Tibba range — and it is run by the family that lives here.
        </p>
      </section>

      <section className="container-page grid gap-10 pb-16 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-2xl shadow-soft">
          <img
            src={exterior}
            alt="Alpine Crest Homestay exterior near Theog, Himachal Pradesh"
            width={1360}
            height={1020}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl">The house</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The house was built by the family and kept the way a mountain home
            should be — simple, warm and honest. Wood-panelled rooms, a shared
            lounge for slow evenings, and a terrace that looks out over the pine
            valley. There is no reception desk and no scripted service; you are
            staying in someone's home.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-4 shadow-soft">
              <MapPin className="h-5 w-5 text-moss" aria-hidden="true" />
              <p className="mt-2.5 text-sm font-semibold">Quiet location</p>
              <p className="text-xs text-muted-foreground">Away from tourist crowds</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 shadow-soft">
              <Car className="h-5 w-5 text-moss" aria-hidden="true" />
              <p className="mt-2.5 text-sm font-semibold">Private parking</p>
              <p className="text-xs text-muted-foreground">Right at the house</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 shadow-soft">
              <UtensilsCrossed className="h-5 w-5 text-moss" aria-hidden="true" />
              <p className="mt-2.5 text-sm font-semibold">Home food</p>
              <p className="text-xs text-muted-foreground">Cooked on request</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Your host</p>
            <h2 className="mt-3 text-3xl">Hosted with warmth by Sahil</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Sahil looks after the day-to-day at Alpine Crest. He is attentive
              without being intrusive — happy to help with stay-related needs,
              share local guidance on where to go and what to see, and arrange
              taxi bookings for sightseeing and airport transfers. If you need
              something, just ask.
            </p>
            <ul className="mt-5 grid gap-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Heart className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
                Attentive, unobtrusive local hospitality
              </li>
              <li className="flex items-start gap-2">
                <Heart className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
                Local guidance on the best spots around Theog and Kufri
              </li>
              <li className="flex items-start gap-2">
                <Heart className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
                Taxi booking assistance for day trips and transfers
              </li>
            </ul>
            <WhatsAppLink message={WA.general} className="mt-7">
              Message Sahil on WhatsApp
            </WhatsAppLink>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-soft">
            <img
              src={lounge}
              alt="Shared lounge at Alpine Crest Homestay, Theog"
              width={765}
              height={1020}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container-page grid gap-10 py-16 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-2xl shadow-soft">
          <img
            src={food}
            alt="Home-cooked Himachali thali at Alpine Crest Homestay"
            width={574}
            height={1020}
            loading="lazy"
            className="h-full max-h-[480px] w-full object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">Food</p>
          <h2 className="mt-3 text-3xl">Home-Cooked Himachali Flavours</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Freshly prepared home-cooked Himachali meals are available upon
            request. Breakfast is parathas, eggs and chai. Lunch and dinner are
            simple home food — rajma, dal, seasonal sabzi, rice and rotis — with
            Himachali dishes like siddu and madra on request. Vegetarian by
            default, and we cook around allergies and preferences if you tell us
            in advance.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <WhatsAppLink message={WA.meals}>Ask About Meals</WhatsAppLink>
            <Link
              to="/rooms"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary"
            >
              View Rooms
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
