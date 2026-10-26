import { Star, ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";
import { useGitHubRepos } from "../hooks/useGitHubRepos";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function GitHubSection() {
  const { repos, status } = useGitHubRepos(profile.githubUsername, 6);

  return (
    <section className="border-b border-ink-700 py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="ELSEWHERE" title="FIND ME ONLINE." />

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
          >
            <GithubIcon size={16} /> GitHub Profile
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ink-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-lime-400 hover:text-lime-400"
          >
            <LinkedinIcon size={16} /> LinkedIn Profile
          </a>
        </div>

        <div className="mt-12">
          {status === "loading" && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-32 animate-pulse rounded-xl border border-ink-700 bg-ink-900/40" />
              ))}
            </div>
          )}

          {status === "error" && (
            <p className="rounded-xl border border-dashed border-ink-700 px-5 py-6 text-sm text-ink-400">
              Couldn't load live repository data from GitHub right now (likely a rate limit on unauthenticated
              requests) - visit the profile link above for the full list.
            </p>
          )}

          {status === "success" && repos.length === 0 && (
            <p className="rounded-xl border border-dashed border-ink-700 px-5 py-6 text-sm text-ink-400">
              No public repositories found yet.
            </p>
          )}

          {status === "success" && repos.length > 0 && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo, i) => (
                <Reveal key={repo.id} delay={0.05 * i}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col justify-between rounded-xl border border-ink-700 bg-ink-900/40 p-5 transition-colors hover:border-lime-400/40"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-display font-semibold text-white group-hover:text-lime-400">{repo.name}</h3>
                        <ArrowUpRight size={15} className="mt-0.5 shrink-0 text-ink-500 group-hover:text-lime-400" />
                      </div>
                      {repo.description && (
                        <p className="mt-2 line-clamp-2 text-sm text-ink-400">{repo.description}</p>
                      )}
                    </div>
                    <div className="mt-4 flex items-center gap-3 font-mono text-xs text-ink-500">
                      {repo.language && (
                        <span className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-lime-400" />
                          {repo.language}
                        </span>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1">
                          <Star size={11} /> {repo.stargazers_count}
                        </span>
                      )}
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
