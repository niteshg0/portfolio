export type SkillGroup = {
  title: string;
  summary: string;
  /** Day-to-day tools, shown with emphasis. */
  core: string[];
  /** Also used / familiar with. */
  also: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    summary: "Responsive, component-driven user interfaces.",
    core: ["React.js", "Next.js", "Tailwind CSS", "Redux"],
    also: ["ShadCN UI", "Context API", "HTML", "CSS", "Streamlit"],
  },
  {
    title: "Backend Development",
    summary: "APIs, authentication and real-time services.",
    core: ["Node.js", "Express.js", "FastAPI", "RESTful APIs"],
    also: ["WebSocket", "JWT", "NextAuth", "EJS"],
  },
  {
    title: "Programming Languages",
    summary: "Typed and dynamic languages across the stack.",
    core: ["JavaScript", "TypeScript", "Python"],
    also: ["C++", "Java", "SQL"],
  },
  {
    title: "AI / ML / Generative AI",
    summary: "LLM applications, retrieval and agent workflows.",
    core: ["LangChain", "LangGraph", "RAG"],
    also: ["Qdrant", "AgentKit", "LLM APIs", "Redis Queue"],
  },
  {
    title: "Databases",
    summary: "Document, relational and vector storage.",
    core: ["MongoDB", "MySQL"],
    also: ["SQLite", "SQLAlchemy", "Redis", "Qdrant"],
  },
  {
    title: "Tools, Cloud & DevOps",
    summary: "Shipping, hosting and day-to-day tooling.",
    core: ["Git", "GitHub", "Docker", "Vercel"],
    also: ["Render", "Cloudinary", "Postman", "VS Code"],
  },
];
