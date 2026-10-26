import { GraduationCap, Sparkles } from "lucide-react";
import { education } from "../data/education";
import Reveal from "./Reveal";

export default function EducationTimeline() {
  return (
    <div className="mt-20">
      <Reveal>
        <h3 className="font-mono text-xs tracking-[0.3em] text-ink-400">EDUCATION</h3>
      </Reveal>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {education.map((entry, i) => (
          <Reveal key={entry.degree} delay={0.08 * i}>
            <div className="flex items-start gap-4 rounded-xl border border-ink-700 bg-ink-900/40 p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-ink-600 text-lime-400">
                <GraduationCap size={16} />
              </span>
              <div>
                <p className="font-display font-semibold text-white">{entry.degree}</p>
                <p className="mt-0.5 text-sm text-ink-300">{entry.institution}</p>
                <p className="font-mono mt-1 text-xs text-ink-500">{entry.period}</p>
                {entry.details && (
                  <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-lime-400/10 px-2.5 py-1 text-xs font-medium text-lime-400">
                    <Sparkles size={11} /> {entry.details}
                  </span>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
