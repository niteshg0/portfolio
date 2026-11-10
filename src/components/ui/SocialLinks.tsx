import { Mail } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { GithubIcon, LinkedinIcon } from "./Icons";

const links = [
  { label: "GitHub", href: site.social.github, Icon: GithubIcon, external: true },
  {
    label: "LinkedIn",
    href: site.social.linkedin,
    Icon: LinkedinIcon,
    external: true,
  },
  { label: "Email", href: `mailto:${site.email}`, Icon: Mail, external: false },
];

/** Icon-only social links, used in the hero and footer. */
export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-1", className)}>
      {links.map(({ label, href, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={external ? `${label} (opens in a new tab)` : label}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="flex size-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-fg"
          >
            <Icon className="size-[1.125rem]" />
          </a>
        </li>
      ))}
    </ul>
  );
}
