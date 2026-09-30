import Section from "@/components/Section";
import { about, site } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
        {about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      {site.location && <p className="mt-6 text-sm text-muted">📍 {site.location}</p>}
    </Section>
  );
}
