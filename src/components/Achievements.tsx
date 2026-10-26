import { achievements } from "../data/achievements";
import AchievementCard from "./AchievementCard";
import EducationTimeline from "./EducationTimeline";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Achievements() {
  return (
    <section id="achievements" className="border-b border-ink-700 py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="ACHIEVEMENTS" title="RECOGNITION & CREDENTIALS." />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {achievements.map((achievement, i) => (
            <Reveal key={achievement.title} delay={0.1 * i}>
              <AchievementCard achievement={achievement} featured={i === 0} />
            </Reveal>
          ))}
        </div>

        <EducationTimeline />
      </div>
    </section>
  );
}
