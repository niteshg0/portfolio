import Image from "next/image";
import { about } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title="Developer across the stack, with a growing focus on AI."
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-4">
          <div className="flex items-center gap-5 lg:block">
            <Image
              src={about.photo.src}
              alt={about.photo.alt}
              width={490}
              height={550}
              sizes="(min-width: 1024px) 320px, 96px"
              className="size-24 shrink-0 rounded-2xl border border-line object-cover object-top lg:aspect-[4/5] lg:size-auto lg:w-full lg:max-w-xs"
            />
            <dl className="grid flex-1 gap-3 lg:mt-8 lg:max-w-xs lg:gap-0">
              {about.facts.map((fact, i) => (
                <div
                  key={fact.label}
                  className={
                    i < 2
                      ? "lg:border-t lg:border-line lg:py-3"
                      : "hidden border-line lg:block lg:border-t lg:py-3"
                  }
                >
                  <dt className="label">{fact.label}</dt>
                  <dd className="mt-1 text-sm text-fg">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <div className="lg:col-span-8">
          <Reveal>
            <div className="max-w-2xl space-y-5">
              {about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-xl leading-relaxed tracking-tight text-fg sm:text-2xl sm:leading-snug"
                      : "text-base leading-relaxed text-muted sm:text-[1.0625rem]"
                  }
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <ul className="mt-12 grid gap-x-10 sm:grid-cols-2">
            {about.capabilities.map((item, i) => (
              <li key={item.title}>
                <Reveal delay={i * 60}>
                  <div className="border-t border-line py-5">
                    <h3 className="flex items-baseline gap-3 text-[0.9375rem] font-semibold tracking-tight text-fg">
                      <span className="label text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.title}
                    </h3>
                    <p className="mt-2 pl-8 text-sm leading-relaxed text-muted">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
