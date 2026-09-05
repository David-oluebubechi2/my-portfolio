import {
  LayersIcon,
  ZapIcon,
  MonitorIcon,
  DatabaseIcon,
} from "../components/icons";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { services } from "../data/portfolio";

const serviceIcons: Record<string, typeof LayersIcon> = {
  app: LayersIcon,
  api: ZapIcon,
  frontend: MonitorIcon,
  database: DatabaseIcon,
};

export default function Services() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Specialization"
        title="Services"
        lead="How I can help bring your idea to life."
      />

      <div className="mx-auto w-full max-w-[1170px] px-5 pb-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon] ?? LayersIcon;
            return (
              <Reveal key={service.title} delay={i * 0.08}>
                <div className="card group h-full p-6 transition-transform duration-300 hover:-translate-y-1 md:p-9">
                  <Icon className="mb-5 h-10 w-10 text-primary" />
                  <p className="eyebrow mb-2">0{i + 1}</p>
                  <h2 className="text-lg font-medium text-paper">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink">
                    {service.detail}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="card mt-6 flex flex-col items-center gap-4 p-6 text-center md:flex-row md:justify-between md:p-8 md:text-left">
            <div>
              <h2 className="text-lg font-medium text-paper">
                Have a project in mind?
              </h2>
              <p className="mt-1 text-sm text-ink">
                Let&apos;s talk about how we can build it together.
              </p>
            </div>
            <Link to="/contact" className="theme-btn">
              Let&apos;s talk
            </Link>
          </div>
        </Reveal>
      </div>
    </Layout>
  );
}