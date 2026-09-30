// The first thing visitors see: your name, headline, tagline, and quick links.
import { site } from "@/data/portfolio";

export default function Hero() {
  return (
    <div className="pb-16 pt-20 sm:pb-20 sm:pt-28">
      <p className="mb-3 font-mono text-sm text-accent">Hi, I&apos;m</p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{site.name}</h1>
      <p className="mt-3 text-xl text-muted sm:text-2xl">{site.title}</p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{site.tagline}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#contact"
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:text-background"
        >
          Get in touch
        </a>
        {site.resumeUrl && (
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground"
          >
            Résumé
          </a>
        )}
        {site.socials.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground"
          >
            {social.label}
          </a>
        ))}
      </div>
    </div>
  );
}
