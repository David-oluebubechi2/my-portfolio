import { CodeIcon, GraduationCapIcon } from "./icons";
import { Link } from "react-router-dom";
import Marquee from "./Marquee";
import InfoCard from "./InfoCard";
import { SwordIcon } from "./icons";
import profileImage from "../assets/oluebubechi.jpeg";
import { bio, headline, name } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-[1170px] px-5 pb-10 pt-10 md:pt-16">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="card group p-6 md:p-8">
          <Link
            to="/about"
            aria-label="About me"
            className="absolute inset-0 z-[9]"
          />

          <div className="flex flex-col items-start gap-8 sm:flex-row">
            <div className="gradient-photo h-44 w-44 shrink-0">
              <img
                src={profileImage}
                alt="Portrait of David Oluebubechi"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="min-w-0">
              <p className="eyebrow mb-2">{headline}</p>
              <h1 className="font-medium leading-tight text-paper md:text-[36px]">
                {name}.
              </h1>
              <p className="mt-3 max-w-md leading-relaxed text-ink">
                {bio[0]}
              </p>
            </div>
          </div>

          <Link
            to="/about"
            aria-label="About me"
            className="info-arrow absolute bottom-8 right-8"
          >
            <SwordIcon className="h-6 w-6 text-paper sm:h-7 sm:w-7 md:h-8 md:w-8" />
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          <Marquee />

          <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2">
            <InfoCard
              eyebrow="War Stories"
              title="Experience"
              to="/experience"
              icon={
                <GraduationCapIcon className="h-10 w-10 text-primary opacity-50" />
              }
            >
              <p className="mb-2 text-center text-sm leading-relaxed text-ink">
                Coding since 2024, studying CS from 2023 — see the full story.
              </p>
            </InfoCard>

            <InfoCard
              eyebrow="Technologies"
              title="Skills"
              to="/skills"
              icon={<CodeIcon className="h-10 w-10 text-primary opacity-50" />}
            >
              <p className="mb-2 text-center text-sm leading-relaxed text-ink">
                My stack across backend, frontend and the tools in between.
              </p>
            </InfoCard>
          </div>
        </div>
      </div>
    </section>
  );
}
