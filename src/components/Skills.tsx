import { skillCategories } from "../data/skills";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-ink-700 py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="SKILLS"
          title="TECHNOLOGIES I WORK WITH."
          subtitle="Grouped by area, not ranked by arbitrary percentages - the real signal is in the projects below."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title} delay={0.06 * i}>
              <div className="group h-full rounded-2xl border border-ink-700 bg-ink-900/50 p-6 transition-colors hover:border-lime-400/40">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-ink-300 group-hover:text-lime-400">
                  {category.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-ink-600 px-3 py-1.5 text-sm text-ink-200 transition-colors hover:border-lime-400 hover:text-lime-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
