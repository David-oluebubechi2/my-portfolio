import hmsImage from "../assets/hms.png";
import choplyImage from "../assets/choply.png";

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
  "Computer science student and developer focused on building practical web applications, APIs, and reliable systems.",
  "From designing database schemas to shipping polished React interfaces, I enjoy owning features end-to-end. My day-to-day stack is NestJS + Node.js for the backend and React + TypeScript for the frontend.",
  "I'm constantly learning — recently shipping projects with WebSocket APIs and AI-assisted development tooling, and exploring mobile development with Dart.",
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
    link: handles.github,
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
];

export const experience = [
  {
    role: "Full-Stack Developer",
    org: "Independent Projects & Freelance",
    period: "2024 — Present",
    points: [
      "Started programming in 2024 and have been building production-style web applications ever since.",
      "Engineer REST APIs, WebSocket APIs, authentication flows and validation with Node.js and NestJS.",
      "Build responsive, accessible React & TypeScript frontends with Tailwind CSS.",
      "Manage projects with Git, structured code review and production-first thinking.",
    ],
  },
  {
    role: "B.Sc. Computer Science",
    org: "Thomas Adewumi University",
    period: "2023 — 2027",
    points: [
      "Studying algorithms, data structures, web development, database systems and software architecture.",
      "Exploring AI-powered and voice-driven academic assistant applications.",
      "Continuously expanding into mobile development with Dart.",
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
      "Building a strong foundation in algorithms, databases, web development and system architecture.",
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
      "End-to-end web applications — database schema, APIs and polished interfaces designed and shipped together.",
  },
  {
    icon: "api",
    title: "REST & WebSocket APIs",
    detail:
      "Robust, documented APIs with authentication, validation and real-time capabilities using Node.js and NestJS.",
  },
  {
    icon: "frontend",
    title: "React Frontends",
    detail:
      "Fast, accessible and responsive user interfaces with React, TypeScript and Tailwind CSS.",
  },
  {
    icon: "database",
    title: "Database Design",
    detail:
      "Normalized, efficient schemas and queries with PostgreSQL, engineered to stay clean as data grows.",
  },
] as const;