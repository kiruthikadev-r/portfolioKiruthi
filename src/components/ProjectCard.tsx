import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronDown, FileText, Info } from "lucide-react";
import type { Project } from "../types";
import Reveal from "./Reveal";
import ProjectVisual from "./ProjectVisual";
import { GithubIcon } from "./BrandIcons";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  reverse?: boolean;
}

function LinkPill({ label, url, icon }: { label: string; url: string | null; icon: React.ReactNode }) {
  if (!url) {
    return (
      <span
        className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-full border border-ink-700 px-4 py-2 text-xs font-medium text-ink-500"
        title={`${label} not public yet`}
      >
        {icon} {label} - not public yet
      </span>
    );
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-ink-600 px-4 py-2 text-xs font-medium text-white transition-colors hover:border-lime-400 hover:text-lime-400"
    >
      {icon} {label}
    </a>
  );
}

export default function ProjectCard({ project, featured = false, reverse = false }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const hasDetails =
    project.overview || project.features.length > 0 || project.contributions.length > 0 || project.caseStudy;

  return (
    <Reveal>
      <article
        className={`group rounded-2xl border border-ink-700 bg-gradient-to-br from-ink-800 to-ink-850 p-5 transition-colors hover:border-lime-400/30 sm:p-7 ${
          featured ? "grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center" : ""
        } ${reverse ? "lg:[direction:rtl] [&>*]:[direction:ltr]" : ""}`}
      >
        <div className="overflow-hidden rounded-xl">
          <div className="transition-transform duration-500 group-hover:scale-[1.03]">
            <ProjectVisual
              number={project.number}
              category={project.category}
              technologies={project.technologies}
              icon={project.icon}
              visualCaption={project.visualCaption}
              screenshot={project.screenshot}
              featured={featured}
            />
          </div>
        </div>

        <div className={featured ? "" : "mt-6"}>
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-xs tracking-widest text-ink-400">{project.category}</span>
            <span className="font-mono text-xs text-ink-600">{project.number}</span>
          </div>

          <h3 className="font-display mt-2 text-2xl font-bold text-white sm:text-3xl">{project.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-300 sm:text-base">{project.summary}</p>

          {project.technologies.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-full bg-ink-800 px-2.5 py-1 text-xs text-ink-200">
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="mt-5 flex flex-wrap gap-2.5">
            <LinkPill label={project.links.live.label} url={project.links.live.url} icon={<ArrowUpRight size={13} />} />
            <LinkPill label={project.links.source.label} url={project.links.source.url} icon={<GithubIcon size={13} />} />
            {project.caseStudyPath && (
              <Link
                to={project.caseStudyPath}
                className="inline-flex items-center gap-1.5 rounded-full border border-lime-400/40 px-4 py-2 text-xs font-medium text-lime-400 transition-colors hover:bg-lime-400/10"
              >
                <FileText size={13} /> Read Full Case Study
              </Link>
            )}
            {!project.caseStudyPath && hasDetails && (
              <button
                onClick={() => setOpen((v) => !v)}
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium text-lime-400 hover:underline"
                aria-expanded={open}
              >
                Read Case Study
                <ChevronDown size={13} className={`transition-transform ${open ? "rotate-180" : ""}`} />
              </button>
            )}
          </div>

          {open && (
            <div className="mt-5 space-y-4 border-t border-ink-700 pt-5 text-sm text-ink-300">
              {project.overview && <p className="leading-relaxed">{project.overview}</p>}

              {project.features.length > 0 && (
                <div>
                  <p className="mb-1.5 font-mono text-xs tracking-widest text-ink-500">FEATURES</p>
                  <ul className="list-inside list-disc space-y-1">
                    {project.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.contributions.length > 0 && (
                <div>
                  <p className="mb-1.5 font-mono text-xs tracking-widest text-ink-500">MY CONTRIBUTIONS</p>
                  <ul className="list-inside list-disc space-y-1">
                    {project.contributions.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.caseStudy && <p className="leading-relaxed text-ink-400">{project.caseStudy}</p>}

              {project.placeholderNote && (
                <div className="flex items-start gap-2 rounded-lg border border-dashed border-ink-600 bg-ink-900/60 px-3 py-2.5 text-xs text-ink-400">
                  <Info size={14} className="mt-0.5 shrink-0" />
                  {project.placeholderNote}
                </div>
              )}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}
