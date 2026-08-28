import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CalendarDays, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { pageMeta, WA, breadcrumbSchema } from "@/lib/site";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { getArticle, blogArticles } from "@/lib/content";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const a = getArticle(params.slug);
    if (!a) return { meta: [{ title: "Article not found | Alpine Crest" }] };
    return {
      meta: [
        { title: `${a.title} | Alpine Crest Homestay` },
        { name: "description", content: a.excerpt },
        { property: "og:title", content: `${a.title} | Alpine Crest Homestay` },
        { property: "og:description", content: a.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${a.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${a.slug}` }],
      scripts: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: a.title, path: `/blog/${a.slug}` },
        ]),
      ],
    };
  },
  component: BlogArticlePage,
});

function BlogArticlePage() {
  const { slug } = Route.useParams();
  const article = getArticle(slug);
  if (!article) throw notFound();

  const others = blogArticles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Blog", path: "/blog" },
          { name: article.title },
        ]}
      />

      <article className="container-page py-10">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-pine"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All articles
        </Link>

        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {new Date(article.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {article.readTime}
          </span>
        </div>

        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">{article.title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {article.excerpt}
        </p>

        <div className="prose-stay mt-10 max-w-3xl">
          {article.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="mt-12 max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-soft">
          <h2 className="text-2xl">Plan your stay</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            If this guide was useful, consider staying with us. Alpine Crest
            Homestay is a peaceful mountain base near Theog, with easy access to
            all the destinations above.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <WhatsAppLink message={WA.general}>Check Availability</WhatsAppLink>
            <Link
              to="/rooms"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary"
            >
              View Rooms
            </Link>
          </div>
        </div>

        {article.relatedLinks.length > 0 && (
          <div className="mt-8 max-w-3xl">
            <p className="eyebrow">Related reading</p>
            <ul className="mt-4 grid gap-2">
              {article.relatedLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-moss hover:text-pine"
                  >
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>

      <section className="bg-secondary/60 py-16">
        <div className="container-page">
          <p className="eyebrow">More articles</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {others.map((a) => (
              <Link
                key={a.slug}
                to={`/blog/${a.slug}`}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-colors hover:bg-secondary"
              >
                <h2 className="text-xl">{a.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{a.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
