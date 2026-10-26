// Generic case-study content schema, shared by every project's case-study
// page (SvcfCaseStudy, ShopSphereCaseStudy, and any future one). Keeping the
// shape generic means a new project's page is just a new data file plus a
// thin page wrapper - CaseStudyLayout does all the rendering.

export interface CaseStudyMeta {
  title: string;
  tagline: string;
  pills: string[]; // short chips under the title, e.g. role / employer / status
  status: string; // shown in the eyebrow, e.g. "SHIPPED" / "IN ACTIVE DEVELOPMENT" / "PERSONAL PROJECT"
}

export type CaseStudyBlock =
  | { kind: "prose"; id: string; eyebrow: string; title: string; text: string }
  | { kind: "bullets"; id: string; eyebrow: string; title: string; intro?: string; items: string[] }
  | { kind: "cards"; id: string; eyebrow: string; title: string; items: { title: string; description: string }[] }
  | { kind: "pillGroups"; id: string; eyebrow: string; title: string; groups: { label: string; items: string[] }[] }
  | {
      kind: "architecture";
      id: string;
      eyebrow: string;
      title: string;
      intro?: string;
      layers: { label: string; items: string[] }[];
    }
  | {
      kind: "challenges";
      id: string;
      eyebrow: string;
      title: string;
      items: { title: string; problem: string; solution: string }[];
    }
  | { kind: "note"; id: string; icon: "shield" | "sparkles"; label: string; text: string }
  | {
      kind: "gallery";
      id: string;
      eyebrow: string;
      title: string;
      intro?: string;
      images: { src: string; alt: string; caption: string }[];
    };

export interface CaseStudyData {
  meta: CaseStudyMeta;
  blocks: CaseStudyBlock[];
}
