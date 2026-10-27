import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function ProjectGallery() {
  return (
    <section id="projects" className="border-b border-ink-700 py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="PROJECTS."
          subtitle="A mix of client engineering work, independent builds, and coursework - each entry is honest about what's confirmed and what's still a placeholder."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
