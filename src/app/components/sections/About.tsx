"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, ArrowRight} from "lucide-react";
import { ABOUT_CONTENT } from "@/app/lib/constants";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// const stats = [
//   { value: "3+", label: "Years Experience", icon: Briefcase },
//   { value: "50+", label: "Projects Completed", icon: Code2 },
//   { value: "5+", label: "Awards Won", icon: Award },
// ] as const;

export function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 dark:opacity-30 dark:mix-blend-screen"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 dark:opacity-30 dark:mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
            ABOUT ME
          </span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Crafting Digital{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Experiences
            </span>
          </motion.h2>
          <motion.div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-8"></motion.div>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Turning ideas into exceptional digital experiences through clean
            code and innovative solutions.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photo Section */}
          <motion.div
            className="lg:col-span-5 relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform group-hover:-translate-y-2 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 mix-blend-overlay"></div>
              <Image
                src="/images/profile.jpg"
                alt="Nitesh Kumar Gupta"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -z-10 -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-blue-500/30"></div>

            {/* Floating element */}
            {/* <motion.div
              className="absolute -left-8 -top-8 bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-neutral-700"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Experience
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    3+ Years
                  </p>
                </div>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="bg-white dark:bg-neutral-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/10 hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Who I Am
              </h3>
              <div className="space-y-6">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {ABOUT_CONTENT.introduction}
                </p>

                {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={stat.label}
                        className="p-4 bg-gray-50 dark:bg-neutral-800 rounded-xl text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 mb-2">
                          <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {stat.value}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {stat.label}
                        </p>
                      </motion.div>
                    );
                  })}
                </div> */}

                <motion.div
                  className="pt-6 mt-8 border-t border-gray-100 dark:border-neutral-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <Link
                    href={ABOUT_CONTENT.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-6 text-base font-medium rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                    >
                      <Download className="mr-3 h-5 w-5 group-hover:animate-bounce" />
                      Download Resume
                      <ArrowRight className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
