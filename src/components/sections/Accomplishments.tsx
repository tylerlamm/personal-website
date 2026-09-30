import Section from "@/components/Section";
import { accomplishments } from "@/data/portfolio";

export default function Accomplishments() {
  return (
    <Section id="accomplishments" title="Accomplishments">
      <ul className="divide-y divide-border rounded-xl border border-border bg-surface">
        {accomplishments.map((item) => (
          <li key={`${item.title}-${item.date}`} className="flex flex-col gap-1 p-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted">{item.issuer}</p>
              {item.description && <p className="mt-1.5 text-muted">{item.description}</p>}
            </div>
            <p className="shrink-0 font-mono text-sm text-muted">{item.date}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
