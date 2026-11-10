import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { navLinks, site } from "@/content/site";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-tight text-fg">
              {site.name}
            </p>
            <p className="mt-1 text-sm text-muted">{site.role}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={`/#${link.id}`}
                    className="link hover:text-fg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <SocialLinks className="-ml-2.5 md:ml-0" />
        </div>

        <div className="mt-8 flex items-center justify-between gap-4 border-t border-line pt-6">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {site.name}. Built with Next.js and
            Tailwind CSS.
          </p>
          <a
            href="#top"
            className="flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-fg"
          >
            Back to top
            <ArrowUp className="size-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
