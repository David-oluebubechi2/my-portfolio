import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { SpearSeparator } from "../components/icons";
import { socialIconMap } from "../components/socialIcons";
import profileImage from "../assets/oluebubechi.jpeg";
import { education, experience, name, socials } from "../data/portfolio";
import certificateImage from "../assets/certificate.png";

export default function Education() {
  return (
    <Layout>
      <PageHeader
        eyebrow="My Journey"
        title="Education & Experience"
        lead={
          <>
            How I got here <SpearSeparator className="mx-1.5" /> a CS degree, a
            lot of self-teaching, and projects that taught me more than any
            tutorial.
          </>
        }
      />

      <div className="mx-auto w-full max-w-[1170px] px-5 pb-24">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[370px_1fr]">
          <Reveal>
            <div className="card sticky top-28 p-6">
              <div className="gradient-photo">
                <img
                  src={profileImage}
                  alt="Portrait of David Oluebubechi"
                  className="aspect-square object-cover"
                />
              </div>
              <h2 className="mt-4 text-2xl font-medium text-paper">{name}</h2>
              <p className="eyebrow mt-2">Full-Stack Developer</p>

              <div className="mt-6 flex items-center justify-around gap-2">
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

              <p className="mt-6 text-sm leading-relaxed text-ink">
                Open to internships and full-stack roles.
              </p>

              <Link to="/contact" className="theme-btn mt-5 w-full text-center">
                Hire Me
              </Link>
            </div>
          </Reveal>

          <div className="space-y-10">
            <Reveal>
              <div className="card p-6 md:p-8">
                <h2 className="mb-2 w-fit rounded-lg bg-white/5 px-3 py-1 text-sm font-medium uppercase tracking-wider text-paper">
                  Education
                </h2>

                <ul>
                  {education.map((edu) => (
                    <li key={edu.degree} className="py-5">
                      <p className="text-base font-medium text-soft opacity-60">
                        {edu.period}
                      </p>
                      <h3 className="mt-1.5 text-lg font-medium leading-snug text-paper">
                        {edu.degree}
                        <span className="text-primary">
                          <SpearSeparator className="mx-1.5" /> {edu.school}
                        </span>
                      </h3>
                      <p className="mt-1 text-sm text-soft opacity-70">
                        {edu.location}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-ink">
                        {edu.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="card p-6 md:p-8">
                <h2 className="mb-2 w-fit rounded-lg bg-white/5 px-3 py-1 text-sm font-medium uppercase tracking-wider text-paper">
                  Experience
                </h2>

                <ul>
                  {experience.map((job) => (
                    <li
                      key={job.role}
                      className="py-5 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-white/5"
                    >
                      <p className="text-base font-medium text-soft opacity-60">
                        {job.period}
                      </p>
                      <h3 className="mt-1.5 text-lg font-medium leading-snug text-paper">
                        {job.role}
                        <span className="text-primary">
                          <SpearSeparator className="mx-1.5" /> {job.org}
                        </span>
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {job.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm leading-relaxed text-ink"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 bg-primary" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="card mx-auto w-full max-w-md p-6">
                <h2 className="mb-2 w-fit rounded-lg bg-white/5 px-3 py-1 text-sm font-medium uppercase tracking-wider text-paper">
                  Certification
                </h2>
                <h3 className="mt-1.5 text-lg font-medium leading-snug text-paper">
                  Frontend Development
                </h3>
                <p className="mt-1 text-sm text-soft opacity-70">
                  Completed frontend development program
                </p>
                <img
                  src={certificateImage}
                  alt="Frontend Development Certificate"
                  className="mt-5 w-full rounded-lg border border-white/5 object-contain"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Layout>
  );
}
