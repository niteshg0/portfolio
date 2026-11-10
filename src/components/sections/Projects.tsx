import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { FeaturedProject, ProjectRow } from "./ProjectCase";

/** The list itself — shared by the home page section and /projects. */
export function ProjectList({
  headingLevel = "h3",
}: {
  headingLevel?: "h2" | "h3";
}) {
  let rowCount = 0;

  return (
    <div className="space-y-16 md:space-y-24">
      {projects.map((project, i) => {
        if (project.featured) {
          return (
            <Reveal key={project.slug}>
              <FeaturedProject
                project={project}
                index={i}
                headingLevel={headingLevel}
              />
            </Reveal>
          );
        }

        const flip = rowCount++ % 2 === 1;
        return (
          <Reveal key={project.slug}>
            <ProjectRow
              project={project}
              index={i}
              flip={flip}
              headingLevel={headingLevel}
            />
          </Reveal>
        );
      })}
    </div>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      index="04"
      eyebrow="Featured projects"
      title="Things I've designed, built and shipped."
      lead="Each one is live and open source — the problem it set out to solve, what I built, and the stack behind it."
    >
      <ProjectList />

      <Reveal>
        <p className="mt-16 border-t border-line pt-8 text-muted">
          More experiments and coursework live on{" "}
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link inline-flex items-center gap-1 font-medium text-fg hover:text-accent"
          >
            GitHub
            <ArrowUpRight className="size-4" aria-hidden />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          .
        </p>
      </Reveal>
    </Section>
  );
}
