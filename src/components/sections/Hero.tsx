import { ArrowDownRight, Download, MapPin } from "lucide-react";
import { hero, site } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-16"
    >
      <div aria-hidden className="grid-backdrop absolute inset-0 -z-10" />

      <div className="container-page grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-28">
        <div className="lg:col-span-7">
          <Reveal>
            {site.availability.show ? (
              <p className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface py-1.5 pl-3 pr-4 text-xs font-medium text-fg">
                <span className="relative flex size-2">
                  <span className="absolute inset-0 animate-pulse-dot rounded-full bg-success" />
                  <span className="relative size-2 rounded-full bg-success" />
                </span>
                {site.availability.label}
              </p>
            ) : null}

            <h1 id="hero-heading">
              <span className="label block">
                {site.name}
                <span className="mx-2 text-line-strong">/</span>
                <span className="text-accent">{hero.eyebrow}</span>
              </span>
              <span className="mt-5 block text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.035em] text-fg sm:text-6xl lg:text-[4.25rem]">
                {hero.headline}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {hero.description}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <ButtonLink href="/#projects" size="lg">
                View Projects
                <ArrowDownRight
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  aria-hidden
                />
              </ButtonLink>
              <ButtonLink href="/#contact" size="lg" variant="secondary">
                Contact Me
              </ButtonLink>
              <ButtonLink
                href={site.resumeUrl}
                download={site.resumeFileName}
                size="lg"
                variant="ghost"
              >
                <Download className="size-4" aria-hidden />
                Download Resume
              </ButtonLink>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-line pt-6">
              <SocialLinks className="-ml-2.5" />
              <p className="flex items-center gap-1.5 text-sm text-muted">
                <MapPin className="size-4" aria-hidden />
                {site.location}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={250} className="lg:col-span-5">
          <StackDiagram />
        </Reveal>
      </div>
    </section>
  );
}

/**
 * The hero visual: a request travelling through the four layers I work on.
 * Pure HTML/CSS — no canvas, no images.
 */
function StackDiagram() {
  return (
    <figure className="rounded-2xl border border-line bg-surface shadow-soft">
      <figcaption className="flex items-center justify-between border-b border-line px-5 py-3">
        <span className="label">what-i-build.stack</span>
        <span aria-hidden className="flex gap-1.5">
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-accent" />
        </span>
      </figcaption>

      <ol className="relative px-5 py-2">
        {/* Rail + travelling signal */}
        <span
          aria-hidden
          className="absolute bottom-9 left-[1.6875rem] top-9 w-px bg-line-strong"
        >
          <span className="absolute -left-[2.5px] size-1.5 animate-signal rounded-full bg-accent shadow-[0_0_0_4px_var(--accent-soft)]" />
        </span>

        {hero.stack.map((row, i) => (
          <li
            key={row.layer}
            className="relative flex gap-5 border-b border-line py-5 last:border-b-0"
          >
            <span
              aria-hidden
              className="relative z-10 mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border border-line-strong bg-surface"
            >
              <span className="size-1 rounded-full bg-subtle" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-[0.9375rem] font-semibold tracking-tight text-fg">
                  {row.layer}
                </p>
                <span className="label text-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-muted">{row.detail}</p>
              <p className="mt-2.5 font-mono text-xs leading-5 text-fg/80">
                {row.tech.join("  ·  ")}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}
