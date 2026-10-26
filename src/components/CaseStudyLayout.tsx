import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import Footer from "./Footer";
import type { CaseStudyData } from "../types/caseStudy";

function useDocumentMeta(title: string, description: string) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    const setMeta = (selector: string, content: string) => {
      const el = document.head.querySelector<HTMLMetaElement>(selector);
      if (el) el.setAttribute("content", content);
    };
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    return () => {
      document.title = prevTitle;
    };
  }, [title, description]);
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="font-mono text-xs tracking-[0.3em] text-lime-400">{children}</span>;
}

function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="font-display mt-3 text-3xl font-bold leading-[1.05] text-white sm:text-4xl">{children}</h2>;
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="border-b border-ink-700 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <SectionTitle>{title}</SectionTitle>
        </Reveal>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function Prose({ text }: { text: string }) {
  return (
    <div className="space-y-4 text-sm leading-relaxed text-ink-300 sm:text-base">
      {text
        .trim()
        .split(/\n\n+/)
        .map((para) => (
          <p key={para.slice(0, 24)}>{para.replace(/\n/g, " ")}</p>
        ))}
    </div>
  );
}

function Pill({ children }: { children: string }) {
  return <span className="rounded-full bg-ink-800 px-3 py-1.5 text-xs font-medium text-ink-200">{children}</span>;
}

// Tailwind needs literal class names in source to generate them - a
// template-string class (`grid-cols-${n}`) would silently produce no CSS.
const GRID_COLS_SM: Record<number, string> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((p) => (
        <li key={p.slice(0, 32)} className="flex gap-3 text-sm leading-relaxed text-ink-300 sm:text-base">
          <ArrowRight size={16} className="mt-1 shrink-0 text-lime-400" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudyLayout({ data }: { data: CaseStudyData }) {
  useDocumentMeta(`${data.meta.title} | Kiruthika R`, data.meta.tagline);

  return (
    <div className="min-h-screen bg-ink-950">
      <header className="sticky top-0 z-50 border-b border-ink-700 bg-ink-950/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-300 transition-colors hover:text-lime-400"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          <span className="font-display hidden text-sm font-bold text-white sm:inline">Kiruthika R</span>
        </div>
      </header>

      <main>
        <section className="border-b border-ink-700 bg-grid py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <Reveal>
              <Eyebrow>CASE STUDY &middot; {data.meta.status.toUpperCase()}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-display mt-4 text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl">
                {data.meta.title}
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-2xl text-base text-ink-300 sm:text-lg">{data.meta.tagline}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {data.meta.pills.map((p) => (
                  <Pill key={p}>{p}</Pill>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {data.blocks.map((block) => {
          switch (block.kind) {
            case "prose":
              return (
                <Section key={block.id} id={block.id} eyebrow={block.eyebrow} title={block.title}>
                  <Prose text={block.text} />
                </Section>
              );

            case "bullets":
              return (
                <Section key={block.id} id={block.id} eyebrow={block.eyebrow} title={block.title}>
                  {block.intro && <Prose text={block.intro} />}
                  <div className={block.intro ? "mt-6" : ""}>
                    <BulletList items={block.items} />
                  </div>
                </Section>
              );

            case "cards":
              return (
                <Section key={block.id} id={block.id} eyebrow={block.eyebrow} title={block.title}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {block.items.map((m) => (
                      <Reveal key={m.title}>
                        <div className="h-full rounded-2xl border border-ink-700 bg-ink-900/40 p-5 transition-colors hover:border-lime-400/30">
                          <h3 className="font-display text-lg font-bold text-white">{m.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-ink-300">{m.description}</p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </Section>
              );

            case "pillGroups":
              return (
                <Section key={block.id} id={block.id} eyebrow={block.eyebrow} title={block.title}>
                  <div className={`grid gap-8 ${GRID_COLS_SM[Math.min(block.groups.length, 4)] ?? "sm:grid-cols-3"}`}>
                    {block.groups.map((g) => (
                      <div key={g.label}>
                        <p className="mb-3 font-mono text-xs tracking-widest text-ink-500">{g.label.toUpperCase()}</p>
                        <div className="flex flex-wrap gap-2">
                          {g.items.map((t) => (
                            <Pill key={t}>{t}</Pill>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Section>
              );

            case "architecture":
              return (
                <Section key={block.id} id={block.id} eyebrow={block.eyebrow} title={block.title}>
                  {block.intro && (
                    <p className="mb-8 text-sm leading-relaxed text-ink-400 sm:text-base">{block.intro}</p>
                  )}
                  <div className="space-y-4">
                    {block.layers.map((layer, i) => (
                      <div key={layer.label}>
                        <Reveal>
                          <div className="rounded-2xl border border-ink-700 bg-ink-900/40 p-5">
                            <p className="font-mono text-xs tracking-widest text-lime-400">{layer.label.toUpperCase()}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {layer.items.map((item) => (
                                <span
                                  key={item}
                                  className="rounded-lg border border-ink-600 bg-ink-850 px-3 py-2 text-xs text-ink-200 sm:text-sm"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </Reveal>
                        {i < block.layers.length - 1 && (
                          <div className="flex justify-center py-2">
                            <div className="h-6 w-px bg-ink-600" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </Section>
              );

            case "challenges":
              return (
                <Section key={block.id} id={block.id} eyebrow={block.eyebrow} title={block.title}>
                  <div className="space-y-5">
                    {block.items.map((c) => (
                      <Reveal key={c.title}>
                        <div className="rounded-2xl border border-ink-700 bg-ink-900/40 p-5 sm:p-6">
                          <h3 className="font-display text-lg font-bold text-white">{c.title}</h3>
                          <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            <div>
                              <p className="mb-1.5 font-mono text-xs tracking-widest text-ink-500">PROBLEM</p>
                              <p className="text-sm leading-relaxed text-ink-300">{c.problem}</p>
                            </div>
                            <div>
                              <p className="mb-1.5 font-mono text-xs tracking-widest text-lime-400">SOLUTION</p>
                              <p className="text-sm leading-relaxed text-ink-300">{c.solution}</p>
                            </div>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </Section>
              );

            case "gallery":
              return (
                <Section key={block.id} id={block.id} eyebrow={block.eyebrow} title={block.title}>
                  {block.intro && <p className="mb-8 text-sm leading-relaxed text-ink-400 sm:text-base">{block.intro}</p>}
                  <div className="grid gap-6 sm:grid-cols-2">
                    {block.images.map((img) => (
                      <Reveal key={img.src}>
                        <figure className="overflow-hidden rounded-2xl border border-ink-700 bg-ink-900">
                          <img src={img.src} alt={img.alt} className="w-full object-cover object-top" loading="lazy" />
                          <figcaption className="border-t border-ink-700 px-4 py-3 text-xs text-ink-400">
                            {img.caption}
                          </figcaption>
                        </figure>
                      </Reveal>
                    ))}
                  </div>
                </Section>
              );

            case "note":
              return (
                <section key={block.id} id={block.id} className="py-16 sm:py-20">
                  <div className="mx-auto max-w-5xl px-5 sm:px-8">
                    <Reveal>
                      <div className="flex items-start gap-3 rounded-2xl border border-dashed border-ink-600 bg-ink-900/60 p-5 sm:p-6">
                        {block.icon === "shield" ? (
                          <ShieldCheck size={20} className="mt-0.5 shrink-0 text-lime-400" />
                        ) : (
                          <Sparkles size={20} className="mt-0.5 shrink-0 text-lime-400" />
                        )}
                        <div>
                          <p className="font-mono text-xs tracking-widest text-ink-500">{block.label}</p>
                          <p className="mt-2 text-sm leading-relaxed text-ink-400">{block.text}</p>
                        </div>
                      </div>
                    </Reveal>

                    <div className="mt-10 text-center">
                      <Link
                        to="/"
                        className="inline-flex items-center gap-2 rounded-full border border-ink-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-lime-400 hover:text-lime-400"
                      >
                        <ArrowLeft size={15} /> Back to Portfolio
                      </Link>
                    </div>
                  </div>
                </section>
              );

            default:
              return null;
          }
        })}
      </main>

      <Footer />
    </div>
  );
}
