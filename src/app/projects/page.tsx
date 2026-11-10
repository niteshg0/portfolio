import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectList } from "@/components/sections/Projects";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected full-stack projects by Nitesh Kumar Gupta — the problem each one solves, what was built, and the stack behind it.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="container-page pb-20 pt-28 md:pb-28 md:pt-36">
      <Link
        href="/"
        className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
      >
        <ArrowLeft
          className="size-4 transition-transform group-hover:-translate-x-0.5"
          aria-hidden
        />
        Back to home
      </Link>

      <header className="mb-14 mt-8 max-w-2xl md:mb-20">
        <p className="label text-accent">Projects</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
          Things I&apos;ve designed, built and shipped.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          The problem each project set out to solve, what I built, and the
          stack behind it.
        </p>
      </header>

      <ProjectList headingLevel="h2" />

      <div className="mt-20 flex flex-col items-start gap-5 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-lg font-medium tracking-tight text-fg">
          Have a project or role in mind?
        </p>
        <ButtonLink href="/#contact" size="lg">
          Get in touch
        </ButtonLink>
      </div>
    </div>
  );
}
