import { experience } from "../data/experience";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="border-b border-ink-700 py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="EXPERIENCE" title="WHERE I'VE BEEN BUILDING." />

        <div className="mt-14 space-y-10 border-l border-ink-700 pl-8 sm:pl-10">
          {experience.map((role, i) => (
            <Reveal key={role.company} delay={0.08 * i}>
              <div className="relative">
                <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-ink-950 bg-lime-400 sm:-left-[49px]" />

                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{role.role}</h3>
                  <span className="font-mono text-xs text-ink-400">
                    {role.period}
                    {role.isPlaceholderDates && <span className="text-ink-600"> · dates unconfirmed</span>}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-lime-400">
                  {role.company} <span className="text-ink-400">· {role.location}</span>
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-300">{role.summary}</p>

                <ul className="mt-4 space-y-1.5 text-sm text-ink-300">
                  {role.responsibilities.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-ink-600">-</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {role.technologies.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {role.technologies.map((tech) => (
                      <span key={tech} className="rounded-full bg-ink-800 px-2.5 py-1 text-xs text-ink-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
