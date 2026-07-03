"use client";

import { PROJECTS } from "@/app/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  return (
    <div className="max-w-4xl py-12 md:py-10">
      {/* Projects Grid - Single Column */}
      <div className="max-w-5xl mx-auto space-y-8">
        <AnimatePresence>
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-neutral-100 dark:border-neutral-800 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                {/* Project Image and Content Side by Side */}
                <div className="md:flex">
                  {/* Image Section */}
                  <div className="md:w-1/2 relative h-64 md:h-auto">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className=" transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex gap-2 flex-wrap">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs px-2 py-1 bg-white/10 backdrop-blur-sm text-white border-0"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 md:w-1/2">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex space-x-2">
                        {project.githubUrl && (
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="h-5 w-5" />
                          </Link>
                        )}
                        {project.liveUrl && (
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="h-5 w-5" />
                          </Link>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-col space-y-4 mt-6 pt-4 border-t border-gray-100 dark:border-neutral-800">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 bg-gray-100 dark:bg-neutral-800 rounded-full text-gray-600 dark:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {/* <Link
                        href={`/projects/${project.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors group self-start"
                      >
                        View Project Details
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
