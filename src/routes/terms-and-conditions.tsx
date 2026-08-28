import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () =>
    pageMeta({
      title: "Terms & Conditions | Alpine Crest Homestay",
      description:
        "Terms and conditions for booking enquiries and stays at Alpine Crest Homestay near Theog, Himachal Pradesh.",
      path: "/terms-and-conditions",
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Terms & Conditions" }]} />
      <section className="container-page py-10">
        <h1 className="text-4xl sm:text-5xl">Terms & Conditions</h1>
        <div className="prose-stay mt-8 max-w-3xl">
          <p>
            These terms apply to enquiries and bookings made with Alpine Crest
            Homestay, Village Kathot, Theog, Himachal Pradesh. By contacting us or
            making a booking enquiry, you agree to these terms.
          </p>
          <h2>Bookings and enquiries</h2>
          <p>
            All booking enquiries are made directly through WhatsApp or other
            contact methods on this site. We do not use an automated booking
            engine. Availability and pricing are confirmed by the host in response
            to your enquiry, and a booking is only confirmed once the host
            acknowledges it.
          </p>
          <h2>Pricing</h2>
          <p>
            Pricing is shared directly by the host at the time of enquiry and may
            vary by season, room type and length of stay. The website does not
            display live pricing.
          </p>
          <h2>Check-in and check-out</h2>
          <ul>
            <li>Check-in is from 12:00 PM</li>
            <li>Check-out is by 11:00 AM</li>
            <li>Early check-in or late check-out may be available on request</li>
          </ul>
          <h2>Meals</h2>
          <p>
            Home-cooked meals are available on request and are prepared in the
            family kitchen. Please inform us in advance of any allergies or
            dietary preferences.
          </p>
          <h2>Conduct</h2>
          <p>
            Alpine Crest is a family-run homestay in a quiet village. We ask guests
            to respect the peaceful setting, other guests and the local community.
          </p>
          <h2>Cancellation</h2>
          <p>
            Cancellation terms are discussed and agreed directly with the host at
            the time of booking. Please confirm cancellation terms before your
            stay.
          </p>
          <h2>Contact</h2>
          <p>
            For any questions about these terms, please contact us on WhatsApp at
            +91 78766 11675.
          </p>
        </div>
      </section>
    </>
  );
}
