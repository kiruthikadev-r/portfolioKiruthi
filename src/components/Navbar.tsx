import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { useActiveSection } from "../hooks/useActiveSection";
import { profile } from "../data/profile";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function go(id: string) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-ink-700 bg-ink-950/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Primary">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            go("home");
          }}
          className="font-display flex h-9 w-9 items-center justify-center rounded-md border border-ink-700 text-sm font-bold text-lime-400"
        >
          KR
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === link.id ? "text-lime-400" : "text-ink-300 hover:text-white"
                }`}
                aria-current={active === link.id ? "page" : undefined}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ResumeButton compact />
        </div>

        <button
          className="rounded-md p-2 text-ink-200 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-700 bg-ink-950 px-5 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => go(link.id)}
                  className={`w-full rounded-lg px-3 py-3 text-left text-base font-medium ${
                    active === link.id ? "text-lime-400" : "text-ink-200"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-2">
            <ResumeButton />
          </div>
        </div>
      )}
    </header>
  );
}

function ResumeButton({ compact = false }: { compact?: boolean }) {
  if (!profile.resumeAvailable) {
    return (
      <span
        className={`inline-flex items-center gap-2 rounded-full border border-ink-700 px-4 py-2 text-sm font-medium text-ink-400 ${
          compact ? "" : "w-full justify-center"
        }`}
        title="Resume PDF not uploaded yet"
      >
        <Download size={15} /> Resume (coming soon)
      </span>
    );
  }
  return (
    <a
      href={profile.resumePath}
      download
      className={`inline-flex items-center gap-2 rounded-full bg-lime-400 px-4 py-2 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03] ${
        compact ? "" : "w-full justify-center"
      }`}
    >
      <Download size={15} /> Download Resume
    </a>
  );
}
