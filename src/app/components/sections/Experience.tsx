"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Devslane",
    location: "Remote",
    duration: "22 Jun 2026 – Present",
    type: "Internship",
    description:
      "Working as a Software Engineering Intern, gaining hands-on experience in professional software development practices, collaborating with mentors and team members, and contributing to modern web application development using React and JavaScript. Learning industry workflows, code reviews, debugging, and client-oriented project development in a remote, agile environment.",
    highlights: [
      "Collaborating with mentors and engineers to understand industry-standard development workflows and best practices",
      "Strengthening skills in React, JavaScript, API integration, debugging, and clean code principles through practical assignments and project work",
      "Participating in onboarding, technical evaluations, and client project allocation processes while working in a remote agile environment",
    ],
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "API Integration", "Debugging", "Git", "Redux", "JavaScript"],
    accentColor: "from-blue-500 to-cyan-400",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    role: "Full Stack Developer Training",
    company: "CodeYogi (Devslane)",
    link: "https://www.codeyogi.io/",
    location: "Remote",
    duration: "18 Nov 2025 - 29 Mar 2026",
    type: "Training",
    description:
      "Completed an intensive, project-based training program focused on modern web development technologies, including HTML, CSS, JavaScript, React, REST APIs, Git, and responsive design principles. Built real-world applications by implementing component-based architecture, state management, API integration, and industry best practices.",
    highlights: [
      "Developed strong fundamentals in JavaScript, React, asynchronous programming, and modern frontend development",
      "Gained hands-on experience with REST API integration, state management, debugging, and responsive UI development",
      "Practiced clean code principles, Git version control, and building production-ready web applications",
    ],
    tech: ["React.js", "TypeScript", "JavaScript", "HTML", "CSS", "Git", "Redux", "Context API"],
    accentColor: "from-green-500 to-teal-400",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-500",
  },
  {
    role: "Full Stack Developer Intern",
    company: "Algoric",
    link: "https://www.algoric.in/",
    location: "Remote",
    duration: "30 Jun 2025 – 30 Nov 2025",
    type: "Internship",
    description:
      "Built and integrated full-stack features for a real estate platform — tenant onboarding, rent/lease management, utility bills and agreements.",
    highlights: [
      "Conducted a full audit of the main website, identified & fixed 20+ functional/UI bugs, raising platform stability and reliability by 45%",
      "Implemented Cloudinary-based media handling and frontend optimizations, cutting average page/image load times by 25% and improving user experience on mobile"
    ],
    tech: ["Next.js", "Tailwind CSS", "Express.js", "REST API", "MongoDB", "Razorpay API", "Cloudinary", "ShadCN", "TypeScript"],
    accentColor: "from-purple-500 to-pink-400",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-20 bg-gradient-to-b from-neutral-100 to-neutral-50 dark:from-neutral-900 dark:to-neutral-950"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 top-1/3 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:mix-blend-screen"></div>
        <div className="absolute -left-20 bottom-1/4 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 dark:mix-blend-screen"></div>
      </div>

      <div className="container w-full mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 mb-4 tracking-widest uppercase">
            My Journey
          </span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Work{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>
          <motion.div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-8" />
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Roles and responsibilities that shaped my engineering mindset
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative  mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Vertical centre line (desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-green-500/40 to-purple-500/30 -translate-x-1/2 hidden md:block" />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`relative flex flex-col md:flex-row gap-0 mb-16 last:mb-0 items-start`}
              >
                {/* Left slot */}
                <div className={`hidden md:block md:w-1/2 ${isEven ? "pr-12" : ""}`}>
                  {isEven && (
                    <ExperienceCard exp={exp} index={index} />
                  )}
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 top-8 -translate-x-1/2 z-10 hidden md:flex">
                  <motion.div
                    className={`w-5 h-5 rounded-full bg-gradient-to-br ${exp.accentColor} shadow-lg ring-4 ring-white dark:ring-neutral-900`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + index * 0.2,
                      type: "spring",
                      stiffness: 300,
                    }}
                  />
                </div>

                {/* Right slot */}
                <div className={`hidden md:block md:w-1/2 ${!isEven ? "pl-12" : ""}`}>
                  {!isEven && (
                    <ExperienceCard exp={exp} index={index} />
                  )}
                </div>

                {/* Mobile – always full width */}
                <div className="block md:hidden w-full">
                  <ExperienceCard exp={exp} index={index} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// Extracted card so it can be reused in both columns
function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[number];
  index: number;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="bg-white dark:bg-neutral-800/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/10 hover:border-blue-500/20 hover:shadow-2xl transition-all duration-300 overflow-hidden">
        {/* Gradient top bar */}
        <div className={`h-1 bg-gradient-to-r ${exp.accentColor}`} />

        <div className="p-7">
          {/* Header */}
          <div className="flex items-start gap-4 mb-5">
            <motion.div
              className={`w-12 h-12 rounded-xl ${exp.iconBg} flex items-center justify-center flex-shrink-0`}
              whileHover={{ rotate: 8, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Briefcase className={`w-5 h-5 ${exp.iconColor}`} />
            </motion.div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                {exp.role}
              </h3>
              <a className="text-blue-600 dark:text-blue-400 font-semibold text-sm mt-0.5" href={exp.link} target="_blank">
                {exp.company}
              </a>
            </div>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex-shrink-0">
              {exp.type}
            </span>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {exp.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              {exp.location}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
            {exp.description}
          </p>

          {/* Highlights */}
          <div className="space-y-2 mb-6">
            {exp.highlights.map((h, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <ChevronRight
                  className={`w-4 h-4 mt-0.5 flex-shrink-0 ${exp.iconColor}`}
                />
                {h}
              </motion.div>
            ))}
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2">
            {exp.tech.map((t, i) => (
              <motion.span
                key={i}
                className="text-xs px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-700/60 text-gray-700 dark:text-gray-300 border border-neutral-200 dark:border-neutral-600 hover:border-blue-400 dark:hover:border-blue-500 transition-colors cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
