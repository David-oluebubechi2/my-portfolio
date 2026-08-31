import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import hmsImage from "./assets/hms.png";
import choplyImage from "./assets/choply.png";
import profileImage from "./assets/oluebubechi.jpeg";

type IconName =
  | "code"
  | "github"
  | "linkedin"
  | "mail"
  | "message"
  | "external"
  | "server"
  | "graduation"
  | "mobile"
  | "check"
  | "arrow"
  | "briefcase";

type IconProps = {
  name: IconName;
  className?: string;
};

function Icon({ name, className = "w-5 h-5" }: IconProps) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "github":
      return (
        <svg {...commonProps}>
          <path d="M15 22v-4c0-1 .1-1.4-.5-2 3.1-.3 6.5-1.5 6.5-7a5.4 5.4 0 0 0-1.4-3.8A5 5 0 0 0 19.5 2S18.3 1.6 15 4a13.4 13.4 0 0 0-6 0C5.7 1.6 4.5 2 4.5 2a5 5 0 0 0-.1 3.2A5.4 5.4 0 0 0 3 9c0 5.5 3.4 6.7 6.5 7-.6.6-.5 1.2-.5 2v4" />
          <path d="M9 18c-4.5 2-5-2-7-2" />
        </svg>
      );

    case "linkedin":
      return (
        <svg {...commonProps}>
          <rect x="2" y="2" width="20" height="20" rx="2" />
          <path d="M8 11v5" />
          <path d="M8 8v.01" />
          <path d="M12 16v-5" />
          <path d="M16 16v-3a2 2 0 0 0-4 0" />
        </svg>
      );

    case "mail":
      return (
        <svg {...commonProps}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );

    case "message":
      return (
        <svg {...commonProps}>
          <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.5 9.5 0 0 1-4-.9L3 21l1.8-4A8.5 8.5 0 1 1 21 11.5Z" />
        </svg>
      );

    case "external":
      return (
        <svg {...commonProps}>
          <path d="M14 3h7v7" />
          <path d="M10 14 21 3" />
          <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
        </svg>
      );

    case "server":
      return (
        <svg {...commonProps}>
          <rect x="3" y="3" width="18" height="7" rx="2" />
          <rect x="3" y="14" width="18" height="7" rx="2" />
          <path d="M7 7h.01" />
          <path d="M7 18h.01" />
          <path d="M11 7h7" />
          <path d="M11 18h7" />
        </svg>
      );

    case "graduation":
      return (
        <svg {...commonProps}>
          <path d="m2 9 10-5 10 5-10 5L2 9Z" />
          <path d="M6 11v5c3 2 9 2 12 0v-5" />
          <path d="M22 9v6" />
        </svg>
      );

    case "mobile":
      return (
        <svg {...commonProps}>
          <rect x="6" y="2" width="12" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
      );

    case "check":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="m8 12 2.5 2.5L16 9" />
        </svg>
      );

    case "arrow":
      return (
        <svg {...commonProps}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );

    case "briefcase":
      return (
        <svg {...commonProps}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M3 12h18" />
          <path d="M10 12v2h4v-2" />
        </svg>
      );

    case "code":
    default:
      return (
        <svg {...commonProps}>
          <path d="M4 5h16v14H4z" />
          <path d="m8 9 3 3-3 3" />
          <path d="M13 15h3" />
        </svg>
      );
  }
}

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const staggerContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

type ProjectCategory = "fullstack" | "ai";

type Project = {
  title: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  link: string;
  image: string;
};

const handles = {
  email: "mailto:oluebubechidavid@gmail.com",
  github: "https://github.com/David-oluebubechi2",
  linkedin: "https://www.linkedin.com/in/david-oluebubechi-a3829a431",
  whatsapp: "https://wa.me/2347046059865",
};

const projects: Project[] = [
  {
    title: "CityCare Hospital Management",
    category: "frontend",
    description:
      "Full-stack medical clinic scheduling and patient portal system engineered with modular routing and database management.",
    tags: ["React", "TypeScript", "CSS"],
    link: handles.github,
    image: hmsImage,
  },
  {
    title: "Choply",
    category: "fullstack",
    description:
      "Full-stack food ordering platform built with React, NestJS, PostgreSQL, Tailwind CSS, and AI-assisted development tools.",
    tags: [
      "React",
      "NestJS",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    link: "https://choply-jade.vercel.app/",
    image: choplyImage,
  },
];

function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
    </div>
  );
}

function Navbar() {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col md:flex-row justify-between items-center gap-4 mb-16 backdrop-blur-md bg-slate-900/40 p-4 rounded-2xl border border-teal-900/30"
    >
      <Link
        to="/"
        className="text-xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent flex items-center gap-2"
      >
        <Icon name="code" className="w-5 h-5 text-teal-400" />
        &lt;David Oluebubechi&gt;
      </Link>

      <div className="flex flex-wrap justify-center gap-2 md:gap-6 text-sm text-slate-400">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`px-2 py-1 transition-colors ${
              location.pathname === link.path
                ? "text-teal-400"
                : "hover:text-teal-400"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}

function SocialLinks() {
  return (
    <div className="flex items-center gap-2 px-2">
      <a
        href={handles.github}
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
        aria-label="GitHub"
        className="p-2 text-slate-400 hover:text-teal-400 transition-colors"
      >
        <Icon name="github" className="w-5 h-5" />
      </a>

      <a
        href={handles.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
        aria-label="LinkedIn"
        className="p-2 text-slate-400 hover:text-teal-400 transition-colors"
      >
        <Icon name="linkedin" className="w-5 h-5" />
      </a>

      <a
        href={handles.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp"
        aria-label="WhatsApp"
        className="p-2 text-slate-400 hover:text-teal-400 transition-colors"
      >
        <Icon name="message" className="w-5 h-5" />
      </a>

      <a
        href={handles.email}
        title="Email"
        aria-label="Email"
        className="p-2 text-slate-400 hover:text-teal-400 transition-colors"
      >
        <Icon name="mail" className="w-5 h-5" />
      </a>
    </div>
  );
}

function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="text-center border-t border-slate-900 pt-16 pb-8 mt-20"
    >
      <h2 className="text-3xl font-bold mb-4 text-slate-100">Get In Touch</h2>

      <p className="text-slate-400 text-sm max-w-md mx-auto mb-8">
        Available for software engineering roles, backend development projects,
        or technical collaborations.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <a
          href={handles.email}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-teal-300 border border-teal-500/20 transition-all text-sm font-medium"
        >
          <Icon name="mail" className="w-4 h-4" />
          Email Me
        </a>

        <a
          href={handles.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-teal-300 border border-teal-500/20 transition-all text-sm font-medium"
        >
          <Icon name="message" className="w-4 h-4" />
          WhatsApp
        </a>
      </div>

      <SocialLinks />

      <p className="text-xs text-slate-600 font-mono mt-8">
        © {new Date().getFullYear()} — Computer Science Student @ Thomas Adewumi
        University
      </p>
    </motion.footer>
  );
}

function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500/30 selection:text-teal-200">
      <Background />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </div>
    </div>
  );
}

function Home() {
  return (
    <PageLayout>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="mb-28 space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-medium">
          <Icon name="graduation" className="w-4 h-4 text-teal-400" />
          Computer Science Senior @ Thomas Adewumi University (Class of
          &apos;27)
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Full-Stack Developer
          <br />
          <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-200 bg-clip-text text-transparent">
            crafting scalable systems.
          </span>
        </h1>

        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
          Specializing in scalable backend architectures with Node.js, Express,
          and NestJS, combined with responsive frontend web design using React
          and Tailwind CSS.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Link
            to="/contact"
            className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold rounded-xl transition-all shadow-lg shadow-teal-500/20"
          >
            Contact Me
          </Link>

          <SocialLinks />
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mb-28"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-100">Featured Work</h2>

            <p className="text-slate-400 text-sm mt-1">
              Full-stack applications and technical builds.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300 transition-colors"
          >
            View all projects
            <Icon name="arrow" className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mb-28"
      >
        <h2 className="text-3xl font-bold text-slate-100 mb-2">
          Technical Proficiency
        </h2>

        <p className="text-slate-400 text-sm mb-8">
          Core expertise alongside secondary technical capabilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkillCard
            icon="server"
            title="Backend Engineering"
            skills={[
              "Node.js",
              "Express.js",
              "NestJS",
              "REST API Architecture",
            ]}
            primary
          />

          <SkillCard
            icon="code"
            title="Frontend Development"
            skills={[
              "JavaScript / HTML5 / CSS3",
              "React & TypeScript",
              "Tailwind CSS",
            ]}
            primary
          />

          <SkillCard
            icon="mobile"
            title="Secondary & Emerging Skills"
            skills={[
              "PHP / Laravel",
              "Mobile Dev (Dart)",
              "SQL & Normalization",
              "Git & Version Control",
            ]}
          />
        </div>
      </motion.section>
    </PageLayout>
  );
}

function About() {
  return (
    <PageLayout>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="mb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2">
            <div className="relative w-full max-w-sm mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-3xl blur opacity-20" />

              <div className="relative aspect-square rounded-3xl overflow-hidden border border-teal-500/30 bg-slate-900">
                <img
                  src={profileImage}
                  alt="David Oluebubechi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-medium mb-6">
              <Icon name="graduation" className="w-4 h-4 text-teal-400" />
              About Me
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Building software with{" "}
              <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-200 bg-clip-text text-transparent">
                purpose.
              </span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed">
              I’m a Computer Science student and Full-Stack Developer passionate
              about building practical, scalable, and user-focused software
              systems.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mb-20"
      >
        <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
          <p>
            My primary focus is full-stack development, with a strong interest
            in building modern web applications using NestJS on the backend and
            React with TypeScript on the frontend. I work with HTML, CSS,
            JavaScript, React, and TypeScript to create responsive and
            user-friendly interfaces, while using NestJS to build structured and
            maintainable backend systems. I am also continuously developing my
            skills in Node.js, Express.js, REST API design, authentication, and
            database-driven application development as I expand my backend
            engineering capabilities.
          </p>

          <p>
            Some of the projects I’ve worked on include CityCare Hospital
            Management System, a full-stack healthcare platform with different
            user portals and backend services, and CampusMate AI, a
            voice-powered academic assistant designed to help students with
            academic workflows and task management.
          </p>

          <p>
            Beyond traditional web development, I’m interested in AI-powered
            applications, backend architecture, APIs, databases, and mobile
            development. I’m continuously expanding my technical toolkit while
            improving my ability to write clean, maintainable, and
            production-ready code.
          </p>

          <p>
            I’m currently pursuing Computer Science at Thomas Adewumi
            University, and my goal is to grow into a strong software engineer
            capable of designing and developing reliable systems that solve
            meaningful problems.
          </p>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
      >
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-8">
          <Icon name="graduation" className="w-8 h-8 text-teal-400 mb-5" />

          <h2 className="text-2xl font-bold mb-4">Education</h2>

          <p className="text-slate-300 font-medium">
            Thomas Adewumi University
          </p>

          <p className="text-slate-400 text-sm mt-2">
            Computer Science — Class of &apos;27
          </p>

          <p className="text-slate-500 text-sm mt-4 leading-relaxed">
            Developing a strong foundation in software engineering, algorithms,
            databases, web development, and system architecture.
          </p>
        </div>

        <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-8">
          <Icon name="briefcase" className="w-8 h-8 text-teal-400 mb-5" />

          <h2 className="text-2xl font-bold mb-4">What I Do</h2>

          <p className="text-slate-400 leading-relaxed">
            I build full-stack applications from frontend interfaces to backend
            APIs and database systems. My main focus is creating maintainable
            applications that can scale as requirements grow.
          </p>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold mb-6">My Development Approach</h2>

        <div className="space-y-4 text-slate-400 leading-relaxed">
          <p>
            I approach projects by first understanding the problem and then
            designing a clean architecture around it.
          </p>

          <p>
            On the backend, I focus on APIs, authentication, database
            management, validation, and scalable server-side architecture.
          </p>

          <p>
            On the frontend, I focus on responsive interfaces, reusable React
            components, clear navigation, and a smooth user experience.
          </p>
        </div>
      </motion.section>
    </PageLayout>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 rounded-2xl overflow-hidden hover:border-teal-500/40 transition-all group"
    >
      <div className="h-48 bg-slate-900 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-slate-200 group-hover:text-teal-300 transition-colors">
            {project.title}
          </h3>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            title={`View ${project.title}`}
            aria-label={`View ${project.title}`}
            className="text-slate-500 hover:text-teal-400 transition-colors"
          >
            <Icon name="external" className="w-4 h-4" />
          </a>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800/60 text-teal-400/90 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  const [activeTab, setActiveTab] = useState<"all" | ProjectCategory>("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <PageLayout>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-5">
          My{" "}
          <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-200 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>

        <p className="text-slate-400 text-lg max-w-2xl">
          A collection of full-stack applications, AI projects, and technical
          builds.
        </p>
      </motion.section>

      <div className="flex gap-2 bg-slate-900/60 p-1 rounded-xl border border-slate-800 w-fit mb-10">
        {(["all", "fullstack", "ai"] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              activeTab === tab
                ? "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {tab === "fullstack"
              ? "Full-Stack"
              : tab === "ai"
                ? "AI Apps"
                : "All Work"}
          </button>
        ))}
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mt-20"
      >
        <h2 className="text-3xl font-bold mb-3">Project Screenshots</h2>

        <p className="text-slate-400 text-sm mb-8">
          Screenshots of my completed work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden"
            >
              <img
                src={project.image}
                alt={`${project.title} project screenshot`}
                className="w-full aspect-video object-cover"
              />

              <div className="p-5">
                <h3 className="font-semibold text-slate-200">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </PageLayout>
  );
}

function SkillCard({
  icon,
  title,
  skills,
  primary = false,
}: {
  icon: IconName;
  title: string;
  skills: string[];
  primary?: boolean;
}) {
  return (
    <div
      className={`p-6 border rounded-2xl flex flex-col justify-between ${
        primary
          ? "bg-slate-900/30 border-slate-800/60"
          : "bg-slate-900/20 border-slate-800/40"
      }`}
    >
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Icon
            name={icon}
            className={`w-5 h-5 ${
              primary ? "text-teal-400" : "text-slate-400"
            }`}
          />

          <h3
            className={`font-semibold ${
              primary ? "text-slate-200" : "text-slate-300"
            }`}
          >
            {title}
          </h3>
        </div>

        <ul className="text-sm text-slate-300 space-y-2 font-mono">
          {skills.map((skill) => (
            <li key={skill} className="flex items-center gap-2">
              {primary ? (
                <Icon name="check" className="w-3.5 h-3.5 text-teal-400" />
              ) : (
                <span className="text-slate-500">•</span>
              )}

              {skill}
            </li>
          ))}
        </ul>
      </div>

      <span
        className={`mt-6 text-[10px] uppercase tracking-wider font-semibold ${
          primary ? "text-teal-400/80" : "text-slate-500"
        }`}
      >
        {primary ? "Primary Focus" : "Expanding Toolkit"}
      </span>
    </div>
  );
}

function Skills() {
  return (
    <PageLayout>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-5">
          Technical{" "}
          <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-200 bg-clip-text text-transparent">
            Skills
          </span>
        </h1>

        <p className="text-slate-400 text-lg max-w-2xl">
          Technologies and tools I use to design, develop, and maintain software
          systems.
        </p>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <SkillCard
          icon="server"
          title="Backend Engineering"
          skills={["Node.js", "Express.js", "NestJS", "REST API Architecture"]}
          primary
        />

        <SkillCard
          icon="code"
          title="Frontend Development"
          skills={[
            "JavaScript / HTML5 / CSS3",
            "React & TypeScript",
            "Tailwind CSS",
          ]}
          primary
        />

        <SkillCard
          icon="mobile"
          title="Secondary & Emerging Skills"
          skills={[
            "PHP / Laravel",
            "Mobile Dev (Dart)",
            "SQL & Normalization",
            "Git & Version Control",
          ]}
        />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mt-20"
      >
        <h2 className="text-3xl font-bold mb-8">How I Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-900/30 border border-slate-800/60 rounded-2xl">
            <h3 className="font-semibold text-slate-200 mb-3">
              Clean Architecture
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed">
              I structure applications around reusable components, clear
              responsibilities, and maintainable code.
            </p>
          </div>

          <div className="p-6 bg-slate-900/30 border border-slate-800/60 rounded-2xl">
            <h3 className="font-semibold text-slate-200 mb-3">
              Scalable Systems
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed">
              I design backend services and database structures with future
              growth and maintainability in mind.
            </p>
          </div>
        </div>
      </motion.section>
    </PageLayout>
  );
}

function Contact() {
  return (
    <PageLayout>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-medium mb-6">
          <Icon name="message" className="w-4 h-4 text-teal-400" />
          Contact
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Let&apos;s build something{" "}
          <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-200 bg-clip-text text-transparent">
            great.
          </span>
        </h1>

        <p className="text-slate-400 text-lg leading-relaxed mb-10">
          Available for software engineering roles, backend development
          projects, freelance opportunities, and technical collaborations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
          <a
            href={handles.email}
            className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-teal-500/40 transition-all group"
          >
            <Icon name="mail" className="w-7 h-7 text-teal-400 mb-4" />

            <h2 className="font-semibold text-slate-200 group-hover:text-teal-300">
              Email
            </h2>

            <p className="text-slate-500 text-sm mt-2">Send me an email</p>
          </a>

          <a
            href={handles.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-teal-500/40 transition-all group"
          >
            <Icon name="message" className="w-7 h-7 text-teal-400 mb-4" />

            <h2 className="font-semibold text-slate-200 group-hover:text-teal-300">
              WhatsApp
            </h2>

            <p className="text-slate-500 text-sm mt-2">Chat with me directly</p>
          </a>

          <a
            href={handles.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-teal-500/40 transition-all group"
          >
            <Icon name="github" className="w-7 h-7 text-teal-400 mb-4" />

            <h2 className="font-semibold text-slate-200 group-hover:text-teal-300">
              GitHub
            </h2>

            <p className="text-slate-500 text-sm mt-2">
              View my code and projects
            </p>
          </a>

          <a
            href={handles.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-teal-500/40 transition-all group"
          >
            <Icon name="linkedin" className="w-7 h-7 text-teal-400 mb-4" />

            <h2 className="font-semibold text-slate-200 group-hover:text-teal-300">
              LinkedIn
            </h2>

            <p className="text-slate-500 text-sm mt-2">
              Connect professionally
            </p>
          </a>
        </div>
      </motion.section>
    </PageLayout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
