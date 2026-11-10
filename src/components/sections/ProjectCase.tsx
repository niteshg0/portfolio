import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { ButtonLink } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/Icons";
import { TechList } from "@/components/ui/TechList";

function hostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function ProjectLinks({ project }: { project: Project }) {
  if (!project.liveUrl && !project.githubUrl) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {project.liveUrl ? (
        <ButtonLink href={project.liveUrl} external>
          Live demo
          <ArrowUpRight
            className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden
          />
          <span className="sr-only">
            of {project.title} (opens in a new tab)
          </span>
        </ButtonLink>
      ) : null}
      {project.githubUrl ? (
        <ButtonLink href={project.githubUrl} external variant="secondary">
          <GithubIcon className="size-4" />
          Source code
          <span className="sr-only">
            for {project.title} (opens in a new tab)
          </span>
        </ButtonLink>
      ) : null}
    </div>
  );
}

function Preview({
  project,
  sizes,
  priority,
}: {
  project: Project;
  sizes: string;
  priority?: boolean;
}) {
  const frame = (
    <BrowserFrame
      url={project.liveUrl ? hostname(project.liveUrl) : undefined}
      className="transition-transform duration-500 ease-out group-hover/preview:-translate-y-1"
    >
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width}
        height={project.image.height}
        sizes={sizes}
        priority={priority}
        className="h-auto w-full"
      />
    </BrowserFrame>
  );

  if (!project.liveUrl) return frame;

  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={-1}
      aria-hidden
      className="group/preview block rounded-xl"
    >
      {frame}
    </a>
  );
}

function Meta({ project, index }: { project: Project; index: number }) {
  return (
    <p className="label flex flex-wrap items-center gap-x-3 gap-y-1">
      <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
      <span aria-hidden className="h-px w-6 bg-line-strong" />
      {project.tagline}
      <span aria-hidden className="text-line-strong">
        /
      </span>
      {project.year}
    </p>
  );
}

function Details({ project }: { project: Project }) {
  return (
    <>
      <div>
        <h4 className="label">The problem</h4>
        <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">
          {project.problem}
        </p>
      </div>
      <div>
        <h4 className="label">What I built</h4>
        <ul className="mt-2.5 space-y-2">
          {project.highlights.map((item) => (
            <li
              key={item}
              className="relative pl-5 text-[0.9375rem] leading-relaxed text-fg/90 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-accent"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

/** Large, full-width case study for featured projects. */
export function FeaturedProject({
  project,
  index,
  headingLevel: Heading = "h3",
}: {
  project: Project;
  index: number;
  headingLevel?: "h2" | "h3";
}) {
  return (
    <article className="rounded-3xl border border-line bg-surface p-5 sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Meta project={project} index={index} />
          <Heading className="mt-4 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            {project.title}
          </Heading>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-[1.0625rem]">
            {project.description}
          </p>
          <div className="mt-7">
            <ProjectLinks project={project} />
          </div>
        </div>
        <div className="lg:col-span-7">
          <Preview
            project={project}
            sizes="(min-width: 1024px) 620px, 100vw"
            priority
          />
        </div>
      </div>

      <div className="mt-10 grid gap-8 border-t border-line pt-8 md:grid-cols-2 lg:gap-10">
        <Details project={project} />
      </div>

      <div className="mt-8 border-t border-line pt-6">
        <TechList items={project.tech} label={`${project.title} tech stack`} />
      </div>
    </article>
  );
}

/** Two-column row; the preview alternates sides via `flip`. */
export function ProjectRow({
  project,
  index,
  flip,
  headingLevel: Heading = "h3",
}: {
  project: Project;
  index: number;
  flip?: boolean;
  headingLevel?: "h2" | "h3";
}) {
  return (
    <article className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <div className={cn("lg:col-span-6", flip && "lg:order-2")}>
        <div className="lg:sticky lg:top-24">
          <Preview
            project={project}
            sizes="(min-width: 1024px) 540px, 100vw"
          />
        </div>
      </div>

      <div className="lg:col-span-6">
        <Meta project={project} index={index} />
        <Heading className="mt-4 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
          {project.title}
        </Heading>
        <p className="mt-3 leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-7 space-y-6">
          <Details project={project} />
        </div>

        <TechList
          items={project.tech}
          label={`${project.title} tech stack`}
          className="mt-6 border-t border-line pt-5"
        />

        <div className="mt-6">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}
