import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { SpearSeparator } from "../components/icons";
import { projects, handles } from "../data/portfolio";

export default function Work() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Showcase"
        title="Projects"
        lead={
          <>
            Things I&apos;ve built from scratch <SpearSeparator className="mx-1.5" /> full apps,
            not just tutorials.
          </>
        }
      />

      <div className="mx-auto w-full max-w-[1170px] px-5 pb-24">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="card mt-6 flex flex-col items-center justify-between gap-4 p-6 text-center md:flex-row md:p-8 md:text-left">
            <div>
              <h2 className="text-lg font-medium text-paper">
                Want to see more?
              </h2>
              <p className="mt-1 text-sm text-ink">
                More experiments and side projects on my GitHub.
              </p>
            </div>
            <a
              href={handles.github}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-btn"
            >
              Visit GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </Layout>
  );
}