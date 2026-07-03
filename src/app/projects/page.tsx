// src/app/projects/page.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Projects } from "@/app/components/sections/Projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <div className="container  px-4 py-6 md:py-6 lg:py-10">
        <div className="max-w-4xl mx-auto">
          <Button
            asChild
            variant="ghost"
            className="mb-8 group transition-all duration-300 hover:bg-gray-100 dark:hover:bg-neutral-800"
          >
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium"
            >
              <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </Button>

          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A collection of my latest work and contributions
            </p>
          </div>

          <Projects />
        </div>
      </div>
    </div>
  );
}
