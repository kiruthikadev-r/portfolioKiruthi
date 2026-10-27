export interface SkillCategory {
  title: string;
  items: string[];
}

export interface ProjectLink {
  label: string;
  url: string | null; // null = not yet available, renders as a disabled/placeholder state
}

export interface Project {
  id: string;
  number: string; // "01", "02" ...
  title: string;
  category: string;
  summary: string;
  overview: string;
  features: string[];
  technologies: string[];
  contributions: string[];
  links: {
    live: ProjectLink;
    source: ProjectLink;
  };
  caseStudy?: string; // extended write-up shown in the detail panel, optional
  placeholderNote?: string; // shown when details are intentionally incomplete
  caseStudyPath?: string; // if set, "Read Case Study" links to this route instead of the inline panel
}

export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string; // placeholder-friendly free text, e.g. "Present" if start date unconfirmed
  summary: string;
  responsibilities: string[];
  technologies: string[];
  isPlaceholderDates?: boolean;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface Achievement {
  title: string;
  date: string;
  description: string;
  issuer?: string;
}

export interface PhilosophyPrinciple {
  number: string;
  title: string;
  description: string;
}
