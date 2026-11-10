"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/content/site";
import { cn } from "@/lib/utils";
import { buttonStyles } from "@/components/ui/Button";
import { ThemeToggle } from "./ThemeToggle";

/** Tracks which section is currently in the middle of the viewport. */
function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => n !== null);
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

// "top" is the hero: observing it clears the highlight above the first section.
const sectionIds = ["top", ...navLinks.map((l) => l.id)];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu: lock page scroll, close on Escape or when resizing to desktop.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onResize = () => mq.matches && setOpen(false);

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300",
        scrolled || open
          ? "border-line bg-bg/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
      >
        Skip to content
      </a>

      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5 rounded-full"
          aria-label={`${site.name} — home`}
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-fg font-mono text-xs font-semibold tracking-tight text-bg">
            {site.initials}
          </span>
          <span className="whitespace-nowrap text-sm font-semibold tracking-tight text-fg">
            {site.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={`/#${link.id}`}
                  aria-current={active === link.id ? "true" : undefined}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm transition-colors",
                    active === link.id
                      ? "text-fg"
                      : "text-muted hover:text-fg"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyles({
              variant: "secondary",
              className: "ml-1 hidden sm:inline-flex",
            })}
          >
            Résumé
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-10 items-center justify-center rounded-full text-fg transition-colors hover:bg-surface-2 lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden />
            ) : (
              <Menu className="size-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-bg lg:hidden"
      >
        <nav
          aria-label="Mobile"
          className="container-page flex h-[calc(100dvh-4rem)] flex-col overflow-y-auto pb-8 pt-4"
        >
          <ul>
            {navLinks.map((link, i) => (
              <li key={link.id} className="border-b border-line">
                <Link
                  href={`/#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4 text-2xl font-semibold tracking-tight text-fg"
                >
                  <span className="label w-6 text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3 pt-8">
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonStyles({ variant: "primary", size: "lg" })}
            >
              View résumé
            </a>
            <a
              href={`mailto:${site.email}`}
              className={buttonStyles({ variant: "secondary", size: "lg" })}
            >
              {site.email}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
