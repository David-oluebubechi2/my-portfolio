import hmsImage from "../assets/hms.png";
import choplyImage from "../assets/choply.png";
import codespanImage from "../assets/codespanImg.png";

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  link: string;
  source: string;
  image: string;
};

export const name = "David Oluebubechi";
export const role = "Full-Stack Developer";
export const headline = "COMPUTER SCIENCE STUDENT";

export const bio = [
  "CS student who likes building things that actually work. I spend most of my time on web apps and APIs — anything where I can see a project go from idea to something people can use.",
  "I'm self-taught before university taught me anything. Started coding in 2024 and jumped straight into full projects — databases, auth, frontends, the whole thing. I like owning a feature from start to finish.",
  "Right now I'm deep in NestJS + TypeScript on the backend and React on the frontend. Recently been shipping projects with WebSockets and AI-assisted tooling, and I'm starting to explore mobile with Dart.",
];

export const handles = {
  email: "mailto:oluebubechidavid@gmail.com",
  emailName: "oluebubechidavid@gmail.com",
  github: "https://github.com/David-oluebubechi2",
  githubName: "@David-oluebubechi2",
  linkedin: "https://www.linkedin.com/in/david-oluebubechi-a3829a431",
  linkedinName: "David Oluebubechi",
  whatsapp: "https://wa.me/2347046059865",
  whatsappName: "+234 704 605 9865",
};

export const location = "Kwara State, Nigeria";

export const socials = [
  { label: "GitHub", href: handles.github, icon: "github" },
  { label: "LinkedIn", href: handles.linkedin, icon: "linkedin" },
  { label: "WhatsApp", href: handles.whatsapp, icon: "whatsapp" },
  { label: "Email", href: handles.email, icon: "email" },
] as const;

export const stats = [
  { value: "2+", label: "Years Coding" },
  { value: "3", label: "Core Stacks" },
  { value: "'27", label: "Grad Class" },
] as const;

export const projects: Project[] = [
  {
    title: "CityCare Hospital Management",
    tagline: "Healthcare Platform",
    description:
      "A full-stack medical clinic scheduling and patient portal system with modular routing, multi-role user portals and centralized database management.",
    tags: ["React", "TypeScript", "REST", "CSS"],
    link: "https://citycare-hms.vercel.app/",
    source: handles.github,
    image: hmsImage,
  },
  {
    title: "Choply",
    tagline: "Food Ordering Platform",
    description:
      "A full-stack food ordering platform built with React, NestJS and PostgreSQL — featuring structured backend services and AI-assisted development tooling.",
    tags: ["React", "NestJS", "PostgreSQL", "Tailwind CSS"],
    link: "https://choply-jade.vercel.app/",
    source: handles.github,
    image: choplyImage,
  },
  {
    title: "CodeSpan",
    tagline: "Tech Hiring Platform",
    description:
      "A platform for hiring skilled tech talent — built with React and NestJS, designed to streamline the recruitment process for developers.",
    tags: ["React", "NestJS", "TypeScript", "Tailwind CSS"],
    link: "https://codespan-tau.vercel.app/",
    source: handles.github,
    image: codespanImage,
  },
];

export const experience = [
  {
    role: "Full-Stack Developer",
    org: "Independent Projects & Freelance",
    period: "2024 — Present",
    points: [
      "Picked up programming in 2024 and haven't stopped building since.",
      "Shipping REST APIs, WebSocket backends, auth systems and form validation with Node.js and NestJS.",
      "Building React + TypeScript frontends with Tailwind CSS — responsive, accessible, and clean.",
      "Using Git daily, writing code I'd actually want to maintain, and thinking about production from day one.",
    ],
  },
] as const;

export const education = [
  {
    degree: "B.Sc. Computer Science",
    school: "Thomas Adewumi University",
    location: "Oko-Irese, Kwara, Nigeria",
    period: "2023 — 2027",
    detail:
      "Learning the foundations — algorithms, databases, web dev, system design. The theory that makes the practical stuff make sense.",
  },
] as const;

export const currentlyLearning = [
  "AI-powered application development",
  "Real-time WebSocket systems",
  "Mobile development with Dart",
  "Advanced database design & normalization",
] as const;

export const skillGroups = [
  {
    title: "Backend Engineering",
    skills: [
      "Node.js",
      "NestJS",
      "WebSocket API",
      "REST API Design",
      "PostgreSQL",
      "Authentication",
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "HTML5 / CSS3",
      "Responsive Design",
    ],
  },
  {
    title: "Tools & Practices",
    skills: [
      "Git & GitHub",
      "SQL & Normalization",
      "Dart (Mobile)",
      "Vite",
      "Clean Architecture",
      "WebSockets",
    ],
  },
] as const;

export const skillLevels = [
  { name: "React", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js / NestJS", level: 78 },
  { name: "Tailwind CSS", level: 88 },
  { name: "PostgreSQL", level: 75 },
  { name: "WebSocket API", level: 72 },
  { name: "Git & GitHub", level: 84 },
  { name: "Dart", level: 45 },
] as const;

export const services = [
  {
    icon: "app",
    title: "Full-Stack Web Apps",
    detail:
      "I build complete web apps — from the database schema to the API to the UI. Everything works together because I'm building all of it.",
  },
  {
    icon: "api",
    title: "REST & WebSocket APIs",
    detail:
      "Backend services with authentication, validation, and real-time features. Node.js and NestJS, documented and ready to integrate.",
  },
  {
    icon: "frontend",
    title: "React Frontends",
    detail:
      "Fast, clean interfaces with React, TypeScript and Tailwind CSS. I care about things like accessibility and actually working on mobile.",
  },
  {
    icon: "database",
    title: "Database Design",
    detail:
      "Normalized schemas that don't fall apart when your data gets messy. PostgreSQL, designed to scale without becoming a nightmare.",
  },
] as const;