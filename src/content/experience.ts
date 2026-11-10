export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  type: "Internship" | "Training" | "Full-time" | "Contract";
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  tech: string[];
};

/**
 * Newest first. Figures quoted here are carried over from the previous
 * version of this site — keep them only as long as you can stand behind them.
 */
export const experience: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "DevsLane",
    companyUrl: "https://www.devslane.com/",
    type: "Internship",
    location: "Remote",
    period: "Jun 2026 — Present",
    current: true,
    summary:
      "Building modern web applications with React and JavaScript as part of a remote, agile engineering team.",
    highlights: [
      "Develop and debug frontend features with React, JavaScript and API integrations.",
      "Take part in code reviews and follow the team's engineering workflows and clean-code practices.",
      "Work with mentors and engineers on client-oriented project development.",
    ],
    tech: ["React.js", "JavaScript", "TypeScript", "Redux", "Node.js", "Git"],
  },
  {
    role: "Full-Stack Developer Trainee",
    company: "CodeYogi (DevsLane)",
    companyUrl: "https://www.codeyogi.io/",
    type: "Training",
    location: "Remote",
    period: "Nov 2025 — Mar 2026",
    summary:
      "An intensive, project-based programme covering modern web development — from JavaScript fundamentals to production-style React applications.",
    highlights: [
      "Built real-world applications using component-based architecture, state management and REST API integration.",
      "Strengthened fundamentals in JavaScript, asynchronous programming and responsive UI development.",
      "Practised Git-based workflows, debugging and clean-code principles throughout.",
    ],
    tech: ["React.js", "TypeScript", "JavaScript", "Redux", "Context API", "Git"],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Algoric (100gaj)",
    companyUrl: "https://www.algoric.in/",
    type: "Internship",
    location: "Remote",
    period: "Jun 2025 — Nov 2025",
    summary:
      "Built and integrated full-stack features for a real-estate platform: tenant onboarding, rent and lease management, utility bills and agreements.",
    highlights: [
      "Audited the main website end to end and fixed 20+ functional and UI bugs, improving platform stability and reliability by 45%.",
      "Implemented Cloudinary-based media handling and frontend optimisations, cutting average page and image load times by 25% and improving the mobile experience.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Razorpay API",
      "Cloudinary",
    ],
  },
];
