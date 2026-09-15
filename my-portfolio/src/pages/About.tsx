import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { SpearSeparator, SwordIcon } from "../components/icons";
import { socialIconMap } from "../components/socialIcons";
import profileImage from "../assets/oluebubechi.jpeg";
import { bio, education, experience, socials, name } from "../data/portfolio";

export default function About() {
  return (
    <Layout>
      <PageHeader eyebrow="Who I am" title="About Me" />

      <div className="mx-auto w-full max-w-[1170px] px-5 pb-24">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[370px_1fr]">
          <Reveal>
            <div className="card p-6">
              <div className="gradient-photo">
                <img
                  src={profileImage}
                  alt="Portrait of David Oluebubechi"
                  className="aspect-[4/5] object-cover"
                />
              </div>
              <div className="mt-5 flex items-center justify-around gap-3">
                {socials.map((social) => {
                  const Icon = socialIconMap[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={
                        social.href.startsWith("mailto") ? undefined : "_blank"
                      }
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/5 text-paper transition-all hover:bg-paper hover:text-[#0F0F0F]"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card flex h-full flex-col p-6 md:p-10">
              <p className="eyebrow mb-4">About Me</p>
              <h2 className="font-medium leading-tight text-paper md:text-4xl">
                {name}
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-relaxed text-ink md:text-base">
                {bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link to="/contact" className="theme-btn">
                  Hire Me
                </Link>
                <Link
                  to="/work"
                  className="inline-block text-base text-paper underline-offset-4 transition-colors hover:text-primary hover:underline"
                >
                  View My Work
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full p-6 md:p-8">
              <p className="eyebrow mb-5">Education</p>
              <ul>
                {education.map((edu) => (
                  <li key={edu.degree} className="py-3">
                    <p className="text-sm font-medium text-soft opacity-70">
                      {edu.period}
                    </p>
                    <h3 className="mt-1 text-lg font-medium text-paper">
                      {edu.degree}
                      <span className="text-primary">
                        <SpearSeparator className="mx-1.5" /> {edu.school}
                      </span>
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink">
                      {edu.location}. {edu.detail}
                    </p>
                  </li>
                ))}
              </ul>
              <Link
                to="/education"
                className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-paper"
              >
                View full timeline
                <SwordIcon className="h-3 w-3 transition-transform group-hover:rotate-45 sm:h-3.5 sm:w-3.5" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card h-full p-6 md:p-8">
              <p className="eyebrow mb-5">Experience</p>
              <ul>
                {experience.map((job) => (
                  <li
                    key={job.role}
                    className="py-3 last:pb-0 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-white/5"
                  >
                    <p className="text-sm font-medium text-soft opacity-70">
                      {job.period}
                    </p>
                    <h3 className="mt-1 text-lg font-medium text-paper">
                      {job.role}
                      <span className="text-primary">
                        <SpearSeparator className="mx-1.5" /> {job.org}
                      </span>
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink">
                      {job.points[0]}
                    </p>
                  </li>
                ))}
              </ul>
              <Link
                to="/education"
                className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-paper"
              >
                View full timeline
                <SwordIcon className="h-3 w-3 transition-transform group-hover:rotate-45 sm:h-3.5 sm:w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </Layout>
  );
}
