import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="container-page grid items-center gap-10 py-12 md:py-16 lg:grid-cols-2">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 text-4xl leading-[1.1] sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          {intro}
        </p>
        {children && <div className="mt-7 flex flex-wrap gap-3">{children}</div>}
      </div>
      {image && (
        <div className="overflow-hidden rounded-2xl shadow-soft">
          <img
            src={image}
            alt={imageAlt ?? title}
            width={1360}
            height={1020}
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>
      )}
    </section>
  );
}
