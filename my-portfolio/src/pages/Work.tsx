import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { projects, handles } from "../data/portfolio";

export default function Work() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Showcase"
        title="Projects"
        lead="A selection of full-stack applications I've designed and built end-to-end."
      />

      <div className="mx-auto w-full max-w-[1170px] px-5 pb-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                More experiments and side projects live on my GitHub.
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