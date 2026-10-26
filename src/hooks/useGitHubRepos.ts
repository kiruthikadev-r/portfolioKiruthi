import { useEffect, useState } from "react";

export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
}

type Status = "loading" | "success" | "error";

// Fetches real public repo data from the GitHub REST API - unauthenticated, so it only
// ever sees public repos, and is subject to GitHub's low unauthenticated rate limit.
// On any failure (rate limit, network, etc.) callers get status "error" and should
// render a fallback rather than fabricate repo data.
export function useGitHubRepos(username: string, limit = 6) {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    let cancelled = false;

    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=20`)
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
        return res.json();
      })
      .then((data: GitHubRepo[]) => {
        if (cancelled) return;
        const filtered = data.filter((r) => !r.fork).slice(0, limit);
        setRepos(filtered);
        setStatus("success");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [username, limit]);

  return { repos, status };
}
