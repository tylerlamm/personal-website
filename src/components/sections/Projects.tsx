import Section from "@/components/Section";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      {/* 1 column on phones, 2 columns from the "sm" breakpoint up */}
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/50"
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 flex-1 leading-relaxed text-muted">{project.description}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li key={t} className="rounded-md bg-accent/10 px-2 py-1 font-mono text-xs text-accent">
                  {t}
                </li>
              ))}
            </ul>

            {project.links && project.links.length > 0 && (
              <div className="mt-5 flex gap-4 text-sm font-medium">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-4 hover:text-accent hover:underline"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
