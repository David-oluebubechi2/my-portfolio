const baseProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ------------------------------------------------------------------ */
/* Brand icons                                                         */
/* ------------------------------------------------------------------ */

export function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...baseProps}>
      <path d="M15 22v-4c0-1 .1-1.4-.5-2 3.1-.3 6.5-1.5 6.5-7a5.4 5.4 0 0 0-1.4-3.8A5 5 0 0 0 19.5 2S18.3 1.6 15 4a13.4 13.4 0 0 0-6 0C5.7 1.6 4.5 2 4.5 2a5 5 0 0 0-.1 3.2A5.4 5.4 0 0 0 3 9c0 5.5 3.4 6.7 6.5 7-.6.6-.5 1.2-.5 2v4" />
      <path d="M9 18c-4.5 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...baseProps}>
      <rect x="2" y="2" width="20" height="20" rx="2" />
      <path d="M8 11v5" />
      <path d="M8 8v.01" />
      <path d="M12 16v-5" />
      <path d="M16 16v-3a2 2 0 0 0-4 0" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...baseProps}>
      <path d="M3 21l1.65-4.87A8.9 8.9 0 1 1 8.87 19.35z" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0zm5 0a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0z" />
      <path d="M9 12a5 3.5 0 0 0 6 0" />
    </svg>
  );
}

export function SpearSeparator({ className }: { className?: string }) {
  return (
    <SwordIcon
      aria-hidden="true"
      className={`inline-block h-[1em] w-[1em] align-[-0.08em] text-primary ${className ?? ""}`}
    />
  );
}

export function SwordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...baseProps}>
      <path d="M16 8.8 3.5 12 16 15.2" />
      <path d="M16 5.5v13" />
      <path d="M16 11.2h4.2" />
      <circle cx="21.5" cy="12" r="1.2" />
    </svg>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-baseline font-bold tracking-tight ${
        className ?? "text-2xl"
      }`}
    >
      <span className="text-paper">David</span>
      <span className="text-primary">.</span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Custom UI icon set (drawn in a consistent 24px stroke style)        */
/* ------------------------------------------------------------------ */

export function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...baseProps}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  );
}

export function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...baseProps}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...baseProps}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function LayersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...baseProps}>
      <path d="M12 2 2 7l10 5 10-5-10-5z" />
      <path d="m2 17 10 5 10-5" />
      <path d="m2 12 10 5 10-5" />
    </svg>
  );
}

export function ZapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...baseProps}>
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

export function MonitorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...baseProps}>
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <path d="m8.5 9-2.5 2.5L8.5 14" />
      <path d="m15.5 9 2.5 2.5-2.5 2.5" />
    </svg>
  );
}

export function DatabaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...baseProps}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  );
}

export function GraduationCapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...baseProps}>
      <path d="M22 10v6" />
      <path d="M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

export function CodeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...baseProps}>
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </svg>
  );
}

export function GridIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...baseProps}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

export function ServerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...baseProps}>
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <path d="M6 6h.01" />
      <path d="M6 18h.01" />
    </svg>
  );
}

export function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...baseProps}>
      <path d="M12 5l1.6 5.4L19 12l-5.4 1.6L12 19l-1.6-5.4L5 12l5.4-1.6L12 5z" />
      <path d="m19 3 .8 2.2L22 6l-2.2.8L19 9l-.8-2.2L16 6l2.2-.8L19 3z" />
    </svg>
  );
}

export function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} {...baseProps}>
      <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z" />
    </svg>
  );
}