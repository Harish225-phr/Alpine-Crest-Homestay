import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { pageMeta, breadcrumbSchema } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { allBlogArticles } from "@/lib/content";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | Alpine Crest Homestay — Theog & Kufri Travel Guides" },
      {
        name: "description",
        content:
          "Travel guides and tips for visiting Theog, Kufri, Shimla and the upper Shimla hills, from Alpine Crest Homestay.",
      },
      { property: "og:title", content: "Blog | Alpine Crest Homestay" },
      {
        property: "og:description",
        content: "Travel guides for Theog, Kufri, Shimla and the upper Shimla hills.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
    scripts: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
      ]),
    ],
  }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Blog" }]} />

      <section className="container-page py-10">
        <p className="eyebrow">Blog</p>
        <h1 className="mt-3 max-w-2xl text-4xl sm:text-5xl">
          Travel guides for the upper Shimla hills
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Practical guides and notes on visiting Theog, Kufri, Shimla and the
          surrounding destinations, from the team at Alpine Crest Homestay.
        </p>
      </section>

      <section className="container-page grid gap-6 pb-20 sm:grid-cols-2">
        {allBlogArticles.map((a) => (
          <Link
            key={a.slug}
            to={`/blog/${a.slug}`}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-colors hover:bg-secondary"
          >
            <div className="p-6">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                  {new Date(a.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {a.readTime}
                </span>
              </div>
              <h2 className="mt-4 text-2xl">{a.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {a.excerpt}
              </p>
              <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-moss">
                Read article
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
