import Section from "@/components/Section";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10">
        {experience.map((job) => (
          <li key={`${job.company}-${job.role}-${job.start}`} className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:gap-6">
            <p className="pt-0.5 font-mono text-sm text-muted">
              {job.start} — {job.end}
            </p>
            <div>
              <h3 className="text-lg font-semibold">
                {job.role} <span className="text-muted">· {job.company}</span>
              </h3>
              {job.location && <p className="text-sm text-muted">{job.location}</p>}
              <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-muted marker:text-accent">
                {job.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
