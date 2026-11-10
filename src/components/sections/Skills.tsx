import { skillGroups } from "@/content/skills";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      eyebrow="Technical skills"
      title="The tools I reach for."
      lead="Grouped by where they sit in the stack. Highlighted items are the ones I use most."
    >
      <div className="border-b border-line">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 40}>
            <div className="grid gap-x-10 gap-y-4 border-t border-line py-7 md:grid-cols-12 md:py-8">
              <div className="md:col-span-4">
                <h3 className="flex items-baseline gap-3 text-lg font-semibold tracking-tight text-fg">
                  <span className="label w-5 shrink-0 text-subtle">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {group.title}
                </h3>
                <p className="mt-1.5 pl-8 text-sm text-muted">
                  {group.summary}
                </p>
              </div>

              <div className="pl-8 md:col-span-8 md:pl-0">
                <ul
                  aria-label={`${group.title} — core`}
                  className="flex flex-wrap gap-x-6 gap-y-2"
                >
                  {group.core.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-base font-medium text-fg sm:text-[1.0625rem]"
                    >
                      <span
                        aria-hidden
                        className="size-1.5 rounded-full bg-accent"
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
                <ul
                  aria-label={`${group.title} — also`}
                  className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-[0.8125rem] text-muted"
                >
                  {group.also.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
