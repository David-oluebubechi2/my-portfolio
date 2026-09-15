import { SwordIcon } from "./icons";
import type { Project } from "../data/portfolio";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card group flex h-full flex-col p-4 pb-6 transition-transform duration-300 hover:-translate-y-1.5">
      <div className="overflow-hidden rounded-xl">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-3 flex items-end justify-between gap-4 px-2">
        <div className="min-w-0">
          <p className="uppercase text-soft opacity-50">{project.tagline}</p>
          <h3 className="truncate text-[22px] font-medium text-paper">
            {project.title}
          </h3>
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.title}`}
          className="info-arrow"
        >
          <SwordIcon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-paper" />
        </a>
      </div>

      <p className="mt-4 px-2 text-sm leading-relaxed text-ink">
        {project.description}
      </p>
    </div>
  );
}
