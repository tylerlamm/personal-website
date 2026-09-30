import Section from "@/components/Section";
import { site } from "@/data/portfolio";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">Let&apos;s work together.</h3>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
        I&apos;m open to new opportunities and collaborations. The best way to reach me is by email.
      </p>
      <a
        href={`mailto:${site.email}`}
        className="mt-8 inline-block rounded-lg bg-accent px-6 py-3 font-medium text-white transition-opacity hover:opacity-90 dark:text-background"
      >
        {site.email}
      </a>
      <ul className="mt-8 flex flex-wrap gap-6 text-sm font-medium text-muted">
        {site.socials.map((social) => (
          <li key={social.href}>
            <a href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              {social.label} ↗
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
