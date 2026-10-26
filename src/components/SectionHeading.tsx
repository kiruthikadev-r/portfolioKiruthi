import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ eyebrow, title, subtitle, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <Reveal>
        <span className="font-mono text-xs tracking-[0.3em] text-lime-400">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-3 text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p className={`mt-4 max-w-xl text-ink-300 ${align === "center" ? "mx-auto" : ""}`}>{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
