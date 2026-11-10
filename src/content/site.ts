/**
 * Site-wide profile and configuration.
 *
 * Everything a visitor reads about you lives in `src/content/*`.
 * Edit these files to update the site — components contain no copy.
 */

export const site = {
  name: "Nitesh Kumar Gupta",
  shortName: "Nitesh",
  initials: "NG",
  role: "Full-Stack Developer & AI Engineer",
  /** Canonical URL. Override per-deployment with NEXT_PUBLIC_SITE_URL. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://niteshg0.vercel.app",
  title: "Nitesh Kumar Gupta — Full-Stack Developer & AI Engineer",
  description:
    "Portfolio of Nitesh Kumar Gupta, a full-stack developer and AI engineer building web applications with React, Next.js, Node.js and FastAPI, and AI-powered products with LLMs, LangChain and RAG.",
  keywords: [
    "Nitesh Kumar Gupta",
    "Full-Stack Developer",
    "AI Engineer",
    "Software Developer",
    "React",
    "Next.js",
    "Node.js",
    "FastAPI",
    "Generative AI",
    "LangChain",
    "RAG",
    "MERN",
  ],
  location: "Ayodhya, Uttar Pradesh, India",
  email: "nit947396@gmail.com",
  resumeUrl: "/resume.pdf",
  resumeFileName: "Nitesh-Kumar-Gupta-Resume.pdf",
  /**
   * TODO(you): confirm this matches what you are actually looking for.
   * Set `show: false` to hide the indicator everywhere.
   */
  availability: {
    show: true,
    label: "Open to opportunities & collaboration",
  },
  social: {
    github: "https://github.com/niteshg0",
    linkedin: "https://linkedin.com/in/niteshg0",
  },
} as const;

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const hero = {
  eyebrow: "Software Developer · Full-Stack · AI",
  headline: "I build full-stack web products and AI-powered applications.",
  description:
    "I'm a software engineer intern at DevsLane and an Information Technology undergraduate at MMMUT. I work across the stack — React and Next.js interfaces, Node.js and FastAPI services, well-modelled data — and build LLM features with LangChain, LangGraph and RAG.",
  /** The four layers shown in the hero diagram. */
  stack: [
    {
      layer: "Interface",
      detail: "Responsive, accessible frontends",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      layer: "API",
      detail: "Services, auth and integrations",
      tech: ["Node.js", "Express", "FastAPI", "REST"],
    },
    {
      layer: "Data",
      detail: "Modelling, storage and queues",
      tech: ["MongoDB", "MySQL", "Redis"],
    },
    {
      layer: "Intelligence",
      detail: "LLM features and retrieval",
      tech: ["LangChain", "LangGraph", "RAG", "Qdrant"],
    },
  ],
} as const;

export const about = {
  photo: { src: "/images/profile.jpg", alt: "Portrait of Nitesh Kumar Gupta" },
  paragraphs: [
    "I'm a software developer who enjoys owning a feature end to end — from the details of the interface to the API, the data model and the deployment behind it.",
    "I started with the MERN stack, building products such as an alumni network with payments and a job board. That led to professional work: a full-stack internship at Algoric on a real-estate platform, the CodeYogi training programme, and now a software engineering internship at DevsLane.",
    "Alongside that, I'm going deeper into Generative AI — working with LLMs, retrieval-augmented generation and agent workflows using LangChain, LangGraph and Qdrant, backed by Python and FastAPI.",
  ],
  facts: [
    { label: "Based in", value: "Ayodhya, India · Remote" },
    { label: "Currently", value: "Software Engineer Intern, DevsLane" },
    { label: "Studying", value: "B.Tech IT, MMMUT — class of 2027" },
    { label: "Focus", value: "Full-stack web · Generative AI" },
  ],
  capabilities: [
    {
      title: "Frontend applications",
      text: "Component-driven, responsive interfaces in React and Next.js with TypeScript and Tailwind CSS.",
    },
    {
      title: "Backend systems & APIs",
      text: "REST APIs and services in Node.js, Express and FastAPI, with authentication and third-party integrations.",
    },
    {
      title: "Data & full-stack architecture",
      text: "Schema design and persistence with MongoDB and SQL, wired through to production deployments.",
    },
    {
      title: "AI-powered applications",
      text: "LLM features built with LangChain, LangGraph and RAG pipelines over vector stores like Qdrant.",
    },
  ],
} as const;
