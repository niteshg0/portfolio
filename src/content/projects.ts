export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  /** Featured projects get the large, full-width treatment. */
  featured?: boolean;
  description: string;
  problem: string;
  highlights: string[];
  tech: string[];
  image: { src: string; alt: string; width: number; height: number };
  liveUrl?: string;
  githubUrl?: string;
};

/**
 * Ordered by prominence.
 *
 * TODO(you): add an AI / LLM project here (RAG app, agent, etc.) once you
 * have one you can link to — it will strengthen the "AI Engineer" positioning
 * more than anything else on the site.
 */
export const projects: Project[] = [
  {
    slug: "almasphere",
    title: "AlmaSphere",
    tagline: "Alumni networking platform",
    year: "2025",
    featured: true,
    description:
      "A full-stack MERN platform that brings students, alumni and their institution together in one place — profiles, a directory, a job portal, a query desk and secure online donations.",
    problem:
      "Alumni communities tend to be scattered across chat groups and spreadsheets, which makes it hard for graduates to stay connected, for students to find mentors, and for institutions to reach the people who want to give back.",
    highlights: [
      "Designed the registration flow and academic / career profile creation for alumni and students.",
      "Integrated Razorpay for secure donations, with JWT authentication and encrypted passwords.",
      "Built a job portal where alumni share openings and students explore career opportunities.",
      "Added a query portal so students can ask alumni for mentorship and career advice.",
      "Developed both the React frontend and the Express / MongoDB backend, with Cloudinary for media.",
    ],
    tech: [
      "React.js",
      "Redux",
      "Tailwind CSS",
      "ShadCN UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Razorpay",
      "Cloudinary",
    ],
    image: {
      src: "/images/alumni.png",
      alt: "AlmaSphere landing page with navigation for directory, queries and job portal",
      width: 1899,
      height: 1021,
    },
    liveUrl: "https://alma-sphere-drab.vercel.app/",
    githubUrl: "https://github.com/niteshg0/alumni",
  },
  {
    slug: "mystery-message",
    title: "Mystery Message",
    tagline: "Anonymous feedback platform",
    year: "2025",
    description:
      "A Next.js application that lets anyone send anonymous messages to a user through their public username — without revealing who sent them.",
    problem:
      "Honest feedback is hard to get when it carries your name. Mystery Message gives people a simple, shareable link for candid, anonymous messages.",
    highlights: [
      "Implemented sign-up and sign-in with NextAuth, including email verification delivered via Resend.",
      "Built the message create, read and delete flows on MongoDB behind typed API routes.",
      "Composed a clean, accessible interface with ShadCN UI and Tailwind CSS.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "NextAuth",
      "MongoDB",
      "Resend",
      "ShadCN UI",
      "Tailwind CSS",
    ],
    image: {
      src: "/images/mystery.png",
      alt: "Mystery Message home page showing an anonymous message card",
      width: 1919,
      height: 1080,
    },
    liveUrl: "https://mystery-message-red.vercel.app/",
    githubUrl: "https://github.com/niteshg0/mystery",
  },
  {
    slug: "shophub",
    title: "ShopHub",
    tagline: "E-commerce storefront",
    year: "2026",
    description:
      "A fully responsive e-commerce storefront built with React: browse, search and sort products, view details, and manage a cart that persists across sessions.",
    problem:
      "A storefront has to stay fast and predictable while juggling search, sorting, pagination, authentication and cart state — a practical exercise in structuring a non-trivial React application.",
    highlights: [
      "Built product listing, search, sorting, pagination and detail views against a REST API.",
      "Debounced search input with custom hooks to avoid unnecessary API calls.",
      "Implemented token-based login and registration with Formik and Yup validation.",
      "Managed cart state with the Context API, including persistent storage.",
    ],
    tech: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Context API",
      "Axios",
      "Formik + Yup",
      "REST API",
      "JWT",
    ],
    image: {
      src: "/images/shopHub.png",
      alt: "ShopHub product listing page with search and sort controls",
      width: 1894,
      height: 1024,
    },
    liveUrl: "https://74devslane.netlify.app/",
    githubUrl: "https://github.com/niteshg0/CodeYogi/tree/main/74_Assignment",
  },
];
