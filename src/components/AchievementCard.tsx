import { Trophy, Award, ArrowUpRight } from "lucide-react";
import type { Achievement } from "../types";

export default function AchievementCard({ achievement, featured = false }: { achievement: Achievement; featured?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border p-7 ${
        featured
          ? "border-lime-400/30 bg-gradient-to-br from-ink-900 to-ink-950"
          : "border-ink-700 bg-ink-900/50"
      }`}
    >
      {featured && <div className="pointer-events-none absolute -top-10 right-[-10%] h-40 w-40 rounded-full bg-lime-400/10 blur-3xl" />}

      <div className="relative flex items-start justify-between">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${
            featured ? "bg-lime-400 text-ink-950" : "border border-ink-600 text-lime-400"
          }`}
        >
          {featured ? <Trophy size={20} /> : <Award size={18} />}
        </span>
        {featured && (
          <span className="font-mono rounded-full bg-lime-400/10 px-3 py-1 text-[11px] font-semibold tracking-widest text-lime-400">
            FIRST PLACE
          </span>
        )}
      </div>

      <h3 className="font-display relative mt-5 text-xl font-bold text-white sm:text-2xl">{achievement.title}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-ink-300">{achievement.description}</p>

      <div className="relative mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-ink-400">
        <span>{achievement.date}</span>
        {achievement.issuer && (
          <>
            <span className="text-ink-700">·</span>
            <span>{achievement.issuer}</span>
          </>
        )}
      </div>

      {achievement.url && (
        <a
          href={achievement.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-lime-400 hover:underline"
        >
          View Contribution <ArrowUpRight size={14} />
        </a>
      )}
    </div>
  );
}
