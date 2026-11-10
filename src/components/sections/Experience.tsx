import { ArrowUpRight } from "lucide-react";
import { experience } from "@/content/experience";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TechList } from "@/components/ui/TechList";

export function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      eyebrow="Experience"
      title="Where I've worked and trained."
    >
      <ol>
        {experience.map((job, i) => (
          <li key={`${job.company}-${job.period}`}>
            <Reveal delay={i * 60}>
              <article className="grid gap-x-10 gap-y-3 pb-12 md:grid-cols-4 md:pb-0 [li:last-child_&]:pb-0">
                <div className="md:col-span-1 md:pr-4">
                  <p className="label text-fg">{job.period}</p>
                  <p className="mt-1.5 text-sm text-muted">
                    {job.type} · {job.location}
                  </p>
                </div>

                <div
                  className={cn(
                    "relative md:col-span-3 md:border-l md:border-line md:pl-10",
                    i < experience.length - 1 && "md:pb-16"
                  )}
                >
                  {/* Node on the timeline rail */}
                  <span
                    aria-hidden
                    className="absolute -left-[6px] top-1.5 hidden size-[11px] rounded-full border-2 border-bg md:block"
                    style={{
                      background: job.current
                        ? "var(--accent)"
                        : "var(--line-strong)",
                    }}
                  />

                  <h3 className="text-xl font-semibold tracking-tight text-fg">
                    {job.role}
                  </h3>
                  <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.9375rem] text-muted">
                    {job.companyUrl ? (
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link inline-flex items-center gap-1 text-fg hover:text-accent"
                      >
                        {job.company}
                        <ArrowUpRight className="size-3.5" aria-hidden />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    ) : (
                      <span className="text-fg">{job.company}</span>
                    )}
                    {job.current ? (
                      <span className="rounded-full bg-accent-soft px-2 py-0.5 font-mono text-[0.6875rem] uppercase tracking-wider text-accent">
                        Current
                      </span>
                    ) : null}
                  </p>

                  <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                    {job.summary}
                  </p>

                  <ul className="mt-4 max-w-2xl space-y-2.5">
                    {job.highlights.map((item) => (
                      <li
                        key={item}
                        className="relative pl-5 text-[0.9375rem] leading-relaxed text-fg/90 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-accent"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <TechList items={job.tech} className="mt-5" />
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
