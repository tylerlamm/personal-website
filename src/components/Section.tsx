// A reusable wrapper that gives every section the same spacing and heading
// style. The `id` is what nav links jump to (e.g. href="#projects").
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-border py-16 sm:py-20">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-accent">
        {title}
      </h2>
      {children}
    </section>
  );
}
