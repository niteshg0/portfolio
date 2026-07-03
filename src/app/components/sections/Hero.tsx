"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";

const HERO_CONTENT = {
  name: "Nitesh Kumar Gupta",
  subtitle: "Full-Stack Developer & AI Enthusiast",
  location: "Ayodhya, Uttar Pradesh",
  tagline: "Building innovative solutions with modern technologies",
};

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/niteshg0",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/niteshg0",
    icon: "Linkedin",
  },
  {
    name: "Email",
    url: "mailto:nit947396@gmail.com",
    icon: "Mail",
  },
];

const iconComponents: { [key: string]: React.ElementType } = {
  Github,
  Linkedin,
  Mail,
};

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: any = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-neutral-950 flex items-center justify-center"
    >
      {/* Background Beams */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <BackgroundBeams className="bg-neutral-950 w-full h-full" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 py-16 md:py-24 lg:py-32"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-5xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6">
              <TextGenerateEffect words={HERO_CONTENT.name} />
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl font-medium text-gray-300 mb-6"
          >
            {HERO_CONTENT.subtitle}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 text-gray-400 mb-8"
          >
            <MapPin className="w-5 h-5 text-gray-300" />
            <span>{HERO_CONTENT.location}</span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg text-gray-400 mb-12"
          >
            {HERO_CONTENT.tagline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="#contact">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-white text-black hover:bg-gray-100 transition-all duration-300 px-8 py-6 text-lg"
              >
                <span className="relative z-10">Get In Touch</span>
                <span className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 relative z-10" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                variant="outline"
                size="lg"
                className="group relative overflow-hidden bg-transparent border-white/20 text-white hover:bg-white/5 transition-all duration-300 px-8 py-6 text-lg"
              >
                <span className="relative z-10">View My Work</span>
                <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 group-hover:w-full"></span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 relative z-10" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 mt-12"
          >
            {SOCIAL_LINKS.map((link) => {
              const IconComponent = iconComponents[link.icon];
              return (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-400 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10"
                  aria-label={link.name}
                >
                  {IconComponent && <IconComponent className="w-6 h-6" />}
                </Link>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-950/90 z-0"></div>
    </section>
  );
}
