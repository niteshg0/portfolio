import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

/**
 * Standard page section: hairline divider, numbered eyebrow, heading and
 * optional lead paragraph. Keeps vertical rhythm identical across the site.
 */
export function Section({
  id,
  index,
  eyebrow,
  title,
  lead,
  children,
  className,
}: {
  id: string;
  /** Two-digit ordinal shown before the eyebrow, e.g. "02". */
  index: string;
  eyebrow: string;
  title: string;
  lead?: string;
  children: ReactNode;
  className?: string;
}) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("border-t border-line py-20 md:py-28", className)}
    >
      <div className="container-page">
        <Reveal>
          <header className="mb-12 max-w-2xl md:mb-16">
            <p className="label flex items-center gap-3">
              <span className="text-accent">{index}</span>
              <span aria-hidden className="h-px w-8 bg-line-strong" />
              {eyebrow}
            </p>
            <h2
              id={headingId}
              className="mt-5 text-3xl font-semibold tracking-tight text-fg sm:text-4xl md:text-[2.75rem] md:leading-[1.1]"
            >
              {title}
            </h2>
            {lead ? (
              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                {lead}
              </p>
            ) : null}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
