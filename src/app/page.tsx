// The home page (tylerlam.com/). It just stacks the sections in order.
// To reorder or remove a section, move or delete its line below.
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Accomplishments from "@/components/sections/Accomplishments";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import { site } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="mx-auto max-w-4xl px-4 sm:px-6">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Accomplishments />
        <Skills />
        <Contact />
      </main>
      <footer className="mx-auto max-w-4xl border-t border-border px-4 py-8 text-sm text-muted sm:px-6">
        © {new Date().getFullYear()} {site.name}
      </footer>
    </>
  );
}
