import { Mail } from "lucide-react";
import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Footer() {
  return (
    <footer className="border-t border-ink-700 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 sm:flex-row sm:justify-between sm:px-8">
        <p className="font-mono text-xs text-ink-500">© {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.</p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-ink-400 hover:text-lime-400">
            <GithubIcon size={17} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ink-400 hover:text-lime-400">
            <LinkedinIcon size={17} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-ink-400 hover:text-lime-400">
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
