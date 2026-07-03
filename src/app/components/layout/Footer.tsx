"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowUp, Phone, MapPin } from "lucide-react";
import { FOOTER_CONTENT, SOCIAL_LINKS } from "@/app/lib/constants";
import { Github, Linkedin } from "lucide-react";

// A mapping from icon name string to the actual component
const iconComponents: { [key: string]: React.ElementType } = {
  Github,
  Linkedin,
  Mail,
};

const socialLinkVariants: any = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  }),
  hover: {
    y: -3,
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm border-t border-gray-200 dark:border-neutral-800 mt-16">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-50 dark:opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2"
          >
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent inline-block mb-4"
            >
              Nitesh Kumar Gupta
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-md">
              Full Stack Developer passionate about creating beautiful,
              functional, and user-centered digital experiences.
            </p>
            <div className="flex space-x-4 mt-6">
              {SOCIAL_LINKS.map((link, index) => {
                const IconComponent = iconComponents[link.icon];
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-neutral-800 shadow-sm hover:shadow-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 border border-gray-200 dark:border-neutral-700"
                    variants={socialLinkVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index}
                    whileHover="hover"
                    aria-label={link.name}
                  >
                    {IconComponent && <IconComponent size={18} />}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <div className="col-span-1">
            <motion.h3
              className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Quick Links
            </motion.h3>
            <motion.ul
              className="space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <motion.li
                  key={item.name}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                    },
                  }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors text-sm flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <motion.h3
              className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get in Touch
            </motion.h3>
            <motion.ul
              className="space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              {[
                {
                  icon: <Mail size={16} className="text-blue-500 mr-2" />,
                  text: "nit947396@gmail.com",
                  href: "mailto:nit947396@gmail.com",
                },
                {
                  icon: <Phone size={16} className="text-blue-500 mr-2" />,
                  text: "+91 6386265571",
                  href: "tel:+916386265571",
                },
                {
                  icon: <MapPin size={16} className="text-blue-500 mr-2" />,
                  text: "Ayodhya, Uttar Pradesh, India",
                  href: "#",
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  variants={{
                    hidden: { opacity: 0, y: 5 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                    },
                  }}
                >
                  {item.href !== "#" ? (
                    <a
                      href={item.href}
                      className="flex items-start text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                    >
                      {item.icon}
                      <span>{item.text}</span>
                    </a>
                  ) : (
                    <div className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                      {item.icon}
                      <span>{item.text}</span>
                    </div>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* Copyright and Back to Top */}
        <div className="border-t border-gray-200 dark:border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="text-sm text-gray-500 dark:text-gray-500 mb-4 md:mb-0"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {FOOTER_CONTENT.copyright}
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors group"
            whileHover={{ y: -2 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Back to top
            <ArrowUp className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
