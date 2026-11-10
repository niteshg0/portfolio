import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[70dvh] flex-col items-start justify-center pt-16">
      <p className="label text-accent">404</p>
      <h1 className="mt-5 text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 text-muted">
        The link may be broken, or the page may have moved.
      </p>
      <ButtonLink href="/" size="lg" className="mt-8">
        Back to home
      </ButtonLink>
    </div>
  );
}
