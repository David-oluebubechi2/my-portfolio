import { SparklesIcon, SpearSeparator } from "../components/icons";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { skillGroups, skillLevels, currentlyLearning } from "../data/portfolio";

export default function Skills() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Technologies"
        title="Skills"
        lead={
          <>
            The tools I reach for to design, build and maintain software{" "}
            <SpearSeparator className="mx-1.5" /> plus what I&apos;m exploring
            next.
          </>
        }
      />

      <div className="mx-auto w-full max-w-[1170px] px-5 pb-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.08}>
              <div className="card h-full p-6 md:p-8">
                <p className="mb-1 rounded-lg bg-white/5 px-3 py-1.5 w-fit text-sm font-medium uppercase tracking-wider text-primary">
                  {group.title}
                </p>
                <ul className="mt-5 space-y-3">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-sm text-ink"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary/70" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="card mt-6 p-6 md:p-8">
            <p className="eyebrow mb-6">Proficiency</p>
            <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
              {skillLevels.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-base font-medium text-paper">
                      {skill.name}
                    </span>
                    <span className="text-sm font-medium text-soft opacity-60">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="card mt-6 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <SparklesIcon className="h-5 w-5 text-primary" />
              <h2 className="text-base font-medium text-paper">
                Currently Exploring
              </h2>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {currentlyLearning.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-paper"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Layout>
  );
}