import { activities, education } from "@/content/education";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Education() {
  return (
    <Section
      id="education"
      index="05"
      eyebrow="Education"
      title="Academic background."
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          {education.map((item) => (
            <Reveal key={item.institution}>
              <article className="border-t border-line pt-6">
                <p className="label">{item.period}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-fg sm:text-2xl">
                  {item.institution}
                </h3>
                <p className="mt-2 text-muted">{item.degree}</p>
                <dl className="mt-6 flex flex-wrap gap-x-12 gap-y-4">
                  <div>
                    <dt className="label">Location</dt>
                    <dd className="mt-1 text-sm text-fg">{item.location}</dd>
                  </div>
                  <div>
                    <dt className="label">Grade</dt>
                    <dd className="mt-1 text-sm text-fg">{item.detail}</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="lg:col-span-5">
          <ul className="space-y-8">
            {activities.map((item, i) => (
              <li key={item.title}>
                <Reveal delay={i * 60}>
                  <div className="border-t border-line pt-6">
                    <p className="label">{item.meta}</p>
                    <h3 className="mt-3 text-[1.0625rem] font-semibold tracking-tight text-fg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
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
