import { Landmark, GraduationCap, Car, Newspaper, MessageCircle, type LucideIcon } from "lucide-react";

interface ProjectVisualProps {
  number: string;
  category: string;
  technologies: string[];
  icon?: "landmark" | "graduationCap" | "car" | "newspaper" | "messageCircle";
  visualCaption?: string;
  featured?: boolean;
  screenshot?: string; // real screenshot URL (imported asset) - takes priority over the icon tile
}

const ICONS: Record<NonNullable<ProjectVisualProps["icon"]>, LucideIcon> = {
  landmark: Landmark,
  graduationCap: GraduationCap,
  car: Car,
  newspaper: Newspaper,
  messageCircle: MessageCircle,
};

// No real screenshot? Say so, plainly - a large icon tile and an honest
// caption, never a fake UI mockup pretending to be a screenshot that isn't.
export default function ProjectVisual({
  number,
  category,
  technologies,
  icon = "landmark",
  visualCaption,
  featured = false,
  screenshot,
}: ProjectVisualProps) {
  const tags = technologies.slice(0, 4);
  const Icon = ICONS[icon];

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-ink-700 bg-gradient-to-br from-ink-800 to-ink-850 ${
        featured ? "aspect-[16/10]" : "aspect-[16/11]"
      }`}
    >
      {screenshot ? (
        <img
          src={screenshot}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top"
          loading="lazy"
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-lime-400/15 via-violet-400/10 to-transparent" />
          <div className="absolute inset-0 bg-grid opacity-[0.08]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-ink-600 bg-ink-900/70 text-lime-400 shadow-lg shadow-lime-400/5 backdrop-blur-sm sm:h-24 sm:w-24">
              <Icon size={36} strokeWidth={1.6} />
            </div>
            {visualCaption && (
              <p className="max-w-[240px] text-center font-mono text-[10px] uppercase leading-relaxed tracking-[0.15em] text-ink-400">
                {visualCaption}
              </p>
            )}
          </div>
        </>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-transparent to-transparent" />

      <span className="font-display absolute -bottom-8 -right-2 select-none text-[8rem] font-bold leading-none text-ink-700/40">
        {number}
      </span>

      <div className="absolute inset-x-5 bottom-5 flex flex-wrap items-end justify-between gap-2">
        {tags.length > 0 ? (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-ink-600 bg-ink-950/70 px-2 py-1 text-[10px] font-medium tracking-wide text-ink-200 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        ) : (
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">{category}</span>
        )}
      </div>
    </div>
  );
}
