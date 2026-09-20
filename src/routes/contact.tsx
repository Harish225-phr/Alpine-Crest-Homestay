import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Navigation, MessageCircle } from "lucide-react";
import { pageMeta, SITE, WA } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { MapEmbed } from "@/components/site/MapEmbed";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageMeta({
      title: "Contact Alpine Crest Homestay | Theog",
      description:
        "Contact Alpine Crest Homestay in Village Kathot near Theog, Himachal Pradesh. Send a WhatsApp message to check availability or ask about your stay.",
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact" }]} />

      <section className="container-page py-10">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-3 max-w-2xl text-4xl sm:text-5xl">Get in touch</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          The quickest way to reach us is WhatsApp. Send a message with your
          travel dates and we will get back to you with availability and details.
        </p>
      </section>

      <section className="container-page grid gap-10 pb-20 lg:grid-cols-2">
        <div className="grid gap-5">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h2 className="text-xl">Alpine Crest Homestay</h2>
            <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
              {SITE.addressFull}
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
              <a href={`tel:${SITE.phoneRaw}`} className="hover:text-pine">
                {SITE.phoneDisplay}
              </a>
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h2 className="text-xl">Send a message</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Choose the option that best matches what you need. All messages open
              WhatsApp with a ready-to-send enquiry.
            </p>
            <ul className="mt-5 grid gap-3">
              <li>
                <WhatsAppLink message={WA.general} className="w-full justify-start">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Check room availability
                </WhatsAppLink>
              </li>
              <li>
                <WhatsAppLink message={WA.standard} className="w-full justify-start">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Enquire about the Standard Room
                </WhatsAppLink>
              </li>
              <li>
                <WhatsAppLink message={WA.deluxe} className="w-full justify-start">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Enquire about the Deluxe Room
                </WhatsAppLink>
              </li>
              <li>
                <WhatsAppLink message={WA.meals} className="w-full justify-start">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Ask about meals
                </WhatsAppLink>
              </li>
              <li>
                <WhatsAppLink message={WA.taxi} className="w-full justify-start">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Ask about taxi and sightseeing
                </WhatsAppLink>
              </li>
            </ul>
          </div>

          <a
            href={SITE.mapsDirections}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary"
          >
            <Navigation className="h-4 w-4" aria-hidden="true" />
            Get Directions
          </a>
        </div>

        <MapEmbed className="min-h-[450px]" />
      </section>
    </>
  );
}
