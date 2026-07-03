"use client";

import { motion } from "framer-motion";
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaTools,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiDocker,
  SiStreamlit,
  SiExpress,
  SiFastapi,
  SiSqlalchemy,
  SiRedis,
  SiOpenai,
  SiLangchain,
} from "react-icons/si";

const Sparkle = ({ size = 6, delay = 0, color = "#3b82f6" }) => {
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;
  const randomSize = size * (0.5 + Math.random() * 0.5);

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: `${randomSize}px`,
        height: `${randomSize}px`,
        left: `${randomX}%`,
        top: `${randomY}%`,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: `drop-shadow(0 0 4px ${color})`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.8, 0],
        scale: [0, 1.5, 0],
      }}
      transition={{
        duration: 2 + Math.random(),
        delay: delay + Math.random() * 0.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    />
  );
};

const AnimatedLine = ({ delay = 0 }) => {
  return (
    <motion.div
      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-full"
      initial={{ width: 0, opacity: 0 }}
      animate={{
        width: "100%",
        opacity: [0, 0.8, 0],
      }}
      transition={{
        duration: 1.5,
        delay,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1,
      }}
    />
  );
};

const TechItem = ({
  item,
  index,
}: {
  item: { name: string; icon: React.ReactNode };
  index: number;
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const colors = React.useMemo(
    () => ["#3b82f6", "#06b6d4", "#8b5cf6", "#ec4899"],
    []
  );

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center space-x-2 p-2">
        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
          {item.icon}
        </div>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {item.name}
        </span>
      </div>
    );
  }

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
      className="relative overflow-hidden group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative z-10">
        <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
          <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center relative">
            {item.icon}
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {item.name}
          </span>
        </div>
        <AnimatedLine delay={index * 0.1} />
      </div>

      {isHovered && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <Sparkle
              key={i}
              size={3 + Math.random() * 4}
              delay={i * 0.1}
              color={colors[Math.floor(Math.random() * colors.length)]}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
  hover: {
    y: -5,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

const techStacks = [
  {
    title: "Frontend Development",
    description:
      "Crafting responsive and interactive user experiences with modern frameworks and libraries.",
    icon: <FaReact className="text-blue-500 text-4xl" />,
    items: [
      { name: "React.js", icon: <FaReact className="text-blue-500 text-xl" /> },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-black dark:text-white text-xl" />,
      },
      {
        name: "Streamlit",
        icon: <SiStreamlit className="text-cyan-400 text-xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-600 text-xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-xl" />,
      },
      // {
      //   name: "Framer Motion",
      //   icon: <span className="text-purple-500 text-xl">FM</span>,
      // },
    ],
  },
  {
    title: "Backend Development",
    description: "Building scalable server-side applications and robust APIs.",
    icon: <FaNodeJs className="text-green-500 text-4xl" />,
    items: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-500 text-xl" />,
      },
      {
        name: "Express",
        icon: <SiExpress className="text-green-500 text-xl" />,
      },
      {
        name: "FastAPI",
        icon: <SiFastapi className="text-blue-700 text-xl" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-600 text-xl" />,
      },
      {
        name: "SQL",
        icon: <SiSqlalchemy className="text-indigo-400 text-xl" />,
      },
    ],
  },
  {
    title: "Generative AI",
    description:
      "Building intelligent applications with cutting-edge AI technologies.",
    icon: <SiOpenai className="text-blue-500 text-4xl" />,
    items: [
      {
        name: "Python",
        icon: <FaPython className="text-yellow-400 text-xl" />,
      },
      {
        name: "QDrant",
        icon: <FaDatabase className="text-orange-500 text-xl" />,
      },
      {
        name: "LangChain",
        icon: <SiLangchain className="text-red-500 text-xl" />,
      },
      {
        name: "AI models",
        icon: <SiOpenai className="text-blue-300 text-xl" />,
      },
      {
        name: "LangGraph",
        icon: <SiLangchain className="text-purple-300 text-xl" />,
      },
    ],
  },
  {
    title: "DevOps & Tools",
    description: "Streamlining development workflows and tools.",
    icon: <FaTools className="text-orange-500 text-4xl" />,
    items: [
      { name: "Docker", icon: <SiDocker className="text-blue-400 text-xl" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-600 text-xl" /> },
      {
        name: "GitHub",
        icon: <FaGithub className="text-gray-300 text-xl" />,
      },
      { name: "Redis", icon: <SiRedis className="text-orange-500 text-xl" /> },
      {
        name: "Vercel",
        icon: <span className="text-black dark:text-white text-xl">▲</span>,
      },
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My Skills & Expertise
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStacks.map((stack, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={itemVariants}
              whileHover="hover"
              className="h-full"
            >
              <div className="h-full bg-white dark:bg-neutral-800/50 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-white/10 hover:border-blue-500/20 transition-all duration-300">
                <div className="p-6">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center mb-6 mx-auto"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                  >
                    {stack.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-center mb-3 text-gray-900 dark:text-white">
                    {stack.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center text-sm mb-6 min-h-[60px]">
                    {stack.description}
                  </p>
                  <div className="space-y-2">
                    {stack.items.map((item, i) => (
                      <TechItem key={i} item={item} index={i} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
