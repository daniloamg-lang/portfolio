import type { ProjectItem } from '../types/project'

type ProjectCardProps = {
  project: ProjectItem
  ctaLabel: string
  onOpenCaseStudy: (projectId: string) => void
}

export default function ProjectCard({
  project,
  ctaLabel,
  onOpenCaseStudy,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p className="meta">{project.stack}</p>
      <button
        type="button"
        className="btn btn-solid project-cta"
        onClick={() => onOpenCaseStudy(project.id)}
      >
        {ctaLabel}
      </button>
    </article>
  )
}
