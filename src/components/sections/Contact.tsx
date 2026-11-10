import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "./ContactForm";

const channels = [
  {
    label: "LinkedIn",
    value: "in/niteshg0",
    href: site.social.linkedin,
  },
  {
    label: "GitHub",
    value: "@niteshg0",
    href: site.social.github,
  },
  {
    label: "Résumé",
    value: "View PDF",
    href: site.resumeUrl,
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      index="06"
      eyebrow="Contact"
      title="Let's build something together."
      lead="I'm open to software engineering roles, internships and freelance collaborations — full-stack, AI, or both. If you think I could be a good fit, I'd like to hear from you."
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <p className="label">Email</p>
          <CopyEmail email={site.email} />

          <dl className="mt-10">
            {channels.map((c) => (
              <div
                key={c.label}
                className="flex items-center justify-between gap-4 border-t border-line py-4 last:border-b"
              >
                <dt className="label">{c.label}</dt>
                <dd>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link inline-flex items-center gap-1 text-[0.9375rem] font-medium text-fg hover:text-accent"
                  >
                    {c.value}
                    <ArrowUpRight className="size-4" aria-hidden />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-sm text-muted">
            Based in {site.location}. Comfortable working remotely.
          </p>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-7">
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
