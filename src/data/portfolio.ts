// ─────────────────────────────────────────────────────────────
// ALL SITE CONTENT LIVES HERE.
// Edit the values below to update your portfolio — you never need
// to touch the components in src/components to change text.
//
// Anything marked "TODO" is placeholder content to replace.
// To add an item, copy an existing { ... } block, paste it, and edit it.
// To remove an item, delete its whole { ... } block (including the comma).
// ─────────────────────────────────────────────────────────────

// These "types" describe the shape of each item. TypeScript uses them
// to warn you (with a red underline) if you forget a field or misspell one.
export type Link = { label: string; href: string };

export type Project = {
  title: string;
  description: string;
  tech: string[];
  links?: Link[]; // the "?" means optional
};

export type Job = {
  role: string;
  company: string;
  location?: string;
  start: string; // e.g. "Jun 2024"
  end: string; // e.g. "Present"
  highlights: string[];
};

export type Accomplishment = {
  title: string;
  issuer: string;
  date: string;
  description?: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

// ── Basic info ───────────────────────────────────────────────
export const site = {
  name: "Tyler Lam",
  title: "Software Engineer", // TODO: your headline / role
  url: "https://tylerlam.com",
  tagline:
    "TODO: One sentence about what you build and what you care about as an engineer.",
  location: "TODO: City, Country",
  email: "you@example.com", // TODO: your public contact email
  resumeUrl: "", // TODO: e.g. "/resume.pdf" (put the PDF in the /public folder). Leave "" to hide.
  socials: [
    { label: "GitHub", href: "https://github.com/your-username" }, // TODO
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-username" }, // TODO
  ] as Link[],
};

// ── About ────────────────────────────────────────────────────
// Each string is one paragraph.
export const about: string[] = [
  "TODO: A short introduction — who you are professionally, what you're studying or working on, and the kinds of problems you like solving.",
  "TODO: A second paragraph on your strengths, the areas you focus on, and what kind of role or opportunities you're looking for.",
];

// ── Projects ─────────────────────────────────────────────────
export const projects: Project[] = [
  {
    title: "TODO: Project One",
    description:
      "TODO: What the project does, the problem it solves, and your role. One or two sentences with a concrete result if possible.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    links: [
      { label: "Code", href: "https://github.com/your-username/project-one" },
      { label: "Live", href: "https://example.com" },
    ],
  },
  {
    title: "TODO: Project Two",
    description:
      "TODO: What the project does, the problem it solves, and your role.",
    tech: ["Python", "FastAPI", "Docker"],
    links: [
      { label: "Code", href: "https://github.com/your-username/project-two" },
    ],
  },
  {
    title: "TODO: Project Three",
    description:
      "TODO: What the project does, the problem it solves, and your role.",
    tech: ["React", "Node.js"],
  },
];

// ── Experience ───────────────────────────────────────────────
// List most recent first.
export const experience: Job[] = [
  {
    role: "TODO: Software Engineer Intern",
    company: "TODO: Company Name",
    location: "TODO: City / Remote",
    start: "TODO: Jun 2025",
    end: "Present",
    highlights: [
      "TODO: Something you built or shipped, and its impact (numbers help).",
      "TODO: Another accomplishment in this role.",
    ],
  },
  {
    role: "TODO: Previous Role",
    company: "TODO: Company Name",
    start: "TODO: Jan 2024",
    end: "TODO: May 2025",
    highlights: ["TODO: What you did and the result."],
  },
];

// ── Accomplishments ──────────────────────────────────────────
// Awards, certifications, hackathons, publications, scholarships, etc.
export const accomplishments: Accomplishment[] = [
  {
    title: "TODO: Award or Certification",
    issuer: "TODO: Organization",
    date: "TODO: 2025",
    description: "TODO: Optional one-line context.",
  },
  {
    title: "TODO: Another Accomplishment",
    issuer: "TODO: Organization",
    date: "TODO: 2024",
  },
];

// ── Skills ───────────────────────────────────────────────────
export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"], // TODO
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Tailwind CSS"], // TODO
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Vercel", "PostgreSQL"], // TODO
  },
];
