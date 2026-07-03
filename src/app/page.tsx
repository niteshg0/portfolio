import { About } from "@/app/components/sections/About";
import { Contact } from "@/app/components/sections/Contact";
import { Experience } from "@/app/components/sections/Experience";
import { Hero } from "@/app/components/sections/Hero";
import { ProjectsPreview } from "@/app/components/sections/ProjectsPreview";
import { Skills } from "@/app/components/sections/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />    
      <Skills />
      {/* <ProjectsPreview /> */}
      <Experience />
      <About />
      <Contact />
    </main>
  );
}
