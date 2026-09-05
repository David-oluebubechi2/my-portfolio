import { GridIcon, ServerIcon } from "../components/icons";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import InfoCard from "../components/InfoCard";
import Reveal from "../components/Reveal";
import { socialIconMap } from "../components/socialIcons";
import { socials, stats } from "../data/portfolio";

export default function Home() {
  return (
    <Layout>
      <Hero />

      <section className="mx-auto w-full max-w-[1170px] px-5 pb-20">
        <Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <InfoCard
              eyebrow="Showcase"
              title="Projects"
              to="/work"
              icon={
                <GridIcon className="h-10 w-10 text-primary opacity-50" />
              }
              className="min-h-[240px]"
            >
              <p className="mb-6 text-center text-sm leading-relaxed text-ink">
                Selected full-stack apps I&apos;ve designed and built.
              </p>
            </InfoCard>

            <InfoCard
              eyebrow="Specialization"
              title="Services"
              to="/services"
              icon={<ServerIcon className="h-10 w-10 text-primary opacity-50" />}
              className="min-h-[240px]"
            >
              <p className="mb-6 text-center text-sm leading-relaxed text-ink">
                What I can build for you — from APIs to full products.
              </p>
            </InfoCard>

            <InfoCard
              eyebrow="Stay with me"
              title="Profiles"
              external={socials[0].href}
              className="min-h-[240px]"
              overlay={false}
            >
              <div className="mb-4 flex items-center justify-center gap-4 pt-6">
                {socials.map((social) => {
                  const Icon = socialIconMap[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-paper shadow-[0_4px_24px_-1px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-[#0F0F0F]"
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  );
                })}
              </div>
            </InfoCard>
          </div>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card flex h-full flex-col justify-center p-6 md:p-10">
              <p className="eyebrow mb-6">At a glance</p>
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-medium leading-tight text-paper md:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-soft opacity-50">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-8 max-w-md text-sm leading-relaxed text-ink md:text-base">
                Open to internships, full-stack roles and freelance work. If
                you have a project in mind, let&apos;s talk.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card group relative flex h-full flex-col justify-center overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-1 md:p-10">
              <Link
                to="/contact"
                aria-label="Let's work together"
                className="absolute inset-0 z-[9]"
              />
              <p className="eyebrow mb-3">Contact</p>
              <h2 className="font-medium leading-[52px] text-paper md:text-[44px]">
                Let&apos;s
                <br />
                work{" "}
                <span className="text-primary">together.</span>
              </h2>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}