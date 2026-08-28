import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    pageMeta({
      title: "Privacy Policy | Alpine Crest Homestay",
      description:
        "Privacy policy for the Alpine Crest Homestay website, covering how we handle enquiries and personal information.",
      path: "/privacy-policy",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Privacy Policy" }]} />
      <section className="container-page py-10">
        <h1 className="text-4xl sm:text-5xl">Privacy Policy</h1>
        <div className="prose-stay mt-8 max-w-3xl">
          <p>
            This privacy policy explains how Alpine Crest Homestay handles
            information you share through this website. We are a small family-run
            homestay and we keep things simple.
          </p>
          <h2>Information you share</h2>
          <p>
            When you contact us through WhatsApp, email or any form on this site,
            you may share your name, phone number, travel dates and booking
            preferences. We use this information only to respond to your enquiry
            and to discuss your potential stay.
          </p>
          <h2>How we use your information</h2>
          <ul>
            <li>To respond to your booking and general enquiries</li>
            <li>To share availability, pricing and travel-related details</li>
            <li>To arrange taxi pickups or local guidance if you request it</li>
          </ul>
          <p>
            We do not sell, rent or share your personal information with any third
            party for marketing purposes.
          </p>
          <h2>WhatsApp</h2>
          <p>
            Most contact on this website happens through WhatsApp. When you click a
            WhatsApp link, you are directed to WhatsApp's own platform, which is
            governed by WhatsApp's own privacy policy and terms. We encourage you
            to review those policies.
          </p>
          <h2>Cookies and analytics</h2>
          <p>
            This website does not use tracking cookies. If we add analytics in the
            future to understand site traffic, we will update this policy.
          </p>
          <h2>Contact</h2>
          <p>
            If you have any questions about this policy or how we handle your
            information, please contact us on WhatsApp at +91 78766 11675.
          </p>
        </div>
      </section>
    </>
  );
}
