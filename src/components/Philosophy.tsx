import { philosophy } from "../data/philosophy";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Philosophy() {
  return (
    <section className="border-b border-ink-700 py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="APPROACH" title="HOW I APPROACH SOFTWARE ENGINEERING" />

        <div className="mt-16 divide-y divide-ink-700 border-t border-ink-700">
          {philosophy.map((principle, i) => (
            <Reveal key={principle.number} delay={0.08 * i}>
              <div className="group grid grid-cols-1 items-start gap-4 py-10 sm:grid-cols-[auto_1fr] sm:gap-10">
                <span className="font-display text-5xl font-bold text-ink-700 transition-colors group-hover:text-lime-400 sm:text-6xl">
                  {principle.number}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">{principle.title}</h3>
                  <p className="mt-2 max-w-2xl text-ink-300">{principle.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
