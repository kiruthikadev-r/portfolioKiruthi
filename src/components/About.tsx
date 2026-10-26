import { Check } from "lucide-react";
import { profile } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import kiruthikaPhoto from "../assets/kiruthika-photo.jpg";

export default function About() {
  return (
    <section id="about" className="border-b border-ink-700 py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="ABOUT" title="MORE THAN JUST WRITING CODE." />

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
          <Reveal delay={0.1}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-ink-700 bg-ink-900">
              <img
                src={kiruthikaPhoto}
                alt="Portrait of Kiruthika R"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 border-t border-ink-700 bg-ink-950/80 px-4 py-3 backdrop-blur">
                <p className="font-mono text-xs text-ink-400">{profile.location}</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-lg leading-relaxed text-ink-200 sm:text-xl">{profile.aboutBio}</p>
            </Reveal>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {profile.aboutHighlights.map((item, i) => (
                <Reveal key={item} delay={0.05 * i}>
                  <li className="flex items-start gap-2.5 rounded-lg border border-ink-700 bg-ink-900/60 px-4 py-3 text-sm text-ink-200">
                    <Check size={16} className="mt-0.5 shrink-0 text-lime-400" />
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
