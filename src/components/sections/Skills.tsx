import Section from "@/components/Section";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-8 sm:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 font-semibold">{group.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li key={skill} className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
